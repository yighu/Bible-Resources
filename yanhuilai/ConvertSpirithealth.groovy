def root=new XmlSlurper().parse(new File("spiritandhealth.xml"))
def out=new File("out.txt")
Set groups=root.person.g.collect{it.text()}
root.part[2].xmlData.document.body.p.each{
it.r.each {t->
	out.append("\n"+t.text(),'UTF-8'	)
	}
}
