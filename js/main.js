'use strict';

//const apiKey = 'AIzaSyCnAyCdPMqwL4EVmlWPsj3bQZmsHHsZ1Oc';
//const apiKey = 'AIzaSyDmmYWeUj1mvjUir3pqXA67aVto9S9ORu4';
//const apiKey = 'AIzaSyDzEPU32uVC2725kdjVMiBluvVoQij8yV8';
const apiKey = 'AIzaSyCsvzwIqmjq28Q4oeif2_7TRF_H3ttAwfE';
//const apiKey = 'AIzaSyBtyNwuMmJDQCIt11ZltJomDZEwszRjnps';
//const apiKey = 'AIzaSyC6xX9mMcQjRUmK_-iV7Us3fs40IOrGg3g';

//Juho

const top50Button = document.querySelector('#top50Button');
const top25Button = document.querySelector('#top25Button');
const top50SuperChatButton = document.querySelector('#top50SuperChatButton');
const top25SuperChatButton = document.querySelector('#top25SuperChatButton');
const top50ChannelIDArray = [
  'UCq-Fj5jknLsUf-MWSy4_brA',
  'UCpEhnqL0y41EpW2TvWAHD7Q',
  'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
  'UCX6OQ3DkcsbYNE6H8uQQuVA',
  'UCk8GzjMOrta8yxDcKfylJYw',
  'UCJplp5SjeGSdVdwsfb9Q7lQ',
  'UCJ5v_MCY6GNUBTO8-D3XoAg',
  'UCFFbwnve3yF62-tVXkTyHqg',
  'UCvlE5gTbOvjiolFlEm-c_Ow',
  'UC295-Dw_tDNtZXFeAPAW6Aw',
  'UCOmHUn--16B90oW2L6FRR3A',
  'UCIwFjwMjI0y7PDBVEO9-bkQ',
  'UCyoXW-Dse7fURq30EWl_CUA',
  'UCffDXn7ycAzwL2LDlbyWOTw',
  'UCLkAepWjdylmXSltofFvsYQ',
  'UC3IZKseVpdzPSBaWxBxundA',
  'UC6-F5tO8uklgE9Zy8IvbdFw',
  'UCppHT7SZKKvar4Oc9J4oljQ',
  'UCP6uH_XlsxrXwZQ4DlqbqPg',
  'UCRijo3ddMTht_IHyNSNXpNQ',
  'UC3gNmTGu-TTbFPpfSs5kNkg',
  'UCEdvpU2pFRCVqU6yIPyTpMQ',
  'UC0C-w0YjGpqDXGB8IHb662A',
  'UCfM3zsQsOnfWNUppiycmBuw',
  'UC22nIfOTM7KLIQuFGMKzQbg',
  'UC9CoOnJkIBMdeijd9qYoT_g',
  'UC55IWqFLDH1Xp7iu1_xknRA',
  'UCt4t-jeY85JegMlZ-E5UWtA',
  'UC56gTxNs4f9xZ7Pa2i5xNzg',
  'UCJrDMFOdv1I2k8n9oK_V21w',
  'UCaayLD9i5x4MmIoVZxXSv_g',
  'UCqECaJ8Gagnn7YCbPEzWH6g',
  'UCK1i2UviaXLUNrZlAFpw_jA',
  'UCYWOjHweP2V-8kGKmmAmQJQ',
  'UCYiGq8XF7YQD00x7wAd62Zg',
  'UCiGm_E4ZwYSHV3bcW1pnSeQ',
  'UCbTLwN10NoCU4WDzLf1JMOA',
  'UCV4xOVpbcV8SdueDCOxLXtQ',
  'UCV306eHqgo0LvBf3Mh36AHg',
  'UC3KQ5GWANYF8lChqjZpXsQw',
  'UCZJ7m7EnCNodqnu5SAtg8eQ',
  'UC4rlAVgAK0SGk-yTfe48Qpw',
  'UCYvmuw-JtVrTZQ-7Y4kd63Q',
  'UCj0O6W8yDuLg3iraAXKgCrQ',
  'UC1ciY6kR3yj3kaKZ6R7ewAg',
  'UCJrOtniJ0-NWz37R30urifQ',
  'UCXazgXDIYyWH-yXLAkcrFxw',
  'UCOsyDsO5tIt-VZ1iwjdQmew',
  'UCcgqSM4YEo5vVQpqwN-MaNw',
  'UC2tsySbe9TNrI-xh2lximHA'];

