import React from 'react';

function AllContacts() {
  const ContactList = [{
    id: 1,
    avatar: 'https://robohash.org/utmagnidolore.png?size=50x50&set=set1',
    name: 'Tiertza Petters',
  }, {
    id: 2,
    avatar: 'https://robohash.org/ipsamolestiaeharum.png?size=50x50&set=set1',
    name: 'Noella Rosencrantz',
  }, {
    id: 3,
    avatar: 'https://robohash.org/sedutenim.png?size=50x50&set=set1',
    name: 'Torrence Kyteley',
  }, {
    id: 4,
    avatar: 'https://robohash.org/fugitrerumoccaecati.png?size=50x50&set=set1',
    name: 'Robina Chard',
  }, {
    id: 5,
    avatar: 'https://robohash.org/doloribusaspernaturvoluptatem.png?size=50x50&set=set1',
    name: 'Mark Tiebe',
  }, {
    id: 6,
    avatar: 'https://robohash.org/omnisfugitvoluptatem.png?size=50x50&set=set1',
    name: 'Webster Sarra',
  }, {
    id: 7,
    avatar: 'https://robohash.org/sednobisnon.png?size=50x50&set=set1',
    name: 'Lamond Dimeloe',
  }, {
    id: 8,
    avatar: 'https://robohash.org/consequunturconsecteturunde.png?size=50x50&set=set1',
    name: 'Bernice Borges',
  }, {
    id: 9,
    avatar: 'https://robohash.org/seddoloremquesit.png?size=50x50&set=set1',
    name: 'Patrica Van der Kruis',
  }, {
    id: 10,
    avatar: 'https://robohash.org/eumaperiamdicta.png?size=50x50&set=set1',
    name: 'Bambie Duncan',
  }, {
    id: 11,
    avatar: 'https://robohash.org/tenetursaepeexcepturi.png?size=50x50&set=set1',
    name: 'Deedee Zamorrano',
  }, {
    id: 12,
    avatar: 'https://robohash.org/aliquidetipsum.png?size=50x50&set=set1',
    name: 'Elfrida Meric',
  }, {
    id: 13,
    avatar: 'https://robohash.org/saepedoloremeum.png?size=50x50&set=set1',
    name: 'Yoshi Juara',
  }, {
    id: 14,
    avatar: 'https://robohash.org/aututea.png?size=50x50&set=set1',
    name: 'Land Prinett',
  }, {
    id: 15,
    avatar: 'https://robohash.org/doloremrepudiandaemolestiae.png?size=50x50&set=set1',
    name: 'Hester Spenceley',
  }, {
    id: 16,
    avatar: 'https://robohash.org/etametfacilis.png?size=50x50&set=set1',
    name: 'Bertrando Kirman',
  }, {
    id: 17,
    avatar: 'https://robohash.org/voluptatemestperferendis.png?size=50x50&set=set1',
    name: 'Chastity Paradyce',
  }, {
    id: 18,
    avatar: 'https://robohash.org/inharumet.png?size=50x50&set=set1',
    name: 'Britta Burgott',
  }, {
    id: 19,
    avatar: 'https://robohash.org/sitomnisbeatae.png?size=50x50&set=set1',
    name: 'Lucinda Lazer',
  }, {
    id: 20,
    avatar: 'https://robohash.org/ullamsuscipitdolorem.png?size=50x50&set=set1',
    name: 'Jerrylee Faulds',
  }, {
    id: 21,
    avatar: 'https://robohash.org/facilisquibusdamnumquam.png?size=50x50&set=set1',
    name: 'Georgetta Yeandel',
  }, {
    id: 22,
    avatar: 'https://robohash.org/quisimpeditanimi.png?size=50x50&set=set1',
    name: 'Shandie Chifney',
  }, {
    id: 23,
    avatar: 'https://robohash.org/essequisuscipit.png?size=50x50&set=set1',
    name: 'Onfroi Hindenburg',
  }, {
    id: 24,
    avatar: 'https://robohash.org/utomnisquam.png?size=50x50&set=set1',
    name: 'Libbey Boycott',
  }, {
    id: 25,
    avatar: 'https://robohash.org/suntrecusandaevoluptas.png?size=50x50&set=set1',
    name: 'Forest Whysall',
  }, {
    id: 26,
    avatar: 'https://robohash.org/quomolestiasquia.png?size=50x50&set=set1',
    name: 'King Jenkerson',
  }, {
    id: 27,
    avatar: 'https://robohash.org/etetut.png?size=50x50&set=set1',
    name: 'Wash Perot',
  }, {
    id: 28,
    avatar: 'https://robohash.org/minimaomnisamet.png?size=50x50&set=set1',
    name: 'Miller Sells',
  }, {
    id: 29,
    avatar: 'https://robohash.org/aspernaturutsoluta.png?size=50x50&set=set1',
    name: 'Henri Croley',
  }, {
    id: 30,
    avatar: 'https://robohash.org/etfugaatque.png?size=50x50&set=set1',
    name: 'Blondell Pottiphar',
  }, {
    id: 31,
    avatar: 'https://robohash.org/laboriosamquialiquid.png?size=50x50&set=set1',
    name: 'Raquela Sworder',
  }, {
    id: 32,
    avatar: 'https://robohash.org/eaautemiure.png?size=50x50&set=set1',
    name: 'Claybourne Roddie',
  }, {
    id: 33,
    avatar: 'https://robohash.org/perspiciatisidvoluptatem.png?size=50x50&set=set1',
    name: 'Kirsteni Pietruschka',
  }, {
    id: 34,
    avatar: 'https://robohash.org/corporissuntfacere.png?size=50x50&set=set1',
    name: 'Lissy Auchterlonie',
  }, {
    id: 35,
    avatar: 'https://robohash.org/nemoetvel.png?size=50x50&set=set1',
    name: 'Marillin Gwyther',
  }, {
    id: 36,
    avatar: 'https://robohash.org/estmagnamvoluptatem.png?size=50x50&set=set1',
    name: 'Dinah Sole',
  }, {
    id: 37,
    avatar: 'https://robohash.org/dolorumestmolestias.png?size=50x50&set=set1',
    name: 'Gifford Musprat',
  }, {
    id: 38,
    avatar: 'https://robohash.org/impeditquisullam.png?size=50x50&set=set1',
    name: 'Cheston Drains',
  }, {
    id: 39,
    avatar: 'https://robohash.org/iustoesseaperiam.png?size=50x50&set=set1',
    name: 'Laure McCandie',
  }, {
    id: 40,
    avatar: 'https://robohash.org/iustoautpariatur.png?size=50x50&set=set1',
    name: 'Winni Leaf',
  }, {
    id: 41,
    avatar: 'https://robohash.org/totammaioresin.png?size=50x50&set=set1',
    name: 'Penrod Gaule',
  }, {
    id: 42,
    avatar: 'https://robohash.org/quidemconsequaturexcepturi.png?size=50x50&set=set1',
    name: 'Doretta Duesbury',
  }, {
    id: 43,
    avatar: 'https://robohash.org/nisinesciuntid.png?size=50x50&set=set1',
    name: 'Bourke Geraldini',
  }, {
    id: 44,
    avatar: 'https://robohash.org/etexplicaboatque.png?size=50x50&set=set1',
    name: 'Ingeborg Eplett',
  }, {
    id: 45,
    avatar: 'https://robohash.org/quiautrem.png?size=50x50&set=set1',
    name: 'Flynn Guidera',
  }, {
    id: 46,
    avatar: 'https://robohash.org/quinemoet.png?size=50x50&set=set1',
    name: 'Neile Puttrell',
  }, {
    id: 47,
    avatar: 'https://robohash.org/quisquamutest.png?size=50x50&set=set1',
    name: 'Neille Bourdice',
  }, {
    id: 48,
    avatar: 'https://robohash.org/praesentiumcorrupticommodi.png?size=50x50&set=set1',
    name: 'Kayla Orable',
  }, {
    id: 49,
    avatar: 'https://robohash.org/totamsitquibusdam.png?size=50x50&set=set1',
    name: 'Darrin McConigal',
  }, {
    id: 50,
    avatar: 'https://robohash.org/incidunthicsoluta.png?size=50x50&set=set1',
    name: 'Vic Shipston',
  }];

  return (
    <div>
      <div className="text-2xl text-center mt-10  font-bold text-black">All Contacts</div>
      <div className="h-[700px]  overflow-y-scroll no-scrollbar">
        <ul className="menu font w-full p-2 text-black divide-y">
          {ContactList.map((contact) => (
            <li key={contact.id} className="hover-bordered font-normal italic hover:subpixel-antialiased">
              <a href="#s">
                <div className="avatar ">
                  <div className="important-flex w-9 rounded-full bg-pink-500 w-full h-full justify-center items-center font-semibold ">
                    <span>{contact.name[0]}</span>
                  </div>
                </div>
                {contact.name}
              </a>

            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default AllContacts;
