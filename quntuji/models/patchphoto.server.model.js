/**
 * 群相册批次图片表Schema
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PatchPhotoSchema = new mongoose.Schema({
	patchId:Number,                              //批次Id,由客户端生成;格式为:当前时间戳+4位随机数.
	albumId:String,                              //相册objectId
	albumName:String,                            //相册名字
	creatorOpenId:String,                        //创建者openid
	creatorName:String,                          //创建者昵称
	creatorHeadPic:String,                       //创建者头像
	creatorVipLevel:String,                      //创建者会员级别
	description:String,                          //说点什么
	isLinkAlbum:Number,                             //是否是联动相册.0不是,是群相册;1是
	price:Number,                                   //价格（元）.若为0,则是免费
	photos:Array,                                //图片
	likes: [
		{
			openId:String,
			nickName:String
		}
	],                   //点赞者.数组,格式为[{openId:xxxx,nickName:xxx}]
	comments:[
		{
			openId:String,
			nickName:String,
			comment:String
		}
	],                 //评论..数组,格式为[{openId:xxxx,nickName:xxx,comment:xxxx}]
	isShow:Number,                               //是否显示.默认为1
	createTime:Number,                           //创建时间
});

PatchPhotoSchema.index({patchId : 1,albumId:1,creatorOpenId:1,isLinkAlbum:1,createTime:-1});

mongoose.model('PatchPhoto', PatchPhotoSchema);