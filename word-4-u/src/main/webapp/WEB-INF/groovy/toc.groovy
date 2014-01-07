def resources=[
[name:"email", url:"this is emaillist", description:"read bible in a year"],
[name:"pray", url:"this is pray list", description:"pray the word "]
]
request.model=resources
//request.setAttribute 'toc', resources.toString()

forward '/WEB-INF/pages/toc.gtpl'
