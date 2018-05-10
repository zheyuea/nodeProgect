/**
 * 玉米
 * 查询模型
 * {
		fieldName:'library_number',     //字段名，对应数据库中的字段名
		chineseName:'库编号',           //中文名，该字段的中文名
		type:'text',                    //查询类型，有三个类型：text,select,compare
		attach:[]                       //附件条件。当查询类型为text时，此字段无意义；当为select时，此字段为选项数组；当为compare时，此字段为输入区间的最小值、最大值
	}
 */
module.exports = [
	{
		fieldName:'library_number',
		chineseName:'库编号',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'uniform_number',
		chineseName:'统一编号',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'cultivar_name',
		chineseName:'品种名称',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'translation',
		chineseName:'译名',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'family',
		chineseName:'科名',
		type:'select',
		val:'请选择。。。',
		attach:['Gramineae(禾本科)']
	},
	{
		fieldName:'genus_name',
		chineseName:'属名',
		type:'select',
		val:'请选择。。。',
		attach:['Zea(玉米属)']
	},
	{
		fieldName:'name',
		chineseName:'学名',
		type:'select',
		val:'请选择。。。',
		attach:['Zea mays L.(玉米)']
	},
	{
		fieldName:'country_origines',
		chineseName:'原产地',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'altitude',
		chineseName:'高程',
		type:'compare',
		sel:'=',
		val:'',
		attach:[2,4641]
	},
	{
		fieldName:'east_longitude',
		chineseName:'东经',
		type:'compare',
		sel:'=',
		val:'',
		attach:[7552,13159]
	},
	{
		fieldName:'north_latitude',
		chineseName:'北纬',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1838,4828]
	},
	{
		fieldName:'parental_source',
		chineseName:'亲本来源',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'preservation_unit',
		chineseName:'保存单位',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'save_number',
		chineseName:'保存编号',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'sowing_data',
		chineseName:'播种期',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'plant_height',
		chineseName:'株高',
		type:'compare',
		sel:'=',
		val:'',
		attach:[66,429]
	},
	{
		fieldName:'ear_height',
		chineseName:'穗位高',
		type:'compare',
		sel:'=',
		val:'',
		attach:[8,305]
	},
	{
		fieldName:'leaf_number_main_stem',
		chineseName:'主茎叶片数',
		type:'compare',
		sel:'=',
		val:'',
		attach:[8,28]
	},
	{
		fieldName:'tassel_branch_number',
		chineseName:'雄穗分枝数',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1,29]
	},
	{
		fieldName:'number_leaves_male_stem',
		chineseName:'雄茎叶片数',
		type:'compare',
		sel:'=',
		val:'',
		attach:[5,19]
	},
	{
		fieldName:'number_days',
		chineseName:'抽丝日数',
		type:'compare',
		sel:'=',
		val:'',
		attach:[41,110]
	},
	{
		fieldName:'num_days_childbearing',
		chineseName:'生育日数',
		type:'compare',
		sel:'=',
		val:'',
		attach:[61,157]
	},
	{
		fieldName:'double_panicle_rate',
		chineseName:'双穗率',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.00,100.00]
	},
	{
		fieldName:'lodging_degree',
		chineseName:'倒伏度',
		type:'select',
		val:'请选择。。。',
		attach:['轻','无','中','重']
	},
	{
		fieldName:'spike',
		chineseName:'穗形',
		type:'select',
		val:'请选择。。。',
		attach:['长柱','长锥','短锥','中间','柱','锥']
	},
	{
		fieldName:'grain_type',
		chineseName:'粒型',
		type:'select',
		val:'请选择。。。',
		attach:['爆裂','超甜','粉质','马齿','糯质','偏马','偏硬','甜质','硬粒','有稃','中间']
	},
	{
		fieldName:'grain_color',
		chineseName:'粒色',
		type:'select',
		val:'请选择。。。',
		attach:['白','白、红','白、黄','白、黄、血丝','白、乌','白、紫','白侧红','淡红','淡黄','淡黄、白','红','红、白','红、黄','花','黄','黄、白','黄、白、黑','黄、黑','黄、红','黄、乌','黄、乌、白','黄、血丝','黄、紫','黄侧紫','黄粉顶','黄花','黄血丝','黄紫','桔黄','兰','乌','乌、白','乌、黄','血丝','杂','紫','紫、白','紫顶黄','紫红','紫红黄','紫花','紫黄']
	},
	{
		fieldName:'color_axis',
		chineseName:'轴色',
		type:'select',
		val:'请选择。。。',
		attach:['白','白、红','白、浅红','白、乌','粉','红','红、白','浅红','浅红、白','浅黄','深红','乌','杂','紫']
	},
	{
		fieldName:'ear_length',
		chineseName:'穗长',
		type:'compare',
		sel:'=',
		val:'',
		attach:[4.7,26.5]
	},
	{
		fieldName:'spike_width',
		chineseName:'穗粗',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.2,7.0]
	},
	{
		fieldName:'ear_row_number',
		chineseName:'穗行数',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'thousand_grain_weight',
		chineseName:'千粒重',
		type:'compare',
		sel:'=',
		val:'',
		attach:[19.0,471.0]
	},
	{
		fieldName:'crude_fat',
		chineseName:'粗脂肪',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.83,9.90]
	},
	{
		fieldName:'crude_protein',
		chineseName:'粗蛋白',
		type:'compare',
		sel:'=',
		val:'',
		attach:[7.05,18.98]
	},
	{
		fieldName:'crude_total_starch',
		chineseName:'粗总淀粉',
		type:'compare',
		sel:'=',
		val:'',
		attach:[24.41,74.09]
	},
	{
		fieldName:'amylose',
		chineseName:'直链淀粉',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.97,33.14]
	},
	{
		fieldName:'amylopectin',
		chineseName:'支链淀粉',
		type:'compare',
		sel:'=',
		val:'',
		attach:[66.86,99.64]
	},
	{
		fieldName:'palmitic_acid',
		chineseName:'棕榈酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[9.80,19.21]
	},
	{
		fieldName:'stearic_acid',
		chineseName:'硬脂酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.29,3.52]
	},
	{
		fieldName:'oleic_acid',
		chineseName:'油酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[23.04,40.82]
	},
	{
		fieldName:'telfairic_acid',
		chineseName:'亚油酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[36.77,62.51]
	},
	{
		fieldName:'linolenic_acid',
		chineseName:'亚麻酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.82,2.35]
	},
	{
		fieldName:'peanut_dilute_acid',
		chineseName:'花生稀酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.14,0.76]
	},
	{
		fieldName:'tocopherol',
		chineseName:'α生育酚',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.80,19.40]
	},
	{
		fieldName:'bursting_rate',
		chineseName:'爆裂率',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2,53.1]
	},
	{
		fieldName:'expansion_factor',
		chineseName:'膨胀倍数',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.1,3.4]
	},
	{
		fieldName:'large_plaque_reactive_type',
		chineseName:'大斑反应型',
		type:'select',
		val:'请选择。。。',
		attach:['LMR-LMS','LMS','LR','LS','S']
	},
	{
		fieldName:'plaque_class',
		chineseName:'大斑病级',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.0,6.0]
	},
	{
		fieldName:'big_plaque_assessment',
		chineseName:'大斑评价',
		type:'select',
		val:'请选择。。。',
		attach:['HS','MR','MS','R','S']
	},
	{
		fieldName:'spot_level',
		chineseName:'小斑病级',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.5,6.0]
	},
	{
		fieldName:'small_evaluation',
		chineseName:'小斑评价',
		type:'select',
		val:'请选择。。。',
		attach:['HR','HS','MR','MS','R','S']
	},
	{
		fieldName:'smut_rate',
		chineseName:'丝黑穗病率',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.00,100.00]
	},
	{
		fieldName:'smut_evaluation',
		chineseName:'丝黑穗评价',
		type:'select',
		val:'请选择。。。',
		attach:['HR','HS','R','S']
	},
	{
		fieldName:'smut',
		chineseName:'黑粉病',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.1,9.9]
	},
	{
		fieldName:'dwarf_mosaic_disease',
		chineseName:'矮花叶苗病',
		type:'compare',
		sel:'=',
		val:'',
		attach:[2.9,100.0]
	},
	{
		fieldName:'dwarf_yechengs_disease',
		chineseName:'矮花叶成病',
		type:'compare',
		sel:'=',
		val:'',
		attach:[2.8,100.0]
	},
	{
		fieldName:'dwarf_mosaic_evaluation',
		chineseName:'矮花叶评价',
		type:'select',
		val:'请选择。。。',
		attach:['HR','MR','R','S']
	},
	{
		fieldName:'the_leaf_blight',
		chineseName:'田间小斑病',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'large_leaf_spot',
		chineseName:'田间大斑病',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'field_smut',
		chineseName:'田间丝黑穗',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'the_field_of',
		chineseName:'田间黑粉病',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'cold_hardiness_at_bud_stage',
		chineseName:'芽期抗寒',
		type:'compare',
		sel:'=',
		val:'',
		attach:[3,5]
	},
	{
		fieldName:'cold_resistance_seed_stage',
		chineseName:'苗期抗寒',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1,5]
	},
	{
		fieldName:'cold_resistance_at_grain_filling_stage',
		chineseName:'灌浆期抗寒',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0,4]
	},
	{
		fieldName:'cold_hardiness_in_mature_stage',
		chineseName:'熟期抗寒性',
		type:'compare',
		sel:'=',
		val:'',
		attach:[3,4]
	},
	{
		fieldName:'aspartic_acid',
		chineseName:'门冬氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.5490,1.0460]
	},
	{
		fieldName:'threonine',
		chineseName:'苏氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2730,0.5241]
	},
	{
		fieldName:'serine',
		chineseName:'丝氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.3620,0.8961]
	},
	{
		fieldName:'glutamate',
		chineseName:'谷氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.7480,3.9413]
	},
	{
		fieldName:'glycine',
		chineseName:'甘氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2800,0.5636]
	},
	{
		fieldName:'alanine',
		chineseName:'丙氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.6356,1.2993]
	},
	{
		fieldName:'cystine',
		chineseName:'胱氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.0260,0.8600]
	},
	{
		fieldName:'valine',
		chineseName:'缬氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.4048,0.7692]
	},
	{
		fieldName:'methionine',
		chineseName:'蛋氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.0140,0.4172]
	},
	{
		fieldName:'isoleucine',
		chineseName:'异亮氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2734,0.5824]
	},
	{
		fieldName:'leucine',
		chineseName:'亮氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.0284,2.4291]
	},
	{
		fieldName:'tyrosine',
		chineseName:'酪氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2795,0.6953]
	},
	{
		fieldName:'phenylalanine',
		chineseName:'苯丙氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.3840,0.8149]
	},
	{
		fieldName:'lysine',
		chineseName:'赖氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2100,0.5280]
	},
	{
		fieldName:'ammonia',
		chineseName:'氨',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.0780,0.4290]
	},
	{
		fieldName:'histidine',
		chineseName:'组氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2073,0.3742]
	},
	{
		fieldName:'arginine',
		chineseName:'精氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.3529,0.7640]
	},
	{
		fieldName:'proline',
		chineseName:'脯氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.2750,1.6898]
	},
	{
		fieldName:'typtophan',
		chineseName:'色氨酸',
		type:'compare',
		sel:'=',
		val:'',
		attach:[0.057,0.111]
	},
	{
		fieldName:'observation_site',
		chineseName:'观察地点',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'type',
		chineseName:'类型',
		type:'select',
		val:'请选择。。。',
		attach:['国内品种','国内群体','国内自交系','国外品种','国外自交系','特殊材料']
	},
	{
		fieldName:'province',
		chineseName:'省',
		type:'select',
		val:'请选择。。。',
		attach:['安徽','北京','福建','甘肃','广东','广西','贵州','国外','河北','河南','黑龙江','湖北','湖南','吉林','江苏','江西','辽宁','内蒙古','宁夏','青海','山东','山西','陕西','上海','四川','台湾','天津','西藏','新疆','云南','浙江']
	},
	{
		fieldName:'region',
		chineseName:'地区',
		type:'select',
		val:'请选择。。。',
		attach:['安徽','北京','甘肃','国外','河北','河北北部','河北中南','河南','黑龙江','湖北','湖北东部','湖北西部','湖南','吉林','江苏','江西','辽宁','内蒙古','青海','山东','山西','山西中北','山西中南','陕西','陕西北部','陕西南部','陕西中部','上海','四川','天津','西藏','新疆','云南','浙江']
	},
	{
		fieldName:'sample_type',
		chineseName:'样品类型',
		type:'select',
		val:'请选择。。。',
		attach:['地方','国外','选育']
	},
	{
		fieldName:'kind',
		chineseName:'种类',
		type:'select',
		val:'请选择。。。',
		attach:['国外','中国']
	},
	{
		fieldName:'remarks',
		chineseName:'备注',
		type:'text',
		val:'',
		attach:[]
	}
]