var URL = location.href;
if  (location.href.indexOf ("babelfish.altavista.com")==-1){
document.write("<Map name=translate_eng >");
document.write("<AREA COORDS=100,130,125,146 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_es' target=translate>");
document.write("<AREA COORDS=70,130,93,146 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_pt' target=translate>");
document.write("<AREA COORDS=39,130,65,146 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_it' target=translate>");
document.write("<AREA COORDS=8,130,31,146 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_fr' target=translate>");
document.write("<AREA COORDS=99,110,123,126 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_ko' target=translate>");
document.write("<AREA COORDS=70,110,95,126 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_ja' target=translate>");
document.write("<AREA COORDS=38,110,65,126 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_de' target=translate>");
document.write("<AREA COORDS=5,110,32,126 SHAPE=rect href='http://babelfish.altavista.com/babelfish/tr?doit=done&url="+URL+"&lp=en_zh' target=translate>");
document.write("<AREA COORDS=0,1,129,38 SHAPE=rect href='http://babelfish.altavista.com' target=translate>");
document.write("</Map>");
document.write("<img src=http://babelfish.altavista.com/static/i/af/trans_en.gif width=131 height=156 usemap=#translate_eng border=0 alt='Babel Fish Translation'>")
} else {
document.write( "<img src=http://babelfish.altavista/static/i/af/trans_en_off.gif width=131 height=156 border=0>")
}