const top50SuperChatChannelIDArray = [
  'UCl_gCybOJRIgOXw6Qb4qJzQ',
  'UCS9uQI-jC3DE0L4IpXyvr6w',
  'UC1DCedRgGHBdm81E1llLhOQ',
  'UCCzUftO8KOVkV4wQG1vkUvg',
  'UC1opHUrw8rvnsadT-iGp7Cg',
  'UC0M-_02RJqMlGTKUjF1WhJg',
  'UCZlDXzGoo7d44bwdNObFacg',
  'UCFKOVgVbGmX65RxO3EtH3iw',
  'UCSFCh5NL4qXrAy9u-u2lX3g',
  'UCL_qhgtOy0dy1Agp8vkySQg',
  'UCvInZx9h3jC2JzsIzoOebWg',
  'UCDX5PcGdh73bnrVMgdQ_DoA',
  'UCqm3BQLlJfvkTsX_hvm0UmA',
  'UChAnqc_AY5_I3Px5dig3X1Q',
  'UC-hM6YJuNYVAmUWxeIr9FeA',
  'UCLwNTXWEjVd2qIHLcXxQWxA',
  'UCdyqAaZDKHXg4Ahi7VENThQ',
  'UCQ0UDLQCjY0rmuxCDE38FGg',
  'UCHsx4Hqa-1ORjQTh9TYDhww',
  'UCspv01oxUFf_MTSipURRhkA',
  'UCAWSyEs_Io8MtpY3m-zqILA',
  'UCvzGlP9oQwU--Y0r9id_jnA',
  'UCVNouUw3d3l5JYVCxhAQXKA',
  'UC6wvdADTJ88OfIbJYIpAaDA',
  'UCoSrY_IQQVpmIRZ9Xf-y93g',
  'UCmovZ2th3Sqpd00F5RdeigQ',
  'UC3c8PW1C5kJGbCRjFJoTDwA',
  'UCcJL2ld6kxy_nuV1u7PVQ0g',
  'UCOxdVScJgZHg7FlMv_CVsGA',
  'UCca2961Ton2js_f9IDXK9Wg',
  'UCvaTdHTWBGv3MKj3KVqJVCw',
  'UC7fk0CB07ly8oSl0aqKkqFg',
  'UCbkjX3E0IhuUfPzL0FjSPaw',
  'UCdn5BQ06XqgXoAxIhbqw5Rg',
  'UC0Owc36U9lOyi9Gx9Ic-4qg',
  'UCmZ1Rbthn-6Jm_qOGjYsh5A',
  'UCLO9QDxVL4bnvRRsz6K4bsQ',
  'UC1qldNOqaqIY2PwhbVwIhWA',
  'UCzHCojF0brodPKPs-s5_sxQ',
  'UCMmVPVb0BwSIOWVeDwlPocQ',
  'UC5sqmi33b7l9kIYa0yASOmQ',
  'UCzQJmmpZjqzJe96CwlrwlHQ',
  'UCs18sMwqTCMBmTqX0b2-w6A',
  'UC_isacL9Y5wETCsXj9tWD-Q',
  'UC1uv2Oq6kNxgATlCiez59hw',
  'UCXTpFs_3PqI41qX2d9tL2Rw',
  'UC5CwaMl1eIgY8h02uZw7u8A',
  'UClhkaSagypQdw7lxP7alQVA',
  'UCHqC-yWZ1kri4YzwRSt6RGQ',
  'UCzciBmqDXPE47nOPRrjmo9A'];

const top50List = [];
const top50SuperChatList = [];
let header = '';

//Printing 25 toplist to the page when it's loaded.

window.addEventListener('load', () => {
  deleteListElements();
  clearList();
  printTop25Channels();
  addSortListeners();
});

//Async function to fetch data from top50 youtube channels and push the data to a list.

