
// Noticias
function model(sequelize) {
    const attributes = {
        content: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: false },
        author: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: {} }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('News', attributes, options);
}

// mensajes
function model(sequelize) {
    const attributes = {
        content: { type: DataTypes.STRING, allowNull: false },
        author: { type: DataTypes.STRING, allowNull: false },

    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: {} }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Messaje', attributes, options);
}

// galeria
function model(sequelize) {
    const attributes = {
        image: { type: DataTypes.STRING, allowNull: false },
        category: { type: DataTypes.STRING, allowNull: false },
        author: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude:{} }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Galery', attributes, options);
}

// usuario
function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        passwordHash: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}

// proyectos
function model(sequelize) {
    const attributes = {
        csports: { type: DataTypes.STRING, allowNull: false },
        ceducational: { type: DataTypes.STRING, allowNull: false },
        cchildrens: { type: DataTypes.STRING, allowNull: false },
        cchildcare : { type: DataTypes.STRING, allowNull: false },

    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude:{} }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Proyect', attributes, options);
}
