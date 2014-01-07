class PersistStatistic {
String dbLocation = "jdbc:sqlite:db/hisstory.db"
String dbDriver = "org.sqlite.JDBC"
def getDb(){
return groovy.sql.Sql.newInstance(dbLocation, dbDriver)
}
void insert(data){
def sql = getDb()
try{
sql.execute("create table blog_article(log_ID,log_CateID,log_AuthorID,log_Level,log_Url,log_Title,log_Intro,log_Content,log_IP,log_PostTime,log_CommNums,log_ViewNums,log_TrackBackNums,log_Tag,log_IsTop)")
}catch (Exception e){}
sql.execute("insert into blog_article(log_ID,log_CateID,log_AuthorID,log_Level,log_Url,log_Title,log_Intro,log_Content,log_IP,log_PostTime,log_CommNums,log_ViewNums,log_TrackBackNums,log_Tag,log_IsTop) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",data)
}
void printContents(){
def sql = getDb()
sql.rows("select * from myTable order by date desc").each{
println(it)
}
}
}

def x=new PersistStatistic()
x.insert("http://www.yahoo.com")
x.printContents()