async function retrieveChannelInformation() {
  for (let i = 0; i < top50ChannelIDArray.length; i++) {
    const retrieve = `https://www.googleapis.com/youtube/v3/channels?id=${top50ChannelIDArray[i]}&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
    top50List.push(await fetch(retrieve).then(function(answer) {
      return answer.json();
    }).then(function(data) {

      return data;
    }));
  }
}

//same as before but with channels with the biggest super chat revenue

async function retrieveSuperChatChannelInformation() {
  for (let i = 0; i < top50SuperChatChannelIDArray.length; i++) {
    const retrieve = `https://www.googleapis.com/youtube/v3/channels?id=${top50SuperChatChannelIDArray[i]}&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
    top50SuperChatList.push(await fetch(retrieve).then(function(answer) {
      return answer.json();
    }).then(function(data) {

      return data;
    }));
  }
}

//Functions to generate necessary html for the table list when called.

function generateChannelsHTMLEntriesForTop50(top50List, target, times) {
  const html =
      `<thead>
        <tr>      
        <th id="ranking">Ranking</th>
        <th id="thumbnail"></th>
        <th id="channelName">Channel name</th>
        <th id="subscribers">Subscribers</th>
        <th id="videos">Videos</th>
        <th id="views">Views</th>
        </tr>
        </thead>
        `;

  target.innerHTML += html;

  for (let j = 0; j < (times * top50List.length); j++) {

    const html2 = `
<tr>
    <td class="rankingNumber">${j + 1}</td>
    <td><img id="thumb${j}" class="thumbnail" src="${top50List[j].items[0].snippet.thumbnails.default.url}" alt="Thumbnail"></td>
     <td>${top50List[j].items[0].snippet.title}</td>
     <td class="subscriberNumber">${(+(top50List[j].items[0].statistics.subscriberCount))}</td>
     <td class="videoCountNumber">${(+(top50List[j].items[0].statistics.videoCount))}</td>
     <td class="viewCountNumber">${(+(top50List[j].items[0].statistics.viewCount))}</td>
 </tr>
 `;
    target.innerHTML += html2;

  }

}

function generateChannelsHTMLEntriesForTop50SuperChatChannels(
    top50SuperChatList, target, times) {
  const html = `
        <thead>
        <tr>
        <th id="ranking">Ranking</th>
        <th id="thumbnail"></th>
        <th id="channelName">Channel name</th>
        <th id="subscribers">Subscribers</th>
        <th id="videos">Videos</th>
        <th id="views">Views</th>
        </tr>
        </thead>
        
    `;

  target.innerHTML += html;

  for (let j = 0; j < (times * top50SuperChatList.length); j++) {

    const html2 = `
<tr>
    <td class="rankingNumber">${j + 1}</td>
    <td><img id="thumb${j}" class="thumbnail" src="${top50SuperChatList[j].items[0].snippet.thumbnails.default.url}" alt="Thumbnail"></td>
     <td>${top50SuperChatList[j].items[0].snippet.title}</td>
     <td class="subscriberNumber">${(+(top50SuperChatList[j].items[0].statistics.subscriberCount))}</td>
     <td class="videoCountNumber">${(+(top50SuperChatList[j].items[0].statistics.videoCount))}</td>
     <td class="viewCountNumber">${(+(top50SuperChatList[j].items[0].statistics.viewCount))}</td>
 </tr>
 `;
    target.innerHTML += html2;

  }

}

//Function to make numbers have a space between thousands etc, like "1 000".

function formatNumbers() {
  const table = document.querySelector('#table');

  for (const row of table.rows) {
    try {
      const rank = row.querySelector('.rankingNumber').innerHTML;
      const subs = row.querySelector('.subscriberNumber').innerHTML;
      const video = row.querySelector('.videoCountNumber').innerHTML;
      const view = row.querySelector('.viewCountNumber').innerHTML;
      row.querySelector('.rankingNumber').innerHTML = rank + '.';
      row.querySelector(
          '.subscriberNumber').innerHTML = (+(subs)).toLocaleString('fi-FI');
      row.querySelector(
          '.videoCountNumber').innerHTML = (+(video)).toLocaleString('fi-FI');
      row.querySelector(
          '.viewCountNumber').innerHTML = (+(view)).toLocaleString('fi-FI');
    } catch (error) {
      console.log(error);
    }
  }
}

//function to delete spaces in numbers because it's easier to sort them that way.

