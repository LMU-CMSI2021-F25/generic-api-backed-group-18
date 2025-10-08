In useEffect() I was struggling to use the correct fetch code and I used ChatGPT to get this:
    fetch(endpoint)
    .then(res=>res.json())
    .then(result=>setData(result.results))
    .catch(err=>console.error(err));
  }, [category]);
  This resolved the issues, where before I was unable to access the api and get it to show but now
  when I click the buttons created the information shows correctly.

Used Chat to show where to download then insert the font that we wanted to use for the site. Gave me
a step by step of where to add in the link which solved my issues of trying to access and insert it.
