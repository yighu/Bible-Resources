println """
<table>
"""

[
[name:"GSword",description:"Advanced Online Bible Studio", url:"http://www.ccimweb.org/gsword"],
[name:"祷告/Prayer", url:"http://ccimweb.org/gsword/prayer",description:"Pray His Word"],
[name:"Renewal",url:"http://ccimweb.org/gsword/closet/index.htm",description:"Pray His Word for Daily Renewal"],
[name:"祷告/Prayer", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/prayscripture",description:"Daily Email on Pray His Word"],
[name:"Pray His Word for renewal in Emails",urlr:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/incloset",description:"Pray His Word for Renewal in Emails"],
[name:"一年读遍圣经/One Year Through Bible-nb5", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-nb5",description:"一年读遍圣经/One Year Through Bible-nb5"],
[name:"一年读遍圣经/One Year Through Bible-ngb", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-ngb",description:"一年读遍圣经/One Year Through Bible-ngb"],
[name:"一年读遍圣经/One Year Through Bible-gb", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/streams-in-the-desert-gb",description:"一年读遍圣经/One Year Through Bible-gb"],
[name:"一年读遍圣经/One Year Through Bible-hb5", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-hb5",description:"一年读遍圣经/One Year Through Bible-hb5"],
[name:"一年读遍圣经/One Year Through Bible-bbe", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-bbe",description:"一年读遍圣经/One Year Through Bible-bbe"],
[name:"一年读遍圣经/One Year Through Bible-kjv", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/one-year-through-bible-kjv",description:"一年读遍圣经/One Year Through Bible-kjv"],
[name:"Stream in The Desert Email List-b5", url:"https://groups.google.com/forum/?hl=en&fromgroups#!forum/streams-in-the-desert-b5", description:"Stream in the Desert List-b5"],
[name:"Android Applications",url:"https://play.google.com/store/search?q=yiguang+hu&c=apps",description:"Bible/Devotion/Prayer Android Applications"]
].each{entry->println """<tr>
<td><a href="${entry.get('url')}">${entry.get("name")}</a></td>
<td>${entry.get("description")}</td>
</tr>"""
}
println """
</table>
"""