function unFormatNumbers() {
  const table = document.querySelector('#table');

  for (const row of table.rows) {
    try {
      const rank = row.querySelector('.rankingNumber').innerHTML;
      const subs = row.querySelector('.subscriberNumber').innerHTML;
      const video = row.querySelector('.videoCountNumber').innerHTML;
      const view = row.querySelector('.viewCountNumber').innerHTML;
      row.querySelector('.rankingNumber').innerHTML = rank.replace('.', '');
      row.querySelector('.subscriberNumber').innerHTML = subs.replaceAll(
          '&nbsp;', '');
      row.querySelector('.videoCountNumber').innerHTML = video.replaceAll(
          '&nbsp;', '');
      row.querySelector('.viewCountNumber').innerHTML = view.replaceAll(
          '&nbsp;', '');
    } catch (error) {
      console.log(error);
    }
  }
}

function insertClassForDiv() {
  const div = document.querySelector('#content');

  div.className = 'tableContent';
}

//Asycn function and the promise from retriveChannelInformation is fulfilled here and we are getting the data from the fetch to the list.

async function printTop50Channels() {
  await retrieveChannelInformation();
  console.log(top50List);
  const target = document.querySelector('#table');
  insertClassForDiv();
  const times = 1;
  deleteLoader();
  generateChannelsHTMLEntriesForTop50(top50List, target, times);
  formatNumbers();
  for (let i = 0; i < top50List.length; i++) {
    document.querySelector(`#thumb${i}`).addEventListener('click', function() {
      createLoader();
      searchByID(top50ChannelIDArray[i]);
    });
  }
  addSortListeners();
}

//same as before but with 25 channels

async function printTop25Channels() {
  await retrieveChannelInformation();
  const target = document.querySelector('#table');
  insertClassForDiv();
  const times = 0.5;
  deleteLoader();
  if (top50List.length > 0) {
    target.innerHTML = '';
  }
  generateChannelsHTMLEntriesForTop50(top50List, target, times);
  formatNumbers();
  for (let i = 0; i < (top50List.length / 2); i++) {
    document.querySelector(`#thumb${i}`).addEventListener('click', function() {
      createLoader();
      searchByID(top50ChannelIDArray[i]);
    });
  }
  addSortListeners();

}

//Again same as the function before but now with a different data and list.

async function printTop50SuperChatChannels() {
  await retrieveSuperChatChannelInformation();
  const target = document.querySelector('#table');
  insertClassForDiv();
  const times = 1;
  deleteLoader();
  generateChannelsHTMLEntriesForTop50SuperChatChannels(top50SuperChatList,
      target, times);
  formatNumbers();
  for (let i = 0; i < top50SuperChatList.length; i++) {
    document.querySelector(`#thumb${i}`).addEventListener('click', function() {
      searchByID(top50SuperChatChannelIDArray[i]);
    });
  }
  addSortListeners();
}

async function printTop25SuperChatChannels() {
  await retrieveSuperChatChannelInformation();
  const target = document.querySelector('#table');
  insertClassForDiv();
  const times = 0.5;
  deleteLoader();
  generateChannelsHTMLEntriesForTop50SuperChatChannels(top50SuperChatList,
      target, times);
  formatNumbers();
  for (let i = 0; i < (top50SuperChatList.length / 2); i++) {
    document.querySelector(`#thumb${i}`).addEventListener('click', function() {
      searchByID(top50SuperChatChannelIDArray[i]);
    });
  }
  addSortListeners();
}

//Function to add eventListeners to our tables headers where you can choose how you want to sort the list.

function addSortListeners() {
  document.querySelector('#channelName').addEventListener('click', function() {
    header = 0;
    unFormatNumbers();
    sortTable();
    formatNumbers();
  });

  document.querySelector('#subscribers').addEventListener('click', function() {
    header = 1;
    unFormatNumbers();
    sortTable();
    formatNumbers();
  });
  document.querySelector('#videos').addEventListener('click', function() {
    header = 2;
    unFormatNumbers();
    sortTable();
    formatNumbers();
  });
  document.querySelector('#views').addEventListener('click', function() {
    header = 3;
    unFormatNumbers();
    sortTable();
    formatNumbers();
  });
  document.querySelector('#ranking').addEventListener('click', function() {
    header = 4;
    unFormatNumbers();
    sortTable();
    formatNumbers();
  });

}

//Sort function for the table, the base is from a tutorial but applied to a switch case and changed.

