module.exports=(sequelize,DataTypes)=>{
    const Image=sequelize.define("images",
    {
        idImage:{
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        
        image:{
            type:DataTypes.STRING
        },
       
        productoId:{
            type: DataTypes.INTEGER
        }
    }
    ,
    {
        tableName:'images',
        timestamps:false
    }
    );
    Image.associate=function(models){
        Image.belongsTo(models.categories,{
            as:"products",
            foreignKey:"productoId"
        })
    }
    return Image;
}
