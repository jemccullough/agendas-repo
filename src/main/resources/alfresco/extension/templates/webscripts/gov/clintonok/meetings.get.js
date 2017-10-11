// check that search term has been provided
var dateGiven = "2014-01-01";
if (args.q == undefined || args.q.length == 0)
{
   //status.code = 400;
   //status.message = "Search term has not been provided.";
   //status.redirect = true;
	var now = new Date();
	//var day = now.getDate();
	//var month = now.getMonth();
	//var year = now.getFullYear();
	dateGiven = now.getFullYear().toString() + "-" + now.getMonth().toString() + "-" + now.getDate().toString();
}
//else
//{
   // perform search
//   var nodes = search.luceneSearch("TEXT:" + args.q);
//   model.resultset = nodes;
//}
else
	{ dateGiven = args.q; }

var nodes = search.query({query:  "@agnd\\:meetingDateTime:[\"" + dateGiven + "\" TO MAX]"});
//luceneSearch("ASPECT:\"agnd:meeting\"");
model.resultset = nodes;
//debug
model.queryTest = "Gene says -> -> agnd:meetingDateTime[\"" + dateGiven + "\" TO MAX]";