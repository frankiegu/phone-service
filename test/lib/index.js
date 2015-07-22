var should = require('should');
var PS = require('../../lib/index');
var plugin = require('../../lib/plugin');
var util = require('../../lib/util');
describe('#phoneService()',function(){
	it('should be ok',function(done){
		PS.query(15900000000,{plugins:['360','tenpay','taobao','paipai']},function(err,data){
			console.log(data);
			should.not.exist(err);
			data.supplier.should.be.equal('中国移动');
			data.abbreviation.should.be.equal('China_Mobile');
			done(err);
		});
	});
	it('should be ok',function(done){
		PS.query(15900000000,{model:1},function(err,data){
			console.log(data);
			should.not.exist(err);
			data.supplier.should.be.equal('中国移动');
			data.provice.should.be.containEql('广东');
			data.abbreviation.should.be.equal('China_Mobile');
			done(err);
		});
	});
	it('should be ok',function(done){
		PS.query(15900000000,{model:2},function(err,data){
			console.log(data);
			should.not.exist(err);
			data.supplier.should.be.equal('中国移动');
			data.provice.should.be.containEql('广东');
			data.city.should.be.containEql('中山');
			data.abbreviation.should.be.equal('China_Mobile');
			done(err);
		});
	});
	it('should be ok',function(){
		plugin.add(util.loadPlugin('static'));
		PS.isPhone(15900000000).should.be.ok();
	});
	it('should be ok',function(){
		plugin.add(util.loadPlugin('static'));
		PS.isChinaMobile(15900000000).should.be.ok();
	});
	it('should be not ok',function(){
		plugin.add(util.loadPlugin('static'));
		PS.isChinaTelecom(15900000000).should.be.false();
	});
	it('should be not ok',function(){
		plugin.add(util.loadPlugin('static'));
		PS.isChinaUnicom(15900000000).should.be.false();
	});
})