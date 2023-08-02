import newsService from '../services/newsService.js';
import multer from 'multer';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

const getNews = async (req, res) => {
    const News = await newsService.getNews();
    if (News.error) {
        return res
            .status(News.code)
            .send({
                message: News.error
            });
    }
    return res
        .status(200)
        .send({
            status: true,
            News: News,
        });
};

const CreateNews = async (req, res) => {

    const { titulo, contenido } = req.body;

    const image = req.files && req.files.image; // Obtener la imagen enviada desde Angular
  
    // Verificar si se envió una imagen
    if (!image || !image.mimetype.startsWith('image/')) {

      return res.status(400).send
        (
            { message: 'Debes proporcionar una imagen válida.' }
        );
    }
  
    try {
      // Guardar la imagen en el servidor (por ejemplo, en la carpeta 'uploads')
      const imageName = `${Date.now()}-${image.name}`;
      await image.mv(`./uploads/${imageName}`);
  
      // Crear la noticia en la base de datos junto con la URL de la imagen guardada
      const news = await newsService.CreateNews({ titulo, contenido, imagen: imageName });
  
      return res.status(200).send({
        status: true,
        news: news,
      });
    } catch (error) {

      console.error('Error al crear la noticia:', error);
      return res.status(500).send
        (
            { message: 'Error al crear la noticia.' }
        );
    }
  };

const UpdateNews = async (req, res) => {
    const News = await newsService.UpdateNews(req.body, req.file.buffer);
    if (News.error) {
        return res
            .status(News.code)
            .send({
                message: News.error
            });
    }
    return res
        .status(200)
        .send({
            status: true,
            News: News,
        });
};

export default {
    getNews,
    CreateNews,
    UpdateNews
}