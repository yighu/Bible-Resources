def blogs=new XmlSlurper().parseText(new File("blog_Article.xml").getText("UTF-8"))
//def blogs=new XmlSlurper().parse(new File("blog_Article.xml"))
def o=new File("t.txt").newWriter("UTF-8")
def p=new PersistStatistic()

blogs.blog_Article.each{

p.insert([ it.log_ID,
it.log_CateID,
it.log_AuthorID,
it.log_Level,
it.log_Url,
it.log_Title,
it.log_Intro,
it.log_Content,
it.log_IP,
it.log_PostTime,
it.log_CommNums,
it.log_ViewNums,
it.log_TrackBackNums,
it.log_Tag,
it.log_IsTop
])

}
