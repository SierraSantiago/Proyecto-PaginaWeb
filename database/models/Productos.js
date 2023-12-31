module.exports=(sequelize,DataTypes)=>{
    const Productos=sequelize.define("products",
    {
        idProduct:{
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        name:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        image:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.DECIMAL
        },
        categorieId:{
            type: DataTypes.INTEGER
        },
        details:{
            type: DataTypes.STRING
        },
        favorito:{
            type: DataTypes.INTEGER
        },
        carrito:{
            type: DataTypes.INTEGER
        },
        size:{
            type: DataTypes.STRING
        },
        color:{
            type: DataTypes.STRING
        }


    }
    ,
    {
        tableName:'products',
        timestamps:false
    }
    );
    Productos.associate=function(models){
        Productos.belongsTo(models.categories,{
            as:"categories",
            foreignKey:"categorieId"
        })
    }
    return Productos;
}
