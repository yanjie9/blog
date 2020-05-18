
//DB库
var MongoDB=require('mongodb');
var MongoClient =MongoDB.MongoClient;
const ObjectID = MongoDB.ObjectID;

var Config=require('./config.js');

class Db{

    static getInstance(){   /*1、单例  多次实例化实例不共享的问题*/

        if(!Db.instance){
            Db.instance=new Db();
        }
        return  Db.instance;
    }

    constructor(){

        this.dbClient=''; /*属性 放db对象*/
        this.connect();   /*实例化的时候就连接数据库*/

    }

    connect(){  /*连接数据库*/
      let _that=this;
      return new Promise((resolve,reject)=>{
          if(!_that.dbClient){         /*1、解决数据库多次连接的问题*/
              MongoClient.connect(Config.dbUrl,{ useUnifiedTopology: true},(err,client)=>{

                  if(err){
                      reject(err)

                  }else{

                      _that.dbClient=client.db(Config.dbName);
                      resolve(_that.dbClient)
                  }
              })

          }else{
              resolve(_that.dbClient);

          }


      })

    }

    find(collectionName,json,sortDepend,limitNum){

       return new Promise((resolve,reject)=>{

            this.connect().then((db)=>{
               /*  if(limitNum){
                    var result=db.collection(collectionName).find(json).limit(limitNum);
                }else */ if(sortDepend&&limitNum){
                    var result=db.collection(collectionName).find(json).sort(sortDepend).limit(limitNum);
                }
                else{
                 //   console.log(json);
                    var result=db.collection(collectionName).find(json);
                  //  console.log(result);
                }
               

                result.toArray(function(err,docs){

                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(docs);
                })

            })
        })
    }
    update(collectionName,json1,json2){
     //   console.log(json1,json2);
        return new Promise((resolve,reject)=>{


                this.connect().then((db)=>{

                    //db.user.update({},{$set:{}})
                    db.collection(collectionName).update(json1,{
                        $set:json2
                    },{multi:true},(err,result)=>{
                        if(err){
                            console.log("失败");
                            reject(err);
                        }else{
                            console.log("成功");
                            resolve(result);
                        }
                    })

                })

        })

    }
    insert(collectionName,json){
        return new  Promise((resolve,reject)=>{
            this.connect().then((db)=>{

                db.collection(collectionName).insertOne(json,function(err,result){
                    if(err){
                        reject(err);
                    }else{

                        resolve(result);
                    }
                })


            })
        })
    }

    remove(collectionName,json){

        return new  Promise((resolve,reject)=>{
            this.connect().then((db)=>{

                db.collection(collectionName).removeOne(json,function(err,result){
                    if(err){
                        reject(err);
                    }else{

                        resolve(result);
                    }
                })


            })
        })
    }
    getObjectId(id){    /*mongodb里面查询 _id 把字符串转换成对象*/

        return new ObjectID(id);
    }
}


module.exports=Db.getInstance();
