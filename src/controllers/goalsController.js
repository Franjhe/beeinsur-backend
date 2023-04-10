import goalService from '../services/goalService.js';

const getGoals = async (req, res) => {
    const Goals = await goalService.getGoals();
    if (Goals.error) {
        return res
            .status(Goals.code)
            .send({
                message: Goals.error
            });
    }
    return res
        .status(200)
        .send({
            status: true,
            Goals: Goals,
        });
};

const UpdateGoals = async (req, res) => {
    const Goals = await goalService.UpdateGoals(req.body);
    if (Goals.error) {
        return res
            .status(Goals.code)
            .send({
                message: Goals.error
            });
    }
    return res
        .status(200)
        .send({
            status: true,
            Goals: Goals,
        });
};

export default {
    getGoals,
    UpdateGoals
}