function sortTable() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById('table');
  switch (header) {
    case 0:

      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName('TD')[2];
          y = rows[i + 1].getElementsByTagName('TD')[2];
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
      break;
    case 1:
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName('TD')[3];
          y = rows[i + 1].getElementsByTagName('TD')[3];
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
      break;
    case 2:
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName('TD')[4];
          y = rows[i + 1].getElementsByTagName('TD')[4];
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
      break;
    case 3:
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName('TD')[5];
          y = rows[i + 1].getElementsByTagName('TD')[5];
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
      break;
    case 4:
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName('TD')[0];
          y = rows[i + 1].getElementsByTagName('TD')[0];
          if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
      break;
  }
}

//Like the names say. Delete and create loader.
function deleteLoader() {
  try {
    document.querySelector('.loader').remove();
  } catch (error) {
    console.log(error);
  }
}

function createLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';

  document.querySelector('#content').appendChild(loader);
}

//Delete elements to clear the page for new html entries.
function deleteListElements() {

  try {
    const div = document.querySelector('#content');
    div.remove();
  } catch (error) {

  }
  const div = document.createElement('div');
  div.id = 'content';
  const table = document.createElement('table');
  table.id = 'table';
  div.appendChild(table);
  main.appendChild(div);

  createLoader();
}

function clearList() {

  while (top50List.length) {
    top50List.pop();
  }
}

function clearSuperChatList() {
  while (top50SuperChatList.length) {
    top50SuperChatList.pop();
  }
}

//Adding eventListeners to the buttons on the page.

top50Button.addEventListener('click', function clicked() {
  deleteListElements();
  clearList();
  printTop50Channels();
  addSortListeners();
});

top25Button.addEventListener('click', function() {
  deleteListElements();
  clearList();
  printTop25Channels();
  addSortListeners();
});

top50SuperChatButton.addEventListener('click', function() {
  deleteListElements();
  clearSuperChatList();
  printTop50SuperChatChannels();
  addSortListeners();
});

top25SuperChatButton.addEventListener('click', function() {
  deleteListElements();
  clearSuperChatList();
  printTop25SuperChatChannels();
  addSortListeners();
});

// Santeri

/*
  Luodaan sivuston eri napeille addEventListenerin kautta toiminnot, kun niitä
  klikataa
*/

const button = document.querySelector('#searchButton');

const searchField = document.querySelector('#searchField');

const presentationButton = document.querySelector('#presentationPage');

const logo = document.querySelector('#logo');

const main = document.querySelector('main');

logo.addEventListener('click', function() {

  deleteListElements();
  clearList();
  printTop25Channels();
  addSortListeners();

});

presentationButton.addEventListener('click', function() {

  open('presentation.html');

});

button.addEventListener('click', initialSearch);

searchField.addEventListener('keyup', function(e) {

  if (e.keyCode === 13) {

    e.preventDefault();

    button.click();
  }
});

function initialSearch() {

  /*
    Tämä funktio toteutetaan kun klikataan hakupainiketta. Tässä funktiossa
    luetaan käyttäjän syöte ja haetaan apin avulla statistiikkaa.
    Jos syötteenä annettiin kanavan ID, löytää youtuben channels API tuloksen.
    Jos taas ei, tarkoittaa se sitä että syötteenä oli kanavan nimi ja tehdään
    uusi haku searchByName() funktion avulla.
  */

  // tyhjennetään sivun sisältö
  deleteElements();

  // luodaan latausympyrä

  createLoader();

  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${searchField.value}&regionCode=FI&key=${apiKey}`;

  fetch(
      url).
      then(function(response) {

        return response.json();
      }).
      then(function(data) {

        /* jos dataa ei löydy, käynnistetään uusi haku funktiolla searchByName()*/

        if (!(data.items)) {

          searchByName();

        } else {

          /* jos jotain löytyi, tulostetaan data funktiolla printChannelData
             poistetaan myös latausympyrä tulostuksen jälkeen
           */

          printChannelData(data.items[0]);

          deleteLoader();
        }
      });
}

function deleteElements() {

  /*
  Tässä funktiossa poistetaan div, jonka ID on content, jonka jälkeen luodaan
  uusi. Tämän avulla saadaan tyhjennettyä kaikki sen sisällä olleet elementit
   */

  try {
    const div = document.querySelector('#content');

    div.remove();

  } catch (error) {

  }
  const div = document.createElement('div');

  div.id = 'content';

  main.appendChild(div);

}

function getMostViewedVideo(ID, div) {

  /*
  Tämän funktion avulla saadaan youtube API:n search API:n mukaan kanavan
  katsotuin video ja se lisätään parametrin saadun divin sisälle
   */

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&channelId=${ID}&order=viewCount`;

  fetch(
      url).
      then(function(response) {

        return response.json();
      }).
      then(function(data) {

        return data.items[0];
      }).
      then(function(data) {

        const iframe = document.createElement('iframe');

        iframe.width = '420';
        iframe.height = '315';
        iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;

        div.appendChild(iframe);
      });

}

