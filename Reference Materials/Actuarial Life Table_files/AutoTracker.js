/*
				    .ooooo.          ooo. .oo.     .ooooo.    oooo d8b
				   d88" `88b         `888P"Y88b   d88" `88b   `888""8P
				   888888888  88888   888   888   888   888    888
				   888        88888   888   888   888   888    888       
				   `"88888"          o888o o888o  `Y8bod8P"   d888b      

***********************************************************************************************************
Copyright 2013 by E-Nor Inc.
Author Ahmed Awwad.
Automatically tag links for Google Analytics to track file downloads, outbound links, and email clicks. 
Automatically tag links for Google Analytics to simplify tracking across domains.
Version: 1.4: Updated the scripts to stop AutoLinker to all links going to secure.ssa.gov
Last Updated: 4/11/2013
***********************************************************************************************************/

function addLinkerEvents()
{
	var domains_to_track = ["ssa.gov", "socialsecurity.gov"];
	var extDoc = [".doc",".docx",".xls",".xlsx",".xlsm",".ppt",".pptx",".exe",".zip",".pdf",".js",".txt",".csv",".rdf",".xml"];
	var mainDomain = document.location.hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];
	mainDomain = mainDomain.toLowerCase();
	var arr = document.getElementsByTagName("a");
	for(i=0; i < arr.length; i++)
	 {
		var flag = 0;
		var flagExt = 0;
		var tmp = arr[i].getAttribute("onclick");
		var doname =""; 
		var mailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
		var urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		if(mailPattern.test(arr[i].href) || urlPattern.test(arr[i].href))
		{    
			try
			 {
				doname = arr[i].hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];
				doname = doname.toLowerCase();
			 }
			catch(err)
			 {
				doname = arr[i].href;
				doname = doname.toLowerCase();
			 }	     
		}
		else
		{   
			continue; 
		}
				
		if (tmp != null) 
		{
			tmp = String(tmp);
			if (tmp.indexOf('_gaq.push') > -1) 
			continue;
		}
		
		//Internal Links 
		if(doname == mainDomain || doname.indexOf(mainDomain) != -1)
			{	
				// Tracking email clicks		
				if (arr[i].href.toLowerCase().indexOf("mailto:") != -1) 
				{
					var gaUri = arr[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);
					arr[i].setAttribute("onclick",""+((tmp != null) ? tmp + '; ' : '')+"_gaq.push(['_trackEvent', 'Email Clicks', 'Click', '"+gaUri+"']);");
				}
				
				else if(arr[i].href.toLowerCase().indexOf("mailto:") == -1)
				{
					
					for(var j = 0; j < extDoc.length; j++) 
					{
						var arExt = arr[i].href.split(".");
						var ext = arExt[arExt.length-1].split(/[#?]/);
						if("."+ext[0].toLowerCase() == extDoc[j]) 
						{
							// Tracking electronic documents - doc, xls, pdf, exe, zip
							var intGaUri = arr[i].href.split(doname);
							var gaUri = intGaUri[1].split(extDoc[j]);
							arr[i].setAttribute("onclick",""+((tmp != null) ? tmp + '; ' : '')+"_gaq.push(['_trackEvent', 'Assets', 'Download', '"+gaUri[0]+extDoc[j]+"']);");
							break;
						}
						
					}
					
				}
				
			}
			
		// External Link
		else if(doname != mainDomain && doname.indexOf(mainDomain) == -1)
		{
			for (var k = 0; k < domains_to_track.length; k++) 
			{
				if(doname.indexOf(domains_to_track[k]) == -1) 
				{
					flag++;
					if(flag == domains_to_track.length)
					{
						if(arr[i].href.toLowerCase().indexOf("mailto:") == -1)
						{
							// Tracking outbound links off site
							var gaUri = arr[i].href.split("//");
							arr[i].setAttribute("onclick",""+((tmp != null) ? tmp + '; ' : '')+"_gaq.push(['_trackEvent', 'Outbound Links', 'Click', '"+gaUri[1]+"']);");
						}
					}
				}
				else if(doname.indexOf(domains_to_track[k]) != -1 && arr[i].href.toLowerCase().indexOf("mailto:") == -1)
				{
					for(var l = 0; l < extDoc.length; l++) 
					{
						var arExt = arr[i].href.split(".");
						var ext = arExt[arExt.length-1].split(/[#?]/);
						if("."+ext[0].toLowerCase() == extDoc[l]) 
						{
							// Tracking electronic documents - doc, xls, pdf, exe, zip
							var intGaUri = arr[i].href.split(doname);
							var gaUri = intGaUri[1].split(extDoc[l]);
							arr[i].setAttribute("onclick",""+((tmp != null) ? tmp + '; ' : '')+"_gaq.push(['_trackEvent', 'Assets', 'Download', '"+gaUri[0]+extDoc[l]+"']);");
							break;
						}
						else if("."+ext[0].toLowerCase() != extDoc[l])
						{
							flagExt++;
							if(flagExt == extDoc.length && arr[i].href.indexOf("secure.ssa.gov") == -1)
							{
								//Auto-Linker
								arr[i].setAttribute("onclick",""+((tmp != null) ? tmp + '; ' : '')+"_gaq.push(['_link', '"+arr[i].href+"']); return false;");
							}
						}
					}
				}
				else if(doname.indexOf(domains_to_track[k]) != -1 && arr[i].href.toLowerCase().indexOf("mailto:") != -1)
				{
					var gaUri = arr[i].href.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);
					arr[i].setAttribute("onclick",""+((tmp != null) ? tmp + '; ' : '')+"_gaq.push(['_trackEvent', 'Email Clicks', 'Click', '"+gaUri+"']);");
				}
			}
		}
	 }
}