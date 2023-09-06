$.ajax({
  type: 'GET',
  url: 'https://wakatime.com/share/@dsw47/748daae6-5517-45ba-b3a6-9d357d11fd6c.json',
  dataType: 'jsonp',
  success: function(response) {
    console.log(response.data);
  },
});