function getLatestVideo(ID, div) {

  /*
  Tämän funktion avulla saadaan youtube API:n search API:n mukaan kanavan
  viimeisin video ja se lisätään parametrin saadun divin sisälle
 */

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&channelId=${ID}&order=date`;

  fetch(
      url).
      then(function(response) {

        return response.json();

      }).
      then(function(data) {

        return data.items[0];

      }).
      then(function(data) {
        const iframe = document.createElement('iframe');

        iframe.width = '420';
        iframe.height = '315';
        iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;

        div.appendChild(iframe);
      });
}

function printChannelData(data) {

  /*
  Tällä funktiolla tulostetaan API:sta saadut tiedot sivulle ja sijoitetaan
  ne oikeisiin paikkoihin
   */

  const div = document.querySelector('#content');

  // asetetaan contentilla uniikki luokka

  div.className = 'contentChannel';

  // luodaan uusi div-elementti #content divin sisälle

  const channelDiv = document.createElement('div');

  channelDiv.id = 'channelPage';

  // luodaan ns. main div channelDivin sisälle

  const channelPageMain = document.createElement('div');

  channelPageMain.id = 'channelMain';

  // luodaan ns. header div channelDivin sisälle sisälle, jonne sijoitetaan
  // kanavan otsikko, thumbnail ja kartta

  const channelHeaderDiv = document.createElement('div');

  channelDiv.appendChild(channelPageMain);

  channelPageMain.appendChild(channelHeaderDiv);

  div.appendChild(channelDiv);

  // luodaan channelTitleDiv, johon sijoitetaan thumbnail ja kanavan nimi

  const channelTitleDiv = document.createElement('div');

  channelTitleDiv.id = 'channelTitleDiv';

  // sijoitetaan tämä div channelHeaderin sisälle

  channelHeaderDiv.appendChild(channelTitleDiv);

  channelHeaderDiv.id = 'channelHeaderDiv';

  const imgLink = document.createElement('a');

  imgLink.href = `https://www.youtube.com/channel/${data.id}`;

  const img = document.createElement('img');

  const thumbnail = data.snippet.thumbnails.medium;

  img.src = `${thumbnail.url}`;
  img.width = `${thumbnail.width}`;
  img.height = `${thumbnail.height}`;
  img.alt = 'channel img';
  img.className = 'thumbnail';

  imgLink.appendChild(img);

  channelTitleDiv.appendChild(imgLink);

  const h1 = document.createElement('h1');

  h1.innerHTML = `${data.snippet.title}`;

  channelTitleDiv.appendChild(h1);

  const h2Numbers = document.createElement('h2');

  // luodaan statistiikasta oma div, jonne sijoitetaan tilastoja kanavasta

  const divNumbers = document.createElement('div');

  h2Numbers.innerHTML = 'Statistics:';

  divNumbers.appendChild(h2Numbers);

  divNumbers.id = 'statistics';

  // luodaan p-elementti ja sijoitetaan sen sisälle statistiikkaa

  const pViewCount = document.createElement('p');

  // formatoidaan saadut numerot suomalaiseen lokaliin mukaisesti,
  // jolloin tuhannet on erotettu toisistaan

  const viewCount = (+data.statistics.viewCount).toLocaleString('fi-FI');

  pViewCount.innerHTML = `Views: ${viewCount}`;

  const pSubscriberCount = document.createElement('p');

  const subscriberCount = (+data.statistics.subscriberCount).toLocaleString(
      'fi-FI');

  pSubscriberCount.innerHTML = `Subscribers: ${subscriberCount}`;

  const pVideoCount = document.createElement('p');

  const videoCount = (+data.statistics.videoCount).toLocaleString('fi-FI');

  pVideoCount.innerHTML = `Videos: ${videoCount}`;

  divNumbers.appendChild(pViewCount);
  divNumbers.appendChild(pSubscriberCount);
  divNumbers.appendChild(pVideoCount);
  channelHeaderDiv.appendChild(divNumbers);

  // luodaan kartta ja sijoitetaan se channelHeaderDivin sisälle

  createMap(channelHeaderDiv, data.snippet.country);

  // luodaan div-elementti, jonne sijoitetaan kanavien upotettujen videoiden
  // divit

  const videoDivAll = document.createElement('div');

  videoDivAll.id = 'videoDivAll';

  channelPageMain.appendChild(videoDivAll);

  // luodaan viimeisimmästä videosta div-elementti ja sinne pistetään apista
  // haettu video, jonka tarkoitus on olla kanavan viimeisin video

  const h2Latest = document.createElement('h2');

  h2Latest.innerHTML = 'Latest video';

  const latestVideoDiv = document.createElement('div');

  latestVideoDiv.className = 'videoDiv';

  latestVideoDiv.appendChild(h2Latest);

  videoDivAll.appendChild(latestVideoDiv);

  getLatestVideo(data.id, latestVideoDiv);

  // tehdään sama kuin äsken, mutta nyt haetaan katsotuinta videota

  const h2MostViewed = document.createElement('h2');

  h2MostViewed.innerHTML = 'Most popular video';

  const mostViewedDiv = document.createElement('div');

  mostViewedDiv.className = 'videoDiv';

  mostViewedDiv.appendChild(h2MostViewed);

  videoDivAll.appendChild(mostViewedDiv);

  getMostViewedVideo(data.id, mostViewedDiv);

  // haetaan twitteriä kanavan nimellä ja upotetaan se sivustolla tällä
  // funktiolla

  embedTweet(data.snippet.title);
}

