const fs = require('fs');
const p = console.log
const pe = console.error;
const FE = 'Exiting';
const FO = 'Omitting';
function cn( o,n){
	if(o===n)return;
	fs.renameSync(o,n);
}

//TODO modify SM accoding to platform
const SM = '\\';

//TODO modify ILLEG` accoding to platform
const ILLEGE = "<>/\\|:\"*?";
function wrapName (o){
	for(let i = 0;i<o.length;i++){
		if( ILLEGE.includes( o[i] )){
			o[i] = '_';
		}
	}
	return o;
};
function fa(dir){
	let chs ;
	try{
		chs = fs.readdirSync(dir);
	}catch(err){
		pe(FO,dir,err.message);
		return;
	}
	let PA = [];
	let faname = '';
	function ch(chdir){//Sync
		try{
			let ob = fs.readFileSync(`${chdir}${SM}entry.json`,'utf-8');
			ob = JSON.parse( ob );
			faname = ob.title;
			if( ob['ep'] && ob['ep']['index'] && ob['ep']['index_title']){
				let chname = `${dir}${SM}${ob['ep']['index']}_${ob['ep']['index_title']}`
				cn(chdir, chname);
			}
		}catch(err){
			pe(FO,dir,err.message);
			return;
		}
	}
	chs.forEach( (o)=>{
		PA.push(new Promise( (resolve,reject)=>{
			ch( `${dir}${SM}${o}`);
			resolve( o );
		}));
	});
	Promise.all( PA ).then( (err,res) =>{
		if(!faname)
			pe(FO,dir,`No proper name for ${dir}`);
		else {
			try{
				faname = wrapName(faname);
				cn( dir, faname);
			}catch(err){
				pe(FO,dir,err.message);
			}
		}
	});
};
let tar = process.argv.slice(2);
let cwd = process.cwd();
if( tar.length === 0){
	p(`No Dirs Specified, read from work dir ${cwd}`);
	try{
		tar = fs.readdirSync( cwd );
	}catch(err){
		pe(FE,err.message);
		process.exit(1);
	}
}
tar.forEach( (o)=>{
	fa(o);
});


