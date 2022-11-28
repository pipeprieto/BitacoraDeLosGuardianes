 const data = [
  {
    "super_id": "c20555e5-6fe7-40a4-9642-8f83c9e5a554",
    "nombre": "Thor Odinson",
    "edad": 18,
    "image_link": "https://i.blogs.es/1c1b9b/chris-hemsworth-thor/450_1000.jpeg",
    "rol_super": "Heroe",
    "relaciones": "Hijo de Odin",
    "origen": "Asgard",
    "rasgosSuper": [
      {
        "rasgo_super_id": "997ecd02-b659-424e-953c-9f525a5e0a14",
        "rasgo_id": "d4687a08-ba31-48b3-91ea-af2f56e80daf",
        "super_id": "c20555e5-6fe7-40a4-9642-8f83c9e5a554",
        "rasgo": {
          "rasgo_id": "d4687a08-ba31-48b3-91ea-af2f56e80daf",
          "titulo": "Superfuerza",
          "tipo_rasgo": "Habilidad"
        }
      }
    ],
    "eventos": null,
    "patrocinadores": null
  },
  {
    "super_id": "fe2de405-c38e-4c90-ac52-da0540dfb4ef",
    "nombre": "Gamora",
    "edad": 22,
    "image_link": "https://static.wikia.nocookie.net/marveldatabase/images/4/43/Gamora_%28Earth-199999%29_from_Guardians_of_the_Galaxy_%28film%29_poster_002.jpg/revision/latest?cb=20140720030528",
    "rol_super": "Heroe",
    "relaciones": "Hijo de thanos",
    "origen": "Titán",
    "rasgosSuper": [
      {
        "rasgo_super_id": "589aad04-1418-4679-8f5f-6b769db497de",
        "rasgo_id": "d4687a08-ba31-48b3-91ea-af2f56e80daf",
        "super_id": "fe2de405-c38e-4c90-ac52-da0540dfb4ef",
        "rasgo": {
          "rasgo_id": "d4687a08-ba31-48b3-91ea-af2f56e80daf",
          "titulo": "Superfuerza",
          "tipo_rasgo": "Habilidad"
        }
      },
      {
        "rasgo_super_id": "cb8cf598-330b-41c6-a3bb-96a0420faf0c",
        "rasgo_id": "99b18b03-4452-42e7-93b5-4afb733d4865",
        "super_id": "fe2de405-c38e-4c90-ac52-da0540dfb4ef",
        "rasgo": {
          "rasgo_id": "99b18b03-4452-42e7-93b5-4afb733d4865",
          "titulo": "Tiempo",
          "tipo_rasgo": "Habilidad"
        }
      },
      {
        "rasgo_super_id": "f20d35fd-a378-49f4-86e7-3861f6a75e11",
        "rasgo_id": "60cb6ca1-ee8e-4d32-abbb-80c031424743",
        "super_id": "fe2de405-c38e-4c90-ac52-da0540dfb4ef",
        "rasgo": {
          "rasgo_id": "60cb6ca1-ee8e-4d32-abbb-80c031424743",
          "titulo": "Velocidad",
          "tipo_rasgo": "Habilidad"
        }
      }
    ],
    "eventos": null,
    "patrocinadores": null
  },
  {
    "super_id": "37c2b061-9924-4595-8deb-f1c7f02c9bca",
    "nombre": "Thanos",
    "edad": 40,
    "image_link": "https://static.wikia.nocookie.net/marveldatabase/images/b/bc/Thanos_%28Earth-199999%29_from_Avengers_Infinity_War_-_The_Official_Movie_Special_001.jpg/revision/latest?cb=20180501065444",
    "rol_super": "Villano",
    "relaciones": "Hijo de eternos",
    "origen": "Titán",
    "rasgosSuper": [],
    "eventos": null,
    "patrocinadores": null
  },
  {
    "super_id": "a522fa66-5552-4896-ad88-5f2557b3a6cc",
    "nombre": "Loki",
    "edad": 15,
    "image_link": "https://phantom-marca.unidadeditorial.es/456c64c083e34bd2601f7bb200f3447b/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/07/16230600360752.jpg",
    "rol_super": "Villano",
    "relaciones": "Hijo de eternos",
    "origen": "Titán",
    "rasgosSuper": [
      {
        "rasgo_super_id": "3f95e714-aaa5-4487-a256-c87f4845c7fa",
        "rasgo_id": "408e38ad-1fd5-4dc9-a534-3ad44e7017b5",
        "super_id": "a522fa66-5552-4896-ad88-5f2557b3a6cc",
        "rasgo": {
          "rasgo_id": "408e38ad-1fd5-4dc9-a534-3ad44e7017b5",
          "titulo": "Sylvie",
          "tipo_rasgo": "Debilidad"
        }
      },
      {
        "rasgo_super_id": "e58662c7-5df8-4e5e-9d84-09c13c0206d7",
        "rasgo_id": "45607d43-0d3d-4637-897d-8782e712df97",
        "super_id": "a522fa66-5552-4896-ad88-5f2557b3a6cc",
        "rasgo": {
          "rasgo_id": "45607d43-0d3d-4637-897d-8782e712df97",
          "titulo": "Ilusiones",
          "tipo_rasgo": "Habilidad"
        }
      }
    ],
    "eventos": null,
    "patrocinadores": null
  }
]

export const heroes   = data.filter((dato)=>dato.rol_super !== 'Villano')
export const villanos = data.filter((dato)=>dato.rol_super !== 'Heroe')

