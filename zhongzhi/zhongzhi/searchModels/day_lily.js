/**
 * 黄花
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
		fieldName:'germplasm_bank_number',
		chineseName:'种质库编号',
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
		fieldName:'seed_source',
		chineseName:'种子来源',
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
		fieldName:'growth_habit',
		chineseName:'生长习性',
		type:'select',
		val:'请选择。。。',
		attach:['丛生']
	},
	{
		fieldName:'plant_height',
		chineseName:'株高',
		type:'compare',
		sel:'=',
		val:'',
		attach:[80,80]
	},
	{
		fieldName:'color_and_lustre',
		chineseName:'色泽',
		type:'select',
		val:'请选择。。。',
		attach:['嫩黄']
	},
	{
		fieldName:'quality',
		chineseName:'品质',
		type:'select',
		val:'请选择。。。',
		attach:['细嫩']
	},
	{
		fieldName:'purpose',
		chineseName:'用途',
		type:'select',
		val:'请选择。。。',
		attach:['制干']
	},
	{
		fieldName:'cultivation_season',
		chineseName:'栽培季节',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'stress_resistance',
		chineseName:'抗逆性',
		type:'select',
		val:'请选择。。。',
		attach:['抗旱寒']
	},
	{
		fieldName:'disease_resistance_and_insect_resistance',
		chineseName:'抗病虫性',
		type:'select',
		val:'请选择。。。',
		attach:['强']
	},
	{
		fieldName:'per_mu_yield',
		chineseName:'亩产',
		type:'compare',
		sel:'=',
		val:'',
		attach:[63,63]
	},
	{
		fieldName:'remarks',
		chineseName:'备注',
		type:'text',
		val:'',
		attach:[]
	},
]