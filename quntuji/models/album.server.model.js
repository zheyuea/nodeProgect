/**
 * 群相册表Schema
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AlbumSchema = new mongoose.Schema({
	coverPic:String,                                //封面图片
	creatorOpenId:String,                           //创建者openid
	creatorName:String,                             //创建者昵称
	creatorHeadPic:String,                          //创建者头像
	albumName:String,                               //相册名称
	albumDescription:String,                        //相册描述
	isLinkAlbum:Number,                             //是否是联动相册.0不是,是群相册;1是
	price:Number,                                   //价格（元）.若为0,则是免费
	photoNum:Number,                                //照片数量,默认为0
	isShow:Number,                                  //是否显示.默认为1
	createTime:Number,                              //创建时间
	updateTime:Number,                              //更新时间
});

AlbumSchema.index({creatorOpenId: 1, updateTime:-1});

mongoose.model('Album', AlbumSchema);