function searchByName() {

  /*
  Tällä funktiolla haetaan youtube API:n search API:lla nimen perusteella
  youtube kanavia. Tuloksena tulee useita eri kanavia ja kun tulos saadaan
  otetaan printTheNameSearchResults() funktioon parametriksi saatu data
   */

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=channel&q=${searchField.value}&sort=relevance&maxResults=10`;

  fetch(
      url).
      then(function(response) {
        return response.json();
      }).
      then(function(data) {
            printTheNameSearchResults(data.items);
            deleteLoader();
          },
      );
}

function printTheNameSearchResults(data) {

  /*
  Tämän funktion avulla käydään kaikki datasta saadut kanavat läpi ja
  tulostetaan niiden tiedot sivulle
   */

  const div = document.querySelector('#content');

  // luodaan uusi div-elementti johon pistetään kaikki kanavat omine
  // div-elementtien kanssa

  const divChannels = document.createElement('div');
  divChannels.id = 'channels';

  div.appendChild(divChannels);

  // käydään läpi kaikki kanavat

  for (const channel of data) {

    // luodaan kanavalle oma div-elementti

    const divChannel = document.createElement('div');

    divChannel.className = 'channel';

    // lisätään thumbnail

    const img = document.createElement('img');

    const divContainer = document.createElement('div');

    divContainer.className = 'channelContainer';

    img.src = `${channel.snippet.thumbnails.default.url}`;
    img.alt = 'thumbnail';
    img.className = 'thumbnail';

    // lisätään thumbnailiin addEventListener funktio, jota klikkaamalla
    // suoritetaan searchbyID() funktio klikatun kanavan ID:lla, jolloin
    // tulostetaan kyseisen kanavan tiedot sivulle

    img.addEventListener('click', function() {
      console.log(channel.snippet.channelId);
      searchByID(channel.snippet.channelId);
    });

    divContainer.appendChild(img);

    // tehdään h1-elementti ja laitetaan sen tekstiksi kanavan nimi

    const h1 = document.createElement('h1');

    h1.innerHTML = `${channel.snippet.title}`;

    divContainer.appendChild(h1);

    // tehdään p-elementti ja lisätään siihen kanavan tiedoista saatu tieto
    // kanavasta

    const p = document.createElement('p');

    const text = channel.snippet.description;

    // jos tietoa ei löydy, laitetaan tekstiksi "no description"

    if (text === '') {
      p.innerHTML = 'No description';
    } else {
      p.innerHTML = `${text}`;
    }

    // lisätään kaikki sivulle

    divContainer.appendChild(p);
    divChannel.appendChild(divContainer);
    divChannels.appendChild(divChannel);
  }
}

function searchByID(ID) {

  /*
  Tämän funktion avulla haetaan kanavaa youtube API:n channel API:sta suoraan
  ID:n avulla. Tämä tuottaa yhden tuloksen, jos ID on oikea jonka jälkeen
  suoritetaan tarvittava koodi kyseisen kanavan tietojen tulostamista varten
   */

  // tyhjennetään sivu

  deleteElements();

  // lisätään latausympyrä

  createLoader();

  const div = document.querySelector('#content');

  main.appendChild(div);

  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${ID}&regionCode=FI&key=${apiKey}`;

  fetch(
      url).
      then(function(response) {
        return response.json();
      }).
      then(function(data) {
        printChannelData(data.items[0]);
        deleteLoader();
      });
}

