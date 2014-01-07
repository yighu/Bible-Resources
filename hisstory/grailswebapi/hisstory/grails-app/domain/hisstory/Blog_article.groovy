package hisstory

class Blog_article {

Integer log_ID
Integer log_CateID
Integer log_AuthorID
Integer log_Level
String log_Url
String log_Title
String log_Intro
String log_Content
String log_IP
String log_PostTime
Integer log_CommNums
Integer log_ViewNums
Integer log_TrackBackNums
String log_Tag
Integer log_IsTop
    static constraints = {
	columns{id column:'log_ID'}
    }
}