function createMap(div, countryCode) {

  /*
  Tämän funktion parametrina annettuun div-elementti sijoitetaan annetun
  maakoodin maan pääkaupungin sijainti kartalla
   */

  // luodaan kartta div-elementti

  const mapDiv = document.createElement('div');

  mapDiv.id = 'map';

  div.appendChild(mapDiv);

  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;

  // haetaan restcountries API:sta maakoodin mukaan maata, haku tuo kyseisestä
  // maasta tietoja. Mm. sen pääkaupungin, jota käytetään toisessa API:ssa

  fetch(
      url).
      then(function(response) {
        return response.json();
      }).
      then(function(data) {
        return data[0].capital[0];
      }).
      then(function(capital) {

        // käytetään saatua pääkaupungia geolake API:ssa, joka palauttaa
        // kyseisen kaupungin koordinaatit, jolloin kaupunki löydetään kartasta

        const url = `https://api.geolake.com/geocode?api_key=yUbdZL1JbmNyXFEZGd2i&city=${capital}`;
        fetch(
            url).
            then(function(response) {
              return response.json();
            }).
            then(function(data) {

              // kutsutaan locaete funktiota, jolla kartta luodaan ja siihen
              // sijoitetaan annettujen koordinaattien mukaisesti pointeri

              locate([
                data.latitude,
                data.longitude,
              ]);
            });
      });
}

function locate(cords) {

  /*
  Tässä funktiossa annetun koordinaattien mukaan luodaan kartta ja lisätään
  siihen pointteri. Kartasta poistetaan kaikki zoomaus- ja vieritystoiminnot
  jolloin kartasta tulee ikään kuin kuva
   */

  const map = L.map('map').setView(cords, 1);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    dragging: false, doubleClickZoom: false, zoomControl: false,
  }).addTo(map);

  L.marker(cords).
      addTo(map);

  map.zoomControl.remove();
}

function embedTweet(name) {

  /*
  Tässä funktiossa haetaan twitter-oembed API:n avulla valmista html:ää, jolla
  saadaan upotettua nimen perusteella haettu twitter ja sen aikajana. Jos
  kyseistä twitteriä ei löydy, niin mitään ei tulosteta
   */

  // luodaan div-elementti joka toimii ana, johon twitter-html laitetaan

  const channelPageAside = document.createElement('div');

  channelPageAside.id = 'channelAside';

  // luodaan proxy, jotta API-haku toimisi

  const proxy = 'https://api.allorigins.win/get?url=';

  const twitterDiv = document.createElement('div');
  twitterDiv.id = 'twitter';

  const search = `https://publish.twitter.com/oembed?url=https://twitter.com/${name}&limit=3&theme=dark`;

  const url = proxy + encodeURIComponent(search);

  fetch(url,
  ).
      then(function(response) {
        return response.json();
      }).then(function(data) {

    // haun tulos ei ole aina selvä, joten valmistaudutaan virhetilanteisiin

    try {

      // jos API:sta saatiin dataa eli twitter-tili löytyi, niin ei tule
      // virhettä

      const apiData = JSON.parse(data.contents);

      document.querySelector('#channelPage').appendChild(channelPageAside);

      channelPageAside.appendChild(twitterDiv);

      const node = document.createRange().
          createContextualFragment(apiData.html);

      document.querySelector('#twitter').appendChild(node);

    } catch (error) {

    }
  });
}