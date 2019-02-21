const express = require('express');
const router  = express.Router();

router.get('/api/countries', (req, res, next) => {
  // // What we should do
  // Country.find()
  //   .then(countries => {
  //     res.json(countries)
  //   })

  res.json([
    {
        "name": {
            "common": "Aruba",
            "official": "Aruba",
            "native": {
                "nld": {
                    "official": "Aruba",
                    "common": "Aruba"
                },
                "pap": {
                    "official": "Aruba",
                    "common": "Aruba"
                }
            }
        },
        "tld": [
            ".aw"
        ],
        "cca2": "AW",
        "ccn3": "533",
        "cca3": "ABW",
        "cioc": "ARU",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "AWG"
        ],
        "callingCode": [
            "297"
        ],
        "capital": [
            "Oranjestad"
        ],
        "altSpellings": [
            "AW"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "nld": "Dutch",
            "pap": "Papiamento"
        },
        "translations": {
            "ces": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "deu": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "fra": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "hrv": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "ita": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "jpn": {
                "official": "アルバ",
                "common": "アルバ"
            },
            "nld": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "por": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "rus": {
                "official": "Аруба",
                "common": "Аруба"
            },
            "slk": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "spa": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "fin": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "est": {
                "official": "Aruba",
                "common": "Aruba"
            },
            "zho": {
                "official": "阿鲁巴",
                "common": "阿鲁巴"
            },
            "pol": {
                "official": "Aruba",
                "common": "Aruba"
            }
        },
        "latlng": [
            12.5,
            -69.96666666
        ],
        "demonym": "Aruban",
        "landlocked": false,
        "borders": [],
        "area": 180,
        "flag": "🇦🇼"
    },
    {
        "name": {
            "common": "Afghanistan",
            "official": "Islamic Republic of Afghanistan",
            "native": {
                "prs": {
                    "official": "جمهوری اسلامی افغانستان",
                    "common": "افغانستان"
                },
                "pus": {
                    "official": "د افغانستان اسلامي جمهوریت",
                    "common": "افغانستان"
                },
                "tuk": {
                    "official": "Owganystan Yslam Respublikasy",
                    "common": "Owganystan"
                }
            }
        },
        "tld": [
            ".af"
        ],
        "cca2": "AF",
        "ccn3": "004",
        "cca3": "AFG",
        "cioc": "AFG",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AFN"
        ],
        "callingCode": [
            "93"
        ],
        "capital": [
            "Kabul"
        ],
        "altSpellings": [
            "AF",
            "Afġānistān"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "prs": "Dari",
            "pus": "Pashto",
            "tuk": "Turkmen"
        },
        "translations": {
            "ces": {
                "official": "Afghánská islámská republika",
                "common": "Afghánistán"
            },
            "cym": {
                "official": "Gweriniaeth Islamaidd Affganistan",
                "common": "Affganistan"
            },
            "deu": {
                "official": "Islamische Republik Afghanistan",
                "common": "Afghanistan"
            },
            "fra": {
                "official": "République islamique d'Afghanistan",
                "common": "Afghanistan"
            },
            "hrv": {
                "official": "Islamska Republika Afganistan",
                "common": "Afganistan"
            },
            "ita": {
                "official": "Repubblica islamica dell'Afghanistan",
                "common": "Afghanistan"
            },
            "jpn": {
                "official": "アフガニスタン·イスラム共和国",
                "common": "アフガニスタン"
            },
            "nld": {
                "official": "Islamitische Republiek Afghanistan",
                "common": "Afghanistan"
            },
            "por": {
                "official": "República Islâmica do Afeganistão",
                "common": "Afeganistão"
            },
            "rus": {
                "official": "Исламская Республика Афганистан",
                "common": "Афганистан"
            },
            "slk": {
                "official": "Afgánsky islamský štát",
                "common": "Afganistan"
            },
            "spa": {
                "official": "República Islámica de Afganistán",
                "common": "Afganistán"
            },
            "fin": {
                "official": "Afganistanin islamilainen tasavalta",
                "common": "Afganistan"
            },
            "est": {
                "official": "Afganistani Islamivabariik",
                "common": "Afganistan"
            },
            "zho": {
                "official": "阿富汗伊斯兰共和国",
                "common": "阿富汗"
            },
            "pol": {
                "official": "Islamska Republika Afganistanu",
                "common": "Afganistan"
            }
        },
        "latlng": [
            33,
            65
        ],
        "demonym": "Afghan",
        "landlocked": true,
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ],
        "area": 652230,
        "flag": "🇦🇫"
    },
    {
        "name": {
            "common": "Angola",
            "official": "Republic of Angola",
            "native": {
                "por": {
                    "official": "República de Angola",
                    "common": "Angola"
                }
            }
        },
        "tld": [
            ".ao"
        ],
        "cca2": "AO",
        "ccn3": "024",
        "cca3": "AGO",
        "cioc": "ANG",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AOA"
        ],
        "callingCode": [
            "244"
        ],
        "capital": [
            "Luanda"
        ],
        "altSpellings": [
            "AO",
            "República de Angola",
            "ʁɛpublika de an'ɡɔla"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "ces": {
                "official": "Angolská republika",
                "common": "Angola"
            },
            "cym": {
                "official": "Gweriniaeth Angola",
                "common": "Angola"
            },
            "deu": {
                "official": "Republik Angola",
                "common": "Angola"
            },
            "fra": {
                "official": "République d'Angola",
                "common": "Angola"
            },
            "hrv": {
                "official": "Republika Angola",
                "common": "Angola"
            },
            "ita": {
                "official": "Repubblica dell'Angola",
                "common": "Angola"
            },
            "jpn": {
                "official": "アンゴラ共和国",
                "common": "アンゴラ"
            },
            "nld": {
                "official": "Republiek Angola",
                "common": "Angola"
            },
            "por": {
                "official": "República de Angola",
                "common": "Angola"
            },
            "rus": {
                "official": "Республика Ангола",
                "common": "Ангола"
            },
            "slk": {
                "official": "Angolská republika",
                "common": "Angola"
            },
            "spa": {
                "official": "República de Angola",
                "common": "Angola"
            },
            "fin": {
                "official": "Angolan tasavalta",
                "common": "Angola"
            },
            "est": {
                "official": "Angola Vabariik",
                "common": "Angola"
            },
            "zho": {
                "official": "安哥拉共和国",
                "common": "安哥拉"
            },
            "pol": {
                "official": "Republika Angoli",
                "common": "Angola"
            }
        },
        "latlng": [
            -12.5,
            18.5
        ],
        "demonym": "Angolan",
        "landlocked": false,
        "borders": [
            "COG",
            "COD",
            "ZMB",
            "NAM"
        ],
        "area": 1246700,
        "flag": "🇦🇴"
    },
    {
        "name": {
            "common": "Anguilla",
            "official": "Anguilla",
            "native": {
                "eng": {
                    "official": "Anguilla",
                    "common": "Anguilla"
                }
            }
        },
        "tld": [
            ".ai"
        ],
        "cca2": "AI",
        "ccn3": "660",
        "cca3": "AIA",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1264"
        ],
        "capital": [
            "The Valley"
        ],
        "altSpellings": [
            "AI"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "deu": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "fra": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "hrv": {
                "official": "Anguilla",
                "common": "Angvila"
            },
            "ita": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "jpn": {
                "official": "アングィラ",
                "common": "アンギラ"
            },
            "nld": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "por": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "rus": {
                "official": "Ангилья",
                "common": "Ангилья"
            },
            "slk": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "spa": {
                "official": "Anguila",
                "common": "Anguilla"
            },
            "fin": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "est": {
                "official": "Anguilla",
                "common": "Anguilla"
            },
            "zho": {
                "official": "安圭拉",
                "common": "安圭拉"
            },
            "pol": {
                "official": "Anguilla",
                "common": "Anguilla"
            }
        },
        "latlng": [
            18.25,
            -63.16666666
        ],
        "demonym": "Anguillian",
        "landlocked": false,
        "borders": [],
        "area": 91,
        "flag": "🇦🇮"
    },
    {
        "name": {
            "common": "Åland Islands",
            "official": "Åland Islands",
            "native": {
                "swe": {
                    "official": "Landskapet Åland",
                    "common": "Åland"
                }
            }
        },
        "tld": [
            ".ax"
        ],
        "cca2": "AX",
        "ccn3": "248",
        "cca3": "ALA",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "358"
        ],
        "capital": [
            "Mariehamn"
        ],
        "altSpellings": [
            "AX",
            "Aaland",
            "Aland",
            "Ahvenanmaa"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "swe": "Swedish"
        },
        "translations": {
            "ces": {
                "official": "Ålandské ostrovy",
                "common": "Ålandy"
            },
            "deu": {
                "official": "Åland-Inseln",
                "common": "Åland"
            },
            "fra": {
                "official": "Ahvenanmaa",
                "common": "Ahvenanmaa"
            },
            "hrv": {
                "official": "Aland Islands",
                "common": "Ålandski otoci"
            },
            "ita": {
                "official": "Isole Åland",
                "common": "Isole Aland"
            },
            "jpn": {
                "official": "オーランド諸島",
                "common": "オーランド諸島"
            },
            "nld": {
                "official": "Åland eilanden",
                "common": "Ålandeilanden"
            },
            "por": {
                "official": "Ilhas Åland",
                "common": "Alândia"
            },
            "rus": {
                "official": "Аландские острова",
                "common": "Аландские острова"
            },
            "slk": {
                "official": "Alandské ostrovy",
                "common": "Alandy"
            },
            "spa": {
                "official": "Islas Åland",
                "common": "Alandia"
            },
            "fin": {
                "official": "Ahvenanmaan maakunta",
                "common": "Ahvenanmaa"
            },
            "est": {
                "official": "Ahvenamaa maakond",
                "common": "Ahvenamaa"
            },
            "zho": {
                "official": "奥兰群岛",
                "common": "奥兰群岛"
            },
            "pol": {
                "official": "Wyspy Alandzkie",
                "common": "Wyspy Alandzkie"
            }
        },
        "latlng": [
            60.116667,
            19.9
        ],
        "demonym": "Ålandish",
        "landlocked": false,
        "borders": [],
        "area": 1580,
        "flag": "🇦🇽"
    },
    {
        "name": {
            "common": "Albania",
            "official": "Republic of Albania",
            "native": {
                "sqi": {
                    "official": "Republika e Shqipërisë",
                    "common": "Shqipëria"
                }
            }
        },
        "tld": [
            ".al"
        ],
        "cca2": "AL",
        "ccn3": "008",
        "cca3": "ALB",
        "cioc": "ALB",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ALL"
        ],
        "callingCode": [
            "355"
        ],
        "capital": [
            "Tirana"
        ],
        "altSpellings": [
            "AL",
            "Shqipëri",
            "Shqipëria",
            "Shqipnia"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "sqi": "Albanian"
        },
        "translations": {
            "ces": {
                "official": "Albánská republika",
                "common": "Albánie"
            },
            "cym": {
                "official": "Gweriniaeth Albania",
                "common": "Albania"
            },
            "deu": {
                "official": "Republik Albanien",
                "common": "Albanien"
            },
            "fra": {
                "official": "République d'Albanie",
                "common": "Albanie"
            },
            "hrv": {
                "official": "Republika Albanija",
                "common": "Albanija"
            },
            "ita": {
                "official": "Repubblica d'Albania",
                "common": "Albania"
            },
            "jpn": {
                "official": "アルバニア共和国",
                "common": "アルバニア"
            },
            "nld": {
                "official": "Republiek Albanië",
                "common": "Albanië"
            },
            "por": {
                "official": "República da Albânia",
                "common": "Albânia"
            },
            "rus": {
                "official": "Республика Албания",
                "common": "Албания"
            },
            "slk": {
                "official": "Albánska republika",
                "common": "Albánsko"
            },
            "spa": {
                "official": "República de Albania",
                "common": "Albania"
            },
            "fin": {
                "official": "Albanian tasavalta",
                "common": "Albania"
            },
            "est": {
                "official": "Albaania Vabariik",
                "common": "Albaania"
            },
            "zho": {
                "official": "阿尔巴尼亚共和国",
                "common": "阿尔巴尼亚"
            },
            "pol": {
                "official": "Republika Albanii",
                "common": "Albania"
            }
        },
        "latlng": [
            41,
            20
        ],
        "demonym": "Albanian",
        "landlocked": false,
        "borders": [
            "MNE",
            "GRC",
            "MKD",
            "UNK"
        ],
        "area": 28748,
        "flag": "🇦🇱"
    },
    {
        "name": {
            "common": "Andorra",
            "official": "Principality of Andorra",
            "native": {
                "cat": {
                    "official": "Principat d'Andorra",
                    "common": "Andorra"
                }
            }
        },
        "tld": [
            ".ad"
        ],
        "cca2": "AD",
        "ccn3": "020",
        "cca3": "AND",
        "cioc": "AND",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "376"
        ],
        "capital": [
            "Andorra la Vella"
        ],
        "altSpellings": [
            "AD",
            "Principality of Andorra",
            "Principat d'Andorra"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "cat": "Catalan"
        },
        "translations": {
            "ces": {
                "official": "Andorrské knížectví",
                "common": "Andorra"
            },
            "cym": {
                "official": "Tywysogaeth Andorra",
                "common": "Andorra"
            },
            "deu": {
                "official": "Fürstentum Andorra",
                "common": "Andorra"
            },
            "fra": {
                "official": "Principauté d'Andorre",
                "common": "Andorre"
            },
            "hrv": {
                "official": "Kneževina Andora",
                "common": "Andora"
            },
            "ita": {
                "official": "Principato di Andorra",
                "common": "Andorra"
            },
            "jpn": {
                "official": "アンドラ公国",
                "common": "アンドラ"
            },
            "nld": {
                "official": "Prinsdom Andorra",
                "common": "Andorra"
            },
            "por": {
                "official": "Principado de Andorra",
                "common": "Andorra"
            },
            "rus": {
                "official": "Княжество Андорра",
                "common": "Андорра"
            },
            "slk": {
                "official": "Andorrské kniežatstvo",
                "common": "Andorra"
            },
            "spa": {
                "official": "Principado de Andorra",
                "common": "Andorra"
            },
            "fin": {
                "official": "Andorran ruhtinaskunta",
                "common": "Andorra"
            },
            "est": {
                "official": "Andorra Vürstiriik",
                "common": "Andorra"
            },
            "zho": {
                "official": "安道尔公国",
                "common": "安道尔"
            },
            "pol": {
                "official": "Księstwo Andory",
                "common": "Andora"
            }
        },
        "latlng": [
            42.5,
            1.5
        ],
        "demonym": "Andorran",
        "landlocked": true,
        "borders": [
            "FRA",
            "ESP"
        ],
        "area": 468,
        "flag": "🇦🇩"
    },
    {
        "name": {
            "common": "United Arab Emirates",
            "official": "United Arab Emirates",
            "native": {
                "ara": {
                    "official": "الإمارات العربية المتحدة",
                    "common": "دولة الإمارات العربية المتحدة"
                }
            }
        },
        "tld": [
            ".ae",
            "امارات."
        ],
        "cca2": "AE",
        "ccn3": "784",
        "cca3": "ARE",
        "cioc": "UAE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AED"
        ],
        "callingCode": [
            "971"
        ],
        "capital": [
            "Abu Dhabi"
        ],
        "altSpellings": [
            "AE",
            "UAE",
            "Emirates"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Spojené arabské emiráty",
                "common": "Spojené arabské emiráty"
            },
            "deu": {
                "official": "Vereinigte Arabische Emirate",
                "common": "Vereinigte Arabische Emirate"
            },
            "fra": {
                "official": "Émirats arabes unis",
                "common": "Émirats arabes unis"
            },
            "hrv": {
                "official": "Ujedinjeni Arapski Emirati",
                "common": "Ujedinjeni Arapski Emirati"
            },
            "ita": {
                "official": "Emirati Arabi Uniti",
                "common": "Emirati Arabi Uniti"
            },
            "jpn": {
                "official": "アラブ首長国連邦",
                "common": "アラブ首長国連邦"
            },
            "nld": {
                "official": "Verenigde Arabische Emiraten",
                "common": "Verenigde Arabische Emiraten"
            },
            "por": {
                "official": "Emirados Árabes Unidos",
                "common": "Emirados Árabes Unidos"
            },
            "rus": {
                "official": "Объединенные Арабские Эмираты",
                "common": "Объединённые Арабские Эмираты"
            },
            "slk": {
                "official": "Spojené arabské emiráty",
                "common": "Spojené arabské emiráty"
            },
            "spa": {
                "official": "Emiratos Árabes Unidos",
                "common": "Emiratos Árabes Unidos"
            },
            "fin": {
                "official": "Yhdistyneet arabiemiirikunnat",
                "common": "Arabiemiraatit"
            },
            "est": {
                "official": "Araabia Ühendemiraadid",
                "common": "Araabia Ühendemiraadid"
            },
            "zho": {
                "official": "阿拉伯联合酋长国",
                "common": "阿拉伯联合酋长国"
            },
            "pol": {
                "official": "Zjednoczone Emiraty Arabskie",
                "common": "Zjednoczone Emiraty Arabskie"
            }
        },
        "latlng": [
            24,
            54
        ],
        "demonym": "Emirati",
        "landlocked": false,
        "borders": [
            "OMN",
            "SAU"
        ],
        "area": 83600,
        "flag": "🇦🇪"
    },
    {
        "name": {
            "common": "Argentina",
            "official": "Argentine Republic",
            "native": {
                "grn": {
                    "official": "Argentine Republic",
                    "common": "Argentina"
                },
                "spa": {
                    "official": "República Argentina",
                    "common": "Argentina"
                }
            }
        },
        "tld": [
            ".ar"
        ],
        "cca2": "AR",
        "ccn3": "032",
        "cca3": "ARG",
        "cioc": "ARG",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ARS"
        ],
        "callingCode": [
            "54"
        ],
        "capital": [
            "Buenos Aires"
        ],
        "altSpellings": [
            "AR",
            "Argentine Republic",
            "República Argentina"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "grn": "Guaraní",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Argentinská republika",
                "common": "Argentina"
            },
            "cym": {
                "official": "Gweriniaeth yr Ariannin",
                "common": "Ariannin"
            },
            "deu": {
                "official": "Argentinische Republik",
                "common": "Argentinien"
            },
            "fra": {
                "official": "République argentine",
                "common": "Argentine"
            },
            "hrv": {
                "official": "Argentinski Republika",
                "common": "Argentina"
            },
            "ita": {
                "official": "Repubblica Argentina",
                "common": "Argentina"
            },
            "jpn": {
                "official": "アルゼンチン共和国",
                "common": "アルゼンチン"
            },
            "nld": {
                "official": "Argentijnse Republiek",
                "common": "Argentinië"
            },
            "por": {
                "official": "República Argentina",
                "common": "Argentina"
            },
            "rus": {
                "official": "Аргентинская Республика",
                "common": "Аргентина"
            },
            "slk": {
                "official": "Argentínska republika",
                "common": "Argentína"
            },
            "spa": {
                "official": "República Argentina",
                "common": "Argentina"
            },
            "fin": {
                "official": "Argentiinan tasavalta",
                "common": "Argentiina"
            },
            "est": {
                "official": "Argentina Vabariik",
                "common": "Argentina"
            },
            "zho": {
                "official": "阿根廷共和国",
                "common": "阿根廷"
            },
            "pol": {
                "official": "Republika Argentyńska",
                "common": "Argentyna"
            }
        },
        "latlng": [
            -34,
            -64
        ],
        "demonym": "Argentine",
        "landlocked": false,
        "borders": [
            "BOL",
            "BRA",
            "CHL",
            "PRY",
            "URY"
        ],
        "area": 2780400,
        "flag": "🇦🇷"
    },
    {
        "name": {
            "common": "Armenia",
            "official": "Republic of Armenia",
            "native": {
                "hye": {
                    "official": "Հայաստանի Հանրապետություն",
                    "common": "Հայաստան"
                }
            }
        },
        "tld": [
            ".am"
        ],
        "cca2": "AM",
        "ccn3": "051",
        "cca3": "ARM",
        "cioc": "ARM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AMD"
        ],
        "callingCode": [
            "374"
        ],
        "capital": [
            "Yerevan"
        ],
        "altSpellings": [
            "AM",
            "Hayastan",
            "Republic of Armenia",
            "Հայաստանի Հանրապետություն"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "hye": "Armenian"
        },
        "translations": {
            "ces": {
                "official": "Arménská republika",
                "common": "Arménie"
            },
            "cym": {
                "official": "Gweriniaeth Armenia",
                "common": "Armenia"
            },
            "deu": {
                "official": "Republik Armenien",
                "common": "Armenien"
            },
            "fra": {
                "official": "République d'Arménie",
                "common": "Arménie"
            },
            "hrv": {
                "official": "Republika Armenija",
                "common": "Armenija"
            },
            "ita": {
                "official": "Repubblica di Armenia",
                "common": "Armenia"
            },
            "jpn": {
                "official": "アルメニア共和国",
                "common": "アルメニア"
            },
            "nld": {
                "official": "Republiek Armenië",
                "common": "Armenië"
            },
            "por": {
                "official": "República da Arménia",
                "common": "Arménia"
            },
            "rus": {
                "official": "Республика Армения",
                "common": "Армения"
            },
            "slk": {
                "official": "Arménska republika",
                "common": "Arménsko"
            },
            "spa": {
                "official": "República de Armenia",
                "common": "Armenia"
            },
            "fin": {
                "official": "Armenian tasavalta",
                "common": "Armenia"
            },
            "est": {
                "official": "Armeenia Vabariik",
                "common": "Armeenia"
            },
            "zho": {
                "official": "亚美尼亚共和国",
                "common": "亚美尼亚"
            },
            "pol": {
                "official": "Republika Armenii",
                "common": "Armenia"
            }
        },
        "latlng": [
            40,
            45
        ],
        "demonym": "Armenian",
        "landlocked": true,
        "borders": [
            "AZE",
            "GEO",
            "IRN",
            "TUR"
        ],
        "area": 29743,
        "flag": "🇦🇲"
    },
    {
        "name": {
            "common": "American Samoa",
            "official": "American Samoa",
            "native": {
                "eng": {
                    "official": "American Samoa",
                    "common": "American Samoa"
                },
                "smo": {
                    "official": "Sāmoa Amelika",
                    "common": "Sāmoa Amelika"
                }
            }
        },
        "tld": [
            ".as"
        ],
        "cca2": "AS",
        "ccn3": "016",
        "cca3": "ASM",
        "cioc": "ASA",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1684"
        ],
        "capital": [
            "Pago Pago"
        ],
        "altSpellings": [
            "AS",
            "Amerika Sāmoa",
            "Amelika Sāmoa",
            "Sāmoa Amelika"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "smo": "Samoan"
        },
        "translations": {
            "ces": {
                "official": "Americká Samoa",
                "common": "Americká Samoa"
            },
            "deu": {
                "official": "Amerikanisch-Samoa",
                "common": "Amerikanisch-Samoa"
            },
            "fra": {
                "official": "Samoa américaines",
                "common": "Samoa américaines"
            },
            "hrv": {
                "official": "američka Samoa",
                "common": "Američka Samoa"
            },
            "ita": {
                "official": "Samoa americane",
                "common": "Samoa Americane"
            },
            "jpn": {
                "official": "米サモア",
                "common": "アメリカ領サモア"
            },
            "nld": {
                "official": "Amerikaans Samoa",
                "common": "Amerikaans Samoa"
            },
            "por": {
                "official": "Samoa americana",
                "common": "Samoa Americana"
            },
            "rus": {
                "official": "американское Самоа",
                "common": "Американское Самоа"
            },
            "slk": {
                "official": "Americká Samoa",
                "common": "Americká Samoa"
            },
            "spa": {
                "official": "Samoa Americana",
                "common": "Samoa Americana"
            },
            "fin": {
                "official": "Amerikan Samoa",
                "common": "Amerikan Samoa"
            },
            "est": {
                "official": "Ameerika Samoa",
                "common": "Ameerika Samoa"
            },
            "zho": {
                "official": "美属萨摩亚",
                "common": "美属萨摩亚"
            },
            "pol": {
                "official": "Samoa Amerykańskie",
                "common": "Samoa Amerykańskie"
            }
        },
        "latlng": [
            -14.33333333,
            -170
        ],
        "demonym": "American Samoan",
        "landlocked": false,
        "borders": [],
        "area": 199,
        "flag": "🇦🇸"
    },
    {
        "name": {
            "common": "Antarctica",
            "official": "Antarctica",
            "native": {}
        },
        "tld": [
            ".aq"
        ],
        "cca2": "AQ",
        "ccn3": "010",
        "cca3": "ATA",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [],
        "callingCode": [],
        "capital": [
            ""
        ],
        "altSpellings": [
            "AQ"
        ],
        "region": "Antarctic",
        "subregion": "",
        "languages": {},
        "translations": {
            "ces": {
                "official": "Antarktida",
                "common": "Antarktida"
            },
            "cym": {
                "official": "Yr Antarctig",
                "common": "Yr Antarctig"
            },
            "deu": {
                "official": "Antarktika",
                "common": "Antarktis"
            },
            "fra": {
                "official": "Antarctique",
                "common": "Antarctique"
            },
            "hrv": {
                "official": "Antarktika",
                "common": "Antarktika"
            },
            "ita": {
                "official": "Antartide",
                "common": "Antartide"
            },
            "jpn": {
                "official": "南極大陸",
                "common": "南極"
            },
            "nld": {
                "official": "Antarctica",
                "common": "Antarctica"
            },
            "por": {
                "official": "Antártica",
                "common": "Antártida"
            },
            "rus": {
                "official": "Антарктида",
                "common": "Антарктида"
            },
            "slk": {
                "official": "Antarktída",
                "common": "Antarktída"
            },
            "spa": {
                "official": "Antártida",
                "common": "Antártida"
            },
            "fin": {
                "official": "Etelämanner",
                "common": "Etelämanner"
            },
            "est": {
                "official": "Antarktika",
                "common": "Antarktika"
            },
            "zho": {
                "official": "南极洲",
                "common": "南极洲"
            },
            "pol": {
                "official": "Antarktyka",
                "common": "Antarktyka"
            }
        },
        "latlng": [
            -90,
            0
        ],
        "demonym": "Antarctican",
        "landlocked": false,
        "borders": [],
        "area": 14000000,
        "flag": "🇦🇶"
    },
    {
        "name": {
            "common": "French Southern and Antarctic Lands",
            "official": "Territory of the French Southern and Antarctic Lands",
            "native": {
                "fra": {
                    "official": "Territoire des Terres australes et antarctiques françaises",
                    "common": "Terres australes et antarctiques françaises"
                }
            }
        },
        "tld": [
            ".tf"
        ],
        "cca2": "TF",
        "ccn3": "260",
        "cca3": "ATF",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [],
        "capital": [
            "Port-aux-Français"
        ],
        "altSpellings": [
            "TF",
            "French Southern Territories"
        ],
        "region": "Antarctic",
        "subregion": "",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Teritorium Francouzská jižní a antarktická území",
                "common": "Francouzská jižní a antarktická území"
            },
            "deu": {
                "official": "Gebiet der Französisch Süd- und Antarktisgebiete",
                "common": "Französische Süd- und Antarktisgebiete"
            },
            "fra": {
                "official": "Territoire des Terres australes et antarctiques françaises",
                "common": "Terres australes et antarctiques françaises"
            },
            "hrv": {
                "official": "Teritoriju Francuski južni i antarktički teritoriji",
                "common": "Francuski južni i antarktički teritoriji"
            },
            "ita": {
                "official": "Territorio della australi e antartiche francesi Terre",
                "common": "Territori Francesi del Sud"
            },
            "jpn": {
                "official": "フランス領南方·南極地域の領土",
                "common": "フランス領南方・南極地域"
            },
            "nld": {
                "official": "Grondgebied van de Franse Zuidelijke en Antarctische gebieden",
                "common": "Franse Gebieden in de zuidelijke Indische Oceaan"
            },
            "por": {
                "official": "Território do Sul e Antártica Francesa",
                "common": "Terras Austrais e Antárticas Francesas"
            },
            "rus": {
                "official": "Территория Французские Южные и Антарктические земли",
                "common": "Французские Южные и Антарктические территории"
            },
            "slk": {
                "official": "Francúzske južné a antarktické územia",
                "common": "Francúzske juŽné a antarktické územia"
            },
            "spa": {
                "official": "Territorio del Francés Tierras australes y antárticas",
                "common": "Tierras Australes y Antárticas Francesas"
            },
            "fin": {
                "official": "Ranskan eteläiset ja antarktiset alueet",
                "common": "Ranskan eteläiset ja antarktiset alueet"
            },
            "est": {
                "official": "Prantsuse Lõunaalad",
                "common": "Prantsuse Lõunaalad"
            },
            "zho": {
                "official": "法国南部和南极土地",
                "common": "法国南部和南极土地"
            },
            "pol": {
                "official": "Francuskie Terytoria Południowe i Antarktyczne",
                "common": "Francuskie Terytoria Południowe i Antarktyczne"
            }
        },
        "latlng": [
            -49.25,
            69.167
        ],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 7747,
        "flag": "🇹🇫"
    },
    {
        "name": {
            "common": "Antigua and Barbuda",
            "official": "Antigua and Barbuda",
            "native": {
                "eng": {
                    "official": "Antigua and Barbuda",
                    "common": "Antigua and Barbuda"
                }
            }
        },
        "tld": [
            ".ag"
        ],
        "cca2": "AG",
        "ccn3": "028",
        "cca3": "ATG",
        "cioc": "ANT",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1268"
        ],
        "capital": [
            "Saint John's"
        ],
        "altSpellings": [
            "AG"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Antigua a Barbuda",
                "common": "Antigua a Barbuda"
            },
            "cym": {
                "official": "Antigwa a Barbiwda",
                "common": "Antigwa a Barbiwda"
            },
            "deu": {
                "official": "Antigua und Barbuda",
                "common": "Antigua und Barbuda"
            },
            "fra": {
                "official": "Antigua -et-Barbuda",
                "common": "Antigua-et-Barbuda"
            },
            "hrv": {
                "official": "Antigva i Barbuda",
                "common": "Antigva i Barbuda"
            },
            "ita": {
                "official": "Antigua e Barbuda",
                "common": "Antigua e Barbuda"
            },
            "jpn": {
                "official": "アンチグアバーブーダ",
                "common": "アンティグア・バーブーダ"
            },
            "nld": {
                "official": "Antigua en Barbuda",
                "common": "Antigua en Barbuda"
            },
            "por": {
                "official": "Antigua e Barbuda",
                "common": "Antígua e Barbuda"
            },
            "rus": {
                "official": "Антигуа и Барбуда",
                "common": "Антигуа и Барбуда"
            },
            "slk": {
                "official": "Antigua a Barbuda",
                "common": "Antigua a Barbuda"
            },
            "spa": {
                "official": "Antigua y Barbuda",
                "common": "Antigua y Barbuda"
            },
            "fin": {
                "official": "Antigua ja Barbuda",
                "common": "Antigua ja Barbuda"
            },
            "est": {
                "official": "Antigua ja Barbuda",
                "common": "Antigua ja Barbuda"
            },
            "zho": {
                "official": "安提瓜和巴布达",
                "common": "安提瓜和巴布达"
            },
            "pol": {
                "official": "Antigua i Barbuda",
                "common": "Antigua i Barbuda"
            }
        },
        "latlng": [
            17.05,
            -61.8
        ],
        "demonym": "Antiguan, Barbudan",
        "landlocked": false,
        "borders": [],
        "area": 442,
        "flag": "🇦🇬"
    },
    {
        "name": {
            "common": "Australia",
            "official": "Commonwealth of Australia",
            "native": {
                "eng": {
                    "official": "Commonwealth of Australia",
                    "common": "Australia"
                }
            }
        },
        "tld": [
            ".au"
        ],
        "cca2": "AU",
        "ccn3": "036",
        "cca3": "AUS",
        "cioc": "AUS",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [
            "61"
        ],
        "capital": [
            "Canberra"
        ],
        "altSpellings": [
            "AU"
        ],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Australské společenství",
                "common": "Austrálie"
            },
            "cym": {
                "official": "Cymanwlad Awstralia",
                "common": "Awstralia"
            },
            "deu": {
                "official": "Commonwealth Australien",
                "common": "Australien"
            },
            "fra": {
                "official": "Australie",
                "common": "Australie"
            },
            "hrv": {
                "official": "Commonwealth of Australia",
                "common": "Australija"
            },
            "ita": {
                "official": "Commonwealth dell'Australia",
                "common": "Australia"
            },
            "jpn": {
                "official": "オーストラリア連邦",
                "common": "オーストラリア"
            },
            "nld": {
                "official": "Gemenebest van Australië",
                "common": "Australië"
            },
            "por": {
                "official": "Comunidade da Austrália",
                "common": "Austrália"
            },
            "rus": {
                "official": "Содружество Австралии",
                "common": "Австралия"
            },
            "slk": {
                "official": "Austrálsky zväz",
                "common": "Austrália"
            },
            "spa": {
                "official": "Mancomunidad de Australia",
                "common": "Australia"
            },
            "fin": {
                "official": "Australian liittovaltio",
                "common": "Australia"
            },
            "est": {
                "official": "Austraalia Ühendus",
                "common": "Austraalia"
            },
            "zho": {
                "official": "澳大利亚联邦",
                "common": "澳大利亚"
            },
            "pol": {
                "official": "Związek Australijski",
                "common": "Australia"
            }
        },
        "latlng": [
            -27,
            133
        ],
        "demonym": "Australian",
        "landlocked": false,
        "borders": [],
        "area": 7692024,
        "flag": "🇦🇺"
    },
    {
        "name": {
            "common": "Austria",
            "official": "Republic of Austria",
            "native": {
                "bar": {
                    "official": "Republik Österreich",
                    "common": "Österreich"
                }
            }
        },
        "tld": [
            ".at"
        ],
        "cca2": "AT",
        "ccn3": "040",
        "cca3": "AUT",
        "cioc": "AUT",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "43"
        ],
        "capital": [
            "Vienna"
        ],
        "altSpellings": [
            "AT",
            "Osterreich",
            "Oesterreich"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "bar": "Austro-Bavarian German"
        },
        "translations": {
            "ces": {
                "official": "Rakouská republika",
                "common": "Rakousko"
            },
            "cym": {
                "official": "Gweriniaeth Awstria",
                "common": "Awstria"
            },
            "deu": {
                "official": "Republik Österreich",
                "common": "Österreich"
            },
            "fra": {
                "official": "République d'Autriche",
                "common": "Autriche"
            },
            "hrv": {
                "official": "Republika Austrija",
                "common": "Austrija"
            },
            "ita": {
                "official": "Repubblica d'Austria",
                "common": "Austria"
            },
            "jpn": {
                "official": "オーストリア共和国",
                "common": "オーストリア"
            },
            "nld": {
                "official": "Republiek Oostenrijk",
                "common": "Oostenrijk"
            },
            "por": {
                "official": "República da Áustria",
                "common": "Áustria"
            },
            "rus": {
                "official": "Австрийская Республика",
                "common": "Австрия"
            },
            "slk": {
                "official": "Rakúska republika",
                "common": "Rakúsko"
            },
            "spa": {
                "official": "República de Austria",
                "common": "Austria"
            },
            "fin": {
                "official": "Itävallan tasavalta",
                "common": "Itävalta"
            },
            "est": {
                "official": "Austria Vabariik",
                "common": "Austria"
            },
            "zho": {
                "official": "奥地利共和国",
                "common": "奥地利"
            },
            "pol": {
                "official": "Republika Austrii",
                "common": "Austria"
            }
        },
        "latlng": [
            47.33333333,
            13.33333333
        ],
        "demonym": "Austrian",
        "landlocked": true,
        "borders": [
            "CZE",
            "DEU",
            "HUN",
            "ITA",
            "LIE",
            "SVK",
            "SVN",
            "CHE"
        ],
        "area": 83871,
        "flag": "🇦🇹"
    },
    {
        "name": {
            "common": "Azerbaijan",
            "official": "Republic of Azerbaijan",
            "native": {
                "aze": {
                    "official": "Azərbaycan Respublikası",
                    "common": "Azərbaycan"
                },
                "rus": {
                    "official": "Азербайджанская Республика",
                    "common": "Азербайджан"
                }
            }
        },
        "tld": [
            ".az"
        ],
        "cca2": "AZ",
        "ccn3": "031",
        "cca3": "AZE",
        "cioc": "AZE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AZN"
        ],
        "callingCode": [
            "994"
        ],
        "capital": [
            "Baku"
        ],
        "altSpellings": [
            "AZ",
            "Republic of Azerbaijan",
            "Azərbaycan Respublikası"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "aze": "Azerbaijani",
            "rus": "Russian"
        },
        "translations": {
            "ces": {
                "official": "Ázerbájdžánská republika",
                "common": "Ázerbájdžán"
            },
            "cym": {
                "official": "Gweriniaeth Aserbaijan",
                "common": "Aserbaijan"
            },
            "deu": {
                "official": "Republik Aserbaidschan",
                "common": "Aserbaidschan"
            },
            "fra": {
                "official": "République d'Azerbaïdjan",
                "common": "Azerbaïdjan"
            },
            "hrv": {
                "official": "Republika Azerbajdžan",
                "common": "Azerbajdžan"
            },
            "ita": {
                "official": "Repubblica dell'Azerbaigian",
                "common": "Azerbaijan"
            },
            "jpn": {
                "official": "アゼルバイジャン共和国",
                "common": "アゼルバイジャン"
            },
            "nld": {
                "official": "Republiek Azerbeidzjan",
                "common": "Azerbeidzjan"
            },
            "por": {
                "official": "República do Azerbaijão",
                "common": "Azerbeijão"
            },
            "rus": {
                "official": "Азербайджанская Республика",
                "common": "Азербайджан"
            },
            "slk": {
                "official": "Azerbajǆanská republika",
                "common": "AzerbajǇan"
            },
            "spa": {
                "official": "República de Azerbaiyán",
                "common": "Azerbaiyán"
            },
            "fin": {
                "official": "Azerbaidzanin tasavalta",
                "common": "Azerbaidzan"
            },
            "est": {
                "official": "Aserbaidžaani Vabariik",
                "common": "Aserbaidžaan"
            },
            "zho": {
                "official": "阿塞拜疆共和国",
                "common": "阿塞拜疆"
            },
            "pol": {
                "official": "Republika Azerbejdżanu",
                "common": "Azerbejdżan"
            }
        },
        "latlng": [
            40.5,
            47.5
        ],
        "demonym": "Azerbaijani",
        "landlocked": true,
        "borders": [
            "ARM",
            "GEO",
            "IRN",
            "RUS",
            "TUR"
        ],
        "area": 86600,
        "flag": "🇦🇿"
    },
    {
        "name": {
            "common": "Burundi",
            "official": "Republic of Burundi",
            "native": {
                "fra": {
                    "official": "République du Burundi",
                    "common": "Burundi"
                },
                "run": {
                    "official": "Republika y'Uburundi ",
                    "common": "Uburundi"
                }
            }
        },
        "tld": [
            ".bi"
        ],
        "cca2": "BI",
        "ccn3": "108",
        "cca3": "BDI",
        "cioc": "BDI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BIF"
        ],
        "callingCode": [
            "257"
        ],
        "capital": [
            "Bujumbura"
        ],
        "altSpellings": [
            "BI",
            "Republic of Burundi",
            "Republika y'Uburundi",
            "République du Burundi"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French",
            "run": "Kirundi"
        },
        "translations": {
            "ces": {
                "official": "Burundská republika",
                "common": "Burundi"
            },
            "cym": {
                "official": "Gweriniaeth Bwrwndi",
                "common": "Bwrwndi"
            },
            "deu": {
                "official": "Republik Burundi",
                "common": "Burundi"
            },
            "fra": {
                "official": "République du Burundi",
                "common": "Burundi"
            },
            "hrv": {
                "official": "Burundi",
                "common": "Burundi"
            },
            "ita": {
                "official": "Repubblica del Burundi",
                "common": "Burundi"
            },
            "jpn": {
                "official": "ブルンジ共和国",
                "common": "ブルンジ"
            },
            "nld": {
                "official": "Republiek Burundi",
                "common": "Burundi"
            },
            "por": {
                "official": "República do Burundi",
                "common": "Burundi"
            },
            "rus": {
                "official": "Республика Бурунди",
                "common": "Бурунди"
            },
            "slk": {
                "official": "Burundská republika",
                "common": "Burundi"
            },
            "spa": {
                "official": "República de Burundi",
                "common": "Burundi"
            },
            "fin": {
                "official": "Burundin tasavalta",
                "common": "Burundi"
            },
            "est": {
                "official": "Burundi Vabariik",
                "common": "Burundi"
            },
            "zho": {
                "official": "布隆迪共和国",
                "common": "布隆迪"
            },
            "pol": {
                "official": "Republika Burundi",
                "common": "Burundi"
            }
        },
        "latlng": [
            -3.5,
            30
        ],
        "demonym": "Burundian",
        "landlocked": true,
        "borders": [
            "COD",
            "RWA",
            "TZA"
        ],
        "area": 27834,
        "flag": "🇧🇮"
    },
    {
        "name": {
            "common": "Belgium",
            "official": "Kingdom of Belgium",
            "native": {
                "deu": {
                    "official": "Königreich Belgien",
                    "common": "Belgien"
                },
                "fra": {
                    "official": "Royaume de Belgique",
                    "common": "Belgique"
                },
                "nld": {
                    "official": "Koninkrijk België",
                    "common": "België"
                }
            }
        },
        "tld": [
            ".be"
        ],
        "cca2": "BE",
        "ccn3": "056",
        "cca3": "BEL",
        "cioc": "BEL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "32"
        ],
        "capital": [
            "Brussels"
        ],
        "altSpellings": [
            "BE",
            "België",
            "Belgie",
            "Belgien",
            "Belgique",
            "Kingdom of Belgium",
            "Koninkrijk België",
            "Royaume de Belgique",
            "Königreich Belgien"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German",
            "fra": "French",
            "nld": "Dutch"
        },
        "translations": {
            "ces": {
                "official": "Belgické království",
                "common": "Belgie"
            },
            "cym": {
                "official": "Teyrnas Gwlad Belg",
                "common": "Gwlad Belg"
            },
            "deu": {
                "official": "Königreich Belgien",
                "common": "Belgien"
            },
            "fra": {
                "official": "Royaume de Belgique",
                "common": "Belgique"
            },
            "hrv": {
                "official": "Kraljevina Belgija",
                "common": "Belgija"
            },
            "ita": {
                "official": "Regno del Belgio",
                "common": "Belgio"
            },
            "jpn": {
                "official": "ベルギー王国",
                "common": "ベルギー"
            },
            "nld": {
                "official": "Koninkrijk België",
                "common": "België"
            },
            "por": {
                "official": "Reino da Bélgica",
                "common": "Bélgica"
            },
            "rus": {
                "official": "Королевство Бельгия",
                "common": "Бельгия"
            },
            "slk": {
                "official": "Belgické kráľovstvo",
                "common": "Belgicko"
            },
            "spa": {
                "official": "Reino de Bélgica",
                "common": "Bélgica"
            },
            "fin": {
                "official": "Belgian kuningaskunta",
                "common": "Belgia"
            },
            "est": {
                "official": "Belgia Kuningriik",
                "common": "Belgia"
            },
            "zho": {
                "official": "比利时王国",
                "common": "比利时"
            },
            "pol": {
                "official": "Królestwo Belgii",
                "common": "Belgia"
            }
        },
        "latlng": [
            50.83333333,
            4
        ],
        "demonym": "Belgian",
        "landlocked": false,
        "borders": [
            "FRA",
            "DEU",
            "LUX",
            "NLD"
        ],
        "area": 30528,
        "flag": "🇧🇪"
    },
    {
        "name": {
            "common": "Benin",
            "official": "Republic of Benin",
            "native": {
                "fra": {
                    "official": "République du Bénin",
                    "common": "Bénin"
                }
            }
        },
        "tld": [
            ".bj"
        ],
        "cca2": "BJ",
        "ccn3": "204",
        "cca3": "BEN",
        "cioc": "BEN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "229"
        ],
        "capital": [
            "Porto-Novo"
        ],
        "altSpellings": [
            "BJ",
            "Republic of Benin",
            "République du Bénin"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Beninská republika",
                "common": "Benin"
            },
            "cym": {
                "official": "Gweriniaeth Benin",
                "common": "Benin"
            },
            "deu": {
                "official": "Republik Benin",
                "common": "Benin"
            },
            "fra": {
                "official": "République du Bénin",
                "common": "Bénin"
            },
            "hrv": {
                "official": "Republika Benin",
                "common": "Benin"
            },
            "ita": {
                "official": "Repubblica del Benin",
                "common": "Benin"
            },
            "jpn": {
                "official": "ベナン共和国",
                "common": "ベナン"
            },
            "nld": {
                "official": "Republiek Benin",
                "common": "Benin"
            },
            "por": {
                "official": "República do Benin",
                "common": "Benin"
            },
            "rus": {
                "official": "Республика Бенин",
                "common": "Бенин"
            },
            "slk": {
                "official": "Beninská republika",
                "common": "Benin"
            },
            "spa": {
                "official": "República de Benin",
                "common": "Benín"
            },
            "fin": {
                "official": "Beninin tasavalta",
                "common": "Benin"
            },
            "est": {
                "official": "Benini Vabariik",
                "common": "Benin"
            },
            "zho": {
                "official": "贝宁共和国",
                "common": "贝宁"
            },
            "pol": {
                "official": "Benin",
                "common": "Benin"
            }
        },
        "latlng": [
            9.5,
            2.25
        ],
        "demonym": "Beninese",
        "landlocked": false,
        "borders": [
            "BFA",
            "NER",
            "NGA",
            "TGO"
        ],
        "area": 112622,
        "flag": "🇧🇯"
    },
    {
        "name": {
            "common": "Burkina Faso",
            "official": "Burkina Faso",
            "native": {
                "fra": {
                    "official": "République du Burkina",
                    "common": "Burkina Faso"
                }
            }
        },
        "tld": [
            ".bf"
        ],
        "cca2": "BF",
        "ccn3": "854",
        "cca3": "BFA",
        "cioc": "BUR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "226"
        ],
        "capital": [
            "Ouagadougou"
        ],
        "altSpellings": [
            "BF"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "cym": {
                "official": "Bwrcina Ffaso",
                "common": "Bwrcina Ffaso"
            },
            "deu": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "fra": {
                "official": "République du Burkina",
                "common": "Burkina Faso"
            },
            "hrv": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "ita": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "jpn": {
                "official": "ブルキナファソ",
                "common": "ブルキナファソ"
            },
            "nld": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "por": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "rus": {
                "official": "Буркина -Фасо",
                "common": "Буркина-Фасо"
            },
            "slk": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "spa": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "fin": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "est": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            },
            "zho": {
                "official": "布基纳法索",
                "common": "布基纳法索"
            },
            "pol": {
                "official": "Burkina Faso",
                "common": "Burkina Faso"
            }
        },
        "latlng": [
            13,
            -2
        ],
        "demonym": "Burkinabe",
        "landlocked": true,
        "borders": [
            "BEN",
            "CIV",
            "GHA",
            "MLI",
            "NER",
            "TGO"
        ],
        "area": 272967,
        "flag": "🇧🇫"
    },
    {
        "name": {
            "common": "Bangladesh",
            "official": "People's Republic of Bangladesh",
            "native": {
                "ben": {
                    "official": "বাংলাদেশ গণপ্রজাতন্ত্রী",
                    "common": "বাংলাদেশ"
                }
            }
        },
        "tld": [
            ".bd"
        ],
        "cca2": "BD",
        "ccn3": "050",
        "cca3": "BGD",
        "cioc": "BAN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BDT"
        ],
        "callingCode": [
            "880"
        ],
        "capital": [
            "Dhaka"
        ],
        "altSpellings": [
            "BD",
            "People's Republic of Bangladesh",
            "Gônôprôjatôntri Bangladesh"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "ben": "Bengali"
        },
        "translations": {
            "ces": {
                "official": "Bangladéšská lidová republika",
                "common": "Bangladéš"
            },
            "cym": {
                "official": "Gweriniaeth Pobl Bangladesh",
                "common": "Bangladesh"
            },
            "deu": {
                "official": "Volksrepublik Bangladesch",
                "common": "Bangladesch"
            },
            "fra": {
                "official": "La République populaire du Bangladesh",
                "common": "Bangladesh"
            },
            "hrv": {
                "official": "Narodna Republika Bangladeš",
                "common": "Bangladeš"
            },
            "ita": {
                "official": "Repubblica popolare del Bangladesh",
                "common": "Bangladesh"
            },
            "jpn": {
                "official": "バングラデシュ人民共和国",
                "common": "バングラデシュ"
            },
            "nld": {
                "official": "Volksrepubliek Bangladesh",
                "common": "Bangladesh"
            },
            "por": {
                "official": "República Popular do Bangladesh",
                "common": "Bangladesh"
            },
            "rus": {
                "official": "Народная Республика Бангладеш",
                "common": "Бангладеш"
            },
            "slk": {
                "official": "Bangladéšska ľudová republika",
                "common": "Bangladéš"
            },
            "spa": {
                "official": "República Popular de Bangladesh",
                "common": "Bangladesh"
            },
            "fin": {
                "official": "Bangladeshin kansantasavalta",
                "common": "Bangladesh"
            },
            "est": {
                "official": "Bangladeshi Rahvavabariik",
                "common": "Bangladesh"
            },
            "zho": {
                "official": "孟加拉人民共和国",
                "common": "孟加拉国"
            },
            "pol": {
                "official": "Ludowa Republika Bangladeszu",
                "common": "Bangladesz"
            }
        },
        "latlng": [
            24,
            90
        ],
        "demonym": "Bangladeshi",
        "landlocked": false,
        "borders": [
            "MMR",
            "IND"
        ],
        "area": 147570,
        "flag": "🇧🇩"
    },
    {
        "name": {
            "common": "Bulgaria",
            "official": "Republic of Bulgaria",
            "native": {
                "bul": {
                    "official": "Република България",
                    "common": "България"
                }
            }
        },
        "tld": [
            ".bg"
        ],
        "cca2": "BG",
        "ccn3": "100",
        "cca3": "BGR",
        "cioc": "BUL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BGN"
        ],
        "callingCode": [
            "359"
        ],
        "capital": [
            "Sofia"
        ],
        "altSpellings": [
            "BG",
            "Republic of Bulgaria",
            "Република България"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "bul": "Bulgarian"
        },
        "translations": {
            "ces": {
                "official": "Bulharská republika",
                "common": "Bulharsko"
            },
            "cym": {
                "official": "Gweriniaeth Bwlgaria",
                "common": "Bwlgaria"
            },
            "deu": {
                "official": "Republik Bulgarien",
                "common": "Bulgarien"
            },
            "fra": {
                "official": "République de Bulgarie",
                "common": "Bulgarie"
            },
            "hrv": {
                "official": "Republika Bugarska",
                "common": "Bugarska"
            },
            "ita": {
                "official": "Repubblica di Bulgaria",
                "common": "Bulgaria"
            },
            "jpn": {
                "official": "ブルガリア共和国",
                "common": "ブルガリア"
            },
            "nld": {
                "official": "Republiek Bulgarije",
                "common": "Bulgarije"
            },
            "por": {
                "official": "República da Bulgária",
                "common": "Bulgária"
            },
            "rus": {
                "official": "Республика Болгария",
                "common": "Болгария"
            },
            "slk": {
                "official": "Bulharská republika",
                "common": "Bulharsko"
            },
            "spa": {
                "official": "República de Bulgaria",
                "common": "Bulgaria"
            },
            "fin": {
                "official": "Bulgarian tasavalta",
                "common": "Bulgaria"
            },
            "est": {
                "official": "Bulgaaria Vabariik",
                "common": "Bulgaaria"
            },
            "zho": {
                "official": "保加利亚共和国",
                "common": "保加利亚"
            },
            "pol": {
                "official": "Republika Bułgarii",
                "common": "Bułgaria"
            }
        },
        "latlng": [
            43,
            25
        ],
        "demonym": "Bulgarian",
        "landlocked": false,
        "borders": [
            "GRC",
            "MKD",
            "ROU",
            "SRB",
            "TUR"
        ],
        "area": 110879,
        "flag": "🇧🇬"
    },
    {
        "name": {
            "common": "Bahrain",
            "official": "Kingdom of Bahrain",
            "native": {
                "ara": {
                    "official": "مملكة البحرين",
                    "common": "\u200fالبحرين"
                }
            }
        },
        "tld": [
            ".bh"
        ],
        "cca2": "BH",
        "ccn3": "048",
        "cca3": "BHR",
        "cioc": "BRN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BHD"
        ],
        "callingCode": [
            "973"
        ],
        "capital": [
            "Manama"
        ],
        "altSpellings": [
            "BH",
            "Kingdom of Bahrain",
            "Mamlakat al-Baḥrayn"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Království Bahrajn",
                "common": "Bahrajn"
            },
            "cym": {
                "official": "Teyrnas Bahrein",
                "common": "Bahrain"
            },
            "deu": {
                "official": "Königreich Bahrain",
                "common": "Bahrain"
            },
            "fra": {
                "official": "Royaume de Bahreïn",
                "common": "Bahreïn"
            },
            "hrv": {
                "official": "Kraljevina Bahrein",
                "common": "Bahrein"
            },
            "ita": {
                "official": "Regno del Bahrain",
                "common": "Bahrein"
            },
            "jpn": {
                "official": "バーレーン王国",
                "common": "バーレーン"
            },
            "nld": {
                "official": "Koninkrijk Bahrein",
                "common": "Bahrein"
            },
            "por": {
                "official": "Reino do Bahrein",
                "common": "Bahrein"
            },
            "rus": {
                "official": "Королевство Бахрейн",
                "common": "Бахрейн"
            },
            "slk": {
                "official": "Bahrajnské kráľovstvo",
                "common": "Bahrajn"
            },
            "spa": {
                "official": "Reino de Bahrein",
                "common": "Bahrein"
            },
            "fin": {
                "official": "Bahrainin kuningaskunta",
                "common": "Bahrain"
            },
            "est": {
                "official": "Bahreini Kuningriik",
                "common": "Bahrein"
            },
            "zho": {
                "official": "巴林王国",
                "common": "巴林"
            },
            "pol": {
                "official": "Królestwo Bahrajnu",
                "common": "Bahrajn"
            }
        },
        "latlng": [
            26,
            50.55
        ],
        "demonym": "Bahraini",
        "landlocked": false,
        "borders": [],
        "area": 765,
        "flag": "🇧🇭"
    },
    {
        "name": {
            "common": "Bahamas",
            "official": "Commonwealth of the Bahamas",
            "native": {
                "eng": {
                    "official": "Commonwealth of the Bahamas",
                    "common": "Bahamas"
                }
            }
        },
        "tld": [
            ".bs"
        ],
        "cca2": "BS",
        "ccn3": "044",
        "cca3": "BHS",
        "cioc": "BAH",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BSD"
        ],
        "callingCode": [
            "1242"
        ],
        "capital": [
            "Nassau"
        ],
        "altSpellings": [
            "BS",
            "Commonwealth of the Bahamas"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Bahamské společenství",
                "common": "Bahamy"
            },
            "cym": {
                "official": "Cymanwlad y Bahamas",
                "common": "Bahamas"
            },
            "deu": {
                "official": "Commonwealth der Bahamas",
                "common": "Bahamas"
            },
            "fra": {
                "official": "Commonwealth des Bahamas",
                "common": "Bahamas"
            },
            "hrv": {
                "official": "Zajednica Bahama",
                "common": "Bahami"
            },
            "ita": {
                "official": "Commonwealth delle Bahamas",
                "common": "Bahamas"
            },
            "jpn": {
                "official": "バハマ",
                "common": "バハマ"
            },
            "nld": {
                "official": "Gemenebest van de Bahama's",
                "common": "Bahama’s"
            },
            "por": {
                "official": "Comunidade das Bahamas",
                "common": "Bahamas"
            },
            "rus": {
                "official": "Содружество Багамских Островов",
                "common": "Багамские Острова"
            },
            "slk": {
                "official": "Bahamské spoločenstvo",
                "common": "Bahamy"
            },
            "spa": {
                "official": "Commonwealth de las Bahamas",
                "common": "Bahamas"
            },
            "fin": {
                "official": "Bahaman liittovaltio",
                "common": "Bahamasaaret"
            },
            "est": {
                "official": "Bahama Ühendus",
                "common": "Bahama"
            },
            "zho": {
                "official": "巴哈马联邦",
                "common": "巴哈马"
            },
            "pol": {
                "official": "Bahamy",
                "common": "Bahamy"
            }
        },
        "latlng": [
            24.25,
            -76
        ],
        "demonym": "Bahamian",
        "landlocked": false,
        "borders": [],
        "area": 13943,
        "flag": "🇧🇸"
    },
    {
        "name": {
            "common": "Bosnia and Herzegovina",
            "official": "Bosnia and Herzegovina",
            "native": {
                "bos": {
                    "official": "Bosna i Hercegovina",
                    "common": "Bosna i Hercegovina"
                },
                "hrv": {
                    "official": "Bosna i Hercegovina",
                    "common": "Bosna i Hercegovina"
                },
                "srp": {
                    "official": "Боснa и Херцеговина",
                    "common": "Боснa и Херцеговина"
                }
            }
        },
        "tld": [
            ".ba"
        ],
        "cca2": "BA",
        "ccn3": "070",
        "cca3": "BIH",
        "cioc": "BIH",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BAM"
        ],
        "callingCode": [
            "387"
        ],
        "capital": [
            "Sarajevo"
        ],
        "altSpellings": [
            "BA",
            "Bosnia-Herzegovina",
            "Босна и Херцеговина"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "bos": "Bosnian",
            "hrv": "Croatian",
            "srp": "Serbian"
        },
        "translations": {
            "ces": {
                "official": "Bosna a Hercegovina",
                "common": "Bosna a Hercegovina"
            },
            "cym": {
                "official": "Bosnia a Hercegovina",
                "common": "Bosnia a Hercegovina"
            },
            "deu": {
                "official": "Bosnien und Herzegowina",
                "common": "Bosnien und Herzegowina"
            },
            "fra": {
                "official": "Bosnie-et-Herzégovine",
                "common": "Bosnie-Herzégovine"
            },
            "hrv": {
                "official": "Bosna i Hercegovina",
                "common": "Bosna i Hercegovina"
            },
            "ita": {
                "official": "Bosnia-Erzegovina",
                "common": "Bosnia ed Erzegovina"
            },
            "jpn": {
                "official": "ボスニア·ヘルツェゴビナ",
                "common": "ボスニア・ヘルツェゴビナ"
            },
            "nld": {
                "official": "Bosnië-Herzegovina",
                "common": "Bosnië en Herzegovina"
            },
            "por": {
                "official": "Bósnia e Herzegovina",
                "common": "Bósnia e Herzegovina"
            },
            "rus": {
                "official": "Босния и Герцеговина",
                "common": "Босния и Герцеговина"
            },
            "slk": {
                "official": "Republika Bosny a Hercegoviny",
                "common": "Bosna a Hercegovina"
            },
            "spa": {
                "official": "Bosnia y Herzegovina",
                "common": "Bosnia y Herzegovina"
            },
            "fin": {
                "official": "Bosnia ja Hertsegovina",
                "common": "Bosnia ja Hertsegovina"
            },
            "est": {
                "official": "Bosnia ja Hertsegoviina",
                "common": "Bosnia ja Hertsegoviina"
            },
            "zho": {
                "official": "波斯尼亚和黑塞哥维那",
                "common": "波斯尼亚和黑塞哥维那"
            },
            "pol": {
                "official": "Bośnia i Hercegowina",
                "common": "Bośnia i Hercegowina"
            }
        },
        "latlng": [
            44,
            18
        ],
        "demonym": "Bosnian, Herzegovinian",
        "landlocked": false,
        "borders": [
            "HRV",
            "MNE",
            "SRB"
        ],
        "area": 51209,
        "flag": "🇧🇦"
    },
    {
        "name": {
            "common": "Saint Barthélemy",
            "official": "Collectivity of Saint Barthélemy",
            "native": {
                "fra": {
                    "official": "Collectivité de Saint-Barthélemy",
                    "common": "Saint-Barthélemy"
                }
            }
        },
        "tld": [
            ".bl"
        ],
        "cca2": "BL",
        "ccn3": "652",
        "cca3": "BLM",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "590"
        ],
        "capital": [
            "Gustavia"
        ],
        "altSpellings": [
            "BL",
            "St. Barthelemy",
            "Collectivity of Saint Barthélemy",
            "Collectivité de Saint-Barthélemy"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Svatý Bartoloměj",
                "common": "Svatý Bartoloměj"
            },
            "deu": {
                "official": "Gebietskörperschaft Saint-Barthélemy",
                "common": "Saint-Barthélemy"
            },
            "fra": {
                "official": "Collectivité de Saint-Barthélemy",
                "common": "Saint-Barthélemy"
            },
            "hrv": {
                "official": "Kolektivnost sv Barthélemy",
                "common": "Saint Barthélemy"
            },
            "ita": {
                "official": "Collettività di Saint Barthélemy",
                "common": "Antille Francesi"
            },
            "jpn": {
                "official": "サン·バルテルミー島の集合体",
                "common": "サン・バルテルミー"
            },
            "nld": {
                "official": "Gemeenschap Saint Barthélemy",
                "common": "Saint Barthélemy"
            },
            "por": {
                "official": "Coletividade de Saint Barthélemy",
                "common": "São Bartolomeu"
            },
            "rus": {
                "official": "Коллективность Санкт -Бартельми",
                "common": "Сен-Бартелеми"
            },
            "slk": {
                "official": "Svätý Bartolomej",
                "common": "Svätý Bartolomej"
            },
            "spa": {
                "official": "Colectividad de San Barthélemy",
                "common": "San Bartolomé"
            },
            "fin": {
                "official": "Saint-Barthélemyn yhteisö",
                "common": "Saint-Barthélemy"
            },
            "est": {
                "official": "Saint-Barthélemy territoriaalühendus",
                "common": "Saint-Barthélemy"
            },
            "zho": {
                "official": "圣巴泰勒米集体",
                "common": "圣巴泰勒米"
            },
            "pol": {
                "official": "Saint-Barthélemy",
                "common": "Saint-Barthélemy"
            }
        },
        "latlng": [
            18.5,
            -63.41666666
        ],
        "demonym": "Saint Barthélemy Islander",
        "landlocked": false,
        "borders": [],
        "area": 21,
        "flag": "🇧🇱"
    },
    {
        "name": {
            "common": "Saint Helena, Ascension and Tristan da Cunha",
            "official": "Saint Helena, Ascension and Tristan da Cunha",
            "native": {
                "eng": {
                    "official": "Saint Helena, Ascension and Tristan da Cunha",
                    "common": "Saint Helena, Ascension and Tristan da Cunha"
                }
            }
        },
        "tld": [
            ".sh",
            ".ac"
        ],
        "cca2": "SH",
        "ccn3": "654",
        "cca3": "SHN",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "SHP",
            "GBP"
        ],
        "callingCode": [
            "290",
            "247"
        ],
        "capital": [
            "Jamestown"
        ],
        "altSpellings": [
            "Saint Helena",
            "St. Helena, Ascension and Tristan da Cunha"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Svatá Helena, Ascension a Tristan da Cunha",
                "common": "Svatá Helena, Ascension a Tristan da Cunha"
            },
            "deu": {
                "official": "Sankt Helena, Ascension und Tristan da Cunha",
                "common": "St. Helena, Ascension und Tristan da Cunha"
            },
            "fra": {
                "official": "Sainte-Hélène, Ascension et Tristan da Cunha",
                "common": "Sainte-Hélène, Ascension et Tristan da Cunha"
            },
            "hrv": {
                "official": "Sveta Helena",
                "common": "Sveta Helena"
            },
            "ita": {
                "official": "Sant'Elena, Ascensione e Tristan da Cunha",
                "common": "Sant'Elena, Ascensione e Tristan da Cunha"
            },
            "jpn": {
                "official": "セントヘレナ・アセンションおよびトリスタンダクーニャ",
                "common": "セントヘレナ・アセンションおよびトリスタンダクーニャ"
            },
            "nld": {
                "official": "Sint-Helena, Ascension en Tristan da Cunha",
                "common": "Sint-Helena, Ascension en Tristan da Cunha"
            },
            "por": {
                "official": "Santa Helena, Ascensão e Tristão da Cunha",
                "common": "Santa Helena, Ascensão e Tristão da Cunha"
            },
            "rus": {
                "official": "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
                "common": "Острова Святой Елены, Вознесения и Тристан-да-Кунья"
            },
            "slk": {
                "official": "Svätá Helena (zámorské územie)",
                "common": "Svätá Helena (zámorské územie)"
            },
            "spa": {
                "official": "Santa Elena, Ascensión y Tristán de Acuña",
                "common": "Santa Elena, Ascensión y Tristán de Acuña"
            },
            "fin": {
                "official": "Saint Helena, Ascension ja Tristan da Cunha",
                "common": "Saint Helena, Ascension ja Tristan da Cunha"
            },
            "est": {
                "official": "Saint Helena, Ascension ja Tristan da Cunha",
                "common": "Saint Helena, Ascension ja Tristan da Cunha"
            },
            "zho": {
                "official": "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
                "common": "圣赫勒拿、阿森松和特里斯坦-达库尼亚"
            },
            "pol": {
                "official": "Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha",
                "common": "Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha"
            }
        },
        "latlng": [
            -15.95,
            -5.72
        ],
        "demonym": "Saint Helenian",
        "landlocked": false,
        "borders": [],
        "area": 394,
        "flag": "🇸🇭"
    },
    {
        "name": {
            "common": "Belarus",
            "official": "Republic of Belarus",
            "native": {
                "bel": {
                    "official": "Рэспубліка Беларусь",
                    "common": "Белару́сь"
                },
                "rus": {
                    "official": "Республика Беларусь",
                    "common": "Беларусь"
                }
            }
        },
        "tld": [
            ".by"
        ],
        "cca2": "BY",
        "ccn3": "112",
        "cca3": "BLR",
        "cioc": "BLR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BYN"
        ],
        "callingCode": [
            "375"
        ],
        "capital": [
            "Minsk"
        ],
        "altSpellings": [
            "BY",
            "Bielaruś",
            "Republic of Belarus",
            "Белоруссия",
            "Республика Белоруссия"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "bel": "Belarusian",
            "rus": "Russian"
        },
        "translations": {
            "ces": {
                "official": "Běloruská republika",
                "common": "Bělorusko"
            },
            "cym": {
                "official": "Gweriniaeth Belarws",
                "common": "Belarws"
            },
            "deu": {
                "official": "Republik Belarus",
                "common": "Weißrussland"
            },
            "fra": {
                "official": "République de Biélorussie",
                "common": "Biélorussie"
            },
            "hrv": {
                "official": "Republika Bjelorusija",
                "common": "Bjelorusija"
            },
            "ita": {
                "official": "Repubblica di Belarus",
                "common": "Bielorussia"
            },
            "jpn": {
                "official": "ベラルーシ共和国",
                "common": "ベラルーシ"
            },
            "nld": {
                "official": "Republiek Belarus",
                "common": "Wit-Rusland"
            },
            "por": {
                "official": "República da Bielorrússia",
                "common": "Bielorússia"
            },
            "rus": {
                "official": "Республика Беларусь",
                "common": "Беларусь"
            },
            "slk": {
                "official": "Bieloruská republika",
                "common": "Bielorusko"
            },
            "spa": {
                "official": "República de Belarús",
                "common": "Bielorrusia"
            },
            "fin": {
                "official": "Valko-Venäjän tasavalta",
                "common": "Valko-Venäjä"
            },
            "est": {
                "official": "Valgevene Vabariik",
                "common": "Valgevene"
            },
            "zho": {
                "official": "白俄罗斯共和国",
                "common": "白俄罗斯"
            },
            "pol": {
                "official": "Republika Białorusi",
                "common": "Białoruś"
            }
        },
        "latlng": [
            53,
            28
        ],
        "demonym": "Belarusian",
        "landlocked": true,
        "borders": [
            "LVA",
            "LTU",
            "POL",
            "RUS",
            "UKR"
        ],
        "area": 207600,
        "flag": "🇧🇾"
    },
    {
        "name": {
            "common": "Belize",
            "official": "Belize",
            "native": {
                "bjz": {
                    "official": "Belize",
                    "common": "Belize"
                },
                "eng": {
                    "official": "Belize",
                    "common": "Belize"
                },
                "spa": {
                    "official": "Belice",
                    "common": "Belice"
                }
            }
        },
        "tld": [
            ".bz"
        ],
        "cca2": "BZ",
        "ccn3": "084",
        "cca3": "BLZ",
        "cioc": "BIZ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BZD"
        ],
        "callingCode": [
            "501"
        ],
        "capital": [
            "Belmopan"
        ],
        "altSpellings": [
            "BZ"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "bjz": "Belizean Creole",
            "eng": "English",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Belize",
                "common": "Belize"
            },
            "cym": {
                "official": "Belîs",
                "common": "Belîs"
            },
            "deu": {
                "official": "Belize",
                "common": "Belize"
            },
            "fra": {
                "official": "Belize",
                "common": "Belize"
            },
            "hrv": {
                "official": "Belize",
                "common": "Belize"
            },
            "ita": {
                "official": "Belize",
                "common": "Belize"
            },
            "jpn": {
                "official": "ベリーズ",
                "common": "ベリーズ"
            },
            "nld": {
                "official": "Belize",
                "common": "Belize"
            },
            "por": {
                "official": "Belize",
                "common": "Belize"
            },
            "rus": {
                "official": "Белиз",
                "common": "Белиз"
            },
            "slk": {
                "official": "Belize",
                "common": "Belize"
            },
            "spa": {
                "official": "Belice",
                "common": "Belice"
            },
            "fin": {
                "official": "Belize",
                "common": "Belize"
            },
            "est": {
                "official": "Belize",
                "common": "Belize"
            },
            "zho": {
                "official": "伯利兹",
                "common": "伯利兹"
            },
            "pol": {
                "official": "Belize",
                "common": "Belize"
            }
        },
        "latlng": [
            17.25,
            -88.75
        ],
        "demonym": "Belizean",
        "landlocked": false,
        "borders": [
            "GTM",
            "MEX"
        ],
        "area": 22966,
        "flag": "🇧🇿"
    },
    {
        "name": {
            "common": "Bermuda",
            "official": "Bermuda",
            "native": {
                "eng": {
                    "official": "Bermuda",
                    "common": "Bermuda"
                }
            }
        },
        "tld": [
            ".bm"
        ],
        "cca2": "BM",
        "ccn3": "060",
        "cca3": "BMU",
        "cioc": "BER",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "BMD"
        ],
        "callingCode": [
            "1441"
        ],
        "capital": [
            "Hamilton"
        ],
        "altSpellings": [
            "BM",
            "The Islands of Bermuda",
            "The Bermudas",
            "Somers Isles"
        ],
        "region": "Americas",
        "subregion": "North America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Bermudské ostrovy",
                "common": "Bermudy"
            },
            "cym": {
                "official": "Bermiwda",
                "common": "Bermiwda"
            },
            "deu": {
                "official": "Bermuda",
                "common": "Bermuda"
            },
            "fra": {
                "official": "Bermudes",
                "common": "Bermudes"
            },
            "hrv": {
                "official": "Bermuda",
                "common": "Bermudi"
            },
            "ita": {
                "official": "Bermuda",
                "common": "Bermuda"
            },
            "jpn": {
                "official": "バミューダ",
                "common": "バミューダ"
            },
            "nld": {
                "official": "Bermuda",
                "common": "Bermuda"
            },
            "por": {
                "official": "Bermudas",
                "common": "Bermudas"
            },
            "rus": {
                "official": "Бермудские острова",
                "common": "Бермудские Острова"
            },
            "slk": {
                "official": "Bermudy",
                "common": "Bermudy"
            },
            "spa": {
                "official": "Bermuda",
                "common": "Bermudas"
            },
            "fin": {
                "official": "Bermuda",
                "common": "Bermuda"
            },
            "est": {
                "official": "Bermuda",
                "common": "Bermuda"
            },
            "zho": {
                "official": "百慕大",
                "common": "百慕大"
            },
            "pol": {
                "official": "Bermudy",
                "common": "Bermudy"
            }
        },
        "latlng": [
            32.33333333,
            -64.75
        ],
        "demonym": "Bermudian",
        "landlocked": false,
        "borders": [],
        "area": 54,
        "flag": "🇧🇲"
    },
    {
        "name": {
            "common": "Bolivia",
            "official": "Plurinational State of Bolivia",
            "native": {
                "aym": {
                    "official": "Wuliwya Suyu",
                    "common": "Wuliwya"
                },
                "grn": {
                    "official": "Tetã Volívia",
                    "common": "Volívia"
                },
                "que": {
                    "official": "Buliwya Mamallaqta",
                    "common": "Buliwya"
                },
                "spa": {
                    "official": "Estado Plurinacional de Bolivia",
                    "common": "Bolivia"
                }
            }
        },
        "tld": [
            ".bo"
        ],
        "cca2": "BO",
        "ccn3": "068",
        "cca3": "BOL",
        "cioc": "BOL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BOB"
        ],
        "callingCode": [
            "591"
        ],
        "capital": [
            "Sucre"
        ],
        "altSpellings": [
            "BO",
            "Buliwya",
            "Wuliwya",
            "Bolivia, Plurinational State of",
            "Plurinational State of Bolivia",
            "Estado Plurinacional de Bolivia",
            "Buliwya Mamallaqta",
            "Wuliwya Suyu",
            "Tetã Volívia"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "aym": "Aymara",
            "grn": "Guaraní",
            "que": "Quechua",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Mnohonárodnostní stát Bolívie",
                "common": "Bolívie"
            },
            "cym": {
                "official": "Gweriniaeth Bolifia",
                "common": "Bolifia"
            },
            "deu": {
                "official": "Plurinationaler Staat Bolivien",
                "common": "Bolivien"
            },
            "fra": {
                "official": "État plurinational de Bolivie",
                "common": "Bolivie"
            },
            "hrv": {
                "official": "Plurinational State of Bolivia",
                "common": "Bolivija"
            },
            "ita": {
                "official": "Stato Plurinazionale della Bolivia",
                "common": "Bolivia"
            },
            "jpn": {
                "official": "ボリビアの多民族国",
                "common": "ボリビア多民族国"
            },
            "nld": {
                "official": "Plurinationale Staat van Bolivia",
                "common": "Bolivia"
            },
            "por": {
                "official": "Estado Plurinacional da Bolívia",
                "common": "Bolívia"
            },
            "rus": {
                "official": "Многонациональное Государство Боливия",
                "common": "Боливия"
            },
            "slk": {
                "official": "Bolívijská republika",
                "common": "Bolívia"
            },
            "spa": {
                "official": "Estado Plurinacional de Bolivia",
                "common": "Bolivia"
            },
            "fin": {
                "official": "Bolivian monikansainen valtio",
                "common": "Bolivia"
            },
            "est": {
                "official": "Boliivia Paljurahvuseline Riik",
                "common": "Boliivia"
            },
            "zho": {
                "official": "多民族玻利维亚国",
                "common": "玻利维亚"
            },
            "pol": {
                "official": "Wielonarodowe Państwo Boliwia",
                "common": "Boliwia"
            }
        },
        "latlng": [
            -17,
            -65
        ],
        "demonym": "Bolivian",
        "landlocked": true,
        "borders": [
            "ARG",
            "BRA",
            "CHL",
            "PRY",
            "PER"
        ],
        "area": 1098581,
        "flag": "🇧🇴"
    },
    {
        "name": {
            "common": "Caribbean Netherlands",
            "official": "Bonaire, Sint Eustatius and Saba",
            "native": {
                "nld": {
                    "official": "Bonaire, Sint Eustatius en Saba",
                    "common": "Caribisch Nederland"
                },
                "pap": {
                    "official": "Boneiru, Sint Eustatius y Saba",
                    "common": "Boneiru, Sint Eustatius y Saba"
                }
            }
        },
        "tld": [
            ".bq",
            ".nl"
        ],
        "cca2": "BQ",
        "ccn3": "535",
        "cca3": "BES",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "599"
        ],
        "capital": [],
        "altSpellings": [
            "BES islands"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "nld": "Dutch",
            "pap": "Papiamento"
        },
        "translations": {
            "ces": {
                "official": "Karibské Nizozemsko",
                "common": "Karibské Nizozemsko"
            },
            "deu": {
                "official": "Bonaire, Sint Eustatius und Saba",
                "common": "Karibische Niederlande"
            },
            "fra": {
                "official": "Bonaire, Saint-Eustache et Saba",
                "common": "Pays-Bas caribéens"
            },
            "hrv": {
                "official": "Bonaire, Sint Eustatius i Saba",
                "common": "Bonaire, Sint Eustatius i Saba"
            },
            "ita": {
                "official": "Bonaire, Sint Eustatius e Saba",
                "common": "Paesi Bassi caraibici"
            },
            "jpn": {
                "official": "ボネール、シント・ユースタティウスおよびサバ",
                "common": "ボネール、シント・ユースタティウスおよびサバ"
            },
            "nld": {
                "official": "Bonaire, Sint Eustatius en Saba",
                "common": "Caribisch Nederland"
            },
            "por": {
                "official": "Bonaire, Saba e Santo Eustáquio",
                "common": "Países Baixos Caribenhos"
            },
            "rus": {
                "official": "Бонэйр, Синт-Эстатиус и Саба",
                "common": "Карибские Нидерланды"
            },
            "slk": {
                "official": "Bonaire, Sint Eustatius a Saba",
                "common": "Bonaire, Sint Eustatius a Saba"
            },
            "spa": {
                "official": "Bonaire, San Eustaquio y Saba",
                "common": "Caribe Neerlandés"
            },
            "fin": {
                "official": "Bonaire, Sint Eustatius ja Saba",
                "common": "Bonaire, Sint Eustatius ja Saba"
            },
            "est": {
                "official": "Bonaire, Sint Eustatius ja Saba",
                "common": "Bonaire, Sint Eustatius ja Saba"
            },
            "zho": {
                "official": "荷蘭加勒比區",
                "common": "荷蘭加勒比區"
            },
            "pol": {
                "official": "Bonaire, Sint Eustatius i Saba",
                "common": "Antyle Holenderskie"
            }
        },
        "latlng": [
            12.18,
            -68.25
        ],
        "demonym": "Dutch",
        "landlocked": false,
        "borders": [],
        "area": 328,
        "flag": ""
    },
    {
        "name": {
            "common": "Brazil",
            "official": "Federative Republic of Brazil",
            "native": {
                "por": {
                    "official": "República Federativa do Brasil",
                    "common": "Brasil"
                }
            }
        },
        "tld": [
            ".br"
        ],
        "cca2": "BR",
        "ccn3": "076",
        "cca3": "BRA",
        "cioc": "BRA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BRL"
        ],
        "callingCode": [
            "55"
        ],
        "capital": [
            "Brasília"
        ],
        "altSpellings": [
            "BR",
            "Brasil",
            "Federative Republic of Brazil",
            "República Federativa do Brasil"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "ces": {
                "official": "Brazilská federativní republika",
                "common": "Brazílie"
            },
            "cym": {
                "official": "Gweriniaeth Ffederal Brasil",
                "common": "Brasil"
            },
            "deu": {
                "official": "Föderative Republik Brasilien",
                "common": "Brasilien"
            },
            "fra": {
                "official": "République fédérative du Brésil",
                "common": "Brésil"
            },
            "hrv": {
                "official": "Savezne Republike Brazil",
                "common": "Brazil"
            },
            "ita": {
                "official": "Repubblica federativa del Brasile",
                "common": "Brasile"
            },
            "jpn": {
                "official": "ブラジル連邦共和国",
                "common": "ブラジル"
            },
            "nld": {
                "official": "Federale Republiek Brazilië",
                "common": "Brazilië"
            },
            "por": {
                "official": "República Federativa do Brasil",
                "common": "Brasil"
            },
            "rus": {
                "official": "Федеративная Республика Бразилия",
                "common": "Бразилия"
            },
            "slk": {
                "official": "Brazílska federatívna republika",
                "common": "Brazília"
            },
            "spa": {
                "official": "República Federativa del Brasil",
                "common": "Brasil"
            },
            "fin": {
                "official": "Brasilian liittotasavalta",
                "common": "Brasilia"
            },
            "est": {
                "official": "Brasiilia Liitvabariik",
                "common": "Brasiilia"
            },
            "zho": {
                "official": "巴西联邦共和国",
                "common": "巴西"
            },
            "pol": {
                "official": "Federacyjna Republika Brazylii",
                "common": "Brazylia"
            }
        },
        "latlng": [
            -10,
            -55
        ],
        "demonym": "Brazilian",
        "landlocked": false,
        "borders": [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN"
        ],
        "area": 8515767,
        "flag": "🇧🇷"
    },
    {
        "name": {
            "common": "Barbados",
            "official": "Barbados",
            "native": {
                "eng": {
                    "official": "Barbados",
                    "common": "Barbados"
                }
            }
        },
        "tld": [
            ".bb"
        ],
        "cca2": "BB",
        "ccn3": "052",
        "cca3": "BRB",
        "cioc": "BAR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BBD"
        ],
        "callingCode": [
            "1246"
        ],
        "capital": [
            "Bridgetown"
        ],
        "altSpellings": [
            "BB"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "cym": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "deu": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "fra": {
                "official": "Barbade",
                "common": "Barbade"
            },
            "hrv": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "ita": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "jpn": {
                "official": "バルバドス",
                "common": "バルバドス"
            },
            "nld": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "por": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "rus": {
                "official": "Барбадос",
                "common": "Барбадос"
            },
            "slk": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "spa": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "fin": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "est": {
                "official": "Barbados",
                "common": "Barbados"
            },
            "zho": {
                "official": "巴巴多斯",
                "common": "巴巴多斯"
            },
            "pol": {
                "official": "Barbados",
                "common": "Barbados"
            }
        },
        "latlng": [
            13.16666666,
            -59.53333333
        ],
        "demonym": "Barbadian",
        "landlocked": false,
        "borders": [],
        "area": 430,
        "flag": "🇧🇧"
    },
    {
        "name": {
            "common": "Brunei",
            "official": "Nation of Brunei, Abode of Peace",
            "native": {
                "msa": {
                    "official": "Nation of Brunei, Abode Damai",
                    "common": "Negara Brunei Darussalam"
                }
            }
        },
        "tld": [
            ".bn"
        ],
        "cca2": "BN",
        "ccn3": "096",
        "cca3": "BRN",
        "cioc": "BRU",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BND"
        ],
        "callingCode": [
            "673"
        ],
        "capital": [
            "Bandar Seri Begawan"
        ],
        "altSpellings": [
            "BN",
            "Brunei Darussalam",
            "Nation of Brunei",
            "the Abode of Peace"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "msa": "Malay"
        },
        "translations": {
            "ces": {
                "official": "Sultanát Brunej",
                "common": "Brunej"
            },
            "cym": {
                "official": "Teyrnas Brwnei",
                "common": "Brunei"
            },
            "deu": {
                "official": "Sultanat Brunei Darussalam",
                "common": "Brunei"
            },
            "fra": {
                "official": "État de Brunei Darussalam",
                "common": "Brunei"
            },
            "hrv": {
                "official": "Nacija od Bruneja, Kuću Mira",
                "common": "Brunej"
            },
            "ita": {
                "official": "Nazione di Brunei, Dimora della Pace",
                "common": "Brunei"
            },
            "jpn": {
                "official": "ブルネイ、平和の精舎の国家",
                "common": "ブルネイ・ダルサラーム"
            },
            "nld": {
                "official": "Natie van Brunei, de verblijfplaats van de Vrede",
                "common": "Brunei"
            },
            "por": {
                "official": "Nação do Brunei, Morada da Paz",
                "common": "Brunei"
            },
            "rus": {
                "official": "Нация Бруней, обитель мира",
                "common": "Бруней"
            },
            "slk": {
                "official": "Brunejský sultanât",
                "common": "Brunej"
            },
            "spa": {
                "official": "Nación de Brunei, Morada de la Paz",
                "common": "Brunei"
            },
            "fin": {
                "official": "Brunei Darussalamin valtio",
                "common": "Brunei"
            },
            "est": {
                "official": "Brunei Darussalami Riik",
                "common": "Brunei"
            },
            "zho": {
                "official": "文莱和平之国",
                "common": "文莱"
            },
            "pol": {
                "official": "Państwo Brunei Darussalam",
                "common": "Brunei"
            }
        },
        "latlng": [
            4.5,
            114.66666666
        ],
        "demonym": "Bruneian",
        "landlocked": false,
        "borders": [
            "MYS"
        ],
        "area": 5765,
        "flag": "🇧🇳"
    },
    {
        "name": {
            "common": "Bhutan",
            "official": "Kingdom of Bhutan",
            "native": {
                "dzo": {
                    "official": "འབྲུག་རྒྱལ་ཁབ་",
                    "common": "འབྲུག་ཡུལ་"
                }
            }
        },
        "tld": [
            ".bt"
        ],
        "cca2": "BT",
        "ccn3": "064",
        "cca3": "BTN",
        "cioc": "BHU",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BTN",
            "INR"
        ],
        "callingCode": [
            "975"
        ],
        "capital": [
            "Thimphu"
        ],
        "altSpellings": [
            "BT",
            "Kingdom of Bhutan"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "dzo": "Dzongkha"
        },
        "translations": {
            "ces": {
                "official": "Bhútánské království",
                "common": "Bhútán"
            },
            "cym": {
                "official": "Teyrnas Bhwtan",
                "common": "Bhwtan"
            },
            "deu": {
                "official": "Königreich Bhutan",
                "common": "Bhutan"
            },
            "fra": {
                "official": "Royaume du Bhoutan",
                "common": "Bhoutan"
            },
            "hrv": {
                "official": "Kraljevina Butan",
                "common": "Butan"
            },
            "ita": {
                "official": "Regno del Bhutan",
                "common": "Bhutan"
            },
            "jpn": {
                "official": "ブータン王国",
                "common": "ブータン"
            },
            "nld": {
                "official": "Koninkrijk Bhutan",
                "common": "Bhutan"
            },
            "por": {
                "official": "Reino do Butão",
                "common": "Butão"
            },
            "rus": {
                "official": "Королевство Бутан",
                "common": "Бутан"
            },
            "slk": {
                "official": "Bhutánske krâľovstvo",
                "common": "Bhután"
            },
            "spa": {
                "official": "Reino de Bután",
                "common": "Bután"
            },
            "fin": {
                "official": "Bhutanin kuningaskunta",
                "common": "Bhutan"
            },
            "est": {
                "official": "Bhutani Kuningriik",
                "common": "Bhutan"
            },
            "zho": {
                "official": "不丹王国",
                "common": "不丹"
            },
            "pol": {
                "official": "Bhutan",
                "common": "Bhutan"
            }
        },
        "latlng": [
            27.5,
            90.5
        ],
        "demonym": "Bhutanese",
        "landlocked": true,
        "borders": [
            "CHN",
            "IND"
        ],
        "area": 38394,
        "flag": "🇧🇹"
    },
    {
        "name": {
            "common": "Bouvet Island",
            "official": "Bouvet Island",
            "native": {
                "nor": {
                    "official": "Bouvetøya",
                    "common": "Bouvetøya"
                }
            }
        },
        "tld": [
            ".bv"
        ],
        "cca2": "BV",
        "ccn3": "074",
        "cca3": "BVT",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "NOK"
        ],
        "callingCode": [],
        "capital": [
            ""
        ],
        "altSpellings": [
            "BV",
            "Bouvetøya",
            "Bouvet-øya"
        ],
        "region": "Antarctic",
        "subregion": "",
        "languages": {
            "nor": "Norwegian"
        },
        "translations": {
            "ces": {
                "official": "Bouvetův ostrov",
                "common": "Bouvetův ostrov"
            },
            "deu": {
                "official": "Bouvetinsel",
                "common": "Bouvetinsel"
            },
            "fra": {
                "official": "Île Bouvet",
                "common": "Île Bouvet"
            },
            "hrv": {
                "official": "Bouvet Island",
                "common": "Otok Bouvet"
            },
            "ita": {
                "official": "Isola Bouvet",
                "common": "Isola Bouvet"
            },
            "jpn": {
                "official": "ブーヴェ島",
                "common": "ブーベ島"
            },
            "nld": {
                "official": "Bouvet Island",
                "common": "Bouveteiland"
            },
            "por": {
                "official": "Ilha Bouvet",
                "common": "Ilha Bouvet"
            },
            "rus": {
                "official": "Остров Буве",
                "common": "Остров Буве"
            },
            "slk": {
                "official": "Bouvetov ostrov",
                "common": "Bouvetov ostrov"
            },
            "spa": {
                "official": "Isla Bouvet",
                "common": "Isla Bouvet"
            },
            "fin": {
                "official": "Bouvet'nsaari",
                "common": "Bouvet'nsaari"
            },
            "est": {
                "official": "Bouvet’ saar",
                "common": "Bouvet’ saar"
            },
            "zho": {
                "official": "布维岛",
                "common": "布维岛"
            },
            "pol": {
                "official": "Wyspa Bouveta",
                "common": "Wyspa Bouveta"
            }
        },
        "latlng": [
            -54.43333333,
            3.4
        ],
        "demonym": "",
        "landlocked": false,
        "borders": [],
        "area": 49,
        "flag": "🇧🇻"
    },
    {
        "name": {
            "common": "Botswana",
            "official": "Republic of Botswana",
            "native": {
                "eng": {
                    "official": "Republic of Botswana",
                    "common": "Botswana"
                },
                "tsn": {
                    "official": "Lefatshe la Botswana",
                    "common": "Botswana"
                }
            }
        },
        "tld": [
            ".bw"
        ],
        "cca2": "BW",
        "ccn3": "072",
        "cca3": "BWA",
        "cioc": "BOT",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "BWP"
        ],
        "callingCode": [
            "267"
        ],
        "capital": [
            "Gaborone"
        ],
        "altSpellings": [
            "BW",
            "Republic of Botswana",
            "Lefatshe la Botswana"
        ],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "eng": "English",
            "tsn": "Tswana"
        },
        "translations": {
            "ces": {
                "official": "Botswanská republika",
                "common": "Botswana"
            },
            "deu": {
                "official": "Republik Botsuana",
                "common": "Botswana"
            },
            "fra": {
                "official": "République du Botswana",
                "common": "Botswana"
            },
            "hrv": {
                "official": "Republika Bocvana",
                "common": "Bocvana"
            },
            "ita": {
                "official": "Repubblica del Botswana",
                "common": "Botswana"
            },
            "jpn": {
                "official": "ボツワナ共和国",
                "common": "ボツワナ"
            },
            "nld": {
                "official": "Republiek Botswana",
                "common": "Botswana"
            },
            "por": {
                "official": "República do Botswana",
                "common": "Botswana"
            },
            "rus": {
                "official": "Республика Ботсвана",
                "common": "Ботсвана"
            },
            "slk": {
                "official": "Botswanská republika",
                "common": "Botswana"
            },
            "spa": {
                "official": "República de Botswana",
                "common": "Botswana"
            },
            "fin": {
                "official": "Botswanan tasavalta",
                "common": "Botswana"
            },
            "est": {
                "official": "Botswana Vabariik",
                "common": "Botswana"
            },
            "zho": {
                "official": "博茨瓦纳共和国",
                "common": "博茨瓦纳"
            },
            "pol": {
                "official": "Republika Botswany",
                "common": "Botswana"
            }
        },
        "latlng": [
            -22,
            24
        ],
        "demonym": "Motswana",
        "landlocked": true,
        "borders": [
            "NAM",
            "ZAF",
            "ZMB",
            "ZWE"
        ],
        "area": 582000,
        "flag": "🇧🇼"
    },
    {
        "name": {
            "common": "Central African Republic",
            "official": "Central African Republic",
            "native": {
                "fra": {
                    "official": "République centrafricaine",
                    "common": "République centrafricaine"
                },
                "sag": {
                    "official": "Ködörösêse tî Bêafrîka",
                    "common": "Bêafrîka"
                }
            }
        },
        "tld": [
            ".cf"
        ],
        "cca2": "CF",
        "ccn3": "140",
        "cca3": "CAF",
        "cioc": "CAF",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XAF"
        ],
        "callingCode": [
            "236"
        ],
        "capital": [
            "Bangui"
        ],
        "altSpellings": [
            "CF",
            "Central African Republic",
            "République centrafricaine"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "sag": "Sango"
        },
        "translations": {
            "ces": {
                "official": "Středoafrická republika",
                "common": "Středoafrická republika"
            },
            "cym": {
                "official": "Gweriniaeth Canolbarth Affrica",
                "common": "Gweriniaeth Canolbarth Affrica"
            },
            "deu": {
                "official": "Zentralafrikanische Republik",
                "common": "Zentralafrikanische Republik"
            },
            "fra": {
                "official": "République centrafricaine",
                "common": "République centrafricaine"
            },
            "hrv": {
                "official": "Centralna Afrička Republika",
                "common": "Srednjoafrička Republika"
            },
            "ita": {
                "official": "Repubblica Centrafricana",
                "common": "Repubblica Centrafricana"
            },
            "jpn": {
                "official": "中央アフリカ共和国",
                "common": "中央アフリカ共和国"
            },
            "nld": {
                "official": "Centraal-Afrikaanse Republiek",
                "common": "Centraal-Afrikaanse Republiek"
            },
            "por": {
                "official": "República Centro-Africano",
                "common": "República Centro-Africana"
            },
            "rus": {
                "official": "Центрально-Африканская Республика",
                "common": "Центральноафриканская Республика"
            },
            "slk": {
                "official": "Stredoafrická republika",
                "common": "Stredoafrická republika"
            },
            "spa": {
                "official": "República Centroafricana",
                "common": "República Centroafricana"
            },
            "fin": {
                "official": "Keski-Afrikan tasavalta",
                "common": "Keski-Afrikan tasavalta"
            },
            "est": {
                "official": "Kesk-Aafrika Vabariik",
                "common": "Kesk-Aafrika Vabariik"
            },
            "zho": {
                "official": "中非共和国",
                "common": "中非共和国"
            },
            "pol": {
                "official": "Republika Środkowoafrykańska",
                "common": "Republika Środkowoafrykańska"
            }
        },
        "latlng": [
            7,
            21
        ],
        "demonym": "Central African",
        "landlocked": true,
        "borders": [
            "CMR",
            "TCD",
            "COD",
            "COG",
            "SSD",
            "SDN"
        ],
        "area": 622984,
        "flag": "🇨🇫"
    },
    {
        "name": {
            "common": "Canada",
            "official": "Canada",
            "native": {
                "eng": {
                    "official": "Canada",
                    "common": "Canada"
                },
                "fra": {
                    "official": "Canada",
                    "common": "Canada"
                }
            }
        },
        "tld": [
            ".ca"
        ],
        "cca2": "CA",
        "ccn3": "124",
        "cca3": "CAN",
        "cioc": "CAN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CAD"
        ],
        "callingCode": [
            "1"
        ],
        "capital": [
            "Ottawa"
        ],
        "altSpellings": [
            "CA"
        ],
        "region": "Americas",
        "subregion": "North America",
        "languages": {
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Kanada",
                "common": "Kanada"
            },
            "cym": {
                "official": "Canada",
                "common": "Canada"
            },
            "deu": {
                "official": "Kanada",
                "common": "Kanada"
            },
            "fra": {
                "official": "Canada",
                "common": "Canada"
            },
            "hrv": {
                "official": "Kanada",
                "common": "Kanada"
            },
            "ita": {
                "official": "Canada",
                "common": "Canada"
            },
            "jpn": {
                "official": "カナダ",
                "common": "カナダ"
            },
            "nld": {
                "official": "Canada",
                "common": "Canada"
            },
            "por": {
                "official": "Canadá",
                "common": "Canadá"
            },
            "rus": {
                "official": "Канада",
                "common": "Канада"
            },
            "slk": {
                "official": "Kanada",
                "common": "Kanada"
            },
            "spa": {
                "official": "Canadá",
                "common": "Canadá"
            },
            "fin": {
                "official": "Kanada",
                "common": "Kanada"
            },
            "est": {
                "official": "Kanada",
                "common": "Kanada"
            },
            "zho": {
                "official": "加拿大",
                "common": "加拿大"
            },
            "pol": {
                "official": "Kanada",
                "common": "Kanada"
            }
        },
        "latlng": [
            60,
            -95
        ],
        "demonym": "Canadian",
        "landlocked": false,
        "borders": [
            "USA"
        ],
        "area": 9984670,
        "flag": "🇨🇦"
    },
    {
        "name": {
            "common": "Cocos (Keeling) Islands",
            "official": "Territory of the Cocos (Keeling) Islands",
            "native": {
                "eng": {
                    "official": "Territory of the Cocos (Keeling) Islands",
                    "common": "Cocos (Keeling) Islands"
                }
            }
        },
        "tld": [
            ".cc"
        ],
        "cca2": "CC",
        "ccn3": "166",
        "cca3": "CCK",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [
            "61"
        ],
        "capital": [
            "West Island"
        ],
        "altSpellings": [
            "CC",
            "Keeling Islands",
            "Cocos Islands"
        ],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Kokosové ostrovy",
                "common": "Kokosové ostrovy"
            },
            "cym": {
                "official": "Tiriogaeth yr Ynysoedd Cocos (Keeling)",
                "common": "Ynysoedd Cocos"
            },
            "deu": {
                "official": "Gebiet der Kokos- (Keeling-) Inseln",
                "common": "Kokosinseln"
            },
            "fra": {
                "official": "Territoire des îles Cocos (Keeling)",
                "common": "Îles Cocos"
            },
            "hrv": {
                "official": "Teritoriju Kokosovi (Keeling) Islands",
                "common": "Kokosovi Otoci"
            },
            "ita": {
                "official": "Territorio della (Keeling) Isole Cocos",
                "common": "Isole Cocos e Keeling"
            },
            "jpn": {
                "official": "ココス諸島の領土",
                "common": "ココス（キーリング）諸島"
            },
            "nld": {
                "official": "Grondgebied van de Eilanden Cocos (Keeling )",
                "common": "Cocoseilanden"
            },
            "por": {
                "official": "Território dos Cocos (Keeling)",
                "common": "Ilhas Cocos (Keeling)"
            },
            "rus": {
                "official": "Территория Кокосовые (Килинг) острова",
                "common": "Кокосовые острова"
            },
            "slk": {
                "official": "Kokosové ostrovy",
                "common": "Kokosové ostrovy"
            },
            "spa": {
                "official": "Territorio de los (Keeling) Islas Cocos",
                "common": "Islas Cocos o Islas Keeling"
            },
            "fin": {
                "official": "Kookossaaret",
                "common": "Kookossaaret"
            },
            "est": {
                "official": "Kookossaarte ala",
                "common": "Kookossaared"
            },
            "zho": {
                "official": "科科斯",
                "common": "科科斯"
            },
            "pol": {
                "official": "Wyspy Kokosowe",
                "common": "Wyspy Kokosowe"
            }
        },
        "latlng": [
            -12.5,
            96.83333333
        ],
        "demonym": "Cocos Islander",
        "landlocked": false,
        "borders": [],
        "area": 14,
        "flag": "🇨🇨"
    },
    {
        "name": {
            "common": "Switzerland",
            "official": "Swiss Confederation",
            "native": {
                "fra": {
                    "official": "Confédération suisse",
                    "common": "Suisse"
                },
                "gsw": {
                    "official": "Schweizerische Eidgenossenschaft",
                    "common": "Schweiz"
                },
                "ita": {
                    "official": "Confederazione Svizzera",
                    "common": "Svizzera"
                },
                "roh": {
                    "official": "Confederaziun svizra",
                    "common": "Svizra"
                }
            }
        },
        "tld": [
            ".ch"
        ],
        "cca2": "CH",
        "ccn3": "756",
        "cca3": "CHE",
        "cioc": "SUI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CHF"
        ],
        "callingCode": [
            "41"
        ],
        "capital": [
            "Bern"
        ],
        "altSpellings": [
            "CH",
            "Swiss Confederation",
            "Schweiz",
            "Suisse",
            "Svizzera",
            "Svizra"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "fra": "French",
            "gsw": "Swiss German",
            "ita": "Italian",
            "roh": "Romansh"
        },
        "translations": {
            "ces": {
                "official": "Švýcarská konfederace",
                "common": "Švýcarsko"
            },
            "deu": {
                "official": "Schweizerische Eidgenossenschaft",
                "common": "Schweiz"
            },
            "fra": {
                "official": "Confédération suisse",
                "common": "Suisse"
            },
            "hrv": {
                "official": "švicarska Konfederacija",
                "common": "Švicarska"
            },
            "ita": {
                "official": "Confederazione svizzera",
                "common": "Svizzera"
            },
            "jpn": {
                "official": "スイス連邦",
                "common": "スイス"
            },
            "nld": {
                "official": "Zwitserse Confederatie",
                "common": "Zwitserland"
            },
            "por": {
                "official": "Confederação Suíça",
                "common": "Suíça"
            },
            "rus": {
                "official": "Швейцарская Конфедерация",
                "common": "Швейцария"
            },
            "slk": {
                "official": "Švajčiarska konfederácia",
                "common": "Švajčiarsko"
            },
            "spa": {
                "official": "Confederación Suiza",
                "common": "Suiza"
            },
            "fin": {
                "official": "Sveitsin valaliitto",
                "common": "Sveitsi"
            },
            "est": {
                "official": "Šveitsi Konföderatsioon",
                "common": "Šveits"
            },
            "zho": {
                "official": "瑞士联邦",
                "common": "瑞士"
            },
            "pol": {
                "official": "Konfederacja Szwajcarska",
                "common": "Szwajcaria"
            }
        },
        "latlng": [
            47,
            8
        ],
        "demonym": "Swiss",
        "landlocked": true,
        "borders": [
            "AUT",
            "FRA",
            "ITA",
            "LIE",
            "DEU"
        ],
        "area": 41284,
        "flag": "🇨🇭"
    },
    {
        "name": {
            "common": "Chile",
            "official": "Republic of Chile",
            "native": {
                "spa": {
                    "official": "República de Chile",
                    "common": "Chile"
                }
            }
        },
        "tld": [
            ".cl"
        ],
        "cca2": "CL",
        "ccn3": "152",
        "cca3": "CHL",
        "cioc": "CHI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CLP"
        ],
        "callingCode": [
            "56"
        ],
        "capital": [
            "Santiago"
        ],
        "altSpellings": [
            "CL",
            "Republic of Chile",
            "República de Chile"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Chilská republika",
                "common": "Chile"
            },
            "cym": {
                "official": "Gweriniaeth Chile",
                "common": "Chile"
            },
            "deu": {
                "official": "Republik Chile",
                "common": "Chile"
            },
            "fra": {
                "official": "République du Chili",
                "common": "Chili"
            },
            "hrv": {
                "official": "Republika Čile",
                "common": "Čile"
            },
            "ita": {
                "official": "Repubblica del Cile",
                "common": "Cile"
            },
            "jpn": {
                "official": "チリ共和国",
                "common": "チリ"
            },
            "nld": {
                "official": "Republiek Chili",
                "common": "Chili"
            },
            "por": {
                "official": "República do Chile",
                "common": "Chile"
            },
            "rus": {
                "official": "Республика Чили",
                "common": "Чили"
            },
            "slk": {
                "official": "Čílska republika",
                "common": "Čile"
            },
            "spa": {
                "official": "República de Chile",
                "common": "Chile"
            },
            "fin": {
                "official": "Chilen tasavalta",
                "common": "Chile"
            },
            "est": {
                "official": "Tšiili Vabariik",
                "common": "Tšiili"
            },
            "zho": {
                "official": "智利共和国",
                "common": "智利"
            },
            "pol": {
                "official": "Republika Chile",
                "common": "Chile"
            }
        },
        "latlng": [
            -30,
            -71
        ],
        "demonym": "Chilean",
        "landlocked": false,
        "borders": [
            "ARG",
            "BOL",
            "PER"
        ],
        "area": 756102,
        "flag": "🇨🇱"
    },
    {
        "name": {
            "common": "China",
            "official": "People's Republic of China",
            "native": {
                "zho": {
                    "official": "中华人民共和国",
                    "common": "中国"
                }
            }
        },
        "tld": [
            ".cn",
            ".中国",
            ".中國",
            ".公司",
            ".网络"
        ],
        "cca2": "CN",
        "ccn3": "156",
        "cca3": "CHN",
        "cioc": "CHN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CNY"
        ],
        "callingCode": [
            "86"
        ],
        "capital": [
            "Beijing"
        ],
        "altSpellings": [
            "CN",
            "Zhōngguó",
            "Zhongguo",
            "Zhonghua",
            "People's Republic of China",
            "中华人民共和国",
            "Zhōnghuá Rénmín Gònghéguó"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "zho": "Chinese"
        },
        "translations": {
            "ces": {
                "official": "Čínská lidová republika",
                "common": "Čína"
            },
            "cym": {
                "official": "Gweriniaeth Pobl Tsieina",
                "common": "Tsieina"
            },
            "deu": {
                "official": "Volksrepublik China",
                "common": "China"
            },
            "fra": {
                "official": "République populaire de Chine",
                "common": "Chine"
            },
            "hrv": {
                "official": "Narodna Republika Kina",
                "common": "Kina"
            },
            "ita": {
                "official": "Repubblica popolare cinese",
                "common": "Cina"
            },
            "jpn": {
                "official": "中華人民共和国",
                "common": "中国"
            },
            "nld": {
                "official": "Volksrepubliek China",
                "common": "China"
            },
            "por": {
                "official": "República Popular da China",
                "common": "China"
            },
            "rus": {
                "official": "Народная Республика Китай",
                "common": "Китай"
            },
            "slk": {
                "official": "Čínska ľudová republika",
                "common": "Čína"
            },
            "spa": {
                "official": "República Popular de China",
                "common": "China"
            },
            "fin": {
                "official": "Kiinan kansantasavalta",
                "common": "Kiina"
            },
            "est": {
                "official": "Hiina Rahvavabariik",
                "common": "Hiina"
            },
            "pol": {
                "official": "Chińska Republika Ludowa",
                "common": "Chiny"
            }
        },
        "latlng": [
            35,
            105
        ],
        "demonym": "Chinese",
        "landlocked": false,
        "borders": [
            "AFG",
            "BTN",
            "MMR",
            "HKG",
            "IND",
            "KAZ",
            "NPL",
            "PRK",
            "KGZ",
            "LAO",
            "MAC",
            "MNG",
            "PAK",
            "RUS",
            "TJK",
            "VNM"
        ],
        "area": 9706961,
        "flag": "🇨🇳"
    },
    {
        "name": {
            "common": "Ivory Coast",
            "official": "Republic of Côte d'Ivoire",
            "native": {
                "fra": {
                    "official": "République de Côte d'Ivoire",
                    "common": "Côte d'Ivoire"
                }
            }
        },
        "tld": [
            ".ci"
        ],
        "cca2": "CI",
        "ccn3": "384",
        "cca3": "CIV",
        "cioc": "CIV",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "225"
        ],
        "capital": [
            "Yamoussoukro"
        ],
        "altSpellings": [
            "CI",
            "Côte d'Ivoire",
            "Ivory Coast",
            "Republic of Côte d'Ivoire",
            "République de Côte d'Ivoire"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Republika Pobřeží slonoviny",
                "common": "Pobřeží slonoviny"
            },
            "deu": {
                "official": "Republik Côte d'Ivoire",
                "common": "Elfenbeinküste"
            },
            "fra": {
                "official": "République de Côte d' Ivoire",
                "common": "Côte d'Ivoire"
            },
            "hrv": {
                "official": "Republika Côte d'Ivoire",
                "common": "Obala Bjelokosti"
            },
            "ita": {
                "official": "Repubblica della Costa d'Avorio",
                "common": "Costa d'Avorio"
            },
            "jpn": {
                "official": "コートジボワール共和国",
                "common": "コートジボワール"
            },
            "nld": {
                "official": "Republiek Ivoorkust",
                "common": "Ivoorkust"
            },
            "por": {
                "official": "República da Côte d'Ivoire",
                "common": "Costa do Marfim"
            },
            "rus": {
                "official": "Республика Кот-д'Ивуаре",
                "common": "Кот-д’Ивуар"
            },
            "slk": {
                "official": "Republika Pobrežie Slonoviny",
                "common": "Pobržie Slonoviny"
            },
            "spa": {
                "official": "República de Côte d'Ivoire",
                "common": "Costa de Marfil"
            },
            "fin": {
                "official": "Norsunluurannikon tasavalta",
                "common": "Norsunluurannikko"
            },
            "est": {
                "official": "Côte d’Ivoire’i Vabariik",
                "common": "Elevandiluurannik"
            },
            "zho": {
                "official": "科特迪瓦共和国",
                "common": "科特迪瓦"
            },
            "pol": {
                "official": "Republika WybrzeŻa Kości Słoniowej",
                "common": "WybrzeŻe Kości Słoniowej"
            }
        },
        "latlng": [
            8,
            -5
        ],
        "demonym": "Ivorian",
        "landlocked": false,
        "borders": [
            "BFA",
            "GHA",
            "GIN",
            "LBR",
            "MLI"
        ],
        "area": 322463,
        "flag": "🇨🇮"
    },
    {
        "name": {
            "common": "Cameroon",
            "official": "Republic of Cameroon",
            "native": {
                "eng": {
                    "official": "Republic of Cameroon",
                    "common": "Cameroon"
                },
                "fra": {
                    "official": "République du Cameroun",
                    "common": "Cameroun"
                }
            }
        },
        "tld": [
            ".cm"
        ],
        "cca2": "CM",
        "ccn3": "120",
        "cca3": "CMR",
        "cioc": "CMR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XAF"
        ],
        "callingCode": [
            "237"
        ],
        "capital": [
            "Yaoundé"
        ],
        "altSpellings": [
            "CM",
            "Republic of Cameroon",
            "République du Cameroun"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Kamerunská republika",
                "common": "Kamerun"
            },
            "cym": {
                "official": "Gweriniaeth Camerŵn",
                "common": "Camerŵn"
            },
            "deu": {
                "official": "Republik Kamerun",
                "common": "Kamerun"
            },
            "fra": {
                "official": "République du Cameroun",
                "common": "Cameroun"
            },
            "hrv": {
                "official": "Republika Kamerun",
                "common": "Kamerun"
            },
            "ita": {
                "official": "Repubblica del Camerun",
                "common": "Camerun"
            },
            "jpn": {
                "official": "カメルーン共和国",
                "common": "カメルーン"
            },
            "nld": {
                "official": "Republiek Kameroen",
                "common": "Kameroen"
            },
            "por": {
                "official": "República dos Camarões",
                "common": "Camarões"
            },
            "rus": {
                "official": "Республика Камерун",
                "common": "Камерун"
            },
            "slk": {
                "official": "Kamerunská republika",
                "common": "Kamerun"
            },
            "spa": {
                "official": "República de Camerún",
                "common": "Camerún"
            },
            "fin": {
                "official": "Kamerunin tasavalta",
                "common": "Kamerun"
            },
            "est": {
                "official": "Kameruni Vabariik",
                "common": "Kamerun"
            },
            "zho": {
                "official": "喀麦隆共和国",
                "common": "喀麦隆"
            },
            "pol": {
                "official": "Republika WybrzeŻa Kości Słoniowej",
                "common": "WybrzeŻe Kości Słoniowej"
            }
        },
        "latlng": [
            6,
            12
        ],
        "demonym": "Cameroonian",
        "landlocked": false,
        "borders": [
            "CAF",
            "TCD",
            "COG",
            "GNQ",
            "GAB",
            "NGA"
        ],
        "area": 475442,
        "flag": "🇨🇲"
    },
    {
        "name": {
            "common": "DR Congo",
            "official": "Democratic Republic of the Congo",
            "native": {
                "fra": {
                    "official": "République démocratique du Congo",
                    "common": "RD Congo"
                },
                "kon": {
                    "official": "Repubilika ya Kongo Demokratiki",
                    "common": "Repubilika ya Kongo Demokratiki"
                },
                "lin": {
                    "official": "Republiki ya Kongó Demokratiki",
                    "common": "Republiki ya Kongó Demokratiki"
                },
                "lua": {
                    "official": "Ditunga dia Kongu wa Mungalaata",
                    "common": "Ditunga dia Kongu wa Mungalaata"
                },
                "swa": {
                    "official": "Jamhuri ya Kidemokrasia ya Kongo",
                    "common": "Jamhuri ya Kidemokrasia ya Kongo"
                }
            }
        },
        "tld": [
            ".cd"
        ],
        "cca2": "CD",
        "ccn3": "180",
        "cca3": "COD",
        "cioc": "COD",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CDF"
        ],
        "callingCode": [
            "243"
        ],
        "capital": [
            "Kinshasa"
        ],
        "altSpellings": [
            "CD",
            "DR Congo",
            "Congo-Kinshasa",
            "Congo, the Democratic Republic of the",
            "DRC"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "kon": "Kikongo",
            "lin": "Lingala",
            "lua": "Tshiluba",
            "swa": "Swahili"
        },
        "translations": {
            "ces": {
                "official": "Demokratická republika Kongo",
                "common": "DR Kongo"
            },
            "cym": {
                "official": "Gweriniaeth Ddemocrataidd Congo",
                "common": "Gweriniaeth Ddemocrataidd Congo"
            },
            "deu": {
                "official": "Demokratische Republik Kongo",
                "common": "Kongo (Dem. Rep.)"
            },
            "fra": {
                "official": "République démocratique du Congo",
                "common": "Congo (Rép. dém.)"
            },
            "hrv": {
                "official": "Demokratska Republika Kongo",
                "common": "Kongo, Demokratska Republika"
            },
            "ita": {
                "official": "Repubblica Democratica del Congo",
                "common": "Congo (Rep. Dem.)"
            },
            "jpn": {
                "official": "コンゴ民主共和国",
                "common": "コンゴ民主共和国"
            },
            "nld": {
                "official": "Democratische Republiek Congo",
                "common": "Congo (DRC)"
            },
            "por": {
                "official": "República Democrática do Congo",
                "common": "República Democrática do Congo"
            },
            "rus": {
                "official": "Демократическая Республика Конго",
                "common": "Демократическая Республика Конго"
            },
            "slk": {
                "official": "Konžská demokratická republika",
                "common": "Kongo"
            },
            "spa": {
                "official": "República Democrática del Congo",
                "common": "Congo (Rep. Dem.)"
            },
            "fin": {
                "official": "Kongon demokraattinen tasavalta",
                "common": "Kongon demokraattinen tasavalta"
            },
            "est": {
                "official": "Kongo Demokraatlik Vabariik",
                "common": "Kongo DV"
            },
            "zho": {
                "official": "刚果民主共和国",
                "common": "民主刚果"
            },
            "pol": {
                "official": "Demokratyczna Republika Konga",
                "common": "Demokratyczna Republika Konga"
            }
        },
        "latlng": [
            0,
            25
        ],
        "demonym": "Congolese",
        "landlocked": false,
        "borders": [
            "AGO",
            "BDI",
            "CAF",
            "COG",
            "RWA",
            "SSD",
            "TZA",
            "UGA",
            "ZMB"
        ],
        "area": 2344858,
        "flag": "🇨🇩"
    },
    {
        "name": {
            "common": "Republic of the Congo",
            "official": "Republic of the Congo",
            "native": {
                "fra": {
                    "official": "République du Congo",
                    "common": "République du Congo"
                },
                "kon": {
                    "official": "Repubilika ya Kongo",
                    "common": "Repubilika ya Kongo"
                },
                "lin": {
                    "official": "Republíki ya Kongó",
                    "common": "Republíki ya Kongó"
                }
            }
        },
        "tld": [
            ".cg"
        ],
        "cca2": "CG",
        "ccn3": "178",
        "cca3": "COG",
        "cioc": "CGO",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XAF"
        ],
        "callingCode": [
            "242"
        ],
        "capital": [
            "Brazzaville"
        ],
        "altSpellings": [
            "CG",
            "Congo",
            "Congo-Brazzaville"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "kon": "Kikongo",
            "lin": "Lingala"
        },
        "translations": {
            "ces": {
                "official": "Konžská republika",
                "common": "Kongo"
            },
            "cym": {
                "official": "Gweriniaeth y Congo",
                "common": "Gweriniaeth y Congo"
            },
            "deu": {
                "official": "Republik Kongo",
                "common": "Kongo"
            },
            "fra": {
                "official": "République du Congo",
                "common": "Congo"
            },
            "hrv": {
                "official": "Republika Kongo",
                "common": "Kongo"
            },
            "ita": {
                "official": "Repubblica del Congo",
                "common": "Congo"
            },
            "jpn": {
                "official": "コンゴ共和国",
                "common": "コンゴ共和国"
            },
            "nld": {
                "official": "Republiek Congo",
                "common": "Congo"
            },
            "por": {
                "official": "República do Congo",
                "common": "Congo"
            },
            "rus": {
                "official": "Республика Конго",
                "common": "Республика Конго"
            },
            "slk": {
                "official": "Konžská republika",
                "common": "Kongo"
            },
            "spa": {
                "official": "República del Congo",
                "common": "Congo"
            },
            "fin": {
                "official": "Kongon tasavalta",
                "common": "Kongo-Brazzaville"
            },
            "est": {
                "official": "Kongo Vabariik",
                "common": "Kongo Vabariik"
            },
            "zho": {
                "official": "刚果共和国",
                "common": "刚果"
            },
            "pol": {
                "official": "Republika Konga",
                "common": "Kongo"
            }
        },
        "latlng": [
            -1,
            15
        ],
        "demonym": "Congolese",
        "landlocked": false,
        "borders": [
            "AGO",
            "CMR",
            "CAF",
            "COD",
            "GAB"
        ],
        "area": 342000,
        "flag": "🇨🇬"
    },
    {
        "name": {
            "common": "Cook Islands",
            "official": "Cook Islands",
            "native": {
                "eng": {
                    "official": "Cook Islands",
                    "common": "Cook Islands"
                },
                "rar": {
                    "official": "Kūki 'Āirani",
                    "common": "Kūki 'Āirani"
                }
            }
        },
        "tld": [
            ".ck"
        ],
        "cca2": "CK",
        "ccn3": "184",
        "cca3": "COK",
        "cioc": "COK",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "NZD",
            "CKD"
        ],
        "callingCode": [
            "682"
        ],
        "capital": [
            "Avarua"
        ],
        "altSpellings": [
            "CK",
            "Kūki 'Āirani"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "rar": "Cook Islands Māori"
        },
        "translations": {
            "ces": {
                "official": "Cookovy ostrovy",
                "common": "Cookovy ostrovy"
            },
            "cym": {
                "official": "Ynysoedd Cook",
                "common": "Ynysoedd Cook"
            },
            "deu": {
                "official": "Cookinseln",
                "common": "Cookinseln"
            },
            "fra": {
                "official": "Îles Cook",
                "common": "Îles Cook"
            },
            "hrv": {
                "official": "Cook Islands",
                "common": "Cookovo Otočje"
            },
            "ita": {
                "official": "Isole Cook",
                "common": "Isole Cook"
            },
            "jpn": {
                "official": "クック諸島",
                "common": "クック諸島"
            },
            "nld": {
                "official": "Cook eilanden",
                "common": "Cookeilanden"
            },
            "por": {
                "official": "Ilhas Cook",
                "common": "Ilhas Cook"
            },
            "rus": {
                "official": "острова Кука",
                "common": "Острова Кука"
            },
            "slk": {
                "official": "Cookove ostrovy",
                "common": "Cookove ostrovy"
            },
            "spa": {
                "official": "Islas Cook",
                "common": "Islas Cook"
            },
            "fin": {
                "official": "Cookinsaaret",
                "common": "Cookinsaaret"
            },
            "est": {
                "official": "Cooki saared",
                "common": "Cooki saared"
            },
            "zho": {
                "official": "库克群岛",
                "common": "库克群岛"
            },
            "pol": {
                "official": "Wyspy Cooka",
                "common": "Wyspy Cooka"
            }
        },
        "latlng": [
            -21.23333333,
            -159.76666666
        ],
        "demonym": "Cook Islander",
        "landlocked": false,
        "borders": [],
        "area": 236,
        "flag": "🇨🇰"
    },
    {
        "name": {
            "common": "Colombia",
            "official": "Republic of Colombia",
            "native": {
                "spa": {
                    "official": "República de Colombia",
                    "common": "Colombia"
                }
            }
        },
        "tld": [
            ".co"
        ],
        "cca2": "CO",
        "ccn3": "170",
        "cca3": "COL",
        "cioc": "COL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "COP"
        ],
        "callingCode": [
            "57"
        ],
        "capital": [
            "Bogotá"
        ],
        "altSpellings": [
            "CO",
            "Republic of Colombia",
            "República de Colombia"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Kolumbijská republika",
                "common": "Kolumbie"
            },
            "cym": {
                "official": "Gweriniaeth Colombia",
                "common": "Colombia"
            },
            "deu": {
                "official": "Republik Kolumbien",
                "common": "Kolumbien"
            },
            "fra": {
                "official": "République de Colombie",
                "common": "Colombie"
            },
            "hrv": {
                "official": "Republika Kolumbija",
                "common": "Kolumbija"
            },
            "ita": {
                "official": "Repubblica di Colombia",
                "common": "Colombia"
            },
            "jpn": {
                "official": "コロンビア共和国",
                "common": "コロンビア"
            },
            "nld": {
                "official": "Republiek Colombia",
                "common": "Colombia"
            },
            "por": {
                "official": "República da Colômbia",
                "common": "Colômbia"
            },
            "rus": {
                "official": "Республика Колумбия",
                "common": "Колумбия"
            },
            "slk": {
                "official": "Kolumbijská republika",
                "common": "Kolumbia"
            },
            "spa": {
                "official": "República de Colombia",
                "common": "Colombia"
            },
            "fin": {
                "official": "Kolumbian tasavalta",
                "common": "Kolumbia"
            },
            "est": {
                "official": "Colombia Vabariik",
                "common": "Colombia"
            },
            "zho": {
                "official": "哥伦比亚共和国",
                "common": "哥伦比亚"
            },
            "pol": {
                "official": "Republika Kolumbii",
                "common": "Kolumbia"
            }
        },
        "latlng": [
            4,
            -72
        ],
        "demonym": "Colombian",
        "landlocked": false,
        "borders": [
            "BRA",
            "ECU",
            "PAN",
            "PER",
            "VEN"
        ],
        "area": 1141748,
        "flag": "🇨🇴"
    },
    {
        "name": {
            "common": "Comoros",
            "official": "Union of the Comoros",
            "native": {
                "ara": {
                    "official": "الاتحاد القمري",
                    "common": "القمر\u200e"
                },
                "fra": {
                    "official": "Union des Comores",
                    "common": "Comores"
                },
                "zdj": {
                    "official": "Udzima wa Komori",
                    "common": "Komori"
                }
            }
        },
        "tld": [
            ".km"
        ],
        "cca2": "KM",
        "ccn3": "174",
        "cca3": "COM",
        "cioc": "COM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KMF"
        ],
        "callingCode": [
            "269"
        ],
        "capital": [
            "Moroni"
        ],
        "altSpellings": [
            "KM",
            "Union of the Comoros",
            "Union des Comores",
            "Udzima wa Komori",
            "al-Ittiḥād al-Qumurī"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "fra": "French",
            "zdj": "Comorian"
        },
        "translations": {
            "ces": {
                "official": "Komorský svaz",
                "common": "Komory"
            },
            "cym": {
                "official": "Undeb y Comoros",
                "common": "Y Comoros"
            },
            "deu": {
                "official": "Union der Komoren",
                "common": "Komoren"
            },
            "fra": {
                "official": "Union des Comores",
                "common": "Comores"
            },
            "hrv": {
                "official": "Savez Komori",
                "common": "Komori"
            },
            "ita": {
                "official": "Unione delle Comore",
                "common": "Comore"
            },
            "jpn": {
                "official": "コモロ連合",
                "common": "コモロ"
            },
            "nld": {
                "official": "Unie van de Comoren",
                "common": "Comoren"
            },
            "por": {
                "official": "União das Comores",
                "common": "Comores"
            },
            "rus": {
                "official": "Союз Коморских Островов",
                "common": "Коморы"
            },
            "slk": {
                "official": "Komorská únia",
                "common": "Komory"
            },
            "spa": {
                "official": "Unión de las Comoras",
                "common": "Comoras"
            },
            "fin": {
                "official": "Komorien liitto",
                "common": "Komorit"
            },
            "est": {
                "official": "Komoori Liit",
                "common": "Komoorid"
            },
            "zho": {
                "official": "科摩罗联盟",
                "common": "科摩罗"
            },
            "pol": {
                "official": "Związek Komorów",
                "common": "Komory"
            }
        },
        "latlng": [
            -12.16666666,
            44.25
        ],
        "demonym": "Comoran",
        "landlocked": false,
        "borders": [],
        "area": 1862,
        "flag": "🇰🇲"
    },
    {
        "name": {
            "common": "Cape Verde",
            "official": "Republic of Cabo Verde",
            "native": {
                "por": {
                    "official": "República de Cabo Verde",
                    "common": "Cabo Verde"
                }
            }
        },
        "tld": [
            ".cv"
        ],
        "cca2": "CV",
        "ccn3": "132",
        "cca3": "CPV",
        "cioc": "CPV",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CVE"
        ],
        "callingCode": [
            "238"
        ],
        "capital": [
            "Praia"
        ],
        "altSpellings": [
            "CV",
            "Republic of Cabo Verde",
            "República de Cabo Verde"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "ces": {
                "official": "Kapverdská republika",
                "common": "Kapverdy"
            },
            "cym": {
                "official": "Gweriniaeth Cabo Verde",
                "common": "Penrhyn Verde"
            },
            "deu": {
                "official": "Republik Cabo Verde",
                "common": "Kap Verde"
            },
            "fra": {
                "official": "République du Cap-Vert",
                "common": "Îles du Cap-Vert"
            },
            "hrv": {
                "official": "Republika Cabo Verde",
                "common": "Zelenortska Republika"
            },
            "ita": {
                "official": "Repubblica di Capo Verde",
                "common": "Capo Verde"
            },
            "jpn": {
                "official": "カーボベルデ共和国",
                "common": "カーボベルデ"
            },
            "nld": {
                "official": "Republiek van Cabo Verde",
                "common": "Kaapverdië"
            },
            "por": {
                "official": "República de Cabo Verde",
                "common": "Cabo Verde"
            },
            "rus": {
                "official": "Республика Кабо -Верде",
                "common": "Кабо-Верде"
            },
            "slk": {
                "official": "Kapverdská republika",
                "common": "Kapverdy"
            },
            "spa": {
                "official": "República de Cabo Verde",
                "common": "Cabo Verde"
            },
            "fin": {
                "official": "Kap Verden tasavalta",
                "common": "Kap Verde"
            },
            "est": {
                "official": "Cabo Verde Vabariik",
                "common": "Roheneemesaared"
            },
            "zho": {
                "official": "佛得角共和国",
                "common": "佛得角"
            },
            "pol": {
                "official": "Republika Zielonego Przylądka",
                "common": "Republika Zielonego Przylądka"
            }
        },
        "latlng": [
            16,
            -24
        ],
        "demonym": "Cape Verdian",
        "landlocked": false,
        "borders": [],
        "area": 4033,
        "flag": "🇨🇻"
    },
    {
        "name": {
            "common": "Costa Rica",
            "official": "Republic of Costa Rica",
            "native": {
                "spa": {
                    "official": "República de Costa Rica",
                    "common": "Costa Rica"
                }
            }
        },
        "tld": [
            ".cr"
        ],
        "cca2": "CR",
        "ccn3": "188",
        "cca3": "CRI",
        "cioc": "CRC",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CRC"
        ],
        "callingCode": [
            "506"
        ],
        "capital": [
            "San José"
        ],
        "altSpellings": [
            "CR",
            "Republic of Costa Rica",
            "República de Costa Rica"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Kostarická republika",
                "common": "Kostarika"
            },
            "cym": {
                "official": "Gweriniaeth Costa Rica",
                "common": "Costa Rica"
            },
            "deu": {
                "official": "Republik Costa Rica",
                "common": "Costa Rica"
            },
            "fra": {
                "official": "République du Costa Rica",
                "common": "Costa Rica"
            },
            "hrv": {
                "official": "Republika Kostarika",
                "common": "Kostarika"
            },
            "ita": {
                "official": "Repubblica di Costa Rica",
                "common": "Costa Rica"
            },
            "jpn": {
                "official": "コスタリカ共和国",
                "common": "コスタリカ"
            },
            "nld": {
                "official": "Republiek Costa Rica",
                "common": "Costa Rica"
            },
            "por": {
                "official": "República da Costa Rica",
                "common": "Costa Rica"
            },
            "rus": {
                "official": "Республика Коста-Рика",
                "common": "Коста-Рика"
            },
            "slk": {
                "official": "Kostarická republika",
                "common": "Kostarika"
            },
            "spa": {
                "official": "República de Costa Rica",
                "common": "Costa Rica"
            },
            "fin": {
                "official": "Costa Rican tasavalta",
                "common": "Costa Rica"
            },
            "est": {
                "official": "Costa Rica Vabariik",
                "common": "Costa Rica"
            },
            "zho": {
                "official": "哥斯达黎加共和国",
                "common": "哥斯达黎加"
            },
            "pol": {
                "official": "Republika Kostaryki",
                "common": "Kostaryka"
            }
        },
        "latlng": [
            10,
            -84
        ],
        "demonym": "Costa Rican",
        "landlocked": false,
        "borders": [
            "NIC",
            "PAN"
        ],
        "area": 51100,
        "flag": "🇨🇷"
    },
    {
        "name": {
            "common": "Cuba",
            "official": "Republic of Cuba",
            "native": {
                "spa": {
                    "official": "República de Cuba",
                    "common": "Cuba"
                }
            }
        },
        "tld": [
            ".cu"
        ],
        "cca2": "CU",
        "ccn3": "192",
        "cca3": "CUB",
        "cioc": "CUB",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CUC",
            "CUP"
        ],
        "callingCode": [
            "53"
        ],
        "capital": [
            "Havana"
        ],
        "altSpellings": [
            "CU",
            "Republic of Cuba",
            "República de Cuba"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Kubánská republika",
                "common": "Kuba"
            },
            "cym": {
                "official": "Gweriniaeth Ciwba",
                "common": "Ciwba"
            },
            "deu": {
                "official": "Republik Kuba",
                "common": "Kuba"
            },
            "fra": {
                "official": "République de Cuba",
                "common": "Cuba"
            },
            "hrv": {
                "official": "Republika Kuba",
                "common": "Kuba"
            },
            "ita": {
                "official": "Repubblica di Cuba",
                "common": "Cuba"
            },
            "jpn": {
                "official": "キューバ共和国",
                "common": "キューバ"
            },
            "nld": {
                "official": "Republiek Cuba",
                "common": "Cuba"
            },
            "por": {
                "official": "República de Cuba",
                "common": "Cuba"
            },
            "rus": {
                "official": "Республика Куба",
                "common": "Куба"
            },
            "slk": {
                "official": "Kubánska republika",
                "common": "Kuba"
            },
            "spa": {
                "official": "República de Cuba",
                "common": "Cuba"
            },
            "fin": {
                "official": "Kuuban tasavalta",
                "common": "Kuuba"
            },
            "est": {
                "official": "Kuuba Vabariik",
                "common": "Kuuba"
            },
            "zho": {
                "official": "古巴共和国",
                "common": "古巴"
            },
            "pol": {
                "official": "Republika Kuby",
                "common": "Kuba"
            }
        },
        "latlng": [
            21.5,
            -80
        ],
        "demonym": "Cuban",
        "landlocked": false,
        "borders": [],
        "area": 109884,
        "flag": "🇨🇺"
    },
    {
        "name": {
            "common": "Curaçao",
            "official": "Country of Curaçao",
            "native": {
                "eng": {
                    "official": "Country of Curaçao",
                    "common": "Curaçao"
                },
                "nld": {
                    "official": "Land Curaçao",
                    "common": "Curaçao"
                },
                "pap": {
                    "official": "Pais Kòrsou",
                    "common": "Pais Kòrsou"
                }
            }
        },
        "tld": [
            ".cw"
        ],
        "cca2": "CW",
        "ccn3": "531",
        "cca3": "CUW",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "ANG"
        ],
        "callingCode": [
            "5999"
        ],
        "capital": [
            "Willemstad"
        ],
        "altSpellings": [
            "CW",
            "Curacao",
            "Kòrsou",
            "Country of Curaçao",
            "Land Curaçao",
            "Pais Kòrsou"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "nld": "Dutch",
            "pap": "Papiamento"
        },
        "translations": {
            "ces": {
                "official": "Autonomní země Curaçao",
                "common": "Curaçao"
            },
            "deu": {
                "official": "Land Curaçao",
                "common": "Curaçao"
            },
            "fra": {
                "official": "Curaçao",
                "common": "Curaçao"
            },
            "nld": {
                "official": "Land Curaçao",
                "common": "Curaçao"
            },
            "por": {
                "official": "País de Curaçao",
                "common": "ilha da Curação"
            },
            "rus": {
                "official": "Страна Кюрасао",
                "common": "Кюрасао"
            },
            "slk": {
                "official": "Curacao",
                "common": "Curacao"
            },
            "spa": {
                "official": "País de Curazao",
                "common": "Curazao"
            },
            "fin": {
                "official": "Curaçao",
                "common": "Curaçao"
            },
            "est": {
                "official": "Curaçao",
                "common": "Curaçao"
            },
            "zho": {
                "official": "库拉索",
                "common": "库拉索"
            },
            "pol": {
                "official": "Curaçao",
                "common": "Curaçao"
            }
        },
        "latlng": [
            12.116667,
            -68.933333
        ],
        "demonym": "Dutch",
        "landlocked": false,
        "borders": [],
        "area": 444,
        "flag": "🇨🇼"
    },
    {
        "name": {
            "common": "Christmas Island",
            "official": "Territory of Christmas Island",
            "native": {
                "eng": {
                    "official": "Territory of Christmas Island",
                    "common": "Christmas Island"
                }
            }
        },
        "tld": [
            ".cx"
        ],
        "cca2": "CX",
        "ccn3": "162",
        "cca3": "CXR",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [
            "61"
        ],
        "capital": [
            "Flying Fish Cove"
        ],
        "altSpellings": [
            "CX",
            "Territory of Christmas Island"
        ],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Teritorium Vánočního ostrova",
                "common": "Vánoční ostrov"
            },
            "cym": {
                "official": "Tiriogaeth yr Ynys y Nadolig",
                "common": "Ynys y Nadolig"
            },
            "deu": {
                "official": "Gebiet der Weihnachtsinsel",
                "common": "Weihnachtsinsel"
            },
            "fra": {
                "official": "Territoire de l'île Christmas",
                "common": "Île Christmas"
            },
            "hrv": {
                "official": "Teritorij Božićni otok",
                "common": "Božićni otok"
            },
            "ita": {
                "official": "Territorio di Christmas Island",
                "common": "Isola di Natale"
            },
            "jpn": {
                "official": "クリスマス島の領土",
                "common": "クリスマス島"
            },
            "nld": {
                "official": "Grondgebied van Christmas Island",
                "common": "Christmaseiland"
            },
            "por": {
                "official": "Território da Ilha Christmas",
                "common": "Ilha do Natal"
            },
            "rus": {
                "official": "Территория острова Рождества",
                "common": "Остров Рождества"
            },
            "slk": {
                "official": "Teritórium Vianočného ostrova",
                "common": "Vianočnú ostrov"
            },
            "spa": {
                "official": "Territorio de la Isla de Navidad",
                "common": "Isla de Navidad"
            },
            "fin": {
                "official": "Joulusaaren alue",
                "common": "Joulusaari"
            },
            "est": {
                "official": "Jõulusaare ala",
                "common": "Jõulusaar"
            },
            "zho": {
                "official": "圣诞岛",
                "common": "圣诞岛"
            },
            "pol": {
                "official": "Wyspa Bożego Narodzenia",
                "common": "Wyspa Bożego Narodzenia"
            }
        },
        "latlng": [
            -10.5,
            105.66666666
        ],
        "demonym": "Christmas Islander",
        "landlocked": false,
        "borders": [],
        "area": 135,
        "flag": "🇨🇽"
    },
    {
        "name": {
            "common": "Cayman Islands",
            "official": "Cayman Islands",
            "native": {
                "eng": {
                    "official": "Cayman Islands",
                    "common": "Cayman Islands"
                }
            }
        },
        "tld": [
            ".ky"
        ],
        "cca2": "KY",
        "ccn3": "136",
        "cca3": "CYM",
        "cioc": "CAY",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "KYD"
        ],
        "callingCode": [
            "1345"
        ],
        "capital": [
            "George Town"
        ],
        "altSpellings": [
            "KY"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Kajmanské ostrovy",
                "common": "Kajmanské ostrovy"
            },
            "cym": {
                "official": "Ynysoedd Cayman",
                "common": "Ynysoedd Cayman"
            },
            "deu": {
                "official": "Cayman-Inseln",
                "common": "Kaimaninseln"
            },
            "fra": {
                "official": "Îles Caïmans",
                "common": "Îles Caïmans"
            },
            "hrv": {
                "official": "Kajmanski otoci",
                "common": "Kajmanski otoci"
            },
            "ita": {
                "official": "Isole Cayman",
                "common": "Isole Cayman"
            },
            "jpn": {
                "official": "ケイマン諸島",
                "common": "ケイマン諸島"
            },
            "nld": {
                "official": "Caymaneilanden",
                "common": "Caymaneilanden"
            },
            "por": {
                "official": "Ilhas Cayman",
                "common": "Ilhas Caimão"
            },
            "rus": {
                "official": "Каймановы острова",
                "common": "Каймановы острова"
            },
            "slk": {
                "official": "Kajmanie ostrovy",
                "common": "Kajmanie ostrovy"
            },
            "spa": {
                "official": "Islas Caimán",
                "common": "Islas Caimán"
            },
            "fin": {
                "official": "Caymansaaret",
                "common": "Caymansaaret"
            },
            "est": {
                "official": "Kaimanisaared",
                "common": "Kaimanisaared"
            },
            "zho": {
                "official": "开曼群岛",
                "common": "开曼群岛"
            },
            "pol": {
                "official": "Kajmany",
                "common": "Kajmany"
            }
        },
        "latlng": [
            19.5,
            -80.5
        ],
        "demonym": "Caymanian",
        "landlocked": false,
        "borders": [],
        "area": 264,
        "flag": "🇰🇾"
    },
    {
        "name": {
            "common": "Cyprus",
            "official": "Republic of Cyprus",
            "native": {
                "ell": {
                    "official": "Δημοκρατία της Κύπρος",
                    "common": "Κύπρος"
                },
                "tur": {
                    "official": "Kıbrıs Cumhuriyeti",
                    "common": "Kıbrıs"
                }
            }
        },
        "tld": [
            ".cy"
        ],
        "cca2": "CY",
        "ccn3": "196",
        "cca3": "CYP",
        "cioc": "CYP",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "357"
        ],
        "capital": [
            "Nicosia"
        ],
        "altSpellings": [
            "CY",
            "Kýpros",
            "Kıbrıs",
            "Republic of Cyprus",
            "Κυπριακή Δημοκρατία",
            "Kıbrıs Cumhuriyeti"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ell": "Greek",
            "tur": "Turkish"
        },
        "translations": {
            "ces": {
                "official": "Kyperská republika",
                "common": "Kypr"
            },
            "cym": {
                "official": "Gweriniaeth Cyprus",
                "common": "Cyprus"
            },
            "deu": {
                "official": "Republik Zypern",
                "common": "Zypern"
            },
            "fra": {
                "official": "République de Chypre",
                "common": "Chypre"
            },
            "hrv": {
                "official": "Republika Cipar",
                "common": "Cipar"
            },
            "ita": {
                "official": "Repubblica di Cipro",
                "common": "Cipro"
            },
            "jpn": {
                "official": "キプロス共和国",
                "common": "キプロス"
            },
            "nld": {
                "official": "Republiek Cyprus",
                "common": "Cyprus"
            },
            "por": {
                "official": "República de Chipre",
                "common": "Chipre"
            },
            "rus": {
                "official": "Республика Кипр",
                "common": "Кипр"
            },
            "slk": {
                "official": "Cyperská republika",
                "common": "Cyprus"
            },
            "spa": {
                "official": "República de Chipre",
                "common": "Chipre"
            },
            "fin": {
                "official": "Kyproksen tasavalta",
                "common": "Kypros"
            },
            "est": {
                "official": "Küprose Vabariik",
                "common": "Küpros"
            },
            "zho": {
                "official": "塞浦路斯共和国",
                "common": "塞浦路斯"
            },
            "pol": {
                "official": "Republika Cypryjska",
                "common": "Cypr"
            }
        },
        "latlng": [
            35,
            33
        ],
        "demonym": "Cypriot",
        "landlocked": false,
        "borders": [],
        "area": 9251,
        "flag": "🇨🇾"
    },
    {
        "name": {
            "common": "Czechia",
            "official": "Czech Republic",
            "native": {
                "ces": {
                    "official": "česká republika",
                    "common": "Česko"
                },
                "slk": {
                    "official": "Česká republika",
                    "common": "Česko"
                }
            }
        },
        "tld": [
            ".cz"
        ],
        "cca2": "CZ",
        "ccn3": "203",
        "cca3": "CZE",
        "cioc": "CZE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CZK"
        ],
        "callingCode": [
            "420"
        ],
        "capital": [
            "Prague"
        ],
        "altSpellings": [
            "CZ",
            "Česká republika",
            "Česko"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ces": "Czech",
            "slk": "Slovak"
        },
        "translations": {
            "ces": {
                "official": "Česká republika",
                "common": "Česko"
            },
            "cym": {
                "official": "Y Weriniaeth Tsiec",
                "common": "Y Weriniaeth Tsiec"
            },
            "deu": {
                "official": "Tschechische Republik",
                "common": "Tschechien"
            },
            "fra": {
                "official": "République tchèque",
                "common": "Tchéquie"
            },
            "hrv": {
                "official": "Češka",
                "common": "Češka"
            },
            "ita": {
                "official": "Repubblica Ceca",
                "common": "Cechia"
            },
            "jpn": {
                "official": "チェコ共和国",
                "common": "チェコ"
            },
            "nld": {
                "official": "Tsjechische Republiek",
                "common": "Tsjechië"
            },
            "por": {
                "official": "República Checa",
                "common": "Chéquia"
            },
            "rus": {
                "official": "Чешская Республика",
                "common": "Чехия"
            },
            "slk": {
                "official": "Česká republika",
                "common": "Česko"
            },
            "spa": {
                "official": "República Checa",
                "common": "Chequia"
            },
            "fin": {
                "official": "Tšekin tasavalta",
                "common": "Tšekki"
            },
            "est": {
                "official": "Tšehhi Vabariik",
                "common": "Tšehhi"
            },
            "zho": {
                "official": "捷克共和国",
                "common": "捷克"
            },
            "pol": {
                "official": "Republika Czeska",
                "common": "Czechy"
            }
        },
        "latlng": [
            49.75,
            15.5
        ],
        "demonym": "Czech",
        "landlocked": true,
        "borders": [
            "AUT",
            "DEU",
            "POL",
            "SVK"
        ],
        "area": 78865,
        "flag": "🇨🇿"
    },
    {
        "name": {
            "common": "Germany",
            "official": "Federal Republic of Germany",
            "native": {
                "deu": {
                    "official": "Bundesrepublik Deutschland",
                    "common": "Deutschland"
                }
            }
        },
        "tld": [
            ".de"
        ],
        "cca2": "DE",
        "ccn3": "276",
        "cca3": "DEU",
        "cioc": "GER",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "49"
        ],
        "capital": [
            "Berlin"
        ],
        "altSpellings": [
            "DE",
            "Federal Republic of Germany",
            "Bundesrepublik Deutschland"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German"
        },
        "translations": {
            "ces": {
                "official": "Spolková republika Německo",
                "common": "Německo"
            },
            "deu": {
                "official": "Bundesrepublik Deutschland",
                "common": "Deutschland"
            },
            "fra": {
                "official": "République fédérale d'Allemagne",
                "common": "Allemagne"
            },
            "hrv": {
                "official": "Njemačka Federativna Republika",
                "common": "Njemačka"
            },
            "ita": {
                "official": "Repubblica federale di Germania",
                "common": "Germania"
            },
            "jpn": {
                "official": "ドイツ連邦共和国",
                "common": "ドイツ"
            },
            "nld": {
                "official": "Bondsrepubliek Duitsland",
                "common": "Duitsland"
            },
            "por": {
                "official": "República Federal da Alemanha",
                "common": "Alemanha"
            },
            "rus": {
                "official": "Федеративная Республика Германия",
                "common": "Германия"
            },
            "slk": {
                "official": "Nemecká spolková republika",
                "common": "Nemecko"
            },
            "spa": {
                "official": "República Federal de Alemania",
                "common": "Alemania"
            },
            "fin": {
                "official": "Saksan liittotasavalta",
                "common": "Saksa"
            },
            "est": {
                "official": "Saksamaa Liitvabariik",
                "common": "Saksamaa"
            },
            "zho": {
                "official": "德意志联邦共和国",
                "common": "德国"
            },
            "pol": {
                "official": "Republika Federalna Niemiec",
                "common": "Niemcy"
            }
        },
        "latlng": [
            51,
            9
        ],
        "demonym": "German",
        "landlocked": false,
        "borders": [
            "AUT",
            "BEL",
            "CZE",
            "DNK",
            "FRA",
            "LUX",
            "NLD",
            "POL",
            "CHE"
        ],
        "area": 357114,
        "flag": "🇩🇪"
    },
    {
        "name": {
            "common": "Djibouti",
            "official": "Republic of Djibouti",
            "native": {
                "ara": {
                    "official": "جمهورية جيبوتي",
                    "common": "جيبوتي\u200e"
                },
                "fra": {
                    "official": "République de Djibouti",
                    "common": "Djibouti"
                }
            }
        },
        "tld": [
            ".dj"
        ],
        "cca2": "DJ",
        "ccn3": "262",
        "cca3": "DJI",
        "cioc": "DJI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "DJF"
        ],
        "callingCode": [
            "253"
        ],
        "capital": [
            "Djibouti"
        ],
        "altSpellings": [
            "DJ",
            "Jabuuti",
            "Gabuuti",
            "Republic of Djibouti",
            "République de Djibouti",
            "Gabuutih Ummuuno",
            "Jamhuuriyadda Jabuuti"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Džibutská republika",
                "common": "Džibutsko"
            },
            "cym": {
                "official": "Gweriniaeth Jibwti",
                "common": "Jibwti"
            },
            "deu": {
                "official": "Republik Dschibuti",
                "common": "Dschibuti"
            },
            "fra": {
                "official": "République de Djibouti",
                "common": "Djibouti"
            },
            "hrv": {
                "official": "Republika Džibuti",
                "common": "Džibuti"
            },
            "ita": {
                "official": "Repubblica di Gibuti",
                "common": "Gibuti"
            },
            "jpn": {
                "official": "ジブチ共和国",
                "common": "ジブチ"
            },
            "nld": {
                "official": "Republiek Djibouti",
                "common": "Djibouti"
            },
            "por": {
                "official": "República do Djibouti",
                "common": "Djibouti"
            },
            "rus": {
                "official": "Республика Джибути",
                "common": "Джибути"
            },
            "slk": {
                "official": "ǅibutská republika",
                "common": "ǅibutsko"
            },
            "spa": {
                "official": "República de Djibouti",
                "common": "Djibouti"
            },
            "fin": {
                "official": "Dijiboutin tasavalta",
                "common": "Dijibouti"
            },
            "est": {
                "official": "Djibouti Vabariik",
                "common": "Djibouti"
            },
            "zho": {
                "official": "吉布提共和国",
                "common": "吉布提"
            },
            "pol": {
                "official": "Republika Dżibuti",
                "common": "Dżibuti"
            }
        },
        "latlng": [
            11.5,
            43
        ],
        "demonym": "Djibouti",
        "landlocked": false,
        "borders": [
            "ERI",
            "ETH",
            "SOM"
        ],
        "area": 23200,
        "flag": "🇩🇯"
    },
    {
        "name": {
            "common": "Dominica",
            "official": "Commonwealth of Dominica",
            "native": {
                "eng": {
                    "official": "Commonwealth of Dominica",
                    "common": "Dominica"
                }
            }
        },
        "tld": [
            ".dm"
        ],
        "cca2": "DM",
        "ccn3": "212",
        "cca3": "DMA",
        "cioc": "DMA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1767"
        ],
        "capital": [
            "Roseau"
        ],
        "altSpellings": [
            "DM",
            "Dominique",
            "Wai‘tu kubuli",
            "Commonwealth of Dominica"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Dominikánské společenství",
                "common": "Dominika"
            },
            "cym": {
                "official": "Cymanwlad Dominica",
                "common": "Dominica"
            },
            "deu": {
                "official": "Commonwealth von Dominica",
                "common": "Dominica"
            },
            "fra": {
                "official": "Commonwealth de la Dominique",
                "common": "Dominique"
            },
            "hrv": {
                "official": "Zajednica Dominika",
                "common": "Dominika"
            },
            "ita": {
                "official": "Commonwealth di Dominica",
                "common": "Dominica"
            },
            "jpn": {
                "official": "ドミニカ国",
                "common": "ドミニカ国"
            },
            "nld": {
                "official": "Gemenebest Dominica",
                "common": "Dominica"
            },
            "por": {
                "official": "Comunidade da Dominica",
                "common": "Dominica"
            },
            "rus": {
                "official": "Содружество Доминики",
                "common": "Доминика"
            },
            "slk": {
                "official": "Dominické spoločenstvo",
                "common": "Dominika"
            },
            "spa": {
                "official": "Mancomunidad de Dominica",
                "common": "Dominica"
            },
            "fin": {
                "official": "Dominican liittovaltio",
                "common": "Dominica"
            },
            "est": {
                "official": "Dominica Ühendus",
                "common": "Dominica"
            },
            "zho": {
                "official": "多米尼加共和国",
                "common": "多米尼加"
            },
            "pol": {
                "official": "Wspólnota Dominiki",
                "common": "Dominika"
            }
        },
        "latlng": [
            15.41666666,
            -61.33333333
        ],
        "demonym": "Dominican",
        "landlocked": false,
        "borders": [],
        "area": 751,
        "flag": "🇩🇲"
    },
    {
        "name": {
            "common": "Denmark",
            "official": "Kingdom of Denmark",
            "native": {
                "dan": {
                    "official": "Kongeriget Danmark",
                    "common": "Danmark"
                }
            }
        },
        "tld": [
            ".dk"
        ],
        "cca2": "DK",
        "ccn3": "208",
        "cca3": "DNK",
        "cioc": "DEN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "DKK"
        ],
        "callingCode": [
            "45"
        ],
        "capital": [
            "Copenhagen"
        ],
        "altSpellings": [
            "DK",
            "Danmark",
            "Kingdom of Denmark",
            "Kongeriget Danmark"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "dan": "Danish"
        },
        "translations": {
            "ces": {
                "official": "Dánské království",
                "common": "Dánsko"
            },
            "cym": {
                "official": "Teyrnas Denmarc",
                "common": "Denmarc"
            },
            "deu": {
                "official": "Königreich Dänemark",
                "common": "Dänemark"
            },
            "fra": {
                "official": "Royaume du Danemark",
                "common": "Danemark"
            },
            "hrv": {
                "official": "Kraljevina Danska",
                "common": "Danska"
            },
            "ita": {
                "official": "Regno di Danimarca",
                "common": "Danimarca"
            },
            "jpn": {
                "official": "デンマーク王国",
                "common": "デンマーク"
            },
            "nld": {
                "official": "Koninkrijk Denemarken",
                "common": "Denemarken"
            },
            "por": {
                "official": "Reino da Dinamarca",
                "common": "Dinamarca"
            },
            "rus": {
                "official": "Королевство Дания",
                "common": "Дания"
            },
            "slk": {
                "official": "Dánske kráľovstvo",
                "common": "Dánsko"
            },
            "spa": {
                "official": "Reino de Dinamarca",
                "common": "Dinamarca"
            },
            "fin": {
                "official": "Tanskan kuningaskunta",
                "common": "Tanska"
            },
            "est": {
                "official": "Taani Kuningriik",
                "common": "Taani"
            },
            "zho": {
                "official": "丹麦王国",
                "common": "丹麦"
            },
            "pol": {
                "official": "Królestwo Danii",
                "common": "Dania"
            }
        },
        "latlng": [
            56,
            10
        ],
        "demonym": "Danish",
        "landlocked": false,
        "borders": [
            "DEU"
        ],
        "area": 43094,
        "flag": "🇩🇰"
    },
    {
        "name": {
            "common": "Dominican Republic",
            "official": "Dominican Republic",
            "native": {
                "spa": {
                    "official": "República Dominicana",
                    "common": "República Dominicana"
                }
            }
        },
        "tld": [
            ".do"
        ],
        "cca2": "DO",
        "ccn3": "214",
        "cca3": "DOM",
        "cioc": "DOM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "DOP"
        ],
        "callingCode": [
            "1809",
            "1829",
            "1849"
        ],
        "capital": [
            "Santo Domingo"
        ],
        "altSpellings": [
            "DO"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Dominikánská republika",
                "common": "Dominikánská republika"
            },
            "cym": {
                "official": "Gweriniaeth Dominica",
                "common": "Gweriniaeth Dominica"
            },
            "deu": {
                "official": "Dominikanische Republik",
                "common": "Dominikanische Republik"
            },
            "fra": {
                "official": "République Dominicaine",
                "common": "République dominicaine"
            },
            "hrv": {
                "official": "Dominikanska Republika",
                "common": "Dominikanska Republika"
            },
            "ita": {
                "official": "Repubblica Dominicana",
                "common": "Repubblica Dominicana"
            },
            "jpn": {
                "official": "ドミニカ共和国",
                "common": "ドミニカ共和国"
            },
            "nld": {
                "official": "Dominicaanse Republiek",
                "common": "Dominicaanse Republiek"
            },
            "por": {
                "official": "República Dominicana",
                "common": "República Dominicana"
            },
            "rus": {
                "official": "Доминиканская Республика",
                "common": "Доминиканская Республика"
            },
            "slk": {
                "official": "Dominikánska republika",
                "common": "Dominikánska republika"
            },
            "spa": {
                "official": "República Dominicana",
                "common": "República Dominicana"
            },
            "fin": {
                "official": "Dominikaaninen tasavalta",
                "common": "Dominikaaninen tasavalta"
            },
            "est": {
                "official": "Dominikaani Vabariik",
                "common": "Dominikaani Vabariik"
            },
            "zho": {
                "official": "多明尼加共和国",
                "common": "多明尼加"
            },
            "pol": {
                "official": "Republika Dominikańska",
                "common": "Dominikana"
            }
        },
        "latlng": [
            19,
            -70.66666666
        ],
        "demonym": "Dominican",
        "landlocked": false,
        "borders": [
            "HTI"
        ],
        "area": 48671,
        "flag": "🇩🇴"
    },
    {
        "name": {
            "common": "Algeria",
            "official": "People's Democratic Republic of Algeria",
            "native": {
                "ara": {
                    "official": "الجمهورية الديمقراطية الشعبية الجزائرية",
                    "common": "الجزائر"
                }
            }
        },
        "tld": [
            ".dz",
            "الجزائر."
        ],
        "cca2": "DZ",
        "ccn3": "012",
        "cca3": "DZA",
        "cioc": "ALG",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "DZD"
        ],
        "callingCode": [
            "213"
        ],
        "capital": [
            "Algiers"
        ],
        "altSpellings": [
            "DZ",
            "Dzayer",
            "Algérie"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Alžírská demokratická a lidová republika",
                "common": "Alžírsko"
            },
            "cym": {
                "official": "Gweriniaeth Ddemocrataidd Pobl Algeria",
                "common": "Algeria"
            },
            "deu": {
                "official": "Demokratische Volksrepublik Algerien",
                "common": "Algerien"
            },
            "fra": {
                "official": "République démocratique et populaire d'Algérie",
                "common": "Algérie"
            },
            "hrv": {
                "official": "Narodna Demokratska Republika Alžir",
                "common": "Alžir"
            },
            "ita": {
                "official": "Repubblica popolare democratica di Algeria",
                "common": "Algeria"
            },
            "jpn": {
                "official": "アルジェリア人民民主共和国",
                "common": "アルジェリア"
            },
            "nld": {
                "official": "Democratische Volksrepubliek Algerije",
                "common": "Algerije"
            },
            "por": {
                "official": "República Argelina Democrática e Popular",
                "common": "Argélia"
            },
            "rus": {
                "official": "Народно-Демократическая Республика Алжир",
                "common": "Алжир"
            },
            "slk": {
                "official": "Alžírska demokratická ľudová republika",
                "common": "Alžírsko"
            },
            "spa": {
                "official": "República Argelina Democrática y Popular",
                "common": "Argelia"
            },
            "fin": {
                "official": "Algerian demokraattinen kansantasavalta",
                "common": "Algeria"
            },
            "est": {
                "official": "Alžeeria Demokraatlik Rahvavabariik",
                "common": "Alžeeria"
            },
            "zho": {
                "official": "阿尔及利亚人民民主共和国",
                "common": "阿尔及利亚"
            },
            "pol": {
                "official": "Algierska Republika Ludowo-Demokratyczna",
                "common": "Algieria"
            }
        },
        "latlng": [
            28,
            3
        ],
        "demonym": "Algerian",
        "landlocked": false,
        "borders": [
            "TUN",
            "LBY",
            "NER",
            "ESH",
            "MRT",
            "MLI",
            "MAR"
        ],
        "area": 2381741,
        "flag": "🇩🇿"
    },
    {
        "name": {
            "common": "Ecuador",
            "official": "Republic of Ecuador",
            "native": {
                "spa": {
                    "official": "República del Ecuador",
                    "common": "Ecuador"
                }
            }
        },
        "tld": [
            ".ec"
        ],
        "cca2": "EC",
        "ccn3": "218",
        "cca3": "ECU",
        "cioc": "ECU",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "593"
        ],
        "capital": [
            "Quito"
        ],
        "altSpellings": [
            "EC",
            "Republic of Ecuador",
            "República del Ecuador"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Ekvádorská republika",
                "common": "Ekvádor"
            },
            "cym": {
                "official": "Gweriniaeth Ecwador",
                "common": "Ecwador"
            },
            "deu": {
                "official": "Republik Ecuador",
                "common": "Ecuador"
            },
            "fra": {
                "official": "République de l'Équateur",
                "common": "Équateur"
            },
            "hrv": {
                "official": "Republika Ekvador",
                "common": "Ekvador"
            },
            "ita": {
                "official": "Repubblica dell'Ecuador",
                "common": "Ecuador"
            },
            "jpn": {
                "official": "エクアドル共和国",
                "common": "エクアドル"
            },
            "nld": {
                "official": "Republiek Ecuador",
                "common": "Ecuador"
            },
            "por": {
                "official": "República do Equador",
                "common": "Equador"
            },
            "rus": {
                "official": "Республика Эквадор",
                "common": "Эквадор"
            },
            "slk": {
                "official": "Ekvádorská republika",
                "common": "Ekvádor"
            },
            "spa": {
                "official": "República del Ecuador",
                "common": "Ecuador"
            },
            "fin": {
                "official": "Ecuadorin tasavalta",
                "common": "Ecuador"
            },
            "est": {
                "official": "Ecuadori Vabariik",
                "common": "Ecuador"
            },
            "zho": {
                "official": "厄瓜多尔共和国",
                "common": "厄瓜多尔"
            },
            "pol": {
                "official": "Ekwador",
                "common": "Ekwador"
            }
        },
        "latlng": [
            -2,
            -77.5
        ],
        "demonym": "Ecuadorean",
        "landlocked": false,
        "borders": [
            "COL",
            "PER"
        ],
        "area": 276841,
        "flag": "🇪🇨"
    },
    {
        "name": {
            "common": "Egypt",
            "official": "Arab Republic of Egypt",
            "native": {
                "ara": {
                    "official": "جمهورية مصر العربية",
                    "common": "مصر"
                }
            }
        },
        "tld": [
            ".eg",
            ".مصر"
        ],
        "cca2": "EG",
        "ccn3": "818",
        "cca3": "EGY",
        "cioc": "EGY",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EGP"
        ],
        "callingCode": [
            "20"
        ],
        "capital": [
            "Cairo"
        ],
        "altSpellings": [
            "EG",
            "Arab Republic of Egypt"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Egyptská arabská republika",
                "common": "Egypt"
            },
            "cym": {
                "official": "Gweriniaeth Arabaidd yr Aifft",
                "common": "Yr Aifft"
            },
            "deu": {
                "official": "Arabische Republik Ägypten",
                "common": "Ägypten"
            },
            "fra": {
                "official": "République arabe d'Égypte",
                "common": "Égypte"
            },
            "hrv": {
                "official": "Arapska Republika Egipat",
                "common": "Egipat"
            },
            "ita": {
                "official": "Repubblica araba d'Egitto",
                "common": "Egitto"
            },
            "jpn": {
                "official": "エジプト·アラブ共和国",
                "common": "エジプト"
            },
            "nld": {
                "official": "Arabische Republiek Egypte",
                "common": "Egypte"
            },
            "por": {
                "official": "República Árabe do Egipto",
                "common": "Egito"
            },
            "rus": {
                "official": "Арабская Республика Египет",
                "common": "Египет"
            },
            "slk": {
                "official": "Egyptská arabská republika",
                "common": "Egypt"
            },
            "spa": {
                "official": "República Árabe de Egipto",
                "common": "Egipto"
            },
            "fin": {
                "official": "Egyptin arabitasavalta",
                "common": "Egypti"
            },
            "est": {
                "official": "Egiptuse Araabia Vabariik",
                "common": "Egiptus"
            },
            "zho": {
                "official": "阿拉伯埃及共和国",
                "common": "埃及"
            },
            "pol": {
                "official": "Arabska Republika Egiptu",
                "common": "Egipt"
            }
        },
        "latlng": [
            27,
            30
        ],
        "demonym": "Egyptian",
        "landlocked": false,
        "borders": [
            "ISR",
            "LBY",
            "PSE",
            "SDN"
        ],
        "area": 1002450,
        "flag": "🇪🇬"
    },
    {
        "name": {
            "common": "Eritrea",
            "official": "State of Eritrea",
            "native": {
                "ara": {
                    "official": "دولة إرتريا",
                    "common": "إرتريا\u200e"
                },
                "eng": {
                    "official": "State of Eritrea",
                    "common": "Eritrea"
                },
                "tir": {
                    "official": "ሃገረ ኤርትራ",
                    "common": "ኤርትራ"
                }
            }
        },
        "tld": [
            ".er"
        ],
        "cca2": "ER",
        "ccn3": "232",
        "cca3": "ERI",
        "cioc": "ERI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ERN"
        ],
        "callingCode": [
            "291"
        ],
        "capital": [
            "Asmara"
        ],
        "altSpellings": [
            "ER",
            "State of Eritrea",
            "ሃገረ ኤርትራ",
            "Dawlat Iritriyá",
            "ʾErtrā",
            "Iritriyā"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "eng": "English",
            "tir": "Tigrinya"
        },
        "translations": {
            "ces": {
                "official": "Stát Eritrea",
                "common": "Eritrea"
            },
            "cym": {
                "official": "Gwladwriaeth Eritrea",
                "common": "Eritrea"
            },
            "deu": {
                "official": "Staat Eritrea",
                "common": "Eritrea"
            },
            "fra": {
                "official": "État d'Érythrée",
                "common": "Érythrée"
            },
            "hrv": {
                "official": "Država Eritreji",
                "common": "Eritreja"
            },
            "ita": {
                "official": "Stato di Eritrea",
                "common": "Eritrea"
            },
            "jpn": {
                "official": "エリトリア国",
                "common": "エリトリア"
            },
            "nld": {
                "official": "Staat Eritrea",
                "common": "Eritrea"
            },
            "por": {
                "official": "Estado da Eritreia",
                "common": "Eritreia"
            },
            "rus": {
                "official": "Государство Эритрея",
                "common": "Эритрея"
            },
            "slk": {
                "official": "Eritrejský štát",
                "common": "Eritrea"
            },
            "spa": {
                "official": "Estado de Eritrea",
                "common": "Eritrea"
            },
            "fin": {
                "official": "Eritrean valtio",
                "common": "Eritrea"
            },
            "est": {
                "official": "Eritrea Riik",
                "common": "Eritrea"
            },
            "zho": {
                "official": "厄立特里亚",
                "common": "厄立特里亚"
            },
            "pol": {
                "official": "Państwo Erytrea",
                "common": "Erytrea"
            }
        },
        "latlng": [
            15,
            39
        ],
        "demonym": "Eritrean",
        "landlocked": false,
        "borders": [
            "DJI",
            "ETH",
            "SDN"
        ],
        "area": 117600,
        "flag": "🇪🇷"
    },
    {
        "name": {
            "common": "Western Sahara",
            "official": "Sahrawi Arab Democratic Republic",
            "native": {
                "ber": {
                    "official": "Sahrawi Arab Democratic Republic",
                    "common": "Western Sahara"
                },
                "mey": {
                    "official": "الجمهورية العربية الصحراوية الديمقراطية",
                    "common": "الصحراء الغربية"
                },
                "spa": {
                    "official": "República Árabe Saharaui Democrática",
                    "common": "Sahara Occidental"
                }
            }
        },
        "tld": [
            ".eh"
        ],
        "cca2": "EH",
        "ccn3": "732",
        "cca3": "ESH",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "MAD",
            "DZD",
            "MRO"
        ],
        "callingCode": [
            "212"
        ],
        "capital": [
            "El Aaiún"
        ],
        "altSpellings": [
            "EH",
            "Taneẓroft Tutrimt"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ber": "Berber",
            "mey": "Hassaniya",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Západní Sahara",
                "common": "Západní Sahara"
            },
            "deu": {
                "official": "Demokratische Arabische Republik Sahara",
                "common": "Westsahara"
            },
            "fra": {
                "official": "République arabe sahraouie démocratique",
                "common": "Sahara Occidental"
            },
            "hrv": {
                "official": "Sahrawi Arab Demokratska Republika",
                "common": "Zapadna Sahara"
            },
            "ita": {
                "official": "Repubblica Araba Saharawi Democratica",
                "common": "Sahara Occidentale"
            },
            "jpn": {
                "official": "サハラアラブ民主共和国",
                "common": "西サハラ"
            },
            "nld": {
                "official": "Sahrawi Arabische Democratische Republiek",
                "common": "Westelijke Sahara"
            },
            "por": {
                "official": "República Árabe Saharaui Democrática",
                "common": "Saara Ocidental"
            },
            "rus": {
                "official": "Sahrawi Арабская Демократическая Республика",
                "common": "Западная Сахара"
            },
            "slk": {
                "official": "Západná Sahara",
                "common": "Západná Sahara"
            },
            "spa": {
                "official": "República Árabe Saharaui Democrática",
                "common": "Sahara Occidental"
            },
            "fin": {
                "official": "Länsi-Sahara",
                "common": "Länsi-Sahara"
            },
            "est": {
                "official": "Lääne-Sahara",
                "common": "Lääne-Sahara"
            },
            "zho": {
                "official": "阿拉伯撒哈拉民主共和国",
                "common": "西撒哈拉"
            },
            "pol": {
                "official": "Saharyjska Arabska Republika Demokratyczna",
                "common": "Sahara Zachodnia"
            }
        },
        "latlng": [
            24.5,
            -13
        ],
        "demonym": "Sahrawi",
        "landlocked": false,
        "borders": [
            "DZA",
            "MRT",
            "MAR"
        ],
        "area": 266000,
        "flag": "🇪🇭"
    },
    {
        "name": {
            "common": "Spain",
            "official": "Kingdom of Spain",
            "native": {
                "spa": {
                    "official": "Reino de España",
                    "common": "España"
                }
            }
        },
        "tld": [
            ".es"
        ],
        "cca2": "ES",
        "ccn3": "724",
        "cca3": "ESP",
        "cioc": "ESP",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "34"
        ],
        "capital": [
            "Madrid"
        ],
        "altSpellings": [
            "ES",
            "Kingdom of Spain",
            "Reino de España"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Španělské království",
                "common": "Španělsko"
            },
            "deu": {
                "official": "Königreich Spanien",
                "common": "Spanien"
            },
            "fra": {
                "official": "Royaume d'Espagne",
                "common": "Espagne"
            },
            "hrv": {
                "official": "Kraljevina Španjolska",
                "common": "Španjolska"
            },
            "ita": {
                "official": "Regno di Spagna",
                "common": "Spagna"
            },
            "jpn": {
                "official": "スペイン王国",
                "common": "スペイン"
            },
            "nld": {
                "official": "Koninkrijk Spanje",
                "common": "Spanje"
            },
            "por": {
                "official": "Reino de Espanha",
                "common": "Espanha"
            },
            "rus": {
                "official": "Королевство Испания",
                "common": "Испания"
            },
            "slk": {
                "official": "Španielske kráľovstvo",
                "common": "Španielsko"
            },
            "spa": {
                "official": "Reino de España",
                "common": "España"
            },
            "fin": {
                "official": "Espanjan kuningaskunta",
                "common": "Espanja"
            },
            "est": {
                "official": "Hispaania Kuningriik",
                "common": "Hispaania"
            },
            "zho": {
                "official": "西班牙王国",
                "common": "西班牙"
            },
            "pol": {
                "official": "Królestwo Hiszpanii ",
                "common": "Hiszpania"
            }
        },
        "latlng": [
            40,
            -4
        ],
        "demonym": "Spanish",
        "landlocked": false,
        "borders": [
            "AND",
            "FRA",
            "GIB",
            "PRT",
            "MAR"
        ],
        "area": 505992,
        "flag": "🇪🇸"
    },
    {
        "name": {
            "common": "Estonia",
            "official": "Republic of Estonia",
            "native": {
                "est": {
                    "official": "Eesti Vabariik",
                    "common": "Eesti"
                }
            }
        },
        "tld": [
            ".ee"
        ],
        "cca2": "EE",
        "ccn3": "233",
        "cca3": "EST",
        "cioc": "EST",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "372"
        ],
        "capital": [
            "Tallinn"
        ],
        "altSpellings": [
            "EE",
            "Eesti",
            "Republic of Estonia",
            "Eesti Vabariik"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "est": "Estonian"
        },
        "translations": {
            "ces": {
                "official": "Estonská republika",
                "common": "Estonsko"
            },
            "cym": {
                "official": "Gweriniaeth Estonia",
                "common": "Estonia"
            },
            "deu": {
                "official": "Republik Estland",
                "common": "Estland"
            },
            "fra": {
                "official": "République d'Estonie",
                "common": "Estonie"
            },
            "hrv": {
                "official": "Republika Estonija",
                "common": "Estonija"
            },
            "ita": {
                "official": "Repubblica di Estonia",
                "common": "Estonia"
            },
            "jpn": {
                "official": "エストニア共和国",
                "common": "エストニア"
            },
            "nld": {
                "official": "Republiek Estland",
                "common": "Estland"
            },
            "por": {
                "official": "República da Estónia",
                "common": "Estónia"
            },
            "rus": {
                "official": "Эстонская Республика",
                "common": "Эстония"
            },
            "slk": {
                "official": "Estónska republika",
                "common": "Estónsko"
            },
            "spa": {
                "official": "República de Estonia",
                "common": "Estonia"
            },
            "fin": {
                "official": "Viron tasavalta",
                "common": "Viro"
            },
            "est": {
                "official": "Eesti Vabariik",
                "common": "Eesti"
            },
            "zho": {
                "official": "爱沙尼亚共和国",
                "common": "爱沙尼亚"
            },
            "pol": {
                "official": "Republika Estońska",
                "common": "Estonia"
            }
        },
        "latlng": [
            59,
            26
        ],
        "demonym": "Estonian",
        "landlocked": false,
        "borders": [
            "LVA",
            "RUS"
        ],
        "area": 45227,
        "flag": "🇪🇪"
    },
    {
        "name": {
            "common": "Ethiopia",
            "official": "Federal Democratic Republic of Ethiopia",
            "native": {
                "amh": {
                    "official": "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ",
                    "common": "ኢትዮጵያ"
                }
            }
        },
        "tld": [
            ".et"
        ],
        "cca2": "ET",
        "ccn3": "231",
        "cca3": "ETH",
        "cioc": "ETH",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ETB"
        ],
        "callingCode": [
            "251"
        ],
        "capital": [
            "Addis Ababa"
        ],
        "altSpellings": [
            "ET",
            "ʾĪtyōṗṗyā",
            "Federal Democratic Republic of Ethiopia",
            "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "amh": "Amharic"
        },
        "translations": {
            "ces": {
                "official": "Etiopská federativní demokratická republika",
                "common": "Etiopie"
            },
            "cym": {
                "official": "Gweriniaeth Ddemocrataidd Ffederal Ethiopia",
                "common": "Ethiopia"
            },
            "deu": {
                "official": "Demokratische Bundesrepublik Äthiopien",
                "common": "Äthiopien"
            },
            "fra": {
                "official": "République fédérale démocratique d'Éthiopie",
                "common": "Éthiopie"
            },
            "hrv": {
                "official": "Savezna Demokratska Republika Etiopija",
                "common": "Etiopija"
            },
            "ita": {
                "official": "Repubblica federale democratica di Etiopia",
                "common": "Etiopia"
            },
            "jpn": {
                "official": "エチオピア連邦民主共和国",
                "common": "エチオピア"
            },
            "nld": {
                "official": "Federale Democratische Republiek Ethiopië",
                "common": "Ethiopië"
            },
            "por": {
                "official": "República Federal Democrática da Etiópia",
                "common": "Etiópia"
            },
            "rus": {
                "official": "Федеративная Демократическая Республика Эфиопия",
                "common": "Эфиопия"
            },
            "slk": {
                "official": "Etiópska federatívna demokratická republika",
                "common": "Etiópia"
            },
            "spa": {
                "official": "República Democrática Federal de Etiopía",
                "common": "Etiopía"
            },
            "fin": {
                "official": "Etiopian demokraattinen liittotasavalta",
                "common": "Etiopia"
            },
            "est": {
                "official": "Etioopia Demokraatlik Liitvabariik",
                "common": "Etioopia"
            },
            "zho": {
                "official": "埃塞俄比亚联邦民主共和国",
                "common": "埃塞俄比亚"
            },
            "pol": {
                "official": "Federalna Demokratyczna Republika Etiopii",
                "common": "Etiopia"
            }
        },
        "latlng": [
            8,
            38
        ],
        "demonym": "Ethiopian",
        "landlocked": true,
        "borders": [
            "DJI",
            "ERI",
            "KEN",
            "SOM",
            "SSD",
            "SDN"
        ],
        "area": 1104300,
        "flag": "🇪🇹"
    },
    {
        "name": {
            "common": "Finland",
            "official": "Republic of Finland",
            "native": {
                "fin": {
                    "official": "Suomen tasavalta",
                    "common": "Suomi"
                },
                "swe": {
                    "official": "Republiken Finland",
                    "common": "Finland"
                }
            }
        },
        "tld": [
            ".fi"
        ],
        "cca2": "FI",
        "ccn3": "246",
        "cca3": "FIN",
        "cioc": "FIN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "358"
        ],
        "capital": [
            "Helsinki"
        ],
        "altSpellings": [
            "FI",
            "Suomi",
            "Republic of Finland",
            "Suomen tasavalta",
            "Republiken Finland"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "fin": "Finnish",
            "swe": "Swedish"
        },
        "translations": {
            "ces": {
                "official": "Finská republika",
                "common": "Finsko"
            },
            "deu": {
                "official": "Republik Finnland",
                "common": "Finnland"
            },
            "fra": {
                "official": "République de Finlande",
                "common": "Finlande"
            },
            "hrv": {
                "official": "Republika Finska",
                "common": "Finska"
            },
            "ita": {
                "official": "Repubblica di Finlandia",
                "common": "Finlandia"
            },
            "jpn": {
                "official": "フィンランド共和国",
                "common": "フィンランド"
            },
            "nld": {
                "official": "Republiek Finland",
                "common": "Finland"
            },
            "por": {
                "official": "República da Finlândia",
                "common": "Finlândia"
            },
            "rus": {
                "official": "Финляндская Республика",
                "common": "Финляндия"
            },
            "slk": {
                "official": "Fínska republika",
                "common": "Fínsko"
            },
            "spa": {
                "official": "República de Finlandia",
                "common": "Finlandia"
            },
            "fin": {
                "official": "Suomen tasavalta",
                "common": "Suomi"
            },
            "est": {
                "official": "Soome Vabariik",
                "common": "Soome"
            },
            "zho": {
                "official": "芬兰共和国",
                "common": "芬兰"
            },
            "pol": {
                "official": "Republika Finlandii",
                "common": "Finlandia"
            }
        },
        "latlng": [
            64,
            26
        ],
        "demonym": "Finnish",
        "landlocked": false,
        "borders": [
            "NOR",
            "SWE",
            "RUS"
        ],
        "area": 338424,
        "flag": "🇫🇮"
    },
    {
        "name": {
            "common": "Fiji",
            "official": "Republic of Fiji",
            "native": {
                "eng": {
                    "official": "Republic of Fiji",
                    "common": "Fiji"
                },
                "fij": {
                    "official": "Matanitu Tugalala o Viti",
                    "common": "Viti"
                },
                "hif": {
                    "official": "रिपब्लिक ऑफ फीजी",
                    "common": "फिजी"
                }
            }
        },
        "tld": [
            ".fj"
        ],
        "cca2": "FJ",
        "ccn3": "242",
        "cca3": "FJI",
        "cioc": "FIJ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "FJD"
        ],
        "callingCode": [
            "679"
        ],
        "capital": [
            "Suva"
        ],
        "altSpellings": [
            "FJ",
            "Viti",
            "Republic of Fiji",
            "Matanitu ko Viti",
            "Fijī Gaṇarājya"
        ],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "eng": "English",
            "fij": "Fijian",
            "hif": "Fiji Hindi"
        },
        "translations": {
            "ces": {
                "official": "Republika Fidžijských ostrovů",
                "common": "Fidži"
            },
            "deu": {
                "official": "Republik Fidschi",
                "common": "Fidschi"
            },
            "fra": {
                "official": "République des Fidji",
                "common": "Fidji"
            },
            "hrv": {
                "official": "Republika Fidži",
                "common": "Fiđi"
            },
            "ita": {
                "official": "Repubblica di Figi",
                "common": "Figi"
            },
            "jpn": {
                "official": "フィジー共和国",
                "common": "フィジー"
            },
            "nld": {
                "official": "Republiek Fiji",
                "common": "Fiji"
            },
            "por": {
                "official": "República de Fiji",
                "common": "Fiji"
            },
            "rus": {
                "official": "Республика Фиджи",
                "common": "Фиджи"
            },
            "slk": {
                "official": "Fiǆijská republika",
                "common": "Fiǆi"
            },
            "spa": {
                "official": "República de Fiji",
                "common": "Fiyi"
            },
            "fin": {
                "official": "Fidžin tasavalta",
                "common": "Fidži"
            },
            "est": {
                "official": "Fidži Vabariik",
                "common": "Fidži"
            },
            "zho": {
                "official": "斐济共和国",
                "common": "斐济"
            },
            "pol": {
                "official": "Republika Fidżi",
                "common": "Fidżi"
            }
        },
        "latlng": [
            -18,
            175
        ],
        "demonym": "Fijian",
        "landlocked": false,
        "borders": [],
        "area": 18272,
        "flag": "🇫🇯"
    },
    {
        "name": {
            "common": "Falkland Islands",
            "official": "Falkland Islands",
            "native": {
                "eng": {
                    "official": "Falkland Islands",
                    "common": "Falkland Islands"
                }
            }
        },
        "tld": [
            ".fk"
        ],
        "cca2": "FK",
        "ccn3": "238",
        "cca3": "FLK",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "FKP"
        ],
        "callingCode": [
            "500"
        ],
        "capital": [
            "Stanley"
        ],
        "altSpellings": [
            "FK",
            "Islas Malvinas",
            "Falkland Islands (Malvinas)"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Falklandské ostrovy",
                "common": "Falklandy"
            },
            "deu": {
                "official": "Falklandinseln",
                "common": "Falklandinseln"
            },
            "fra": {
                "official": "Îles Malouines",
                "common": "Îles Malouines"
            },
            "hrv": {
                "official": "Falklandski otoci",
                "common": "Falklandski Otoci"
            },
            "ita": {
                "official": "Isole Falkland",
                "common": "Isole Falkland o Isole Malvine"
            },
            "jpn": {
                "official": "フォークランド",
                "common": "フォークランド（マルビナス）諸島"
            },
            "nld": {
                "official": "Falkland eilanden",
                "common": "Falklandeilanden"
            },
            "por": {
                "official": "Ilhas Malvinas",
                "common": "Ilhas Malvinas"
            },
            "rus": {
                "official": "Фолклендские острова",
                "common": "Фолклендские острова"
            },
            "slk": {
                "official": "Falklandské ostrovy",
                "common": "Falklandy"
            },
            "spa": {
                "official": "islas Malvinas",
                "common": "Islas Malvinas"
            },
            "fin": {
                "official": "Falkandinsaaret",
                "common": "Falkandinsaaret"
            },
            "est": {
                "official": "Falklandi saared",
                "common": "Falklandi saared"
            },
            "zho": {
                "official": "福克兰群岛",
                "common": "福克兰群岛"
            },
            "pol": {
                "official": "Falklandy",
                "common": "Falklandy"
            }
        },
        "latlng": [
            -51.75,
            -59
        ],
        "demonym": "Falkland Islander",
        "landlocked": false,
        "borders": [],
        "area": 12173,
        "flag": "🇫🇰"
    },
    {
        "name": {
            "common": "France",
            "official": "French Republic",
            "native": {
                "fra": {
                    "official": "République française",
                    "common": "France"
                }
            }
        },
        "tld": [
            ".fr"
        ],
        "cca2": "FR",
        "ccn3": "250",
        "cca3": "FRA",
        "cioc": "FRA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "33"
        ],
        "capital": [
            "Paris"
        ],
        "altSpellings": [
            "FR",
            "French Republic",
            "République française"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Francouzská republika",
                "common": "Francie"
            },
            "deu": {
                "official": "Französische Republik",
                "common": "Frankreich"
            },
            "fra": {
                "official": "République française",
                "common": "France"
            },
            "hrv": {
                "official": "Francuska Republika",
                "common": "Francuska"
            },
            "ita": {
                "official": "Repubblica francese",
                "common": "Francia"
            },
            "jpn": {
                "official": "フランス共和国",
                "common": "フランス"
            },
            "nld": {
                "official": "Franse Republiek",
                "common": "Frankrijk"
            },
            "por": {
                "official": "República Francesa",
                "common": "França"
            },
            "rus": {
                "official": "Французская Республика",
                "common": "Франция"
            },
            "slk": {
                "official": "Francúzska republika",
                "common": "Francúzsko"
            },
            "spa": {
                "official": "República francés",
                "common": "Francia"
            },
            "fin": {
                "official": "Ranskan tasavalta",
                "common": "Ranska"
            },
            "est": {
                "official": "Prantsuse Vabariik",
                "common": "Prantsusmaa"
            },
            "zho": {
                "official": "法兰西共和国",
                "common": "法国"
            },
            "pol": {
                "official": "Republika Francuska",
                "common": "Francja"
            }
        },
        "latlng": [
            46,
            2
        ],
        "demonym": "French",
        "landlocked": false,
        "borders": [
            "AND",
            "BEL",
            "DEU",
            "ITA",
            "LUX",
            "MCO",
            "ESP",
            "CHE"
        ],
        "area": 551695,
        "flag": "🇫🇷"
    },
    {
        "name": {
            "common": "Faroe Islands",
            "official": "Faroe Islands",
            "native": {
                "dan": {
                    "official": "Færøerne",
                    "common": "Færøerne"
                },
                "fao": {
                    "official": "Føroyar",
                    "common": "Føroyar"
                }
            }
        },
        "tld": [
            ".fo"
        ],
        "cca2": "FO",
        "ccn3": "234",
        "cca3": "FRO",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "DKK"
        ],
        "callingCode": [
            "298"
        ],
        "capital": [
            "Tórshavn"
        ],
        "altSpellings": [
            "FO",
            "Føroyar",
            "Færøerne"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "dan": "Danish",
            "fao": "Faroese"
        },
        "translations": {
            "ces": {
                "official": "Faerské ostrovy",
                "common": "Faerské ostrovy"
            },
            "deu": {
                "official": "Färöer",
                "common": "Färöer-Inseln"
            },
            "fra": {
                "official": "Îles Féroé",
                "common": "Îles Féroé"
            },
            "hrv": {
                "official": "Farski Otoci",
                "common": "Farski Otoci"
            },
            "ita": {
                "official": "Isole Faroe",
                "common": "Isole Far Oer"
            },
            "jpn": {
                "official": "フェロー諸島",
                "common": "フェロー諸島"
            },
            "nld": {
                "official": "Faeröer",
                "common": "Faeröer"
            },
            "por": {
                "official": "Ilhas Faroe",
                "common": "Ilhas Faroé"
            },
            "rus": {
                "official": "Фарерские острова",
                "common": "Фарерские острова"
            },
            "slk": {
                "official": "Faerské ostrovy",
                "common": "Faerské ostrovy"
            },
            "spa": {
                "official": "Islas Feroe",
                "common": "Islas Faroe"
            },
            "fin": {
                "official": "Färsaaret",
                "common": "Färsaaret"
            },
            "est": {
                "official": "Fääri saared",
                "common": "Fääri saared"
            },
            "zho": {
                "official": "法罗群岛",
                "common": "法罗群岛"
            },
            "pol": {
                "official": "Wyspy Owcze",
                "common": "Wyspy Owcze"
            }
        },
        "latlng": [
            62,
            -7
        ],
        "demonym": "Faroese",
        "landlocked": false,
        "borders": [],
        "area": 1393,
        "flag": "🇫🇴"
    },
    {
        "name": {
            "common": "Micronesia",
            "official": "Federated States of Micronesia",
            "native": {
                "eng": {
                    "official": "Federated States of Micronesia",
                    "common": "Micronesia"
                }
            }
        },
        "tld": [
            ".fm"
        ],
        "cca2": "FM",
        "ccn3": "583",
        "cca3": "FSM",
        "cioc": "FSM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "691"
        ],
        "capital": [
            "Palikir"
        ],
        "altSpellings": [
            "FM",
            "Federated States of Micronesia",
            "Micronesia, Federated States of"
        ],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Federativní státy Mikronésie",
                "common": "Mikronésie"
            },
            "deu": {
                "official": "Föderierte Staaten von Mikronesien",
                "common": "Mikronesien"
            },
            "fra": {
                "official": "États fédérés de Micronésie",
                "common": "Micronésie"
            },
            "hrv": {
                "official": "Savezne Države Mikronezije",
                "common": "Mikronezija"
            },
            "ita": {
                "official": "Stati federati di Micronesia",
                "common": "Micronesia"
            },
            "jpn": {
                "official": "ミクロネシア連邦",
                "common": "ミクロネシア連邦"
            },
            "nld": {
                "official": "Federale Staten van Micronesia",
                "common": "Micronesië"
            },
            "por": {
                "official": "Estados Federados da Micronésia",
                "common": "Micronésia"
            },
            "rus": {
                "official": "Федеративные Штаты Микронезии",
                "common": "Федеративные Штаты Микронезии"
            },
            "slk": {
                "official": "Mikronézske federatívne štáty",
                "common": "Mikronézia"
            },
            "spa": {
                "official": "Estados Federados de Micronesia",
                "common": "Micronesia"
            },
            "fin": {
                "official": "Mikronesian liittovaltio",
                "common": "Mikronesia"
            },
            "est": {
                "official": "Mikroneesia Liiduriigid",
                "common": "Mikroneesia"
            },
            "zho": {
                "official": "密克罗尼西亚联邦",
                "common": "密克罗尼西亚"
            },
            "pol": {
                "official": "Sfederowane Stany Mikronezji",
                "common": "Mikronezja"
            }
        },
        "latlng": [
            6.91666666,
            158.25
        ],
        "demonym": "Micronesian",
        "landlocked": false,
        "borders": [],
        "area": 702,
        "flag": "🇫🇲"
    },
    {
        "name": {
            "common": "Gabon",
            "official": "Gabonese Republic",
            "native": {
                "fra": {
                    "official": "République gabonaise",
                    "common": "Gabon"
                }
            }
        },
        "tld": [
            ".ga"
        ],
        "cca2": "GA",
        "ccn3": "266",
        "cca3": "GAB",
        "cioc": "GAB",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XAF"
        ],
        "callingCode": [
            "241"
        ],
        "capital": [
            "Libreville"
        ],
        "altSpellings": [
            "GA",
            "Gabonese Republic",
            "République Gabonaise"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Gabonská republika",
                "common": "Gabon"
            },
            "deu": {
                "official": "Gabunische Republik",
                "common": "Gabun"
            },
            "fra": {
                "official": "République gabonaise",
                "common": "Gabon"
            },
            "hrv": {
                "official": "Gabon Republika",
                "common": "Gabon"
            },
            "ita": {
                "official": "Repubblica gabonese",
                "common": "Gabon"
            },
            "jpn": {
                "official": "ガボン共和国",
                "common": "ガボン"
            },
            "nld": {
                "official": "Republiek Gabon",
                "common": "Gabon"
            },
            "por": {
                "official": "República do Gabão",
                "common": "Gabão"
            },
            "rus": {
                "official": "Габона Республика",
                "common": "Габон"
            },
            "slk": {
                "official": "Gabonská republika",
                "common": "Gabon"
            },
            "spa": {
                "official": "República de Gabón",
                "common": "Gabón"
            },
            "fin": {
                "official": "Gabonin tasavalta",
                "common": "Gabon"
            },
            "est": {
                "official": "Gaboni Vabariik",
                "common": "Gabon"
            },
            "zho": {
                "official": "加蓬共和国",
                "common": "加蓬"
            },
            "pol": {
                "official": "Republika Gabońska",
                "common": "Gabon"
            }
        },
        "latlng": [
            -1,
            11.75
        ],
        "demonym": "Gabonese",
        "landlocked": false,
        "borders": [
            "CMR",
            "COG",
            "GNQ"
        ],
        "area": 267668,
        "flag": "🇬🇦"
    },
    {
        "name": {
            "common": "United Kingdom",
            "official": "United Kingdom of Great Britain and Northern Ireland",
            "native": {
                "eng": {
                    "official": "United Kingdom of Great Britain and Northern Ireland",
                    "common": "United Kingdom"
                }
            }
        },
        "tld": [
            ".uk"
        ],
        "cca2": "GB",
        "ccn3": "826",
        "cca3": "GBR",
        "cioc": "GBR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "GBP"
        ],
        "callingCode": [
            "44"
        ],
        "capital": [
            "London"
        ],
        "altSpellings": [
            "GB",
            "UK",
            "Great Britain"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Spojené království Velké Británie a Severního Irska",
                "common": "Spojené království"
            },
            "deu": {
                "official": "Vereinigtes Königreich Großbritannien und Nordirland",
                "common": "Vereinigtes Königreich"
            },
            "fra": {
                "official": "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
                "common": "Royaume-Uni"
            },
            "hrv": {
                "official": "Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske",
                "common": "Ujedinjeno Kraljevstvo"
            },
            "ita": {
                "official": "Regno Unito di Gran Bretagna e Irlanda del Nord",
                "common": "Regno Unito"
            },
            "jpn": {
                "official": "グレート·ブリテンおよび北アイルランド連合王国",
                "common": "イギリス"
            },
            "nld": {
                "official": "Verenigd Koninkrijk van Groot-Brittannië en Noord-Ierland",
                "common": "Verenigd Koninkrijk"
            },
            "por": {
                "official": "Reino Unido da Grã-Bretanha e Irlanda do Norte",
                "common": "Reino Unido"
            },
            "rus": {
                "official": "Соединенное Королевство Великобритании и Северной Ирландии",
                "common": "Великобритания"
            },
            "slk": {
                "official": "Spojené kráľovstvo Veľkej Británie a SevernéhoÌrska",
                "common": "Veľká Británia (Spojené kráľovstvo)"
            },
            "spa": {
                "official": "Reino Unido de Gran Bretaña e Irlanda del Norte",
                "common": "Reino Unido"
            },
            "fin": {
                "official": "Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta",
                "common": "Yhdistynyt kuningaskunta"
            },
            "est": {
                "official": "Suurbritannia ja Põhja-Iiri Ühendkuningriik",
                "common": "Suurbritannia"
            },
            "zho": {
                "official": "大不列颠及北爱尔兰联合王国",
                "common": "英国"
            },
            "pol": {
                "official": "Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej",
                "common": "Zjednoczone Krłlestwo"
            }
        },
        "latlng": [
            54,
            -2
        ],
        "demonym": "British",
        "landlocked": false,
        "borders": [
            "IRL"
        ],
        "area": 242900,
        "flag": "🇬🇧"
    },
    {
        "name": {
            "common": "Georgia",
            "official": "Georgia",
            "native": {
                "kat": {
                    "official": "საქართველო",
                    "common": "საქართველო"
                }
            }
        },
        "tld": [
            ".ge"
        ],
        "cca2": "GE",
        "ccn3": "268",
        "cca3": "GEO",
        "cioc": "GEO",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "GEL"
        ],
        "callingCode": [
            "995"
        ],
        "capital": [
            "Tbilisi"
        ],
        "altSpellings": [
            "GE",
            "Sakartvelo"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "kat": "Georgian"
        },
        "translations": {
            "ces": {
                "official": "Gruzie",
                "common": "Gruzie"
            },
            "deu": {
                "official": "Georgien",
                "common": "Georgien"
            },
            "fra": {
                "official": "République de Géorgie",
                "common": "Géorgie"
            },
            "hrv": {
                "official": "Gruzija",
                "common": "Gruzija"
            },
            "ita": {
                "official": "Georgia",
                "common": "Georgia"
            },
            "jpn": {
                "official": "グルジア",
                "common": "グルジア"
            },
            "nld": {
                "official": "Georgia",
                "common": "Georgië"
            },
            "por": {
                "official": "Georgia",
                "common": "Geórgia"
            },
            "rus": {
                "official": "Грузия",
                "common": "Грузия"
            },
            "slk": {
                "official": "Gruzínsko",
                "common": "Gruzínsko"
            },
            "spa": {
                "official": "Georgia",
                "common": "Georgia"
            },
            "fin": {
                "official": "Georgia",
                "common": "Georgia"
            },
            "est": {
                "official": "Gruusia",
                "common": "Gruusia"
            },
            "zho": {
                "official": "格鲁吉亚",
                "common": "格鲁吉亚"
            },
            "pol": {
                "official": "Gruzja",
                "common": "Gruzja"
            }
        },
        "latlng": [
            42,
            43.5
        ],
        "demonym": "Georgian",
        "landlocked": false,
        "borders": [
            "ARM",
            "AZE",
            "RUS",
            "TUR"
        ],
        "area": 69700,
        "flag": "🇬🇪"
    },
    {
        "name": {
            "common": "Guernsey",
            "official": "Bailiwick of Guernsey",
            "native": {
                "eng": {
                    "official": "Bailiwick of Guernsey",
                    "common": "Guernsey"
                },
                "fra": {
                    "official": "Bailliage de Guernesey",
                    "common": "Guernesey"
                },
                "nfr": {
                    "official": "Dgèrnésiais",
                    "common": "Dgèrnésiais"
                }
            }
        },
        "tld": [
            ".gg"
        ],
        "cca2": "GG",
        "ccn3": "831",
        "cca3": "GGY",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "GBP"
        ],
        "callingCode": [
            "44"
        ],
        "capital": [
            "St. Peter Port"
        ],
        "altSpellings": [
            "GG",
            "Bailiwick of Guernsey",
            "Bailliage de Guernesey"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "fra": "French",
            "nfr": "Guernésiais"
        },
        "translations": {
            "ces": {
                "official": "Rychtářství Guernsey",
                "common": "Guernsey"
            },
            "deu": {
                "official": "Vogtei Guernsey",
                "common": "Guernsey"
            },
            "fra": {
                "official": "Bailliage de Guernesey",
                "common": "Guernesey"
            },
            "hrv": {
                "official": "Struka Guernsey",
                "common": "Guernsey"
            },
            "ita": {
                "official": "Baliato di Guernsey",
                "common": "Guernsey"
            },
            "jpn": {
                "official": "ガーンジーの得意分野",
                "common": "ガーンジー"
            },
            "nld": {
                "official": "Baljuwschap Guernsey",
                "common": "Guernsey"
            },
            "por": {
                "official": "Bailiado de Guernsey",
                "common": "Guernsey"
            },
            "rus": {
                "official": "Коронное владение Гернси",
                "common": "Гернси"
            },
            "slk": {
                "official": "Guernsey",
                "common": "Guernsey"
            },
            "spa": {
                "official": "Bailía de Guernsey",
                "common": "Guernsey"
            },
            "fin": {
                "official": "Guernsey",
                "common": "Guernsey"
            },
            "est": {
                "official": "Guernsey foogtkond",
                "common": "Guernsey"
            },
            "zho": {
                "official": "根西岛",
                "common": "根西岛"
            },
            "pol": {
                "official": "Baliwat Guernsey",
                "common": "Guernsey"
            }
        },
        "latlng": [
            49.46666666,
            -2.58333333
        ],
        "demonym": "Channel Islander",
        "landlocked": false,
        "borders": [],
        "area": 78,
        "flag": "🇬🇬"
    },
    {
        "name": {
            "common": "Ghana",
            "official": "Republic of Ghana",
            "native": {
                "eng": {
                    "official": "Republic of Ghana",
                    "common": "Ghana"
                }
            }
        },
        "tld": [
            ".gh"
        ],
        "cca2": "GH",
        "ccn3": "288",
        "cca3": "GHA",
        "cioc": "GHA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "GHS"
        ],
        "callingCode": [
            "233"
        ],
        "capital": [
            "Accra"
        ],
        "altSpellings": [
            "GH"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Ghanská republika",
                "common": "Ghana"
            },
            "deu": {
                "official": "Republik Ghana",
                "common": "Ghana"
            },
            "fra": {
                "official": "République du Ghana",
                "common": "Ghana"
            },
            "hrv": {
                "official": "Republika Gana",
                "common": "Gana"
            },
            "ita": {
                "official": "Repubblica del Ghana",
                "common": "Ghana"
            },
            "jpn": {
                "official": "ガーナ共和国",
                "common": "ガーナ"
            },
            "nld": {
                "official": "Republiek Ghana",
                "common": "Ghana"
            },
            "por": {
                "official": "República do Gana",
                "common": "Gana"
            },
            "rus": {
                "official": "Республика Гана",
                "common": "Гана"
            },
            "slk": {
                "official": "Ghanská republika",
                "common": "Ghana"
            },
            "spa": {
                "official": "República de Ghana",
                "common": "Ghana"
            },
            "fin": {
                "official": "Ghanan tasavalta",
                "common": "Ghana"
            },
            "est": {
                "official": "Ghana Vabariik",
                "common": "Ghana"
            },
            "zho": {
                "official": "加纳共和国",
                "common": "加纳"
            },
            "pol": {
                "official": "Republika Ghany",
                "common": "Ghana"
            }
        },
        "latlng": [
            8,
            -2
        ],
        "demonym": "Ghanaian",
        "landlocked": false,
        "borders": [
            "BFA",
            "CIV",
            "TGO"
        ],
        "area": 238533,
        "flag": "🇬🇭"
    },
    {
        "name": {
            "common": "Gibraltar",
            "official": "Gibraltar",
            "native": {
                "eng": {
                    "official": "Gibraltar",
                    "common": "Gibraltar"
                }
            }
        },
        "tld": [
            ".gi"
        ],
        "cca2": "GI",
        "ccn3": "292",
        "cca3": "GIB",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "GIP"
        ],
        "callingCode": [
            "350"
        ],
        "capital": [
            "Gibraltar"
        ],
        "altSpellings": [
            "GI"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "deu": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "fra": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "hrv": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "ita": {
                "official": "Gibilterra",
                "common": "Gibilterra"
            },
            "jpn": {
                "official": "ジブラルタル",
                "common": "ジブラルタル"
            },
            "nld": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "por": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "rus": {
                "official": "Гибралтар",
                "common": "Гибралтар"
            },
            "slk": {
                "official": "Gibraltár",
                "common": "Gibraltár"
            },
            "spa": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "fin": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "est": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            },
            "zho": {
                "official": "直布罗陀",
                "common": "直布罗陀"
            },
            "pol": {
                "official": "Gibraltar",
                "common": "Gibraltar"
            }
        },
        "latlng": [
            36.13333333,
            -5.35
        ],
        "demonym": "Gibraltar",
        "landlocked": false,
        "borders": [
            "ESP"
        ],
        "area": 6,
        "flag": "🇬🇮"
    },
    {
        "name": {
            "common": "Guinea",
            "official": "Republic of Guinea",
            "native": {
                "fra": {
                    "official": "République de Guinée",
                    "common": "Guinée"
                }
            }
        },
        "tld": [
            ".gn"
        ],
        "cca2": "GN",
        "ccn3": "324",
        "cca3": "GIN",
        "cioc": "GUI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "GNF"
        ],
        "callingCode": [
            "224"
        ],
        "capital": [
            "Conakry"
        ],
        "altSpellings": [
            "GN",
            "Republic of Guinea",
            "République de Guinée"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Guinejská republika",
                "common": "Guinea"
            },
            "deu": {
                "official": "Republik Guinea",
                "common": "Guinea"
            },
            "fra": {
                "official": "République de Guinée",
                "common": "Guinée"
            },
            "hrv": {
                "official": "Republika Gvineja",
                "common": "Gvineja"
            },
            "ita": {
                "official": "Repubblica di Guinea",
                "common": "Guinea"
            },
            "jpn": {
                "official": "ギニア共和国",
                "common": "ギニア"
            },
            "nld": {
                "official": "Republiek Guinee",
                "common": "Guinee"
            },
            "por": {
                "official": "República da Guiné",
                "common": "Guiné"
            },
            "rus": {
                "official": "Республика Гвинея",
                "common": "Гвинея"
            },
            "slk": {
                "official": "Guinejská republika",
                "common": "Guinea"
            },
            "spa": {
                "official": "República de Guinea",
                "common": "Guinea"
            },
            "fin": {
                "official": "Guinean tasavalta",
                "common": "Guinea"
            },
            "est": {
                "official": "Guinea Vabariik",
                "common": "Guinea"
            },
            "zho": {
                "official": "几内亚共和国",
                "common": "几内亚"
            },
            "pol": {
                "official": "Republika Gwinei",
                "common": "Gwinea"
            }
        },
        "latlng": [
            11,
            -10
        ],
        "demonym": "Guinean",
        "landlocked": false,
        "borders": [
            "CIV",
            "GNB",
            "LBR",
            "MLI",
            "SEN",
            "SLE"
        ],
        "area": 245857,
        "flag": "🇬🇳"
    },
    {
        "name": {
            "common": "Guadeloupe",
            "official": "Guadeloupe",
            "native": {
                "fra": {
                    "official": "Guadeloupe",
                    "common": "Guadeloupe"
                }
            }
        },
        "tld": [
            ".gp"
        ],
        "cca2": "GP",
        "ccn3": "312",
        "cca3": "GLP",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "590"
        ],
        "capital": [
            "Basse-Terre"
        ],
        "altSpellings": [
            "GP",
            "Gwadloup"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Guadeloupe",
                "common": "Guadeloupe"
            },
            "deu": {
                "official": "Guadeloupe",
                "common": "Guadeloupe"
            },
            "fra": {
                "official": "Guadeloupe",
                "common": "Guadeloupe"
            },
            "hrv": {
                "official": "Gvadalupa",
                "common": "Gvadalupa"
            },
            "ita": {
                "official": "Guadeloupe",
                "common": "Guadeloupa"
            },
            "jpn": {
                "official": "グアドループ島",
                "common": "グアドループ"
            },
            "nld": {
                "official": "Guadeloupe",
                "common": "Guadeloupe"
            },
            "por": {
                "official": "Guadalupe",
                "common": "Guadalupe"
            },
            "rus": {
                "official": "Гваделупа",
                "common": "Гваделупа"
            },
            "slk": {
                "official": "Guadeloupe",
                "common": "Guadeloupe"
            },
            "spa": {
                "official": "Guadalupe",
                "common": "Guadalupe"
            },
            "fin": {
                "official": "Guadeloupen departmentti",
                "common": "Guadeloupe"
            },
            "est": {
                "official": "Guadeloupe’i ja sõltkondade departemang",
                "common": "Guadeloupe"
            },
            "zho": {
                "official": "瓜德罗普岛",
                "common": "瓜德罗普岛"
            },
            "pol": {
                "official": "Gwadelupa",
                "common": "Gwadelupa"
            }
        },
        "latlng": [
            16.25,
            -61.583333
        ],
        "demonym": "Guadeloupian",
        "landlocked": false,
        "borders": [],
        "area": 1628,
        "flag": "🇬🇵"
    },
    {
        "name": {
            "common": "Gambia",
            "official": "Republic of the Gambia",
            "native": {
                "eng": {
                    "official": "Republic of the Gambia",
                    "common": "Gambia"
                }
            }
        },
        "tld": [
            ".gm"
        ],
        "cca2": "GM",
        "ccn3": "270",
        "cca3": "GMB",
        "cioc": "GAM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "GMD"
        ],
        "callingCode": [
            "220"
        ],
        "capital": [
            "Banjul"
        ],
        "altSpellings": [
            "GM",
            "Republic of the Gambia"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Gambijská republika",
                "common": "Gambie"
            },
            "deu": {
                "official": "Republik Gambia",
                "common": "Gambia"
            },
            "fra": {
                "official": "République de Gambie",
                "common": "Gambie"
            },
            "hrv": {
                "official": "Republika Gambija",
                "common": "Gambija"
            },
            "ita": {
                "official": "Repubblica del Gambia",
                "common": "Gambia"
            },
            "jpn": {
                "official": "ガンビア共和国",
                "common": "ガンビア"
            },
            "nld": {
                "official": "Republiek Gambia",
                "common": "Gambia"
            },
            "por": {
                "official": "República da Gâmbia",
                "common": "Gâmbia"
            },
            "rus": {
                "official": "Республика Гамбия",
                "common": "Гамбия"
            },
            "slk": {
                "official": "Gambijská republika",
                "common": "Gambia"
            },
            "spa": {
                "official": "República de Gambia",
                "common": "Gambia"
            },
            "fin": {
                "official": "Gambian tasavalta",
                "common": "Gambia"
            },
            "est": {
                "official": "Gambia Vabariik",
                "common": "Gambia"
            },
            "zho": {
                "official": "冈比亚共和国",
                "common": "冈比亚"
            },
            "pol": {
                "official": "Republika Gambii",
                "common": "Gambia"
            }
        },
        "latlng": [
            13.46666666,
            -16.56666666
        ],
        "demonym": "Gambian",
        "landlocked": false,
        "borders": [
            "SEN"
        ],
        "area": 10689,
        "flag": "🇬🇲"
    },
    {
        "name": {
            "common": "Guinea-Bissau",
            "official": "Republic of Guinea-Bissau",
            "native": {
                "por": {
                    "official": "República da Guiné-Bissau",
                    "common": "Guiné-Bissau"
                },
                "pov": {
                    "official": "República da Guiné-Bissau",
                    "common": "Guiné-Bissau"
                }
            }
        },
        "tld": [
            ".gw"
        ],
        "cca2": "GW",
        "ccn3": "624",
        "cca3": "GNB",
        "cioc": "GBS",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "245"
        ],
        "capital": [
            "Bissau"
        ],
        "altSpellings": [
            "GW",
            "Republic of Guinea-Bissau",
            "República da Guiné-Bissau"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "por": "Portuguese",
            "pov": "Upper Guinea Creole"
        },
        "translations": {
            "ces": {
                "official": "Republika Guinea-Bissau",
                "common": "Guinea-Bissau"
            },
            "deu": {
                "official": "Republik Guinea-Bissau",
                "common": "Guinea-Bissau"
            },
            "fra": {
                "official": "République de Guinée-Bissau",
                "common": "Guinée-Bissau"
            },
            "hrv": {
                "official": "Republika Gvineja Bisau",
                "common": "Gvineja Bisau"
            },
            "ita": {
                "official": "Repubblica di Guinea-Bissau",
                "common": "Guinea-Bissau"
            },
            "jpn": {
                "official": "ギニアビサウ共和国",
                "common": "ギニアビサウ"
            },
            "nld": {
                "official": "Republiek Guinee-Bissau",
                "common": "Guinee-Bissau"
            },
            "por": {
                "official": "República da Guiné-Bissau",
                "common": "Guiné-Bissau"
            },
            "rus": {
                "official": "Республика Гвинея -Бисау",
                "common": "Гвинея-Бисау"
            },
            "slk": {
                "official": "Guinejsko-bissauská republika",
                "common": "Guinea-Bissau"
            },
            "spa": {
                "official": "República de Guinea-Bissau",
                "common": "Guinea-Bisáu"
            },
            "fin": {
                "official": "Guinea-Bissaun tasavalta",
                "common": "Guinea-Bissau"
            },
            "est": {
                "official": "Guinea-Bissau Vabariik",
                "common": "Guinea-Bissau"
            },
            "zho": {
                "official": "几内亚比绍共和国",
                "common": "几内亚比绍"
            },
            "pol": {
                "official": "Republika Gwinei Bissau",
                "common": "Gwinea Bissau"
            }
        },
        "latlng": [
            12,
            -15
        ],
        "demonym": "Guinea-Bissauan",
        "landlocked": false,
        "borders": [
            "GIN",
            "SEN"
        ],
        "area": 36125,
        "flag": "🇬🇼"
    },
    {
        "name": {
            "common": "Equatorial Guinea",
            "official": "Republic of Equatorial Guinea",
            "native": {
                "fra": {
                    "official": "République de la Guinée Équatoriale",
                    "common": "Guinée équatoriale"
                },
                "por": {
                    "official": "República da Guiné Equatorial",
                    "common": "Guiné Equatorial"
                },
                "spa": {
                    "official": "República de Guinea Ecuatorial",
                    "common": "Guinea Ecuatorial"
                }
            }
        },
        "tld": [
            ".gq"
        ],
        "cca2": "GQ",
        "ccn3": "226",
        "cca3": "GNQ",
        "cioc": "GEQ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XAF"
        ],
        "callingCode": [
            "240"
        ],
        "capital": [
            "Malabo"
        ],
        "altSpellings": [
            "GQ",
            "Republic of Equatorial Guinea",
            "República de Guinea Ecuatorial",
            "République de Guinée équatoriale",
            "República da Guiné Equatorial"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "fra": "French",
            "por": "Portuguese",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Republika Rovníková Guinea",
                "common": "Rovníková Guinea"
            },
            "cym": {
                "official": "Gweriniaeth Gini Gyhydeddol",
                "common": "Gini Gyhydeddol"
            },
            "deu": {
                "official": "Republik Äquatorialguinea",
                "common": "Äquatorialguinea"
            },
            "fra": {
                "official": "République de Guinée équatoriale",
                "common": "Guinée équatoriale"
            },
            "hrv": {
                "official": "Republika Ekvatorska Gvineja",
                "common": "Ekvatorijalna Gvineja"
            },
            "ita": {
                "official": "Repubblica della Guinea Equatoriale",
                "common": "Guinea Equatoriale"
            },
            "jpn": {
                "official": "赤道ギニア共和国",
                "common": "赤道ギニア"
            },
            "nld": {
                "official": "Republiek Equatoriaal-Guinea",
                "common": "Equatoriaal-Guinea"
            },
            "por": {
                "official": "República da Guiné Equatorial",
                "common": "Guiné Equatorial"
            },
            "rus": {
                "official": "Республика Экваториальная Гвинея",
                "common": "Экваториальная Гвинея"
            },
            "slk": {
                "official": "Republika rovníkovej Guiney",
                "common": "Rovníková Guinea"
            },
            "spa": {
                "official": "República de Guinea Ecuatorial",
                "common": "Guinea Ecuatorial"
            },
            "fin": {
                "official": "Päiväntasaajan Guinean tasavalta",
                "common": "Päiväntasaajan Guinea"
            },
            "est": {
                "official": "Ekvatoriaal-Guinea Vabariik",
                "common": "Ekvatoriaal-Guinea"
            },
            "zho": {
                "official": "赤道几内亚共和国",
                "common": "赤道几内亚"
            },
            "pol": {
                "official": "Republika Gwinei Równikowej",
                "common": "Gwinea Równikowa"
            }
        },
        "latlng": [
            2,
            10
        ],
        "demonym": "Equatorial Guinean",
        "landlocked": false,
        "borders": [
            "CMR",
            "GAB"
        ],
        "area": 28051,
        "flag": "🇬🇶"
    },
    {
        "name": {
            "common": "Greece",
            "official": "Hellenic Republic",
            "native": {
                "ell": {
                    "official": "Ελληνική Δημοκρατία",
                    "common": "Ελλάδα"
                }
            }
        },
        "tld": [
            ".gr"
        ],
        "cca2": "GR",
        "ccn3": "300",
        "cca3": "GRC",
        "cioc": "GRE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "30"
        ],
        "capital": [
            "Athens"
        ],
        "altSpellings": [
            "GR",
            "Elláda",
            "Hellenic Republic",
            "Ελληνική Δημοκρατία"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ell": "Greek"
        },
        "translations": {
            "ces": {
                "official": "Řecká republika",
                "common": "Řecko"
            },
            "deu": {
                "official": "Hellenische Republik",
                "common": "Griechenland"
            },
            "fra": {
                "official": "République hellénique",
                "common": "Grèce"
            },
            "hrv": {
                "official": "Helenska Republika",
                "common": "Grčka"
            },
            "ita": {
                "official": "Repubblica ellenica",
                "common": "Grecia"
            },
            "jpn": {
                "official": "ギリシャ共和国",
                "common": "ギリシャ"
            },
            "nld": {
                "official": "Helleense Republiek",
                "common": "Griekenland"
            },
            "por": {
                "official": "República Helénica",
                "common": "Grécia"
            },
            "rus": {
                "official": "Греческая Республика",
                "common": "Греция"
            },
            "slk": {
                "official": "Grécka republika",
                "common": "Greécko"
            },
            "spa": {
                "official": "República Helénica",
                "common": "Grecia"
            },
            "fin": {
                "official": "Helleenien tasavalta",
                "common": "Kreikka"
            },
            "est": {
                "official": "Kreeka Vabariik",
                "common": "Kreeka"
            },
            "zho": {
                "official": "希腊共和国",
                "common": "希腊"
            },
            "pol": {
                "official": "Republika Grecka",
                "common": "Grecja"
            }
        },
        "latlng": [
            39,
            22
        ],
        "demonym": "Greek",
        "landlocked": false,
        "borders": [
            "ALB",
            "BGR",
            "TUR",
            "MKD"
        ],
        "area": 131990,
        "flag": "🇬🇷"
    },
    {
        "name": {
            "common": "Grenada",
            "official": "Grenada",
            "native": {
                "eng": {
                    "official": "Grenada",
                    "common": "Grenada"
                }
            }
        },
        "tld": [
            ".gd"
        ],
        "cca2": "GD",
        "ccn3": "308",
        "cca3": "GRD",
        "cioc": "GRN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1473"
        ],
        "capital": [
            "St. George's"
        ],
        "altSpellings": [
            "GD"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "deu": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "fra": {
                "official": "Grenade",
                "common": "Grenade"
            },
            "hrv": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "ita": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "jpn": {
                "official": "グレナダ",
                "common": "グレナダ"
            },
            "nld": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "por": {
                "official": "Grenada",
                "common": "Granada"
            },
            "rus": {
                "official": "Гренада",
                "common": "Гренада"
            },
            "slk": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "spa": {
                "official": "Granada",
                "common": "Grenada"
            },
            "fin": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "est": {
                "official": "Grenada",
                "common": "Grenada"
            },
            "zho": {
                "official": "格林纳达",
                "common": "格林纳达"
            },
            "pol": {
                "official": "Grenada",
                "common": "Grenada"
            }
        },
        "latlng": [
            12.11666666,
            -61.66666666
        ],
        "demonym": "Grenadian",
        "landlocked": false,
        "borders": [],
        "area": 344,
        "flag": "🇬🇩"
    },
    {
        "name": {
            "common": "Greenland",
            "official": "Greenland",
            "native": {
                "kal": {
                    "official": "Kalaallit Nunaat",
                    "common": "Kalaallit Nunaat"
                }
            }
        },
        "tld": [
            ".gl"
        ],
        "cca2": "GL",
        "ccn3": "304",
        "cca3": "GRL",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "DKK"
        ],
        "callingCode": [
            "299"
        ],
        "capital": [
            "Nuuk"
        ],
        "altSpellings": [
            "GL",
            "Grønland"
        ],
        "region": "Americas",
        "subregion": "North America",
        "languages": {
            "kal": "Greenlandic"
        },
        "translations": {
            "ces": {
                "official": "Grónsko",
                "common": "Grónsko"
            },
            "deu": {
                "official": "Grönland",
                "common": "Grönland"
            },
            "fra": {
                "official": "Groenland",
                "common": "Groenland"
            },
            "hrv": {
                "official": "Grenland",
                "common": "Grenland"
            },
            "ita": {
                "official": "Groenlandia",
                "common": "Groenlandia"
            },
            "jpn": {
                "official": "グリーンランド",
                "common": "グリーンランド"
            },
            "nld": {
                "official": "Groenland",
                "common": "Groenland"
            },
            "por": {
                "official": "Groenlândia",
                "common": "Gronelândia"
            },
            "rus": {
                "official": "Гренландия",
                "common": "Гренландия"
            },
            "slk": {
                "official": "Grónsko",
                "common": "Grónsko"
            },
            "spa": {
                "official": "Groenlandia",
                "common": "Groenlandia"
            },
            "fin": {
                "official": "Groönlanti",
                "common": "Groönlanti"
            },
            "est": {
                "official": "Gröönimaa",
                "common": "Gröönimaa"
            },
            "zho": {
                "official": "格陵兰",
                "common": "格陵兰"
            },
            "pol": {
                "official": "Grenlandia",
                "common": "Grenlandia"
            }
        },
        "latlng": [
            72,
            -40
        ],
        "demonym": "Greenlandic",
        "landlocked": false,
        "borders": [],
        "area": 2166086,
        "flag": "🇬🇱"
    },
    {
        "name": {
            "common": "Guatemala",
            "official": "Republic of Guatemala",
            "native": {
                "spa": {
                    "official": "República de Guatemala",
                    "common": "Guatemala"
                }
            }
        },
        "tld": [
            ".gt"
        ],
        "cca2": "GT",
        "ccn3": "320",
        "cca3": "GTM",
        "cioc": "GUA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "GTQ"
        ],
        "callingCode": [
            "502"
        ],
        "capital": [
            "Guatemala City"
        ],
        "altSpellings": [
            "GT"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Republika Guatemala",
                "common": "Guatemala"
            },
            "deu": {
                "official": "Republik Guatemala",
                "common": "Guatemala"
            },
            "fra": {
                "official": "République du Guatemala",
                "common": "Guatemala"
            },
            "hrv": {
                "official": "Republika Gvatemala",
                "common": "Gvatemala"
            },
            "ita": {
                "official": "Repubblica del Guatemala",
                "common": "Guatemala"
            },
            "jpn": {
                "official": "グアテマラ共和国",
                "common": "グアテマラ"
            },
            "nld": {
                "official": "Republiek Guatemala",
                "common": "Guatemala"
            },
            "por": {
                "official": "República da Guatemala",
                "common": "Guatemala"
            },
            "rus": {
                "official": "Республика Гватемала",
                "common": "Гватемала"
            },
            "slk": {
                "official": "Guatemalská republika",
                "common": "Guatemala"
            },
            "spa": {
                "official": "República de Guatemala",
                "common": "Guatemala"
            },
            "fin": {
                "official": "Guatemalan tasavalta",
                "common": "Guatemala"
            },
            "est": {
                "official": "Guatemala Vabariik",
                "common": "Guatemala"
            },
            "zho": {
                "official": "危地马拉共和国",
                "common": "危地马拉"
            },
            "pol": {
                "official": "Republika Gwatemali",
                "common": "Gwatemala"
            }
        },
        "latlng": [
            15.5,
            -90.25
        ],
        "demonym": "Guatemalan",
        "landlocked": false,
        "borders": [
            "BLZ",
            "SLV",
            "HND",
            "MEX"
        ],
        "area": 108889,
        "flag": "🇬🇹"
    },
    {
        "name": {
            "common": "French Guiana",
            "official": "Guiana",
            "native": {
                "fra": {
                    "official": "Guyane",
                    "common": "Guyane française"
                }
            }
        },
        "tld": [
            ".gf"
        ],
        "cca2": "GF",
        "ccn3": "254",
        "cca3": "GUF",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "594"
        ],
        "capital": [
            "Cayenne"
        ],
        "altSpellings": [
            "GF",
            "Guiana",
            "Guyane"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Francouzská Guyana",
                "common": "Francouzská Guyana"
            },
            "deu": {
                "official": "Französisch-Guayana",
                "common": "Französisch-Guayana"
            },
            "fra": {
                "official": "Guyane",
                "common": "Guyane"
            },
            "hrv": {
                "official": "Gijana",
                "common": "Francuska Gvajana"
            },
            "ita": {
                "official": "Guiana",
                "common": "Guyana francese"
            },
            "jpn": {
                "official": "ギアナ",
                "common": "フランス領ギアナ"
            },
            "nld": {
                "official": "Guyana",
                "common": "Frans-Guyana"
            },
            "por": {
                "official": "Guiana",
                "common": "Guiana Francesa"
            },
            "rus": {
                "official": "Гвиана",
                "common": "Французская Гвиана"
            },
            "slk": {
                "official": "Francúzska Guyana",
                "common": "Guyana"
            },
            "spa": {
                "official": "Guayana",
                "common": "Guayana Francesa"
            },
            "fin": {
                "official": "Ranskan Guayana",
                "common": "Ranskan Guayana"
            },
            "est": {
                "official": "Guajaana departemang",
                "common": "Prantsuse Guajaana"
            },
            "zho": {
                "official": "法属圭亚那",
                "common": "法属圭亚那"
            },
            "pol": {
                "official": "Gujana Francuska",
                "common": "Gujana Francuska"
            }
        },
        "latlng": [
            4,
            -53
        ],
        "demonym": "Guianan",
        "landlocked": false,
        "borders": [
            "BRA",
            "SUR"
        ],
        "area": 83534,
        "flag": "🇬🇫"
    },
    {
        "name": {
            "common": "Guam",
            "official": "Guam",
            "native": {
                "cha": {
                    "official": "Guåhån",
                    "common": "Guåhån"
                },
                "eng": {
                    "official": "Guam",
                    "common": "Guam"
                },
                "spa": {
                    "official": "Guam",
                    "common": "Guam"
                }
            }
        },
        "tld": [
            ".gu"
        ],
        "cca2": "GU",
        "ccn3": "316",
        "cca3": "GUM",
        "cioc": "GUM",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1671"
        ],
        "capital": [
            "Hagåtña"
        ],
        "altSpellings": [
            "GU",
            "Guåhån"
        ],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "cha": "Chamorro",
            "eng": "English",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Guam",
                "common": "Guam"
            },
            "deu": {
                "official": "Guam",
                "common": "Guam"
            },
            "fra": {
                "official": "Guam",
                "common": "Guam"
            },
            "hrv": {
                "official": "Guam",
                "common": "Guam"
            },
            "ita": {
                "official": "Guam",
                "common": "Guam"
            },
            "jpn": {
                "official": "グアム",
                "common": "グアム"
            },
            "nld": {
                "official": "Guam",
                "common": "Guam"
            },
            "por": {
                "official": "Guam",
                "common": "Guam"
            },
            "rus": {
                "official": "Гуам",
                "common": "Гуам"
            },
            "slk": {
                "official": "Guam",
                "common": "Guam"
            },
            "spa": {
                "official": "Guam",
                "common": "Guam"
            },
            "fin": {
                "official": "Guam",
                "common": "Guam"
            },
            "est": {
                "official": "Guami ala",
                "common": "Guam"
            },
            "zho": {
                "official": "关岛",
                "common": "关岛"
            },
            "pol": {
                "official": "Terytorium Guamu",
                "common": "Guam"
            }
        },
        "latlng": [
            13.46666666,
            144.78333333
        ],
        "demonym": "Guamanian",
        "landlocked": false,
        "borders": [],
        "area": 549,
        "flag": "🇬🇺"
    },
    {
        "name": {
            "common": "Guyana",
            "official": "Co-operative Republic of Guyana",
            "native": {
                "eng": {
                    "official": "Co-operative Republic of Guyana",
                    "common": "Guyana"
                }
            }
        },
        "tld": [
            ".gy"
        ],
        "cca2": "GY",
        "ccn3": "328",
        "cca3": "GUY",
        "cioc": "GUY",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "GYD"
        ],
        "callingCode": [
            "592"
        ],
        "capital": [
            "Georgetown"
        ],
        "altSpellings": [
            "GY",
            "Co-operative Republic of Guyana"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Kooperativní republika Guyana",
                "common": "Guyana"
            },
            "deu": {
                "official": "Kooperative Republik Guyana",
                "common": "Guyana"
            },
            "fra": {
                "official": "République coopérative de Guyana",
                "common": "Guyana"
            },
            "hrv": {
                "official": "Zadruga Republika Gvajana",
                "common": "Gvajana"
            },
            "ita": {
                "official": "Co -operative Republic of Guyana",
                "common": "Guyana"
            },
            "jpn": {
                "official": "ガイアナの協同共和国",
                "common": "ガイアナ"
            },
            "nld": {
                "official": "Coöperatieve Republiek Guyana",
                "common": "Guyana"
            },
            "por": {
                "official": "Co -operative República da Guiana",
                "common": "Guiana"
            },
            "rus": {
                "official": "Кооперативная Республика Гайана",
                "common": "Гайана"
            },
            "slk": {
                "official": "Guyanská kooperatívna republika",
                "common": "Guyana"
            },
            "spa": {
                "official": "República Cooperativa de Guyana",
                "common": "Guyana"
            },
            "fin": {
                "official": "Guayanan osuustoiminnallinen tasavalta",
                "common": "Guayana"
            },
            "est": {
                "official": "Guyana Vabariik",
                "common": "Guyana"
            },
            "zho": {
                "official": "圭亚那共和国",
                "common": "圭亚那"
            },
            "pol": {
                "official": "Kooperacyjna Republika Gujany",
                "common": "Gujana"
            }
        },
        "latlng": [
            5,
            -59
        ],
        "demonym": "Guyanese",
        "landlocked": false,
        "borders": [
            "BRA",
            "SUR",
            "VEN"
        ],
        "area": 214969,
        "flag": "🇬🇾"
    },
    {
        "name": {
            "common": "Hong Kong",
            "official": "Hong Kong Special Administrative Region of the People's Republic of China",
            "native": {
                "eng": {
                    "official": "Hong Kong Special Administrative Region of the People's Republic of China",
                    "common": "Hong Kong"
                },
                "zho": {
                    "official": "中华人民共和国香港特别行政区",
                    "common": "香港"
                }
            }
        },
        "tld": [
            ".hk",
            ".香港"
        ],
        "cca2": "HK",
        "ccn3": "344",
        "cca3": "HKG",
        "cioc": "HKG",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "HKD"
        ],
        "callingCode": [
            "852"
        ],
        "capital": [
            "City of Victoria"
        ],
        "altSpellings": [
            "HK"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "eng": "English",
            "zho": "Chinese"
        },
        "translations": {
            "ces": {
                "official": "Zvláštní administrativní oblast Čínské lidové republiky Hongkong",
                "common": "Hongkong"
            },
            "deu": {
                "official": "Sonderverwaltungszone Hongkong der Volksrepublik China",
                "common": "Hongkong"
            },
            "fra": {
                "official": "Région administrative spéciale de Hong Kong de la République populaire de Chine",
                "common": "Hong Kong"
            },
            "hrv": {
                "official": "Hong Kong Posebnog upravnog područjaNarodne Republike Kine",
                "common": "Hong Kong"
            },
            "ita": {
                "official": "Hong Kong Regione amministrativa speciale della Repubblica Popolare Cinese",
                "common": "Hong Kong"
            },
            "jpn": {
                "official": "中華人民共和国香港特別行政区",
                "common": "香港"
            },
            "nld": {
                "official": "Hong Kong Speciale Administratieve Regio van de Volksrepubliek China",
                "common": "Hongkong"
            },
            "por": {
                "official": "Hong Kong Região Administrativa Especial da República Popular da China",
                "common": "Hong Kong"
            },
            "rus": {
                "official": "Hong Kong Специальный административный район Китайской Народной Республики Китая",
                "common": "Гонконг"
            },
            "slk": {
                "official": "Špeciálna administratívna oblasťČínskej ľudovej republiky Hongkong",
                "common": "Hongkong"
            },
            "spa": {
                "official": "Hong Kong Región Administrativa Especial de la República Popular China",
                "common": "Hong Kong"
            },
            "fin": {
                "official": "Hong Kongin erityishallintoalue",
                "common": "Hongkong"
            },
            "est": {
                "official": "Hongkongi erihalduspiirkond",
                "common": "Hongkong"
            },
            "pol": {
                "official": "Specjalny Region Administracyjny Chińskiej Republiki Ludowej Hongkong",
                "common": "Hongkong"
            }
        },
        "latlng": [
            22.267,
            114.188
        ],
        "demonym": "Hong Konger",
        "landlocked": false,
        "borders": [
            "CHN"
        ],
        "area": 1104,
        "flag": "🇭🇰"
    },
    {
        "name": {
            "common": "Heard Island and McDonald Islands",
            "official": "Heard Island and McDonald Islands",
            "native": {
                "eng": {
                    "official": "Heard Island and McDonald Islands",
                    "common": "Heard Island and McDonald Islands"
                }
            }
        },
        "tld": [
            ".hm",
            ".aq"
        ],
        "cca2": "HM",
        "ccn3": "334",
        "cca3": "HMD",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [],
        "capital": [
            ""
        ],
        "altSpellings": [
            "HM",
            "Heard Island and McDonald Islands"
        ],
        "region": "Antarctic",
        "subregion": "",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Heardův ostrov a McDonaldovy ostrovy",
                "common": "Heardův ostrov a McDonaldovy ostrovy"
            },
            "deu": {
                "official": "Heard und McDonaldinseln",
                "common": "Heard und die McDonaldinseln"
            },
            "fra": {
                "official": "Des îles Heard et McDonald",
                "common": "Îles Heard-et-MacDonald"
            },
            "hrv": {
                "official": "Otok Heard i otočje McDonald",
                "common": "Otok Heard i otočje McDonald"
            },
            "ita": {
                "official": "Isole Heard e McDonald",
                "common": "Isole Heard e McDonald"
            },
            "jpn": {
                "official": "ハード島とマクドナルド諸島",
                "common": "ハード島とマクドナルド諸島"
            },
            "nld": {
                "official": "Heard en McDonaldeilanden",
                "common": "Heard-en McDonaldeilanden"
            },
            "por": {
                "official": "Ilha Heard e Ilhas McDonald",
                "common": "Ilha Heard e Ilhas McDonald"
            },
            "rus": {
                "official": "Остров Херд и острова Макдональд",
                "common": "Остров Херд и острова Макдональд"
            },
            "slk": {
                "official": "Teritórium Heardovho ostrova a Macdonaldových ostrovov",
                "common": "Heardov ostrov"
            },
            "spa": {
                "official": "Islas Heard y McDonald",
                "common": "Islas Heard y McDonald"
            },
            "fin": {
                "official": "Heard ja McDonaldinsaaret",
                "common": "Heard ja McDonaldinsaaret"
            },
            "est": {
                "official": "Heardi ja McDonaldi saarte ala",
                "common": "Heard ja McDonald"
            },
            "zho": {
                "official": "赫德岛和麦当劳群岛",
                "common": "赫德岛和麦当劳群岛"
            },
            "pol": {
                "official": "Terytorium Wysp Heard i McDonalda",
                "common": "Wyspy Heard i McDonalda"
            }
        },
        "latlng": [
            -53.1,
            72.51666666
        ],
        "demonym": "Heard and McDonald Islander",
        "landlocked": false,
        "borders": [],
        "area": 412,
        "flag": "🇭🇲"
    },
    {
        "name": {
            "common": "Honduras",
            "official": "Republic of Honduras",
            "native": {
                "spa": {
                    "official": "República de Honduras",
                    "common": "Honduras"
                }
            }
        },
        "tld": [
            ".hn"
        ],
        "cca2": "HN",
        "ccn3": "340",
        "cca3": "HND",
        "cioc": "HON",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "HNL"
        ],
        "callingCode": [
            "504"
        ],
        "capital": [
            "Tegucigalpa"
        ],
        "altSpellings": [
            "HN",
            "Republic of Honduras",
            "República de Honduras"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Honduraská republika",
                "common": "Honduras"
            },
            "deu": {
                "official": "Republik Honduras",
                "common": "Honduras"
            },
            "fra": {
                "official": "République du Honduras",
                "common": "Honduras"
            },
            "hrv": {
                "official": "Republika Honduras",
                "common": "Honduras"
            },
            "ita": {
                "official": "Repubblica di Honduras",
                "common": "Honduras"
            },
            "jpn": {
                "official": "ホンジュラス共和国",
                "common": "ホンジュラス"
            },
            "nld": {
                "official": "Republiek Honduras",
                "common": "Honduras"
            },
            "por": {
                "official": "República de Honduras",
                "common": "Honduras"
            },
            "rus": {
                "official": "Республика Гондурас",
                "common": "Гондурас"
            },
            "slk": {
                "official": "Honduraská republika",
                "common": "Honduras"
            },
            "spa": {
                "official": "República de Honduras",
                "common": "Honduras"
            },
            "fin": {
                "official": "Hondurasin tasavalta",
                "common": "Honduras"
            },
            "est": {
                "official": "Hondurase Vabariik",
                "common": "Honduras"
            },
            "zho": {
                "official": "洪都拉斯共和国",
                "common": "洪都拉斯"
            },
            "pol": {
                "official": "Republika Hondurasu",
                "common": "Honduras"
            }
        },
        "latlng": [
            15,
            -86.5
        ],
        "demonym": "Honduran",
        "landlocked": false,
        "borders": [
            "GTM",
            "SLV",
            "NIC"
        ],
        "area": 112492,
        "flag": "🇭🇳"
    },
    {
        "name": {
            "common": "Croatia",
            "official": "Republic of Croatia",
            "native": {
                "hrv": {
                    "official": "Republika Hrvatska",
                    "common": "Hrvatska"
                }
            }
        },
        "tld": [
            ".hr"
        ],
        "cca2": "HR",
        "ccn3": "191",
        "cca3": "HRV",
        "cioc": "CRO",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "HRK"
        ],
        "callingCode": [
            "385"
        ],
        "capital": [
            "Zagreb"
        ],
        "altSpellings": [
            "HR",
            "Hrvatska",
            "Republic of Croatia",
            "Republika Hrvatska"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "hrv": "Croatian"
        },
        "translations": {
            "ces": {
                "official": "Chorvatská republika",
                "common": "Chorvatsko"
            },
            "cym": {
                "official": "Gweriniaeth Croatia",
                "common": "Croatia"
            },
            "deu": {
                "official": "Republik Kroatien",
                "common": "Kroatien"
            },
            "fra": {
                "official": "République de Croatie",
                "common": "Croatie"
            },
            "hrv": {
                "official": "Republika Hrvatska",
                "common": "Hrvatska"
            },
            "ita": {
                "official": "Repubblica di Croazia",
                "common": "Croazia"
            },
            "jpn": {
                "official": "クロアチア共和国",
                "common": "クロアチア"
            },
            "nld": {
                "official": "Republiek Kroatië",
                "common": "Kroatië"
            },
            "por": {
                "official": "República da Croácia",
                "common": "Croácia"
            },
            "rus": {
                "official": "Республика Хорватия",
                "common": "Хорватия"
            },
            "slk": {
                "official": "Chorvátska republika",
                "common": "Chorvátsko"
            },
            "spa": {
                "official": "República de Croacia",
                "common": "Croacia"
            },
            "fin": {
                "official": "Kroatian tasavalta",
                "common": "Kroatia"
            },
            "est": {
                "official": "Horvaatia Vabariik",
                "common": "Horvaatia"
            },
            "zho": {
                "official": "克罗地亚共和国",
                "common": "克罗地亚"
            },
            "pol": {
                "official": "Republika Chorwacji",
                "common": "Chorwacja"
            }
        },
        "latlng": [
            45.16666666,
            15.5
        ],
        "demonym": "Croatian",
        "landlocked": false,
        "borders": [
            "BIH",
            "HUN",
            "MNE",
            "SRB",
            "SVN"
        ],
        "area": 56594,
        "flag": "🇭🇷"
    },
    {
        "name": {
            "common": "Haiti",
            "official": "Republic of Haiti",
            "native": {
                "fra": {
                    "official": "République d'Haïti",
                    "common": "Haïti"
                },
                "hat": {
                    "official": "Repiblik Ayiti",
                    "common": "Ayiti"
                }
            }
        },
        "tld": [
            ".ht"
        ],
        "cca2": "HT",
        "ccn3": "332",
        "cca3": "HTI",
        "cioc": "HAI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "HTG",
            "USD"
        ],
        "callingCode": [
            "509"
        ],
        "capital": [
            "Port-au-Prince"
        ],
        "altSpellings": [
            "HT",
            "Republic of Haiti",
            "République d'Haïti",
            "Repiblik Ayiti"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French",
            "hat": "Haitian Creole"
        },
        "translations": {
            "ces": {
                "official": "Republika Haiti",
                "common": "Haiti"
            },
            "deu": {
                "official": "Republik Haiti",
                "common": "Haiti"
            },
            "fra": {
                "official": "République d'Haïti",
                "common": "Haïti"
            },
            "hrv": {
                "official": "Republika Haiti",
                "common": "Haiti"
            },
            "ita": {
                "official": "Repubblica di Haiti",
                "common": "Haiti"
            },
            "jpn": {
                "official": "ハイチ共和国",
                "common": "ハイチ"
            },
            "nld": {
                "official": "Republiek Haïti",
                "common": "Haïti"
            },
            "por": {
                "official": "República do Haiti",
                "common": "Haiti"
            },
            "rus": {
                "official": "Республика Гаити",
                "common": "Гаити"
            },
            "slk": {
                "official": "Haitská republika",
                "common": "Haiti"
            },
            "spa": {
                "official": "República de Haití",
                "common": "Haiti"
            },
            "fin": {
                "official": "Haitin tasavalta",
                "common": "Haiti"
            },
            "est": {
                "official": "Haiti Vabariik",
                "common": "Haiti"
            },
            "zho": {
                "official": "海地共和国",
                "common": "海地"
            },
            "pol": {
                "official": "Republika Haiti",
                "common": "Haiti"
            }
        },
        "latlng": [
            19,
            -72.41666666
        ],
        "demonym": "Haitian",
        "landlocked": false,
        "borders": [
            "DOM"
        ],
        "area": 27750,
        "flag": "🇭🇹"
    },
    {
        "name": {
            "common": "Hungary",
            "official": "Hungary",
            "native": {
                "hun": {
                    "official": "Magyarország",
                    "common": "Magyarország"
                }
            }
        },
        "tld": [
            ".hu"
        ],
        "cca2": "HU",
        "ccn3": "348",
        "cca3": "HUN",
        "cioc": "HUN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "HUF"
        ],
        "callingCode": [
            "36"
        ],
        "capital": [
            "Budapest"
        ],
        "altSpellings": [
            "HU"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "hun": "Hungarian"
        },
        "translations": {
            "ces": {
                "official": "Maďarsko",
                "common": "Maďarsko"
            },
            "deu": {
                "official": "Ungarn",
                "common": "Ungarn"
            },
            "fra": {
                "official": "Hongrie",
                "common": "Hongrie"
            },
            "hrv": {
                "official": "Madžarska",
                "common": "Mađarska"
            },
            "ita": {
                "official": "Ungheria",
                "common": "Ungheria"
            },
            "jpn": {
                "official": "ハンガリー",
                "common": "ハンガリー"
            },
            "nld": {
                "official": "Hongarije",
                "common": "Hongarije"
            },
            "por": {
                "official": "Hungria",
                "common": "Hungria"
            },
            "rus": {
                "official": "Венгрия",
                "common": "Венгрия"
            },
            "slk": {
                "official": "Maďarsko",
                "common": "Maďarsko"
            },
            "spa": {
                "official": "Hungría",
                "common": "Hungría"
            },
            "fin": {
                "official": "Unkari",
                "common": "Unkari"
            },
            "est": {
                "official": "Ungari",
                "common": "Ungari"
            },
            "zho": {
                "official": "匈牙利",
                "common": "匈牙利"
            },
            "pol": {
                "official": "Węgry",
                "common": "Węgry"
            }
        },
        "latlng": [
            47,
            20
        ],
        "demonym": "Hungarian",
        "landlocked": true,
        "borders": [
            "AUT",
            "HRV",
            "ROU",
            "SRB",
            "SVK",
            "SVN",
            "UKR"
        ],
        "area": 93028,
        "flag": "🇭🇺"
    },
    {
        "name": {
            "common": "Indonesia",
            "official": "Republic of Indonesia",
            "native": {
                "ind": {
                    "official": "Republik Indonesia",
                    "common": "Indonesia"
                }
            }
        },
        "tld": [
            ".id"
        ],
        "cca2": "ID",
        "ccn3": "360",
        "cca3": "IDN",
        "cioc": "INA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "IDR"
        ],
        "callingCode": [
            "62"
        ],
        "capital": [
            "Jakarta"
        ],
        "altSpellings": [
            "ID",
            "Republic of Indonesia",
            "Republik Indonesia"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "ind": "Indonesian"
        },
        "translations": {
            "ces": {
                "official": "Indonéská republika",
                "common": "Indonésie"
            },
            "deu": {
                "official": "Republik Indonesien",
                "common": "Indonesien"
            },
            "fra": {
                "official": "République d'Indonésie",
                "common": "Indonésie"
            },
            "hrv": {
                "official": "Republika Indonezija",
                "common": "Indonezija"
            },
            "ita": {
                "official": "Repubblica di Indonesia",
                "common": "Indonesia"
            },
            "jpn": {
                "official": "インドネシア共和国",
                "common": "インドネシア"
            },
            "nld": {
                "official": "Republiek Indonesië",
                "common": "Indonesië"
            },
            "por": {
                "official": "República da Indonésia",
                "common": "Indonésia"
            },
            "rus": {
                "official": "Республика Индонезия",
                "common": "Индонезия"
            },
            "slk": {
                "official": "Indonézska republika",
                "common": "Indonézia"
            },
            "spa": {
                "official": "República de Indonesia",
                "common": "Indonesia"
            },
            "fin": {
                "official": "Indonesian tasavalta",
                "common": "Indonesia"
            },
            "est": {
                "official": "Indoneesia Vabariik",
                "common": "Indoneesia"
            },
            "zho": {
                "official": "印度尼西亚共和国",
                "common": "印度尼西亚"
            },
            "pol": {
                "official": "Republika Indonezji",
                "common": "Indonezja"
            }
        },
        "latlng": [
            -5,
            120
        ],
        "demonym": "Indonesian",
        "landlocked": false,
        "borders": [
            "TLS",
            "MYS",
            "PNG"
        ],
        "area": 1904569,
        "flag": "🇮🇩"
    },
    {
        "name": {
            "common": "Isle of Man",
            "official": "Isle of Man",
            "native": {
                "eng": {
                    "official": "Isle of Man",
                    "common": "Isle of Man"
                },
                "glv": {
                    "official": "Ellan Vannin or Mannin",
                    "common": "Mannin"
                }
            }
        },
        "tld": [
            ".im"
        ],
        "cca2": "IM",
        "ccn3": "833",
        "cca3": "IMN",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "GBP"
        ],
        "callingCode": [
            "44"
        ],
        "capital": [
            "Douglas"
        ],
        "altSpellings": [
            "IM",
            "Ellan Vannin",
            "Mann",
            "Mannin"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "glv": "Manx"
        },
        "translations": {
            "ces": {
                "official": "Ostrov Man",
                "common": "Ostrov Man"
            },
            "deu": {
                "official": "Isle of Man",
                "common": "Insel Man"
            },
            "fra": {
                "official": "Isle of Man",
                "common": "Île de Man"
            },
            "hrv": {
                "official": "Mana ostrvo",
                "common": "Otok Man"
            },
            "ita": {
                "official": "Isola di Man",
                "common": "Isola di Man"
            },
            "jpn": {
                "official": "マン島",
                "common": "マン島"
            },
            "nld": {
                "official": "Isle of Man",
                "common": "Isle of Man"
            },
            "por": {
                "official": "Isle of Man",
                "common": "Ilha de Man"
            },
            "rus": {
                "official": "Остров Мэн",
                "common": "Остров Мэн"
            },
            "slk": {
                "official": "Ostrov Man",
                "common": "Man"
            },
            "spa": {
                "official": "Isla de Man",
                "common": "Isla de Man"
            },
            "fin": {
                "official": "Mansaari",
                "common": "Mansaari"
            },
            "est": {
                "official": "Mani saar",
                "common": "Mani saar"
            },
            "zho": {
                "official": "马恩岛",
                "common": "马恩岛"
            },
            "pol": {
                "official": "Wyspa Man",
                "common": "Wyspa Man"
            }
        },
        "latlng": [
            54.25,
            -4.5
        ],
        "demonym": "Manx",
        "landlocked": false,
        "borders": [],
        "area": 572,
        "flag": "🇮🇲"
    },
    {
        "name": {
            "common": "India",
            "official": "Republic of India",
            "native": {
                "eng": {
                    "official": "Republic of India",
                    "common": "India"
                },
                "hin": {
                    "official": "भारत गणराज्य",
                    "common": "भारत"
                },
                "tam": {
                    "official": "இந்தியக் குடியரசு",
                    "common": "இந்தியா"
                }
            }
        },
        "tld": [
            ".in"
        ],
        "cca2": "IN",
        "ccn3": "356",
        "cca3": "IND",
        "cioc": "IND",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "INR"
        ],
        "callingCode": [
            "91"
        ],
        "capital": [
            "New Delhi"
        ],
        "altSpellings": [
            "IN",
            "Bhārat",
            "Republic of India",
            "Bharat Ganrajya",
            "இந்தியா"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "eng": "English",
            "hin": "Hindi",
            "tam": "Tamil"
        },
        "translations": {
            "ces": {
                "official": "Indická republika",
                "common": "Indie"
            },
            "deu": {
                "official": "Republik Indien",
                "common": "Indien"
            },
            "fra": {
                "official": "République de l'Inde",
                "common": "Inde"
            },
            "hrv": {
                "official": "Republika Indija",
                "common": "Indija"
            },
            "ita": {
                "official": "Repubblica dell'India",
                "common": "India"
            },
            "jpn": {
                "official": "インド共和国",
                "common": "インド"
            },
            "nld": {
                "official": "Republiek India",
                "common": "India"
            },
            "por": {
                "official": "República da Índia",
                "common": "Índia"
            },
            "rus": {
                "official": "Республика Индия",
                "common": "Индия"
            },
            "slk": {
                "official": "Indická republika",
                "common": "India"
            },
            "spa": {
                "official": "República de la India",
                "common": "India"
            },
            "fin": {
                "official": "Intian tasavalta",
                "common": "Intia"
            },
            "est": {
                "official": "India Vabariik",
                "common": "India"
            },
            "zho": {
                "official": "印度共和国",
                "common": "印度"
            },
            "pol": {
                "official": "Republika Indii",
                "common": "Indie"
            }
        },
        "latlng": [
            20,
            77
        ],
        "demonym": "Indian",
        "landlocked": false,
        "borders": [
            "BGD",
            "BTN",
            "MMR",
            "CHN",
            "NPL",
            "PAK"
        ],
        "area": 3287590,
        "flag": "🇮🇳"
    },
    {
        "name": {
            "common": "British Indian Ocean Territory",
            "official": "British Indian Ocean Territory",
            "native": {
                "eng": {
                    "official": "British Indian Ocean Territory",
                    "common": "British Indian Ocean Territory"
                }
            }
        },
        "tld": [
            ".io"
        ],
        "cca2": "IO",
        "ccn3": "086",
        "cca3": "IOT",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "246"
        ],
        "capital": [
            "Diego Garcia"
        ],
        "altSpellings": [
            "IO"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Britské indickooceánské území",
                "common": "Britské indickooceánské území"
            },
            "cym": {
                "official": "Tiriogaeth Brydeinig Cefnfor India",
                "common": "Tiriogaeth Brydeinig Cefnfor India"
            },
            "deu": {
                "official": "Britisches Territorium im Indischen Ozean",
                "common": "Britisches Territorium im Indischen Ozean"
            },
            "fra": {
                "official": "Territoire britannique de l' océan Indien",
                "common": "Territoire britannique de l'océan Indien"
            },
            "hrv": {
                "official": "British Indian Ocean Territory",
                "common": "Britanski Indijskooceanski teritorij"
            },
            "ita": {
                "official": "Territorio britannico dell'Oceano Indiano",
                "common": "Territorio britannico dell'oceano indiano"
            },
            "jpn": {
                "official": "イギリス領インド洋地域",
                "common": "イギリス領インド洋地域"
            },
            "nld": {
                "official": "Brits Indische Oceaan Territorium",
                "common": "Britse Gebieden in de Indische Oceaan"
            },
            "por": {
                "official": "British Indian Ocean Territory",
                "common": "Território Britânico do Oceano Índico"
            },
            "rus": {
                "official": "Британская территория Индийского океана",
                "common": "Британская территория в Индийском океане"
            },
            "slk": {
                "official": "Britské indickooceánske územie",
                "common": "Britské indickooceánske územie"
            },
            "spa": {
                "official": "Territorio Británico del Océano Índico",
                "common": "Territorio Británico del Océano Índico"
            },
            "fin": {
                "official": "Brittiläinen Intian valtameren alue",
                "common": "Brittiläinen Intian valtameren alue"
            },
            "est": {
                "official": "Briti India ookeani ala",
                "common": "Briti India ookeani ala"
            },
            "zho": {
                "official": "英属印度洋领地",
                "common": "英属印度洋领地"
            },
            "pol": {
                "official": "Brytyjskie Terytorium Oceanu Indyjskiego",
                "common": "Brytyjskie Terytorium Oceanu Indyjskiego"
            }
        },
        "latlng": [
            -6,
            71.5
        ],
        "demonym": "Indian",
        "landlocked": false,
        "borders": [],
        "area": 60,
        "flag": "🇮🇴"
    },
    {
        "name": {
            "common": "Ireland",
            "official": "Republic of Ireland",
            "native": {
                "eng": {
                    "official": "Republic of Ireland",
                    "common": "Ireland"
                },
                "gle": {
                    "official": "Poblacht na hÉireann",
                    "common": "Éire"
                }
            }
        },
        "tld": [
            ".ie"
        ],
        "cca2": "IE",
        "ccn3": "372",
        "cca3": "IRL",
        "cioc": "IRL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "353"
        ],
        "capital": [
            "Dublin"
        ],
        "altSpellings": [
            "IE",
            "Éire",
            "Republic of Ireland",
            "Poblacht na hÉireann"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "gle": "Irish"
        },
        "translations": {
            "ces": {
                "official": "Irsko",
                "common": "Irsko"
            },
            "deu": {
                "official": "Republik Irland",
                "common": "Irland"
            },
            "fra": {
                "official": "République d'Irlande",
                "common": "Irlande"
            },
            "hrv": {
                "official": "Republika Irska",
                "common": "Irska"
            },
            "ita": {
                "official": "Repubblica d'Irlanda",
                "common": "Irlanda"
            },
            "jpn": {
                "official": "アイルランド共和国",
                "common": "アイルランド"
            },
            "nld": {
                "official": "Republic of Ireland",
                "common": "Ierland"
            },
            "por": {
                "official": "República da Irlanda",
                "common": "Irlanda"
            },
            "rus": {
                "official": "Ирландия",
                "common": "Ирландия"
            },
            "slk": {
                "official": "Írska republika",
                "common": "Írsko"
            },
            "spa": {
                "official": "República de Irlanda",
                "common": "Irlanda"
            },
            "fin": {
                "official": "Irlannin tasavalta",
                "common": "Irlanti"
            },
            "est": {
                "official": "Iirimaa",
                "common": "Iirimaa"
            },
            "zho": {
                "official": "爱尔兰共和国",
                "common": "爱尔兰"
            },
            "pol": {
                "official": "Republika Irlandii",
                "common": "Irlandia"
            }
        },
        "latlng": [
            53,
            -8
        ],
        "demonym": "Irish",
        "landlocked": false,
        "borders": [
            "GBR"
        ],
        "area": 70273,
        "flag": "🇮🇪"
    },
    {
        "name": {
            "common": "Iran",
            "official": "Islamic Republic of Iran",
            "native": {
                "fas": {
                    "official": "جمهوری اسلامی ایران",
                    "common": "ایران"
                }
            }
        },
        "tld": [
            ".ir",
            "ایران."
        ],
        "cca2": "IR",
        "ccn3": "364",
        "cca3": "IRN",
        "cioc": "IRI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "IRR"
        ],
        "callingCode": [
            "98"
        ],
        "capital": [
            "Tehran"
        ],
        "altSpellings": [
            "IR",
            "Islamic Republic of Iran",
            "Iran, Islamic Republic of",
            "Jomhuri-ye Eslāmi-ye Irān"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "fas": "Persian"
        },
        "translations": {
            "ces": {
                "official": "Islámská republika Írán",
                "common": "Írán"
            },
            "deu": {
                "official": "Islamische Republik Iran",
                "common": "Iran"
            },
            "fra": {
                "official": "République islamique d'Iran",
                "common": "Iran"
            },
            "hrv": {
                "official": "Islamska Republika Iran",
                "common": "Iran"
            },
            "ita": {
                "official": "Repubblica islamica dell'Iran",
                "common": "Iran"
            },
            "jpn": {
                "official": "イラン·イスラム共和国",
                "common": "イラン・イスラム共和国"
            },
            "nld": {
                "official": "Islamitische Republiek Iran",
                "common": "Iran"
            },
            "por": {
                "official": "República Islâmica do Irã",
                "common": "Irão"
            },
            "rus": {
                "official": "Исламская Республика Иран",
                "common": "Иран"
            },
            "slk": {
                "official": "Iránska islamská republika",
                "common": "Irán"
            },
            "spa": {
                "official": "República Islámica de Irán",
                "common": "Iran"
            },
            "fin": {
                "official": "Iranin islamilainen tasavalta",
                "common": "Iran"
            },
            "est": {
                "official": "Iraani Islamivabariik",
                "common": "Iraan"
            },
            "zho": {
                "official": "伊朗伊斯兰共和国",
                "common": "伊朗"
            },
            "pol": {
                "official": "Islamska Republika Iranu",
                "common": "Iran"
            }
        },
        "latlng": [
            32,
            53
        ],
        "demonym": "Iranian",
        "landlocked": false,
        "borders": [
            "AFG",
            "ARM",
            "AZE",
            "IRQ",
            "PAK",
            "TUR",
            "TKM"
        ],
        "area": 1648195,
        "flag": "🇮🇷"
    },
    {
        "name": {
            "common": "Iraq",
            "official": "Republic of Iraq",
            "native": {
                "ara": {
                    "official": "جمهورية العراق",
                    "common": "العراق"
                },
                "arc": {
                    "official": "ܩܘܼܛܢܵܐ ܐܝܼܪܲܩ",
                    "common": "ܩܘܼܛܢܵܐ"
                },
                "ckb": {
                    "official": "کۆماری عێراق",
                    "common": "کۆماری"
                }
            }
        },
        "tld": [
            ".iq"
        ],
        "cca2": "IQ",
        "ccn3": "368",
        "cca3": "IRQ",
        "cioc": "IRQ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "IQD"
        ],
        "callingCode": [
            "964"
        ],
        "capital": [
            "Baghdad"
        ],
        "altSpellings": [
            "IQ",
            "Republic of Iraq",
            "Jumhūriyyat al-‘Irāq"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic",
            "arc": "Aramaic",
            "ckb": "Sorani"
        },
        "translations": {
            "ces": {
                "official": "Irácká republika",
                "common": "Irák"
            },
            "deu": {
                "official": "Republik Irak",
                "common": "Irak"
            },
            "fra": {
                "official": "République d'Irak",
                "common": "Irak"
            },
            "hrv": {
                "official": "Republika Irak",
                "common": "Irak"
            },
            "ita": {
                "official": "Repubblica dell'Iraq",
                "common": "Iraq"
            },
            "jpn": {
                "official": "イラク共和国",
                "common": "イラク"
            },
            "nld": {
                "official": "Republiek Irak",
                "common": "Irak"
            },
            "por": {
                "official": "República do Iraque",
                "common": "Iraque"
            },
            "rus": {
                "official": "Республика Ирак",
                "common": "Ирак"
            },
            "slk": {
                "official": "Iracká republika",
                "common": "Irak"
            },
            "spa": {
                "official": "República de Irak",
                "common": "Irak"
            },
            "fin": {
                "official": "Irakin tasavalta",
                "common": "Irak"
            },
            "est": {
                "official": "Iraagi Vabariik",
                "common": "Iraak"
            },
            "zho": {
                "official": "伊拉克共和国",
                "common": "伊拉克"
            },
            "pol": {
                "official": "Republika Iraku",
                "common": "Irak"
            }
        },
        "latlng": [
            33,
            44
        ],
        "demonym": "Iraqi",
        "landlocked": false,
        "borders": [
            "IRN",
            "JOR",
            "KWT",
            "SAU",
            "SYR",
            "TUR"
        ],
        "area": 438317,
        "flag": "🇮🇶"
    },
    {
        "name": {
            "common": "Iceland",
            "official": "Iceland",
            "native": {
                "isl": {
                    "official": "Ísland",
                    "common": "Ísland"
                }
            }
        },
        "tld": [
            ".is"
        ],
        "cca2": "IS",
        "ccn3": "352",
        "cca3": "ISL",
        "cioc": "ISL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ISK"
        ],
        "callingCode": [
            "354"
        ],
        "capital": [
            "Reykjavik"
        ],
        "altSpellings": [
            "IS",
            "Island",
            "Republic of Iceland",
            "Lýðveldið Ísland"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "isl": "Icelandic"
        },
        "translations": {
            "ces": {
                "official": "Island",
                "common": "Island"
            },
            "deu": {
                "official": "Island",
                "common": "Island"
            },
            "fra": {
                "official": "République d'Islande",
                "common": "Islande"
            },
            "hrv": {
                "official": "Island",
                "common": "Island"
            },
            "ita": {
                "official": "Islanda",
                "common": "Islanda"
            },
            "jpn": {
                "official": "アイスランド",
                "common": "アイスランド"
            },
            "nld": {
                "official": "IJsland",
                "common": "IJsland"
            },
            "por": {
                "official": "Islândia",
                "common": "Islândia"
            },
            "rus": {
                "official": "Исландия",
                "common": "Исландия"
            },
            "slk": {
                "official": "Islandská republika",
                "common": "Island"
            },
            "spa": {
                "official": "Islandia",
                "common": "Islandia"
            },
            "fin": {
                "official": "Islanti",
                "common": "Islanti"
            },
            "est": {
                "official": "Islandi Vabariik",
                "common": "Island"
            },
            "zho": {
                "official": "冰岛",
                "common": "冰岛"
            },
            "pol": {
                "official": "Republika Islandii",
                "common": "Islandia"
            }
        },
        "latlng": [
            65,
            -18
        ],
        "demonym": "Icelander",
        "landlocked": false,
        "borders": [],
        "area": 103000,
        "flag": "🇮🇸"
    },
    {
        "name": {
            "common": "Israel",
            "official": "State of Israel",
            "native": {
                "ara": {
                    "official": "دولة إسرائيل",
                    "common": "إسرائيل"
                },
                "heb": {
                    "official": "מדינת ישראל",
                    "common": "ישראל"
                }
            }
        },
        "tld": [
            ".il"
        ],
        "cca2": "IL",
        "ccn3": "376",
        "cca3": "ISR",
        "cioc": "ISR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ILS"
        ],
        "callingCode": [
            "972"
        ],
        "capital": [
            "Jerusalem"
        ],
        "altSpellings": [
            "IL",
            "State of Israel",
            "Medīnat Yisrā'el"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic",
            "heb": "Hebrew"
        },
        "translations": {
            "ces": {
                "official": "Stát Izrael",
                "common": "Izrael"
            },
            "deu": {
                "official": "Staat Israel",
                "common": "Israel"
            },
            "fra": {
                "official": "État d'Israël",
                "common": "Israël"
            },
            "hrv": {
                "official": "Država Izrael",
                "common": "Izrael"
            },
            "ita": {
                "official": "Stato di Israele",
                "common": "Israele"
            },
            "jpn": {
                "official": "イスラエル国",
                "common": "イスラエル"
            },
            "nld": {
                "official": "Staat Israël",
                "common": "Israël"
            },
            "por": {
                "official": "Estado de Israel",
                "common": "Israel"
            },
            "rus": {
                "official": "Государство Израиль",
                "common": "Израиль"
            },
            "slk": {
                "official": "Izraelský štát",
                "common": "Izrael"
            },
            "spa": {
                "official": "Estado de Israel",
                "common": "Israel"
            },
            "fin": {
                "official": "Israelin valtio",
                "common": "Israel"
            },
            "est": {
                "official": "Iisraeli Riik",
                "common": "Iisrael"
            },
            "zho": {
                "official": "以色列国",
                "common": "以色列"
            },
            "pol": {
                "official": "Państwo Izrael",
                "common": "Izrael"
            }
        },
        "latlng": [
            31.47,
            35.13
        ],
        "demonym": "Israeli",
        "landlocked": false,
        "borders": [
            "EGY",
            "JOR",
            "LBN",
            "PSE",
            "SYR"
        ],
        "area": 20770,
        "flag": "🇮🇱"
    },
    {
        "name": {
            "common": "Italy",
            "official": "Italian Republic",
            "native": {
                "ita": {
                    "official": "Repubblica italiana",
                    "common": "Italia"
                }
            }
        },
        "tld": [
            ".it"
        ],
        "cca2": "IT",
        "ccn3": "380",
        "cca3": "ITA",
        "cioc": "ITA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "39"
        ],
        "capital": [
            "Rome"
        ],
        "altSpellings": [
            "IT",
            "Italian Republic",
            "Repubblica italiana"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ita": "Italian"
        },
        "translations": {
            "ces": {
                "official": "Italská republika",
                "common": "Itálie"
            },
            "deu": {
                "official": "Italienische Republik",
                "common": "Italien"
            },
            "fra": {
                "official": "République italienne",
                "common": "Italie"
            },
            "hrv": {
                "official": "talijanska Republika",
                "common": "Italija"
            },
            "ita": {
                "official": "Repubblica italiana",
                "common": "Italia"
            },
            "jpn": {
                "official": "イタリア共和国",
                "common": "イタリア"
            },
            "nld": {
                "official": "Italiaanse Republiek",
                "common": "Italië"
            },
            "por": {
                "official": "República Italiana",
                "common": "Itália"
            },
            "rus": {
                "official": "итальянская Республика",
                "common": "Италия"
            },
            "slk": {
                "official": "Talianska republika",
                "common": "Taliansko"
            },
            "spa": {
                "official": "República Italiana",
                "common": "Italia"
            },
            "fin": {
                "official": "Italian tasavalta",
                "common": "Italia"
            },
            "est": {
                "official": "Itaalia Vabariik",
                "common": "Itaalia"
            },
            "zho": {
                "official": "意大利共和国",
                "common": "意大利"
            },
            "pol": {
                "official": "Republika Włoska",
                "common": "Włochy"
            }
        },
        "latlng": [
            42.83333333,
            12.83333333
        ],
        "demonym": "Italian",
        "landlocked": false,
        "borders": [
            "AUT",
            "FRA",
            "SMR",
            "SVN",
            "CHE",
            "VAT"
        ],
        "area": 301336,
        "flag": "🇮🇹"
    },
    {
        "name": {
            "common": "Jamaica",
            "official": "Jamaica",
            "native": {
                "eng": {
                    "official": "Jamaica",
                    "common": "Jamaica"
                },
                "jam": {
                    "official": "Jamaica",
                    "common": "Jamaica"
                }
            }
        },
        "tld": [
            ".jm"
        ],
        "cca2": "JM",
        "ccn3": "388",
        "cca3": "JAM",
        "cioc": "JAM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "JMD"
        ],
        "callingCode": [
            "1876"
        ],
        "capital": [
            "Kingston"
        ],
        "altSpellings": [
            "JM"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "jam": "Jamaican Patois"
        },
        "translations": {
            "ces": {
                "official": "Jamajka",
                "common": "Jamajka"
            },
            "deu": {
                "official": "Jamaika",
                "common": "Jamaika"
            },
            "fra": {
                "official": "Jamaïque",
                "common": "Jamaïque"
            },
            "hrv": {
                "official": "Jamajka",
                "common": "Jamajka"
            },
            "ita": {
                "official": "Giamaica",
                "common": "Giamaica"
            },
            "jpn": {
                "official": "ジャマイカ",
                "common": "ジャマイカ"
            },
            "nld": {
                "official": "Jamaica",
                "common": "Jamaica"
            },
            "por": {
                "official": "Jamaica",
                "common": "Jamaica"
            },
            "rus": {
                "official": "Ямайка",
                "common": "Ямайка"
            },
            "slk": {
                "official": "Jamajka",
                "common": "Jamajka"
            },
            "spa": {
                "official": "Jamaica",
                "common": "Jamaica"
            },
            "fin": {
                "official": "Jamaika",
                "common": "Jamaika"
            },
            "est": {
                "official": "Jamaica",
                "common": "Jamaica"
            },
            "zho": {
                "official": "牙买加",
                "common": "牙买加"
            },
            "pol": {
                "official": "Jamajka",
                "common": "Jamajka"
            }
        },
        "latlng": [
            18.25,
            -77.5
        ],
        "demonym": "Jamaican",
        "landlocked": false,
        "borders": [],
        "area": 10991,
        "flag": "🇯🇲"
    },
    {
        "name": {
            "common": "Jersey",
            "official": "Bailiwick of Jersey",
            "native": {
                "eng": {
                    "official": "Bailiwick of Jersey",
                    "common": "Jersey"
                },
                "fra": {
                    "official": "Bailliage de Jersey",
                    "common": "Jersey"
                },
                "nrf": {
                    "official": "Bailliage dé Jèrri",
                    "common": "Jèrri"
                }
            }
        },
        "tld": [
            ".je"
        ],
        "cca2": "JE",
        "ccn3": "832",
        "cca3": "JEY",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "GBP"
        ],
        "callingCode": [
            "44"
        ],
        "capital": [
            "Saint Helier"
        ],
        "altSpellings": [
            "JE",
            "Bailiwick of Jersey",
            "Bailliage de Jersey",
            "Bailliage dé Jèrri"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "eng": "English",
            "fra": "French",
            "nrf": "Jèrriais"
        },
        "translations": {
            "ces": {
                "official": "Rychtářství Jersey",
                "common": "Jersey"
            },
            "deu": {
                "official": "Vogtei Jersey",
                "common": "Jersey"
            },
            "fra": {
                "official": "Bailliage de Jersey",
                "common": "Jersey"
            },
            "hrv": {
                "official": "Struka od Jersey",
                "common": "Jersey"
            },
            "ita": {
                "official": "Baliato di Jersey",
                "common": "Isola di Jersey"
            },
            "jpn": {
                "official": "ジャージの得意分野",
                "common": "ジャージー"
            },
            "nld": {
                "official": "Baljuwschap Jersey",
                "common": "Jersey"
            },
            "por": {
                "official": "Bailiado de Jersey",
                "common": "Jersey"
            },
            "rus": {
                "official": "Коронное владение Джерси",
                "common": "Джерси"
            },
            "slk": {
                "official": "Bailiwick Jersey",
                "common": "Jersey"
            },
            "spa": {
                "official": "Bailía de Jersey",
                "common": "Jersey"
            },
            "fin": {
                "official": "Jersey",
                "common": "Jersey"
            },
            "est": {
                "official": "Jersey foogtkond",
                "common": "Jersey"
            },
            "zho": {
                "official": "泽西岛",
                "common": "泽西岛"
            },
            "pol": {
                "official": "Jersey",
                "common": "Jersey"
            }
        },
        "latlng": [
            49.25,
            -2.16666666
        ],
        "demonym": "Channel Islander",
        "landlocked": false,
        "borders": [],
        "area": 116,
        "flag": "🇯🇪"
    },
    {
        "name": {
            "common": "Jordan",
            "official": "Hashemite Kingdom of Jordan",
            "native": {
                "ara": {
                    "official": "المملكة الأردنية الهاشمية",
                    "common": "الأردن"
                }
            }
        },
        "tld": [
            ".jo",
            "الاردن."
        ],
        "cca2": "JO",
        "ccn3": "400",
        "cca3": "JOR",
        "cioc": "JOR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "JOD"
        ],
        "callingCode": [
            "962"
        ],
        "capital": [
            "Amman"
        ],
        "altSpellings": [
            "JO",
            "Hashemite Kingdom of Jordan",
            "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Jordánské hášimovské království",
                "common": "Jordánsko"
            },
            "deu": {
                "official": "Haschemitisches Königreich Jordanien",
                "common": "Jordanien"
            },
            "fra": {
                "official": "Royaume hachémite de Jordanie",
                "common": "Jordanie"
            },
            "hrv": {
                "official": "Hašemitske Kraljevine Jordan",
                "common": "Jordan"
            },
            "ita": {
                "official": "Regno hascemita di Giordania",
                "common": "Giordania"
            },
            "jpn": {
                "official": "ヨルダン·ハシミテ王国",
                "common": "ヨルダン"
            },
            "nld": {
                "official": "Hasjemitisch Koninkrijk Jordanië",
                "common": "Jordanië"
            },
            "por": {
                "official": "Reino Hachemita da Jordânia",
                "common": "Jordânia"
            },
            "rus": {
                "official": "Иорданского Хашимитского Королевства",
                "common": "Иордания"
            },
            "slk": {
                "official": "Jordánske hášimovské kráľovstvo",
                "common": "Jordánsko"
            },
            "spa": {
                "official": "Reino Hachemita de Jordania",
                "common": "Jordania"
            },
            "fin": {
                "official": "Jordanian hašemiittinen kunigaskunta",
                "common": "Jordania"
            },
            "est": {
                "official": "Jordaania Hašimiidi Kuningriik",
                "common": "Jordaania"
            },
            "zho": {
                "official": "约旦哈希姆王国",
                "common": "约旦"
            },
            "pol": {
                "official": "Jordańskie Królestwo Haszymidzkie",
                "common": "Jordania"
            }
        },
        "latlng": [
            31,
            36
        ],
        "demonym": "Jordanian",
        "landlocked": false,
        "borders": [
            "IRQ",
            "ISR",
            "PSE",
            "SAU",
            "SYR"
        ],
        "area": 89342,
        "flag": "🇯🇴"
    },
    {
        "name": {
            "common": "Japan",
            "official": "Japan",
            "native": {
                "jpn": {
                    "official": "日本",
                    "common": "日本"
                }
            }
        },
        "tld": [
            ".jp",
            ".みんな"
        ],
        "cca2": "JP",
        "ccn3": "392",
        "cca3": "JPN",
        "cioc": "JPN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "JPY"
        ],
        "callingCode": [
            "81"
        ],
        "capital": [
            "Tokyo"
        ],
        "altSpellings": [
            "JP",
            "Nippon",
            "Nihon"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "jpn": "Japanese"
        },
        "translations": {
            "ces": {
                "official": "Japonsko",
                "common": "Japonsko"
            },
            "deu": {
                "official": "Japan",
                "common": "Japan"
            },
            "fra": {
                "official": "Japon",
                "common": "Japon"
            },
            "hrv": {
                "official": "Japan",
                "common": "Japan"
            },
            "ita": {
                "official": "Giappone",
                "common": "Giappone"
            },
            "jpn": {
                "official": "日本",
                "common": "日本"
            },
            "nld": {
                "official": "Japan",
                "common": "Japan"
            },
            "por": {
                "official": "Japão",
                "common": "Japão"
            },
            "rus": {
                "official": "Япония",
                "common": "Япония"
            },
            "slk": {
                "official": "Japonsko",
                "common": "Japonsko"
            },
            "spa": {
                "official": "Japón",
                "common": "Japón"
            },
            "fin": {
                "official": "Japani",
                "common": "Japani"
            },
            "est": {
                "official": "Jaapan",
                "common": "Jaapan"
            },
            "zho": {
                "official": "日本国",
                "common": "日本"
            },
            "pol": {
                "official": "Japonia",
                "common": "Japonia"
            }
        },
        "latlng": [
            36,
            138
        ],
        "demonym": "Japanese",
        "landlocked": false,
        "borders": [],
        "area": 377930,
        "flag": "🇯🇵"
    },
    {
        "name": {
            "common": "Kazakhstan",
            "official": "Republic of Kazakhstan",
            "native": {
                "kaz": {
                    "official": "Қазақстан Республикасы",
                    "common": "Қазақстан"
                },
                "rus": {
                    "official": "Республика Казахстан",
                    "common": "Казахстан"
                }
            }
        },
        "tld": [
            ".kz",
            ".қаз"
        ],
        "cca2": "KZ",
        "ccn3": "398",
        "cca3": "KAZ",
        "cioc": "KAZ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KZT"
        ],
        "callingCode": [
            "7"
        ],
        "capital": [
            "Astana"
        ],
        "altSpellings": [
            "KZ",
            "Qazaqstan",
            "Казахстан",
            "Republic of Kazakhstan",
            "Қазақстан Республикасы",
            "Qazaqstan Respublïkası",
            "Республика Казахстан",
            "Respublika Kazakhstan"
        ],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "kaz": "Kazakh",
            "rus": "Russian"
        },
        "translations": {
            "ces": {
                "official": "Republika Kazachstán",
                "common": "Kazachstán"
            },
            "deu": {
                "official": "Republik Kasachstan",
                "common": "Kasachstan"
            },
            "fra": {
                "official": "République du Kazakhstan",
                "common": "Kazakhstan"
            },
            "hrv": {
                "official": "Republika Kazahstan",
                "common": "Kazahstan"
            },
            "ita": {
                "official": "Repubblica del Kazakhstan",
                "common": "Kazakistan"
            },
            "jpn": {
                "official": "カザフスタン共和国",
                "common": "カザフスタン"
            },
            "nld": {
                "official": "Republiek Kazachstan",
                "common": "Kazachstan"
            },
            "por": {
                "official": "República do Cazaquistão",
                "common": "Cazaquistão"
            },
            "rus": {
                "official": "Республика Казахстан",
                "common": "Казахстан"
            },
            "slk": {
                "official": "Kazašská republika",
                "common": "Kazachstan"
            },
            "spa": {
                "official": "República de Kazajstán",
                "common": "Kazajistán"
            },
            "fin": {
                "official": "Kazakstanin tasavalta",
                "common": "Kazakstan"
            },
            "est": {
                "official": "Kasahstani Vabariik",
                "common": "Kasahstan"
            },
            "zho": {
                "official": "哈萨克斯坦共和国",
                "common": "哈萨克斯坦"
            },
            "pol": {
                "official": "Republika Kazachstanu",
                "common": "Kazachstan"
            }
        },
        "latlng": [
            48,
            68
        ],
        "demonym": "Kazakhstani",
        "landlocked": true,
        "borders": [
            "CHN",
            "KGZ",
            "RUS",
            "TKM",
            "UZB"
        ],
        "area": 2724900,
        "flag": "🇰🇿"
    },
    {
        "name": {
            "common": "Kenya",
            "official": "Republic of Kenya",
            "native": {
                "eng": {
                    "official": "Republic of Kenya",
                    "common": "Kenya"
                },
                "swa": {
                    "official": "Republic of Kenya",
                    "common": "Kenya"
                }
            }
        },
        "tld": [
            ".ke"
        ],
        "cca2": "KE",
        "ccn3": "404",
        "cca3": "KEN",
        "cioc": "KEN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KES"
        ],
        "callingCode": [
            "254"
        ],
        "capital": [
            "Nairobi"
        ],
        "altSpellings": [
            "KE",
            "Republic of Kenya",
            "Jamhuri ya Kenya"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "swa": "Swahili"
        },
        "translations": {
            "ces": {
                "official": "Keňská republika",
                "common": "Keňa"
            },
            "deu": {
                "official": "Republik Kenia",
                "common": "Kenia"
            },
            "fra": {
                "official": "République du Kenya",
                "common": "Kenya"
            },
            "hrv": {
                "official": "Republika Kenija",
                "common": "Kenija"
            },
            "ita": {
                "official": "Repubblica del Kenya",
                "common": "Kenya"
            },
            "jpn": {
                "official": "ケニア共和国",
                "common": "ケニア"
            },
            "nld": {
                "official": "Republiek Kenia",
                "common": "Kenia"
            },
            "por": {
                "official": "República do Quénia",
                "common": "Quénia"
            },
            "rus": {
                "official": "Республика Кения",
                "common": "Кения"
            },
            "slk": {
                "official": "Kenská republika",
                "common": "Keňa"
            },
            "spa": {
                "official": "República de Kenya",
                "common": "Kenia"
            },
            "fin": {
                "official": "Kenian tasavalta",
                "common": "Kenia"
            },
            "est": {
                "official": "Keenia Vabariik",
                "common": "Keenia"
            },
            "zho": {
                "official": "肯尼亚共和国",
                "common": "肯尼亚"
            },
            "pol": {
                "official": "Republika Kenii",
                "common": "Kenia"
            }
        },
        "latlng": [
            1,
            38
        ],
        "demonym": "Kenyan",
        "landlocked": false,
        "borders": [
            "ETH",
            "SOM",
            "SSD",
            "TZA",
            "UGA"
        ],
        "area": 580367,
        "flag": "🇰🇪"
    },
    {
        "name": {
            "common": "Kyrgyzstan",
            "official": "Kyrgyz Republic",
            "native": {
                "kir": {
                    "official": "Кыргыз Республикасы",
                    "common": "Кыргызстан"
                },
                "rus": {
                    "official": "Кыргызская Республика",
                    "common": "Киргизия"
                }
            }
        },
        "tld": [
            ".kg"
        ],
        "cca2": "KG",
        "ccn3": "417",
        "cca3": "KGZ",
        "cioc": "KGZ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KGS"
        ],
        "callingCode": [
            "996"
        ],
        "capital": [
            "Bishkek"
        ],
        "altSpellings": [
            "KG",
            "Киргизия",
            "Kyrgyz Republic",
            "Кыргыз Республикасы",
            "Kyrgyz Respublikasy"
        ],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "kir": "Kyrgyz",
            "rus": "Russian"
        },
        "translations": {
            "ces": {
                "official": "Kyrgyzská republika",
                "common": "Kyrgyzstán"
            },
            "deu": {
                "official": "Kirgisische Republik",
                "common": "Kirgisistan"
            },
            "fra": {
                "official": "République kirghize",
                "common": "Kirghizistan"
            },
            "hrv": {
                "official": "Kirgistanu",
                "common": "Kirgistan"
            },
            "ita": {
                "official": "Kirghizistan",
                "common": "Kirghizistan"
            },
            "jpn": {
                "official": "キルギス共和国",
                "common": "キルギス"
            },
            "nld": {
                "official": "Kirgizische Republiek",
                "common": "Kirgizië"
            },
            "por": {
                "official": "República do Quirguistão",
                "common": "Quirguistão"
            },
            "rus": {
                "official": "Кыргызская Республика",
                "common": "Киргизия"
            },
            "slk": {
                "official": "Kirgizská republika",
                "common": "Kirgizsko"
            },
            "spa": {
                "official": "República Kirguisa",
                "common": "Kirguizistán"
            },
            "fin": {
                "official": "Kirgisian tasavalta",
                "common": "Kirgisia"
            },
            "est": {
                "official": "Kirgiisi Vabariik",
                "common": "Kõrgõzstan"
            },
            "zho": {
                "official": "吉尔吉斯斯坦共和国",
                "common": "吉尔吉斯斯坦"
            },
            "pol": {
                "official": "Republika Kirgiska",
                "common": "Kirgistan"
            }
        },
        "latlng": [
            41,
            75
        ],
        "demonym": "Kirghiz",
        "landlocked": true,
        "borders": [
            "CHN",
            "KAZ",
            "TJK",
            "UZB"
        ],
        "area": 199951,
        "flag": "🇰🇬"
    },
    {
        "name": {
            "common": "Cambodia",
            "official": "Kingdom of Cambodia",
            "native": {
                "khm": {
                    "official": "ព្រះរាជាណាចក្រកម្ពុជា",
                    "common": "Kâmpŭchéa"
                }
            }
        },
        "tld": [
            ".kh"
        ],
        "cca2": "KH",
        "ccn3": "116",
        "cca3": "KHM",
        "cioc": "CAM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KHR"
        ],
        "callingCode": [
            "855"
        ],
        "capital": [
            "Phnom Penh"
        ],
        "altSpellings": [
            "KH",
            "Kingdom of Cambodia"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "khm": "Khmer"
        },
        "translations": {
            "ces": {
                "official": "Kambodžské království",
                "common": "Kambodža"
            },
            "cym": {
                "official": "Teyrnas Cambodia",
                "common": "Cambodia"
            },
            "deu": {
                "official": "Königreich Kambodscha",
                "common": "Kambodscha"
            },
            "fra": {
                "official": "Royaume du Cambodge",
                "common": "Cambodge"
            },
            "hrv": {
                "official": "Kraljevina Kambodža",
                "common": "Kambodža"
            },
            "ita": {
                "official": "Regno di Cambogia",
                "common": "Cambogia"
            },
            "jpn": {
                "official": "カンボジア王国",
                "common": "カンボジア"
            },
            "nld": {
                "official": "Koninkrijk Cambodja",
                "common": "Cambodja"
            },
            "por": {
                "official": "Reino do Camboja",
                "common": "Camboja"
            },
            "rus": {
                "official": "Королевство Камбоджа",
                "common": "Камбоджа"
            },
            "slk": {
                "official": "Kamboǆské kráľovstvo",
                "common": "Kamboǆa"
            },
            "spa": {
                "official": "Reino de Camboya",
                "common": "Camboya"
            },
            "fin": {
                "official": "Kambodžan kuningaskunta",
                "common": "Kambodža"
            },
            "est": {
                "official": "Kambodža Kuningriik",
                "common": "Kambodža"
            },
            "zho": {
                "official": "柬埔寨王国",
                "common": "柬埔寨"
            },
            "pol": {
                "official": "Królestwo Kambodży",
                "common": "Kambodża"
            }
        },
        "latlng": [
            13,
            105
        ],
        "demonym": "Cambodian",
        "landlocked": false,
        "borders": [
            "LAO",
            "THA",
            "VNM"
        ],
        "area": 181035,
        "flag": "🇰🇭"
    },
    {
        "name": {
            "common": "Kiribati",
            "official": "Independent and Sovereign Republic of Kiribati",
            "native": {
                "eng": {
                    "official": "Independent and Sovereign Republic of Kiribati",
                    "common": "Kiribati"
                },
                "gil": {
                    "official": "Ribaberiki Kiribati",
                    "common": "Kiribati"
                }
            }
        },
        "tld": [
            ".ki"
        ],
        "cca2": "KI",
        "ccn3": "296",
        "cca3": "KIR",
        "cioc": "KIR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [
            "686"
        ],
        "capital": [
            "South Tarawa"
        ],
        "altSpellings": [
            "KI",
            "Republic of Kiribati",
            "Ribaberiki Kiribati"
        ],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "gil": "Gilbertese"
        },
        "translations": {
            "ces": {
                "official": "Republika Kiribati",
                "common": "Kiribati"
            },
            "deu": {
                "official": "Republik Kiribati",
                "common": "Kiribati"
            },
            "fra": {
                "official": "République de Kiribati",
                "common": "Kiribati"
            },
            "hrv": {
                "official": "Samostalne i suverene Republike Kiribati",
                "common": "Kiribati"
            },
            "ita": {
                "official": "Repubblica indipendente e sovrano di Kiribati",
                "common": "Kiribati"
            },
            "jpn": {
                "official": "キリバスの独立と主権共和国",
                "common": "キリバス"
            },
            "nld": {
                "official": "Onafhankelijke en soevereine republiek Kiribati",
                "common": "Kiribati"
            },
            "por": {
                "official": "Independente e soberano República de Kiribati",
                "common": "Kiribati"
            },
            "rus": {
                "official": "Независимой и суверенной Республики Кирибати",
                "common": "Кирибати"
            },
            "slk": {
                "official": "Kiribatská republika",
                "common": "Kiribati"
            },
            "spa": {
                "official": "República Independiente y Soberano de Kiribati",
                "common": "Kiribati"
            },
            "fin": {
                "official": "Kiribatin tasavalta",
                "common": "Kiribati"
            },
            "est": {
                "official": "Kiribati Vabariik",
                "common": "Kiribati"
            },
            "zho": {
                "official": "基里巴斯共和国",
                "common": "基里巴斯"
            },
            "pol": {
                "official": "Republika Kiribati",
                "common": "Kiribati"
            }
        },
        "latlng": [
            1.41666666,
            173
        ],
        "demonym": "I-Kiribati",
        "landlocked": false,
        "borders": [],
        "area": 811,
        "flag": "🇰🇮"
    },
    {
        "name": {
            "common": "Saint Kitts and Nevis",
            "official": "Federation of Saint Christopher and Nevisa",
            "native": {
                "eng": {
                    "official": "Federation of Saint Christopher and Nevisa",
                    "common": "Saint Kitts and Nevis"
                }
            }
        },
        "tld": [
            ".kn"
        ],
        "cca2": "KN",
        "ccn3": "659",
        "cca3": "KNA",
        "cioc": "SKN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1869"
        ],
        "capital": [
            "Basseterre"
        ],
        "altSpellings": [
            "KN",
            "Federation of Saint Christopher and Nevis"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Federace Sv. Kryštof a Nevis",
                "common": "Svatý Kryštof a Nevis"
            },
            "deu": {
                "official": "Föderation von St. Kitts und Nevis",
                "common": "St. Kitts und Nevis"
            },
            "fra": {
                "official": "Fédération de Saint -Christophe-et Nevisa",
                "common": "Saint-Christophe-et-Niévès"
            },
            "hrv": {
                "official": "Federacija Sv.Kristofora i Nevisa",
                "common": "Sveti Kristof i Nevis"
            },
            "ita": {
                "official": "Federazione di Saint Christopher e Nevisa",
                "common": "Saint Kitts e Nevis"
            },
            "jpn": {
                "official": "セントクリストファーNevisa連盟",
                "common": "セントクリストファー・ネイビス"
            },
            "nld": {
                "official": "Federatie van Saint Kitts en Nevisa",
                "common": "Saint Kitts en Nevis"
            },
            "por": {
                "official": "Federação de São Cristóvão e Nevisa",
                "common": "São Cristóvão e Nevis"
            },
            "rus": {
                "official": "Федерация Сент-Кристофер и Nevisa",
                "common": "Сент-Китс и Невис"
            },
            "slk": {
                "official": "Feder໡cia Svätého Krištofa a Nevisu",
                "common": "Svätý Krištof a Nevis"
            },
            "spa": {
                "official": "Federación de San Cristóbal y Nevisa",
                "common": "San Cristóbal y Nieves"
            },
            "fin": {
                "official": "Saint Christopherin ja Nevisin federaatio",
                "common": "Saint Kitts ja Nevis"
            },
            "est": {
                "official": "Saint Kittsi ja Nevise Föderatsioon",
                "common": "Saint Kitts ja Nevis"
            },
            "zho": {
                "official": "圣克里斯托弗和尼维斯联邦",
                "common": "圣基茨和尼维斯"
            },
            "pol": {
                "official": "Federacja Saint Kitts i Nevis",
                "common": "Saint Kitts i Nevis"
            }
        },
        "latlng": [
            17.33333333,
            -62.75
        ],
        "demonym": "Kittitian or Nevisian",
        "landlocked": false,
        "borders": [],
        "area": 261,
        "flag": "🇰🇳"
    },
    {
        "name": {
            "common": "South Korea",
            "official": "Republic of Korea",
            "native": {
                "kor": {
                    "official": "대한민국",
                    "common": "한국"
                }
            }
        },
        "tld": [
            ".kr",
            ".한국"
        ],
        "cca2": "KR",
        "ccn3": "410",
        "cca3": "KOR",
        "cioc": "KOR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KRW"
        ],
        "callingCode": [
            "82"
        ],
        "capital": [
            "Seoul"
        ],
        "altSpellings": [
            "KR",
            "Korea, Republic of",
            "Republic of Korea"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "kor": "Korean"
        },
        "translations": {
            "ces": {
                "official": "Korejská republika",
                "common": "Jižní Korea"
            },
            "deu": {
                "official": "Republik Korea",
                "common": "Südkorea"
            },
            "fra": {
                "official": "République de Corée",
                "common": "Corée du Sud"
            },
            "hrv": {
                "official": "Republika Koreja",
                "common": "Južna Koreja"
            },
            "ita": {
                "official": "Repubblica di Corea",
                "common": "Corea del Sud"
            },
            "jpn": {
                "official": "大韓民国",
                "common": "韓国"
            },
            "nld": {
                "official": "Republiek Korea",
                "common": "Zuid-Korea"
            },
            "por": {
                "official": "República da Coreia",
                "common": "Coreia do Sul"
            },
            "rus": {
                "official": "Республика Корея",
                "common": "Южная Корея"
            },
            "slk": {
                "official": "Kórejská republika",
                "common": "Južná Kórea"
            },
            "spa": {
                "official": "República de Corea",
                "common": "Corea del Sur"
            },
            "fin": {
                "official": "Korean tasavalta",
                "common": "Etelä-Korea"
            },
            "est": {
                "official": "Korea Vabariik",
                "common": "Lõuna-Korea"
            },
            "zho": {
                "official": "大韩民国",
                "common": "韩国"
            },
            "pol": {
                "official": "Republika Korei",
                "common": "Korea Południowa"
            }
        },
        "latlng": [
            37,
            127.5
        ],
        "demonym": "South Korean",
        "landlocked": false,
        "borders": [
            "PRK"
        ],
        "area": 100210,
        "flag": "🇰🇷"
    },
    {
        "name": {
            "common": "Kosovo",
            "official": "Republic of Kosovo",
            "native": {
                "sqi": {
                    "official": "Republika e Kosovës",
                    "common": "Kosova"
                },
                "srp": {
                    "official": "Република Косово",
                    "common": "Косово"
                }
            }
        },
        "tld": [],
        "cca2": "XK",
        "ccn3": "",
        "cca3": "UNK",
        "cioc": "KOS",
        "independent": null,
        "status": "user-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "383"
        ],
        "capital": [
            "Pristina"
        ],
        "altSpellings": [
            "XK",
            "Република Косово"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "sqi": "Albanian",
            "srp": "Serbian"
        },
        "translations": {
            "ces": {
                "official": "Kosovská republika",
                "common": "Kosovo"
            },
            "deu": {
                "official": "Republik Kosovo",
                "common": "Kosovo"
            },
            "fra": {
                "official": "République du Kosovo",
                "common": "Kosovo"
            },
            "hrv": {
                "official": "Republika Kosovo",
                "common": "Kosovo"
            },
            "ita": {
                "official": "Repubblica del Kosovo",
                "common": "Kosovo"
            },
            "nld": {
                "official": "Republiek Kosovo",
                "common": "Kosovo"
            },
            "por": {
                "official": "República do Kosovo",
                "common": "Kosovo"
            },
            "rus": {
                "official": "Республика Косово",
                "common": "Республика Косово"
            },
            "slk": {
                "official": "Republika Kosovo",
                "common": "Kosovo"
            },
            "spa": {
                "official": "República de Kosovo",
                "common": "Kosovo"
            },
            "fin": {
                "official": "Kosovon tasavalta",
                "common": "Kosovo"
            },
            "est": {
                "official": "Kosovo Vabariik",
                "common": "Kosovo"
            },
            "zho": {
                "official": "科索沃共和国",
                "common": "科索沃"
            },
            "pol": {
                "official": "Republika Kosowa",
                "common": "Kosowo"
            }
        },
        "latlng": [
            42.666667,
            21.166667
        ],
        "demonym": "Kosovar",
        "landlocked": true,
        "borders": [
            "ALB",
            "MKD",
            "MNE",
            "SRB"
        ],
        "area": 10908,
        "flag": "🇽🇰"
    },
    {
        "name": {
            "common": "Kuwait",
            "official": "State of Kuwait",
            "native": {
                "ara": {
                    "official": "دولة الكويت",
                    "common": "الكويت"
                }
            }
        },
        "tld": [
            ".kw"
        ],
        "cca2": "KW",
        "ccn3": "414",
        "cca3": "KWT",
        "cioc": "KUW",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KWD"
        ],
        "callingCode": [
            "965"
        ],
        "capital": [
            "Kuwait City"
        ],
        "altSpellings": [
            "KW",
            "State of Kuwait",
            "Dawlat al-Kuwait"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Stát Kuvajt",
                "common": "Kuvajt"
            },
            "deu": {
                "official": "Staat Kuwait",
                "common": "Kuwait"
            },
            "fra": {
                "official": "État du Koweït",
                "common": "Koweït"
            },
            "hrv": {
                "official": "Država Kuvajt",
                "common": "Kuvajt"
            },
            "ita": {
                "official": "Stato del Kuwait",
                "common": "Kuwait"
            },
            "jpn": {
                "official": "クウェート国",
                "common": "クウェート"
            },
            "nld": {
                "official": "Staat Koeweit",
                "common": "Koeweit"
            },
            "por": {
                "official": "Estado do Kuwait",
                "common": "Kuwait"
            },
            "rus": {
                "official": "Государство Кувейт",
                "common": "Кувейт"
            },
            "slk": {
                "official": "Kuvajtský štát",
                "common": "Kuvajt"
            },
            "spa": {
                "official": "Estado de Kuwait",
                "common": "Kuwait"
            },
            "fin": {
                "official": "Kuwaitin valtio",
                "common": "Kuwait"
            },
            "est": {
                "official": "Kuveidi Riik",
                "common": "Kuveit"
            },
            "zho": {
                "official": "科威特国",
                "common": "科威特"
            },
            "pol": {
                "official": "Państwo Kuwejt",
                "common": "Kuwejt"
            }
        },
        "latlng": [
            29.5,
            45.75
        ],
        "demonym": "Kuwaiti",
        "landlocked": false,
        "borders": [
            "IRQ",
            "SAU"
        ],
        "area": 17818,
        "flag": "🇰🇼"
    },
    {
        "name": {
            "common": "Laos",
            "official": "Lao People's Democratic Republic",
            "native": {
                "lao": {
                    "official": "ສາທາລະນະ ຊາທິປະໄຕ ຄົນລາວ ຂອງ",
                    "common": "ສປປລາວ"
                }
            }
        },
        "tld": [
            ".la"
        ],
        "cca2": "LA",
        "ccn3": "418",
        "cca3": "LAO",
        "cioc": "LAO",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "LAK"
        ],
        "callingCode": [
            "856"
        ],
        "capital": [
            "Vientiane"
        ],
        "altSpellings": [
            "LA",
            "Lao",
            "Lao People's Democratic Republic",
            "Sathalanalat Paxathipatai Paxaxon Lao"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "lao": "Lao"
        },
        "translations": {
            "ces": {
                "official": "Laoská lidově demokratická republika",
                "common": "Laos"
            },
            "deu": {
                "official": "Demokratische Volksrepublik Laos",
                "common": "Laos"
            },
            "fra": {
                "official": "République démocratique populaire lao",
                "common": "Laos"
            },
            "hrv": {
                "official": "Narodna Demokratska Republika",
                "common": "Laos"
            },
            "ita": {
                "official": "Repubblica democratica popolare del Laos",
                "common": "Laos"
            },
            "jpn": {
                "official": "ラオス人民民主共和国",
                "common": "ラオス人民民主共和国"
            },
            "nld": {
                "official": "Lao Democratische Volksrepubliek",
                "common": "Laos"
            },
            "por": {
                "official": "Laos, República Democrática",
                "common": "Laos"
            },
            "rus": {
                "official": "Лаосская Народно-Демократическая Республика",
                "common": "Лаос"
            },
            "slk": {
                "official": "Laoská ľudovodemokratická republika",
                "common": "Laos"
            },
            "spa": {
                "official": "República Democrática Popular Lao",
                "common": "Laos"
            },
            "fin": {
                "official": "Laosin demokraattinen kansantasavalta",
                "common": "Laos"
            },
            "est": {
                "official": "Laose Demokraatlik Rahvavabariik",
                "common": "Laos"
            },
            "zho": {
                "official": "老挝人民民主共和国",
                "common": "老挝"
            },
            "pol": {
                "official": "Laotańska Republika Ludowo-Demokratyczna",
                "common": "Laos"
            }
        },
        "latlng": [
            18,
            105
        ],
        "demonym": "Laotian",
        "landlocked": true,
        "borders": [
            "MMR",
            "KHM",
            "CHN",
            "THA",
            "VNM"
        ],
        "area": 236800,
        "flag": "🇱🇦"
    },
    {
        "name": {
            "common": "Lebanon",
            "official": "Lebanese Republic",
            "native": {
                "ara": {
                    "official": "الجمهورية اللبنانية",
                    "common": "لبنان"
                },
                "fra": {
                    "official": "République libanaise",
                    "common": "Liban"
                }
            }
        },
        "tld": [
            ".lb"
        ],
        "cca2": "LB",
        "ccn3": "422",
        "cca3": "LBN",
        "cioc": "LIB",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "LBP"
        ],
        "callingCode": [
            "961"
        ],
        "capital": [
            "Beirut"
        ],
        "altSpellings": [
            "LB",
            "Lebanese Republic",
            "Al-Jumhūrīyah Al-Libnānīyah"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic",
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Libanonská republika",
                "common": "Libanon"
            },
            "deu": {
                "official": "Libanesische Republik",
                "common": "Libanon"
            },
            "fra": {
                "official": "République libanaise",
                "common": "Liban"
            },
            "hrv": {
                "official": "Libanonska Republika",
                "common": "Libanon"
            },
            "ita": {
                "official": "Repubblica libanese",
                "common": "Libano"
            },
            "jpn": {
                "official": "レバノン共和国",
                "common": "レバノン"
            },
            "nld": {
                "official": "Libanese Republiek",
                "common": "Libanon"
            },
            "por": {
                "official": "República Libanesa",
                "common": "Líbano"
            },
            "rus": {
                "official": "Ливанская Республика",
                "common": "Ливан"
            },
            "slk": {
                "official": "Libanonská republika",
                "common": "Libanon"
            },
            "spa": {
                "official": "República Libanesa",
                "common": "Líbano"
            },
            "fin": {
                "official": "Libanonin tasavalta",
                "common": "Libanon"
            },
            "est": {
                "official": "Liibanoni Vabariik",
                "common": "Liibanon"
            },
            "zho": {
                "official": "黎巴嫩共和国",
                "common": "黎巴嫩"
            },
            "pol": {
                "official": "Republika Libańska",
                "common": "Liban"
            }
        },
        "latlng": [
            33.83333333,
            35.83333333
        ],
        "demonym": "Lebanese",
        "landlocked": false,
        "borders": [
            "ISR",
            "SYR"
        ],
        "area": 10452,
        "flag": "🇱🇧"
    },
    {
        "name": {
            "common": "Liberia",
            "official": "Republic of Liberia",
            "native": {
                "eng": {
                    "official": "Republic of Liberia",
                    "common": "Liberia"
                }
            }
        },
        "tld": [
            ".lr"
        ],
        "cca2": "LR",
        "ccn3": "430",
        "cca3": "LBR",
        "cioc": "LBR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "LRD"
        ],
        "callingCode": [
            "231"
        ],
        "capital": [
            "Monrovia"
        ],
        "altSpellings": [
            "LR",
            "Republic of Liberia"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Liberijská republika",
                "common": "Libérie"
            },
            "deu": {
                "official": "Republik Liberia",
                "common": "Liberia"
            },
            "fra": {
                "official": "République du Libéria",
                "common": "Liberia"
            },
            "hrv": {
                "official": "Republika Liberija",
                "common": "Liberija"
            },
            "ita": {
                "official": "Repubblica di Liberia",
                "common": "Liberia"
            },
            "jpn": {
                "official": "リベリア共和国",
                "common": "リベリア"
            },
            "nld": {
                "official": "Republiek Liberia",
                "common": "Liberia"
            },
            "por": {
                "official": "República da Libéria",
                "common": "Libéria"
            },
            "rus": {
                "official": "Республика Либерия",
                "common": "Либерия"
            },
            "slk": {
                "official": "Libérijská republika",
                "common": "Libéria"
            },
            "spa": {
                "official": "República de Liberia",
                "common": "Liberia"
            },
            "fin": {
                "official": "Liberian tasavalta",
                "common": "Liberia"
            },
            "est": {
                "official": "Libeeria Vabariik",
                "common": "Libeeria"
            },
            "zho": {
                "official": "利比里亚共和国",
                "common": "利比里亚"
            },
            "pol": {
                "official": "Republika Liberii",
                "common": "Liberia"
            }
        },
        "latlng": [
            6.5,
            -9.5
        ],
        "demonym": "Liberian",
        "landlocked": false,
        "borders": [
            "GIN",
            "CIV",
            "SLE"
        ],
        "area": 111369,
        "flag": "🇱🇷"
    },
    {
        "name": {
            "common": "Libya",
            "official": "State of Libya",
            "native": {
                "ara": {
                    "official": "الدولة ليبيا",
                    "common": "\u200fليبيا"
                }
            }
        },
        "tld": [
            ".ly"
        ],
        "cca2": "LY",
        "ccn3": "434",
        "cca3": "LBY",
        "cioc": "LBA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "LYD"
        ],
        "callingCode": [
            "218"
        ],
        "capital": [
            "Tripoli"
        ],
        "altSpellings": [
            "LY",
            "State of Libya",
            "Dawlat Libya"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Stát Libye",
                "common": "Libye"
            },
            "deu": {
                "official": "Staat Libyen",
                "common": "Libyen"
            },
            "fra": {
                "official": "Grande République arabe libyenne populaire et socialiste",
                "common": "Libye"
            },
            "hrv": {
                "official": "Država Libiji",
                "common": "Libija"
            },
            "ita": {
                "official": "Stato della Libia",
                "common": "Libia"
            },
            "jpn": {
                "official": "リビアの国家",
                "common": "リビア"
            },
            "nld": {
                "official": "Staat van Libië",
                "common": "Libië"
            },
            "por": {
                "official": "Estado da Líbia",
                "common": "Líbia"
            },
            "rus": {
                "official": "Государство Ливии",
                "common": "Ливия"
            },
            "slk": {
                "official": "Líbya",
                "common": "Líbya"
            },
            "spa": {
                "official": "Estado de Libia",
                "common": "Libia"
            },
            "fin": {
                "official": "Libyan valtio",
                "common": "Libya"
            },
            "est": {
                "official": "Liibüa",
                "common": "Liibüa"
            },
            "zho": {
                "official": "利比亚国",
                "common": "利比亚"
            },
            "pol": {
                "official": "Państwo Libia",
                "common": "Libia"
            }
        },
        "latlng": [
            25,
            17
        ],
        "demonym": "Libyan",
        "landlocked": false,
        "borders": [
            "DZA",
            "TCD",
            "EGY",
            "NER",
            "SDN",
            "TUN"
        ],
        "area": 1759540,
        "flag": "🇱🇾"
    },
    {
        "name": {
            "common": "Saint Lucia",
            "official": "Saint Lucia",
            "native": {
                "eng": {
                    "official": "Saint Lucia",
                    "common": "Saint Lucia"
                }
            }
        },
        "tld": [
            ".lc"
        ],
        "cca2": "LC",
        "ccn3": "662",
        "cca3": "LCA",
        "cioc": "LCA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1758"
        ],
        "capital": [
            "Castries"
        ],
        "altSpellings": [
            "LC"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Svatá Lucie",
                "common": "Svatá Lucie"
            },
            "deu": {
                "official": "St. Lucia",
                "common": "St. Lucia"
            },
            "fra": {
                "official": "Sainte-Lucie",
                "common": "Sainte-Lucie"
            },
            "hrv": {
                "official": "Sveta Lucija",
                "common": "Sveta Lucija"
            },
            "ita": {
                "official": "Santa Lucia",
                "common": "Santa Lucia"
            },
            "jpn": {
                "official": "セントルシア",
                "common": "セントルシア"
            },
            "nld": {
                "official": "Saint Lucia",
                "common": "Saint Lucia"
            },
            "por": {
                "official": "Santa Lúcia",
                "common": "Santa Lúcia"
            },
            "rus": {
                "official": "Сент-Люсия",
                "common": "Сент-Люсия"
            },
            "slk": {
                "official": "Svätá Lucia",
                "common": "Svätá Lucia"
            },
            "spa": {
                "official": "Santa Lucía",
                "common": "Santa Lucía"
            },
            "fin": {
                "official": "Saint Lucia",
                "common": "Saint Lucia"
            },
            "est": {
                "official": "Saint Lucia",
                "common": "Saint Lucia"
            },
            "zho": {
                "official": "圣卢西亚",
                "common": "圣卢西亚"
            },
            "pol": {
                "official": "Saint Lucia",
                "common": "Saint Lucia"
            }
        },
        "latlng": [
            13.88333333,
            -60.96666666
        ],
        "demonym": "Saint Lucian",
        "landlocked": false,
        "borders": [],
        "area": 616,
        "flag": "🇱🇨"
    },
    {
        "name": {
            "common": "Liechtenstein",
            "official": "Principality of Liechtenstein",
            "native": {
                "deu": {
                    "official": "Fürstentum Liechtenstein",
                    "common": "Liechtenstein"
                }
            }
        },
        "tld": [
            ".li"
        ],
        "cca2": "LI",
        "ccn3": "438",
        "cca3": "LIE",
        "cioc": "LIE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "CHF"
        ],
        "callingCode": [
            "423"
        ],
        "capital": [
            "Vaduz"
        ],
        "altSpellings": [
            "LI",
            "Principality of Liechtenstein",
            "Fürstentum Liechtenstein"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German"
        },
        "translations": {
            "ces": {
                "official": "Knížectví Lichtenštejnské",
                "common": "Lichtenštejnsko"
            },
            "deu": {
                "official": "Fürstentum Liechtenstein",
                "common": "Liechtenstein"
            },
            "fra": {
                "official": "Principauté du Liechtenstein",
                "common": "Liechtenstein"
            },
            "hrv": {
                "official": "Kneževina Lihtenštajn",
                "common": "Lihtenštajn"
            },
            "ita": {
                "official": "Principato del Liechtenstein",
                "common": "Liechtenstein"
            },
            "jpn": {
                "official": "リヒテンシュタイン公国",
                "common": "リヒテンシュタイン"
            },
            "nld": {
                "official": "Vorstendom Liechtenstein",
                "common": "Liechtenstein"
            },
            "por": {
                "official": "Principado de Liechtenstein",
                "common": "Liechtenstein"
            },
            "rus": {
                "official": "Княжество Лихтенштейн",
                "common": "Лихтенштейн"
            },
            "slk": {
                "official": "Lichtenštajnské kniežatstvo",
                "common": "Lichtenštajnsko"
            },
            "spa": {
                "official": "Principado de Liechtenstein",
                "common": "Liechtenstein"
            },
            "fin": {
                "official": "Liechensteinin ruhtinaskunta",
                "common": "Liechenstein"
            },
            "est": {
                "official": "Liechtensteini Vürstiriik",
                "common": "Liechtenstein"
            },
            "zho": {
                "official": "列支敦士登公国",
                "common": "列支敦士登"
            },
            "pol": {
                "official": "Księstwo Liechtensteinu",
                "common": "Liechtenstein"
            }
        },
        "latlng": [
            47.26666666,
            9.53333333
        ],
        "demonym": "Liechtensteiner",
        "landlocked": true,
        "borders": [
            "AUT",
            "CHE"
        ],
        "area": 160,
        "flag": "🇱🇮"
    },
    {
        "name": {
            "common": "Sri Lanka",
            "official": "Democratic Socialist Republic of Sri Lanka",
            "native": {
                "sin": {
                    "official": "ශ්\u200dරී ලංකා ප්\u200dරජාතාන්ත්\u200dරික සමාජවාදී ජනරජය",
                    "common": "ශ්\u200dරී ලංකාව"
                },
                "tam": {
                    "official": "இலங்கை சனநாயக சோசலிசக் குடியரசு",
                    "common": "இலங்கை"
                }
            }
        },
        "tld": [
            ".lk",
            ".இலங்கை",
            ".ලංකා"
        ],
        "cca2": "LK",
        "ccn3": "144",
        "cca3": "LKA",
        "cioc": "SRI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "LKR"
        ],
        "callingCode": [
            "94"
        ],
        "capital": [
            "Colombo"
        ],
        "altSpellings": [
            "LK",
            "ilaṅkai",
            "Democratic Socialist Republic of Sri Lanka"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "sin": "Sinhala",
            "tam": "Tamil"
        },
        "translations": {
            "ces": {
                "official": "Srílanská demokratická socialistická republika",
                "common": "Srí Lanka"
            },
            "deu": {
                "official": "Demokratische Sozialistische Republik Sri Lanka",
                "common": "Sri Lanka"
            },
            "fra": {
                "official": "République démocratique socialiste du Sri Lanka",
                "common": "Sri Lanka"
            },
            "hrv": {
                "official": "Demokratska Socijalističke Republike Šri Lanke",
                "common": "Šri Lanka"
            },
            "ita": {
                "official": "Repubblica democratica socialista dello Sri Lanka",
                "common": "Sri Lanka"
            },
            "jpn": {
                "official": "スリランカ民主社会主義共和国",
                "common": "スリランカ"
            },
            "nld": {
                "official": "Democratische Socialistische Republiek Sri Lanka",
                "common": "Sri Lanka"
            },
            "por": {
                "official": "República Democrática Socialista do Sri Lanka",
                "common": "Sri Lanka"
            },
            "rus": {
                "official": "Демократическая Социалистическая Республика Шри-Ланка",
                "common": "Шри-Ланка"
            },
            "slk": {
                "official": "Srílanská demokratická socialistická republika",
                "common": "Srí Lanka"
            },
            "spa": {
                "official": "República Democrática Socialista de Sri Lanka",
                "common": "Sri Lanka"
            },
            "fin": {
                "official": "Sri Lankan demokraattinen sosialistinen tasavalta",
                "common": "Sri Lanka"
            },
            "est": {
                "official": "Sri Lanka Demokraatlik Sotsialistlik Vabariik",
                "common": "Sri Lanka"
            },
            "zho": {
                "official": "斯里兰卡民主社会主义共和国",
                "common": "斯里兰卡"
            },
            "pol": {
                "official": "Demokratyczno-Socjalistyczna Republika Sri Lanki",
                "common": "Sri Lanka"
            }
        },
        "latlng": [
            7,
            81
        ],
        "demonym": "Sri Lankan",
        "landlocked": false,
        "borders": [
            "IND"
        ],
        "area": 65610,
        "flag": "🇱🇰"
    },
    {
        "name": {
            "common": "Lesotho",
            "official": "Kingdom of Lesotho",
            "native": {
                "eng": {
                    "official": "Kingdom of Lesotho",
                    "common": "Lesotho"
                },
                "sot": {
                    "official": "Kingdom of Lesotho",
                    "common": "Lesotho"
                }
            }
        },
        "tld": [
            ".ls"
        ],
        "cca2": "LS",
        "ccn3": "426",
        "cca3": "LSO",
        "cioc": "LES",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "LSL",
            "ZAR"
        ],
        "callingCode": [
            "266"
        ],
        "capital": [
            "Maseru"
        ],
        "altSpellings": [
            "LS",
            "Kingdom of Lesotho",
            "Muso oa Lesotho"
        ],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "eng": "English",
            "sot": "Sotho"
        },
        "translations": {
            "ces": {
                "official": "Lesothské království",
                "common": "Lesotho"
            },
            "deu": {
                "official": "Königreich Lesotho",
                "common": "Lesotho"
            },
            "fra": {
                "official": "Royaume du Lesotho",
                "common": "Lesotho"
            },
            "hrv": {
                "official": "Kraljevina Lesoto",
                "common": "Lesoto"
            },
            "ita": {
                "official": "Regno del Lesotho",
                "common": "Lesotho"
            },
            "jpn": {
                "official": "レソト王国",
                "common": "レソト"
            },
            "nld": {
                "official": "Koninkrijk Lesotho",
                "common": "Lesotho"
            },
            "por": {
                "official": "Reino do Lesoto",
                "common": "Lesoto"
            },
            "rus": {
                "official": "Королевство Лесото",
                "common": "Лесото"
            },
            "slk": {
                "official": "Lesothské kráľovstvo",
                "common": "Lesotho"
            },
            "spa": {
                "official": "Reino de Lesotho",
                "common": "Lesotho"
            },
            "fin": {
                "official": "Lesothon kuningaskunta",
                "common": "Lesotho"
            },
            "est": {
                "official": "Lesotho Kuningriik",
                "common": "Lesotho"
            },
            "zho": {
                "official": "莱索托王国",
                "common": "莱索托"
            },
            "pol": {
                "official": "Królestwo Lesotho",
                "common": "Lesotho"
            }
        },
        "latlng": [
            -29.5,
            28.5
        ],
        "demonym": "Mosotho",
        "landlocked": true,
        "borders": [
            "ZAF"
        ],
        "area": 30355,
        "flag": "🇱🇸"
    },
    {
        "name": {
            "common": "Lithuania",
            "official": "Republic of Lithuania",
            "native": {
                "lit": {
                    "official": "Lietuvos Respublikos",
                    "common": "Lietuva"
                }
            }
        },
        "tld": [
            ".lt"
        ],
        "cca2": "LT",
        "ccn3": "440",
        "cca3": "LTU",
        "cioc": "LTU",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "370"
        ],
        "capital": [
            "Vilnius"
        ],
        "altSpellings": [
            "LT",
            "Republic of Lithuania",
            "Lietuvos Respublika"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "lit": "Lithuanian"
        },
        "translations": {
            "ces": {
                "official": "Litevská republika",
                "common": "Litva"
            },
            "deu": {
                "official": "Republik Litauen",
                "common": "Litauen"
            },
            "fra": {
                "official": "République de Lituanie",
                "common": "Lituanie"
            },
            "hrv": {
                "official": "Republika Litva",
                "common": "Litva"
            },
            "ita": {
                "official": "Repubblica di Lituania",
                "common": "Lituania"
            },
            "jpn": {
                "official": "リトアニア共和国",
                "common": "リトアニア"
            },
            "nld": {
                "official": "Republiek Litouwen",
                "common": "Litouwen"
            },
            "por": {
                "official": "República da Lituânia",
                "common": "Lituânia"
            },
            "rus": {
                "official": "Литовская Республика",
                "common": "Литва"
            },
            "slk": {
                "official": "Litovská republika",
                "common": "Litva"
            },
            "spa": {
                "official": "República de Lituania",
                "common": "Lituania"
            },
            "fin": {
                "official": "Liettuan tasavalta",
                "common": "Liettua"
            },
            "est": {
                "official": "Leedu Vabariik",
                "common": "Leedu"
            },
            "zho": {
                "official": "立陶宛共和国",
                "common": "立陶宛"
            },
            "pol": {
                "official": "Republika Litewska",
                "common": "Litwa"
            }
        },
        "latlng": [
            56,
            24
        ],
        "demonym": "Lithuanian",
        "landlocked": false,
        "borders": [
            "BLR",
            "LVA",
            "POL",
            "RUS"
        ],
        "area": 65300,
        "flag": "🇱🇹"
    },
    {
        "name": {
            "common": "Luxembourg",
            "official": "Grand Duchy of Luxembourg",
            "native": {
                "deu": {
                    "official": "Großherzogtum Luxemburg",
                    "common": "Luxemburg"
                },
                "fra": {
                    "official": "Grand-Duché de Luxembourg",
                    "common": "Luxembourg"
                },
                "ltz": {
                    "official": "Groussherzogtum Lëtzebuerg",
                    "common": "Lëtzebuerg"
                }
            }
        },
        "tld": [
            ".lu"
        ],
        "cca2": "LU",
        "ccn3": "442",
        "cca3": "LUX",
        "cioc": "LUX",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "352"
        ],
        "capital": [
            "Luxembourg"
        ],
        "altSpellings": [
            "LU",
            "Grand Duchy of Luxembourg",
            "Grand-Duché de Luxembourg",
            "Großherzogtum Luxemburg",
            "Groussherzogtum Lëtzebuerg"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "deu": "German",
            "fra": "French",
            "ltz": "Luxembourgish"
        },
        "translations": {
            "ces": {
                "official": "Lucemburské velkovévodství",
                "common": "Lucembursko"
            },
            "deu": {
                "official": "Großherzogtum Luxemburg,",
                "common": "Luxemburg"
            },
            "fra": {
                "official": "Grand-Duché de Luxembourg",
                "common": "Luxembourg"
            },
            "hrv": {
                "official": "Veliko Vojvodstvo Luksemburg",
                "common": "Luksemburg"
            },
            "ita": {
                "official": "Granducato di Lussemburgo",
                "common": "Lussemburgo"
            },
            "jpn": {
                "official": "ルクセンブルク大公国",
                "common": "ルクセンブルク"
            },
            "nld": {
                "official": "Groothertogdom Luxemburg",
                "common": "Luxemburg"
            },
            "por": {
                "official": "Grão-Ducado do Luxemburgo",
                "common": "Luxemburgo"
            },
            "rus": {
                "official": "Великое Герцогство Люксембург",
                "common": "Люксембург"
            },
            "slk": {
                "official": "Luxemburské veľkovojvodstvo",
                "common": "Luxembursko"
            },
            "spa": {
                "official": "Gran Ducado de Luxemburgo",
                "common": "Luxemburgo"
            },
            "fin": {
                "official": "Luxemburgin suurherttuakunta",
                "common": "Luxemburg"
            },
            "est": {
                "official": "Luksemburgi Suurhertsogiriik",
                "common": "Luksemburg"
            },
            "zho": {
                "official": "卢森堡大公国",
                "common": "卢森堡"
            },
            "pol": {
                "official": "Wielkie Księstwo Luksemburga",
                "common": "Luksemburg"
            }
        },
        "latlng": [
            49.75,
            6.16666666
        ],
        "demonym": "Luxembourger",
        "landlocked": true,
        "borders": [
            "BEL",
            "FRA",
            "DEU"
        ],
        "area": 2586,
        "flag": "🇱🇺"
    },
    {
        "name": {
            "common": "Latvia",
            "official": "Republic of Latvia",
            "native": {
                "lav": {
                    "official": "Latvijas Republikas",
                    "common": "Latvija"
                }
            }
        },
        "tld": [
            ".lv"
        ],
        "cca2": "LV",
        "ccn3": "428",
        "cca3": "LVA",
        "cioc": "LAT",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "371"
        ],
        "capital": [
            "Riga"
        ],
        "altSpellings": [
            "LV",
            "Republic of Latvia",
            "Latvijas Republika"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "lav": "Latvian"
        },
        "translations": {
            "ces": {
                "official": "Lotyšská republika",
                "common": "Lotyšsko"
            },
            "deu": {
                "official": "Republik Lettland",
                "common": "Lettland"
            },
            "fra": {
                "official": "République de Lettonie",
                "common": "Lettonie"
            },
            "hrv": {
                "official": "Republika Latvija",
                "common": "Latvija"
            },
            "ita": {
                "official": "Repubblica di Lettonia",
                "common": "Lettonia"
            },
            "jpn": {
                "official": "ラトビア共和国",
                "common": "ラトビア"
            },
            "nld": {
                "official": "Republiek Letland",
                "common": "Letland"
            },
            "por": {
                "official": "República da Letónia",
                "common": "Letónia"
            },
            "rus": {
                "official": "Латвийская Республика",
                "common": "Латвия"
            },
            "slk": {
                "official": "Lotyšská republika",
                "common": "Lotyšsko"
            },
            "spa": {
                "official": "República de Letonia",
                "common": "Letonia"
            },
            "fin": {
                "official": "Latvian tasavalta",
                "common": "Latvia"
            },
            "est": {
                "official": "Läti Vabariik",
                "common": "Läti"
            },
            "zho": {
                "official": "拉脱维亚共和国",
                "common": "拉脱维亚"
            },
            "pol": {
                "official": "Republika Łotewska",
                "common": "Łotwa"
            }
        },
        "latlng": [
            57,
            25
        ],
        "demonym": "Latvian",
        "landlocked": false,
        "borders": [
            "BLR",
            "EST",
            "LTU",
            "RUS"
        ],
        "area": 64559,
        "flag": "🇱🇻"
    },
    {
        "name": {
            "common": "Macau",
            "official": "Macao Special Administrative Region of the People's Republic of China",
            "native": {
                "por": {
                    "official": "Região Administrativa Especial de Macau da República Popular da China",
                    "common": "Macau"
                },
                "zho": {
                    "official": "中华人民共和国澳门特别行政区",
                    "common": "澳门"
                }
            }
        },
        "tld": [
            ".mo"
        ],
        "cca2": "MO",
        "ccn3": "446",
        "cca3": "MAC",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "MOP"
        ],
        "callingCode": [
            "853"
        ],
        "capital": [
            ""
        ],
        "altSpellings": [
            "MO",
            "澳门",
            "Macao",
            "Macao Special Administrative Region of the People's Republic of China",
            "中華人民共和國澳門特別行政區",
            "Região Administrativa Especial de Macau da República Popular da China"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "por": "Portuguese",
            "zho": "Chinese"
        },
        "translations": {
            "ces": {
                "official": "Zvláštní správní oblast Čínské lidové republiky Macao",
                "common": "Macao"
            },
            "deu": {
                "official": "Sonderverwaltungsregion Macau der Volksrepublik China",
                "common": "Macao"
            },
            "fra": {
                "official": "Région administrative spéciale de Macao de la République populaire de Chine",
                "common": "Macao"
            },
            "hrv": {
                "official": "Makao Posebnog upravnog područjaNarodne Republike Kine",
                "common": "Makao"
            },
            "ita": {
                "official": "Macao Regione amministrativa speciale della Repubblica Popolare Cinese",
                "common": "Macao"
            },
            "jpn": {
                "official": "中華人民共和国マカオ特別行政区",
                "common": "マカオ"
            },
            "nld": {
                "official": "Speciale Administratieve Regio Macau van de Volksrepubliek China",
                "common": "Macao"
            },
            "por": {
                "official": "Macau Região Administrativa Especial da República Popular da China",
                "common": "Macau"
            },
            "rus": {
                "official": "Специальный административный район Макао Китайской Народной Республики Китай",
                "common": "Макао"
            },
            "slk": {
                "official": "Macao, Špeciàlna administratívna oblasŦ",
                "common": "Macao"
            },
            "spa": {
                "official": "Macao, Región Administrativa Especial de la República Popular China",
                "common": "Macao"
            },
            "fin": {
                "official": "Macaon Kiinan kansantasavallan erityishallintoalue",
                "common": "Macao"
            },
            "est": {
                "official": "Macau erihalduspiirkond",
                "common": "Macau"
            },
            "pol": {
                "official": "Specjalny Region Administracyjny Chińskiej Republiki Ludowej Makau",
                "common": "Makau"
            }
        },
        "latlng": [
            22.16666666,
            113.55
        ],
        "demonym": "Macanese",
        "landlocked": false,
        "borders": [
            "CHN"
        ],
        "area": 30,
        "flag": "🇲🇴"
    },
    {
        "name": {
            "common": "Saint Martin",
            "official": "Saint Martin",
            "native": {
                "fra": {
                    "official": "Saint-Martin",
                    "common": "Saint-Martin"
                }
            }
        },
        "tld": [
            ".fr",
            ".gp"
        ],
        "cca2": "MF",
        "ccn3": "663",
        "cca3": "MAF",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "590"
        ],
        "capital": [
            "Marigot"
        ],
        "altSpellings": [
            "MF",
            "Collectivity of Saint Martin",
            "Collectivité de Saint-Martin",
            "Saint Martin (French part)"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Svatý Martin",
                "common": "Svatý Martin (Francie)"
            },
            "deu": {
                "official": "Saint-Martin",
                "common": "Saint-Martin"
            },
            "fra": {
                "official": "Saint-Martin",
                "common": "Saint-Martin"
            },
            "hrv": {
                "official": "Saint Martin",
                "common": "Sveti Martin"
            },
            "ita": {
                "official": "saint Martin",
                "common": "Saint Martin"
            },
            "jpn": {
                "official": "サンマルタン島",
                "common": "サン・マルタン（フランス領）"
            },
            "nld": {
                "official": "Saint Martin",
                "common": "Saint-Martin"
            },
            "por": {
                "official": "saint Martin",
                "common": "São Martinho"
            },
            "rus": {
                "official": "Сен-Мартен",
                "common": "Сен-Мартен"
            },
            "slk": {
                "official": "Saint-Martin",
                "common": "Saint-Martin"
            },
            "spa": {
                "official": "Saint Martin",
                "common": "Saint Martin"
            },
            "fin": {
                "official": "Saint-Martin",
                "common": "Saint-Martin"
            },
            "est": {
                "official": "Saint-Martini ühendus",
                "common": "Saint-Martin"
            },
            "zho": {
                "official": "圣马丁",
                "common": "圣马丁"
            },
            "pol": {
                "official": "Wspólnota Saint-Martin",
                "common": "Saint-Martin"
            }
        },
        "latlng": [
            18.08333333,
            -63.95
        ],
        "demonym": "Saint Martin Islander",
        "landlocked": false,
        "borders": [
            "SXM"
        ],
        "area": 53,
        "flag": "🇲🇫"
    },
    {
        "name": {
            "common": "Morocco",
            "official": "Kingdom of Morocco",
            "native": {
                "ara": {
                    "official": "المملكة المغربية",
                    "common": "المغرب"
                },
                "ber": {
                    "official": "ⵜⴰⴳⵍⴷⵉⵜ ⵏ ⵍⵎⵖⵔⵉⴱ",
                    "common": "ⵍⵎⴰⵖⵔⵉⴱ"
                }
            }
        },
        "tld": [
            ".ma",
            "المغرب."
        ],
        "cca2": "MA",
        "ccn3": "504",
        "cca3": "MAR",
        "cioc": "MAR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MAD"
        ],
        "callingCode": [
            "212"
        ],
        "capital": [
            "Rabat"
        ],
        "altSpellings": [
            "MA",
            "Kingdom of Morocco",
            "Al-Mamlakah al-Maġribiyah"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic",
            "ber": "Berber"
        },
        "translations": {
            "ces": {
                "official": "Marocké království",
                "common": "Maroko"
            },
            "deu": {
                "official": "Königreich Marokko",
                "common": "Marokko"
            },
            "fra": {
                "official": "Royaume du Maroc",
                "common": "Maroc"
            },
            "hrv": {
                "official": "Kraljevina Maroko",
                "common": "Maroko"
            },
            "ita": {
                "official": "Regno del Marocco",
                "common": "Marocco"
            },
            "jpn": {
                "official": "モロッコ王国",
                "common": "モロッコ"
            },
            "nld": {
                "official": "Koninkrijk Marokko",
                "common": "Marokko"
            },
            "por": {
                "official": "Reino de Marrocos",
                "common": "Marrocos"
            },
            "rus": {
                "official": "Королевство Марокко",
                "common": "Марокко"
            },
            "slk": {
                "official": "Marocké kniežatstvo",
                "common": "Maroko"
            },
            "spa": {
                "official": "Reino de Marruecos",
                "common": "Marruecos"
            },
            "fin": {
                "official": "Marokon kuningaskunta",
                "common": "Marokko"
            },
            "est": {
                "official": "Maroko Kuningriik",
                "common": "Maroko"
            },
            "zho": {
                "official": "摩洛哥王国",
                "common": "摩洛哥"
            },
            "pol": {
                "official": "Królestwo Marokańskie",
                "common": "Maroko"
            }
        },
        "latlng": [
            32,
            -5
        ],
        "demonym": "Moroccan",
        "landlocked": false,
        "borders": [
            "DZA",
            "ESH",
            "ESP"
        ],
        "area": 446550,
        "flag": "🇲🇦"
    },
    {
        "name": {
            "common": "Monaco",
            "official": "Principality of Monaco",
            "native": {
                "fra": {
                    "official": "Principauté de Monaco",
                    "common": "Monaco"
                }
            }
        },
        "tld": [
            ".mc"
        ],
        "cca2": "MC",
        "ccn3": "492",
        "cca3": "MCO",
        "cioc": "MON",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "377"
        ],
        "capital": [
            "Monaco"
        ],
        "altSpellings": [
            "MC",
            "Principality of Monaco",
            "Principauté de Monaco"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Monacké knížectví",
                "common": "Monako"
            },
            "deu": {
                "official": "Fürstentum Monaco",
                "common": "Monaco"
            },
            "fra": {
                "official": "Principauté de Monaco",
                "common": "Monaco"
            },
            "hrv": {
                "official": "Kneževina Monako",
                "common": "Monako"
            },
            "ita": {
                "official": "Principato di Monaco",
                "common": "Principato di Monaco"
            },
            "jpn": {
                "official": "モナコ公国",
                "common": "モナコ"
            },
            "nld": {
                "official": "Vorstendom Monaco",
                "common": "Monaco"
            },
            "por": {
                "official": "Principado do Mónaco",
                "common": "Mónaco"
            },
            "rus": {
                "official": "Княжество Монако",
                "common": "Монако"
            },
            "slk": {
                "official": "Monacké kniežatstvo",
                "common": "Monako"
            },
            "spa": {
                "official": "Principado de Mónaco",
                "common": "Mónaco"
            },
            "fin": {
                "official": "Monacon ruhtinaskunta",
                "common": "Monaco"
            },
            "est": {
                "official": "Monaco Vürstiriik",
                "common": "Monaco"
            },
            "zho": {
                "official": "摩纳哥公国",
                "common": "摩纳哥"
            },
            "pol": {
                "official": "Księstwo Monako",
                "common": "Monako"
            }
        },
        "latlng": [
            43.73333333,
            7.4
        ],
        "demonym": "Monegasque",
        "landlocked": false,
        "borders": [
            "FRA"
        ],
        "area": 2.02,
        "flag": "🇲🇨"
    },
    {
        "name": {
            "common": "Moldova",
            "official": "Republic of Moldova",
            "native": {
                "ron": {
                    "official": "Republica Moldova",
                    "common": "Moldova"
                }
            }
        },
        "tld": [
            ".md"
        ],
        "cca2": "MD",
        "ccn3": "498",
        "cca3": "MDA",
        "cioc": "MDA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MDL"
        ],
        "callingCode": [
            "373"
        ],
        "capital": [
            "Chișinău"
        ],
        "altSpellings": [
            "MD",
            "Moldova, Republic of",
            "Republic of Moldova",
            "Republica Moldova"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ron": "Moldavian"
        },
        "translations": {
            "ces": {
                "official": "Moldavská republika",
                "common": "Moldavsko"
            },
            "deu": {
                "official": "Republik Moldau",
                "common": "Moldawien"
            },
            "fra": {
                "official": "République de Moldavie",
                "common": "Moldavie"
            },
            "hrv": {
                "official": "Moldavija",
                "common": "Moldova"
            },
            "ita": {
                "official": "Repubblica di Moldova",
                "common": "Moldavia"
            },
            "jpn": {
                "official": "モルドバ共和国",
                "common": "モルドバ共和国"
            },
            "nld": {
                "official": "Republiek Moldavië",
                "common": "Moldavië"
            },
            "por": {
                "official": "República da Moldávia",
                "common": "Moldávia"
            },
            "rus": {
                "official": "Молдова",
                "common": "Молдавия"
            },
            "slk": {
                "official": "Moldavská republika",
                "common": "Moldavsko"
            },
            "spa": {
                "official": "República de Moldova",
                "common": "Moldavia"
            },
            "fin": {
                "official": "Moldovan tasavalta",
                "common": "Moldova"
            },
            "est": {
                "official": "Moldova Vabariik",
                "common": "Moldova"
            },
            "zho": {
                "official": "摩尔多瓦共和国",
                "common": "摩尔多瓦"
            },
            "pol": {
                "official": "Republika Mołdawii",
                "common": "Mołdawia"
            }
        },
        "latlng": [
            47,
            29
        ],
        "demonym": "Moldovan",
        "landlocked": true,
        "borders": [
            "ROU",
            "UKR"
        ],
        "area": 33846,
        "flag": "🇲🇩"
    },
    {
        "name": {
            "common": "Madagascar",
            "official": "Republic of Madagascar",
            "native": {
                "fra": {
                    "official": "République de Madagascar",
                    "common": "Madagascar"
                },
                "mlg": {
                    "official": "Repoblikan'i Madagasikara",
                    "common": "Madagasikara"
                }
            }
        },
        "tld": [
            ".mg"
        ],
        "cca2": "MG",
        "ccn3": "450",
        "cca3": "MDG",
        "cioc": "MAD",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MGA"
        ],
        "callingCode": [
            "261"
        ],
        "capital": [
            "Antananarivo"
        ],
        "altSpellings": [
            "MG",
            "Republic of Madagascar",
            "Repoblikan'i Madagasikara",
            "République de Madagascar"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French",
            "mlg": "Malagasy"
        },
        "translations": {
            "ces": {
                "official": "Madagaskarská republika",
                "common": "Madagaskar"
            },
            "deu": {
                "official": "Republik Madagaskar",
                "common": "Madagaskar"
            },
            "fra": {
                "official": "République de Madagascar",
                "common": "Madagascar"
            },
            "hrv": {
                "official": "Republika Madagaskar",
                "common": "Madagaskar"
            },
            "ita": {
                "official": "Repubblica del Madagascar",
                "common": "Madagascar"
            },
            "jpn": {
                "official": "マダガスカル共和国",
                "common": "マダガスカル"
            },
            "nld": {
                "official": "Republiek Madagaskar",
                "common": "Madagaskar"
            },
            "por": {
                "official": "República de Madagáscar",
                "common": "Madagáscar"
            },
            "rus": {
                "official": "Республика Мадагаскар",
                "common": "Мадагаскар"
            },
            "slk": {
                "official": "Madagaskarská republika",
                "common": "Madagaskar"
            },
            "spa": {
                "official": "República de Madagascar",
                "common": "Madagascar"
            },
            "fin": {
                "official": "Madagaskarin tasavalta",
                "common": "Madagaskar"
            },
            "est": {
                "official": "Madagaskari Vabariik",
                "common": "Madagaskar"
            },
            "zho": {
                "official": "马达加斯加共和国",
                "common": "马达加斯加"
            },
            "pol": {
                "official": "Republika Madagaskaru",
                "common": "Madagaskar"
            }
        },
        "latlng": [
            -20,
            47
        ],
        "demonym": "Malagasy",
        "landlocked": false,
        "borders": [],
        "area": 587041,
        "flag": "🇲🇬"
    },
    {
        "name": {
            "common": "Maldives",
            "official": "Republic of the Maldives",
            "native": {
                "div": {
                    "official": "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ",
                    "common": "ދިވެހިރާއްޖޭގެ"
                }
            }
        },
        "tld": [
            ".mv"
        ],
        "cca2": "MV",
        "ccn3": "462",
        "cca3": "MDV",
        "cioc": "MDV",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MVR"
        ],
        "callingCode": [
            "960"
        ],
        "capital": [
            "Malé"
        ],
        "altSpellings": [
            "MV",
            "Maldive Islands",
            "Republic of the Maldives",
            "Dhivehi Raajjeyge Jumhooriyya"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "div": "Maldivian"
        },
        "translations": {
            "ces": {
                "official": "Maledivská republika",
                "common": "Maledivy"
            },
            "deu": {
                "official": "Republik Malediven",
                "common": "Malediven"
            },
            "fra": {
                "official": "République des Maldives",
                "common": "Maldives"
            },
            "hrv": {
                "official": "Republika Maldivi",
                "common": "Maldivi"
            },
            "ita": {
                "official": "Repubblica delle Maldive",
                "common": "Maldive"
            },
            "jpn": {
                "official": "モルディブ共和国",
                "common": "モルディブ"
            },
            "nld": {
                "official": "Republiek van de Malediven",
                "common": "Maldiven"
            },
            "por": {
                "official": "República das Maldivas",
                "common": "Maldivas"
            },
            "spa": {
                "official": "República de las Maldivas",
                "common": "Maldivas"
            },
            "rus": {
                "official": "Республика Мальдивы",
                "common": "Мальдивы"
            },
            "slk": {
                "official": "Maldivská republika",
                "common": "Maldivy"
            },
            "fin": {
                "official": "Malediivien tasavalta",
                "common": "Malediivit"
            },
            "est": {
                "official": "Maldiivi Vabariik",
                "common": "Maldiivid"
            },
            "zho": {
                "official": "马尔代夫共和国",
                "common": "马尔代夫"
            },
            "pol": {
                "official": "Republika Malediwów",
                "common": "Malediwy"
            }
        },
        "latlng": [
            3.25,
            73
        ],
        "demonym": "Maldivan",
        "landlocked": false,
        "borders": [],
        "area": 300,
        "flag": "🇲🇻"
    },
    {
        "name": {
            "common": "Mexico",
            "official": "United Mexican States",
            "native": {
                "spa": {
                    "official": "Estados Unidos Mexicanos",
                    "common": "México"
                }
            }
        },
        "tld": [
            ".mx"
        ],
        "cca2": "MX",
        "ccn3": "484",
        "cca3": "MEX",
        "cioc": "MEX",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MXN"
        ],
        "callingCode": [
            "52"
        ],
        "capital": [
            "Mexico City"
        ],
        "altSpellings": [
            "MX",
            "Mexicanos",
            "United Mexican States",
            "Estados Unidos Mexicanos"
        ],
        "region": "Americas",
        "subregion": "North America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Spojené státy mexické",
                "common": "Mexiko"
            },
            "deu": {
                "official": "Vereinigte Mexikanische Staaten",
                "common": "Mexiko"
            },
            "fra": {
                "official": "États-Unis du Mexique",
                "common": "Mexique"
            },
            "hrv": {
                "official": "Sjedinjene Meksičke Države",
                "common": "Meksiko"
            },
            "ita": {
                "official": "Stati Uniti del Messico",
                "common": "Messico"
            },
            "jpn": {
                "official": "メキシコ合衆国",
                "common": "メキシコ"
            },
            "nld": {
                "official": "Verenigde Mexicaanse Staten",
                "common": "Mexico"
            },
            "por": {
                "official": "Estados Unidos Mexicanos",
                "common": "México"
            },
            "rus": {
                "official": "Мексиканские Соединённые Штаты",
                "common": "Мексика"
            },
            "slk": {
                "official": "Spojené štášy mexické",
                "common": "Mexiko"
            },
            "spa": {
                "official": "Estados Unidos Mexicanos",
                "common": "México"
            },
            "fin": {
                "official": "Meksikon yhdysvallat",
                "common": "Meksiko"
            },
            "est": {
                "official": "Mehhiko Ühendriigid",
                "common": "Mehhiko"
            },
            "zho": {
                "official": "墨西哥合众国",
                "common": "墨西哥"
            },
            "pol": {
                "official": "Meksykańskie Stany Zjednoczone",
                "common": "Meksyk"
            }
        },
        "latlng": [
            23,
            -102
        ],
        "demonym": "Mexican",
        "landlocked": false,
        "borders": [
            "BLZ",
            "GTM",
            "USA"
        ],
        "area": 1964375,
        "flag": "🇲🇽"
    },
    {
        "name": {
            "common": "Marshall Islands",
            "official": "Republic of the Marshall Islands",
            "native": {
                "eng": {
                    "official": "Republic of the Marshall Islands",
                    "common": "Marshall Islands"
                },
                "mah": {
                    "official": "Republic of the Marshall Islands",
                    "common": "M̧ajeļ"
                }
            }
        },
        "tld": [
            ".mh"
        ],
        "cca2": "MH",
        "ccn3": "584",
        "cca3": "MHL",
        "cioc": "MHL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "692"
        ],
        "capital": [
            "Majuro"
        ],
        "altSpellings": [
            "MH",
            "Republic of the Marshall Islands",
            "Aolepān Aorōkin M̧ajeļ"
        ],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "mah": "Marshallese"
        },
        "translations": {
            "ces": {
                "official": "Republika Marshallovy ostrovy",
                "common": "Marshallovy ostrovy"
            },
            "deu": {
                "official": "Republik Marshallinseln",
                "common": "Marshallinseln"
            },
            "fra": {
                "official": "République des Îles Marshall",
                "common": "Îles Marshall"
            },
            "hrv": {
                "official": "Republika Maršalovi Otoci",
                "common": "Maršalovi Otoci"
            },
            "ita": {
                "official": "Repubblica delle Isole Marshall",
                "common": "Isole Marshall"
            },
            "jpn": {
                "official": "マーシャル諸島共和国",
                "common": "マーシャル諸島"
            },
            "nld": {
                "official": "Republiek van de Marshall-eilanden",
                "common": "Marshalleilanden"
            },
            "por": {
                "official": "República das Ilhas Marshall",
                "common": "Ilhas Marshall"
            },
            "rus": {
                "official": "Республика Маршалловы острова",
                "common": "Маршалловы Острова"
            },
            "slk": {
                "official": "Republika Marshallových ostrovov",
                "common": "Marshallove ostrovy"
            },
            "spa": {
                "official": "República de las Islas Marshall",
                "common": "Islas Marshall"
            },
            "fin": {
                "official": "Marshallinsaarten tasavalta",
                "common": "Marshallinsaaret"
            },
            "est": {
                "official": "Marshalli Saarte Vabariik",
                "common": "Marshalli Saared"
            },
            "zho": {
                "official": "马绍尔群岛共和国",
                "common": "马绍尔群岛"
            },
            "pol": {
                "official": "Republika Wysp Marshalla",
                "common": "Wyspy Marshalla"
            }
        },
        "latlng": [
            9,
            168
        ],
        "demonym": "Marshallese",
        "landlocked": false,
        "borders": [],
        "area": 181,
        "flag": "🇲🇭"
    },
    {
        "name": {
            "common": "Macedonia",
            "official": "Republic of Macedonia",
            "native": {
                "mkd": {
                    "official": "Република Македонија",
                    "common": "Македонија"
                }
            }
        },
        "tld": [
            ".mk"
        ],
        "cca2": "MK",
        "ccn3": "807",
        "cca3": "MKD",
        "cioc": "MKD",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MKD"
        ],
        "callingCode": [
            "389"
        ],
        "capital": [
            "Skopje"
        ],
        "altSpellings": [
            "MK",
            "Macedonia, the Former Yugoslav Republic of",
            "Republic of Macedonia",
            "Република Македонија"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "mkd": "Macedonian"
        },
        "translations": {
            "ces": {
                "official": "Makedonská republika",
                "common": "Makedonie"
            },
            "deu": {
                "official": "Republik Mazedonien",
                "common": "Mazedonien"
            },
            "fra": {
                "official": "République de Macédoine",
                "common": "Macédoine"
            },
            "hrv": {
                "official": "Republika Makedonija",
                "common": "Makedonija"
            },
            "ita": {
                "official": "Repubblica di Macedonia",
                "common": "Macedonia"
            },
            "jpn": {
                "official": "マケドニア共和国",
                "common": "マケドニア旧ユーゴスラビア共和国"
            },
            "nld": {
                "official": "Republic of Macedonia",
                "common": "Macedonië"
            },
            "por": {
                "official": "República da Macedónia",
                "common": "Macedónia"
            },
            "rus": {
                "official": "Республика Македония",
                "common": "Республика Македония"
            },
            "slk": {
                "official": "Macedónska republika",
                "common": "Macedónsko"
            },
            "spa": {
                "official": "República de Macedonia",
                "common": "Macedonia"
            },
            "fin": {
                "official": "Makedonian tasavalta",
                "common": "Makedonia"
            },
            "est": {
                "official": "Makedoonia Vabariik",
                "common": "Makedoonia"
            },
            "zho": {
                "official": "马其顿共和国",
                "common": "马其顿"
            },
            "pol": {
                "official": "Republika Macedonii",
                "common": "Macedonia"
            }
        },
        "latlng": [
            41.83333333,
            22
        ],
        "demonym": "Macedonian",
        "landlocked": true,
        "borders": [
            "ALB",
            "BGR",
            "GRC",
            "UNK",
            "SRB"
        ],
        "area": 25713,
        "flag": "🇲🇰"
    },
    {
        "name": {
            "common": "Mali",
            "official": "Republic of Mali",
            "native": {
                "fra": {
                    "official": "République du Mali",
                    "common": "Mali"
                }
            }
        },
        "tld": [
            ".ml"
        ],
        "cca2": "ML",
        "ccn3": "466",
        "cca3": "MLI",
        "cioc": "MLI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "223"
        ],
        "capital": [
            "Bamako"
        ],
        "altSpellings": [
            "ML",
            "Republic of Mali",
            "République du Mali"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Republika Mali",
                "common": "Mali"
            },
            "deu": {
                "official": "Republik Mali",
                "common": "Mali"
            },
            "fra": {
                "official": "République du Mali",
                "common": "Mali"
            },
            "hrv": {
                "official": "Republika Mali",
                "common": "Mali"
            },
            "ita": {
                "official": "Repubblica del Mali",
                "common": "Mali"
            },
            "jpn": {
                "official": "マリ共和国",
                "common": "マリ"
            },
            "nld": {
                "official": "Republiek Mali",
                "common": "Mali"
            },
            "por": {
                "official": "República do Mali",
                "common": "Mali"
            },
            "rus": {
                "official": "Республика Мали",
                "common": "Мали"
            },
            "slk": {
                "official": "Malijská republika",
                "common": "Mali"
            },
            "spa": {
                "official": "República de Malí",
                "common": "Mali"
            },
            "fin": {
                "official": "Malin tasavalta",
                "common": "Mali"
            },
            "est": {
                "official": "Mali Vabariik",
                "common": "Mali"
            },
            "zho": {
                "official": "马里共和国",
                "common": "马里"
            },
            "pol": {
                "official": "Republika Mali",
                "common": "Mali"
            }
        },
        "latlng": [
            17,
            -4
        ],
        "demonym": "Malian",
        "landlocked": true,
        "borders": [
            "DZA",
            "BFA",
            "GIN",
            "CIV",
            "MRT",
            "NER",
            "SEN"
        ],
        "area": 1240192,
        "flag": "🇲🇱"
    },
    {
        "name": {
            "common": "Malta",
            "official": "Republic of Malta",
            "native": {
                "eng": {
                    "official": "Republic of Malta",
                    "common": "Malta"
                },
                "mlt": {
                    "official": "Repubblika ta ' Malta",
                    "common": "Malta"
                }
            }
        },
        "tld": [
            ".mt"
        ],
        "cca2": "MT",
        "ccn3": "470",
        "cca3": "MLT",
        "cioc": "MLT",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "356"
        ],
        "capital": [
            "Valletta"
        ],
        "altSpellings": [
            "MT",
            "Republic of Malta",
            "Repubblika ta' Malta"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "eng": "English",
            "mlt": "Maltese"
        },
        "translations": {
            "ces": {
                "official": "Maltská republika",
                "common": "Malta"
            },
            "deu": {
                "official": "Republik Malta",
                "common": "Malta"
            },
            "fra": {
                "official": "République de Malte",
                "common": "Malte"
            },
            "hrv": {
                "official": "Republika Malta",
                "common": "Malta"
            },
            "ita": {
                "official": "Repubblica di Malta",
                "common": "Malta"
            },
            "jpn": {
                "official": "マルタ共和国",
                "common": "マルタ"
            },
            "nld": {
                "official": "Republiek Malta",
                "common": "Malta"
            },
            "por": {
                "official": "República de Malta",
                "common": "Malta"
            },
            "rus": {
                "official": "Республика Мальта",
                "common": "Мальта"
            },
            "slk": {
                "official": "Maltská republika",
                "common": "Malta"
            },
            "spa": {
                "official": "República de Malta",
                "common": "Malta"
            },
            "fin": {
                "official": "Maltan tasavalta",
                "common": "Malta"
            },
            "est": {
                "official": "Malta Vabariik",
                "common": "Malta"
            },
            "zho": {
                "official": "马耳他共和国",
                "common": "马耳他"
            },
            "pol": {
                "official": "Republika Malty",
                "common": "Malta"
            }
        },
        "latlng": [
            35.83333333,
            14.58333333
        ],
        "demonym": "Maltese",
        "landlocked": false,
        "borders": [],
        "area": 316,
        "flag": "🇲🇹"
    },
    {
        "name": {
            "common": "Myanmar",
            "official": "Republic of the Union of Myanmar",
            "native": {
                "mya": {
                    "official": "ပြည်ထောင်စု သမ္မတ မြန်မာနိုင်ငံတော်",
                    "common": "မြန်မာ"
                }
            }
        },
        "tld": [
            ".mm"
        ],
        "cca2": "MM",
        "ccn3": "104",
        "cca3": "MMR",
        "cioc": "MYA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MMK"
        ],
        "callingCode": [
            "95"
        ],
        "capital": [
            "Naypyidaw"
        ],
        "altSpellings": [
            "MM",
            "Burma",
            "Republic of the Union of Myanmar",
            "Pyidaunzu Thanmăda Myăma Nainngandaw"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "mya": "Burmese"
        },
        "translations": {
            "ces": {
                "official": "Republika Myanmarský svaz",
                "common": "Myanmar"
            },
            "deu": {
                "official": "Republik der Union Myanmar",
                "common": "Myanmar"
            },
            "fra": {
                "official": "République de l'Union du Myanmar",
                "common": "Birmanie"
            },
            "hrv": {
                "official": "Republika Unije Mijanmar",
                "common": "Mijanmar"
            },
            "ita": {
                "official": "Repubblica dell'Unione di Myanmar",
                "common": "Birmania"
            },
            "jpn": {
                "official": "ミャンマー連邦共和国",
                "common": "ミャンマー"
            },
            "nld": {
                "official": "Republiek van de Unie van Myanmar",
                "common": "Myanmar"
            },
            "por": {
                "official": "República da União de Myanmar",
                "common": "Myanmar"
            },
            "rus": {
                "official": "Республика Союза Мьянма",
                "common": "Мьянма"
            },
            "slk": {
                "official": "Mjanmarská zväzová republika",
                "common": "Mjanmarsko"
            },
            "spa": {
                "official": "República de la Unión de Myanmar",
                "common": "Myanmar"
            },
            "fin": {
                "official": "Myanmarin liiton tasavalta",
                "common": "Myanmar"
            },
            "est": {
                "official": "Myanmari Liidu Vabariik",
                "common": "Myanmar"
            },
            "zho": {
                "official": "缅甸联邦共和国",
                "common": "缅甸"
            },
            "pol": {
                "official": "Republika Związku Mjanmy",
                "common": "Mjanma"
            }
        },
        "latlng": [
            22,
            98
        ],
        "demonym": "Bamar",
        "landlocked": false,
        "borders": [
            "BGD",
            "CHN",
            "IND",
            "LAO",
            "THA"
        ],
        "area": 676578,
        "flag": "🇲🇲"
    },
    {
        "name": {
            "common": "Montenegro",
            "official": "Montenegro",
            "native": {
                "srp": {
                    "official": "Црна Гора",
                    "common": "Црна Гора"
                }
            }
        },
        "tld": [
            ".me"
        ],
        "cca2": "ME",
        "ccn3": "499",
        "cca3": "MNE",
        "cioc": "MNE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "382"
        ],
        "capital": [
            "Podgorica"
        ],
        "altSpellings": [
            "ME",
            "Crna Gora"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "srp": "Montenegrin"
        },
        "translations": {
            "ces": {
                "official": "Černá Hora",
                "common": "Černá Hora"
            },
            "deu": {
                "official": "Montenegro",
                "common": "Montenegro"
            },
            "fra": {
                "official": "Monténégro",
                "common": "Monténégro"
            },
            "hrv": {
                "official": "Crna Gora",
                "common": "Crna Gora"
            },
            "ita": {
                "official": "Montenegro",
                "common": "Montenegro"
            },
            "jpn": {
                "official": "モンテネグロ",
                "common": "モンテネグロ"
            },
            "nld": {
                "official": "Montenegro",
                "common": "Montenegro"
            },
            "por": {
                "official": "Montenegro",
                "common": "Montenegro"
            },
            "rus": {
                "official": "Черногория",
                "common": "Черногория"
            },
            "slk": {
                "official": "Čierna Hora",
                "common": "Čierna Hora"
            },
            "spa": {
                "official": "Montenegro",
                "common": "Montenegro"
            },
            "fin": {
                "official": "Montenegro",
                "common": "Montenegro"
            },
            "est": {
                "official": "Montenegro",
                "common": "Montenegro"
            },
            "zho": {
                "official": "黑山",
                "common": "黑山"
            },
            "pol": {
                "official": "Czarnogóra",
                "common": "Czarnogóra"
            }
        },
        "latlng": [
            42.5,
            19.3
        ],
        "demonym": "Montenegrin",
        "landlocked": false,
        "borders": [
            "ALB",
            "BIH",
            "HRV",
            "UNK",
            "SRB"
        ],
        "area": 13812,
        "flag": "🇲🇪"
    },
    {
        "name": {
            "common": "Mongolia",
            "official": "Mongolia",
            "native": {
                "mon": {
                    "official": "Монгол улс",
                    "common": "Монгол улс"
                }
            }
        },
        "tld": [
            ".mn"
        ],
        "cca2": "MN",
        "ccn3": "496",
        "cca3": "MNG",
        "cioc": "MGL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MNT"
        ],
        "callingCode": [
            "976"
        ],
        "capital": [
            "Ulan Bator"
        ],
        "altSpellings": [
            "MN"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "mon": "Mongolian"
        },
        "translations": {
            "ces": {
                "official": "Stát Mongolsko",
                "common": "Mongolsko"
            },
            "deu": {
                "official": "Mongolei",
                "common": "Mongolei"
            },
            "fra": {
                "official": "Mongolie",
                "common": "Mongolie"
            },
            "hrv": {
                "official": "Mongolija",
                "common": "Mongolija"
            },
            "ita": {
                "official": "Mongolia",
                "common": "Mongolia"
            },
            "jpn": {
                "official": "モンゴル",
                "common": "モンゴル"
            },
            "nld": {
                "official": "Mongolië",
                "common": "Mongolië"
            },
            "por": {
                "official": "Mongólia",
                "common": "Mongólia"
            },
            "rus": {
                "official": "Монголия",
                "common": "Монголия"
            },
            "slk": {
                "official": "Mongolsko",
                "common": "Mongolsko"
            },
            "spa": {
                "official": "Mongolia",
                "common": "Mongolia"
            },
            "fin": {
                "official": "Mongolian tasavalta",
                "common": "Mongolia"
            },
            "est": {
                "official": "Mongoolia",
                "common": "Mongoolia"
            },
            "zho": {
                "official": "蒙古",
                "common": "蒙古"
            },
            "pol": {
                "official": "Mongolia",
                "common": "Mongolia"
            }
        },
        "latlng": [
            46,
            105
        ],
        "demonym": "Mongolian",
        "landlocked": true,
        "borders": [
            "CHN",
            "RUS"
        ],
        "area": 1564110,
        "flag": "🇲🇳"
    },
    {
        "name": {
            "common": "Northern Mariana Islands",
            "official": "Commonwealth of the Northern Mariana Islands",
            "native": {
                "cal": {
                    "official": "Commonwealth of the Northern Mariana Islands",
                    "common": "Northern Mariana Islands"
                },
                "cha": {
                    "official": "Sankattan Siha Na Islas Mariånas",
                    "common": "Na Islas Mariånas"
                },
                "eng": {
                    "official": "Commonwealth of the Northern Mariana Islands",
                    "common": "Northern Mariana Islands"
                }
            }
        },
        "tld": [
            ".mp"
        ],
        "cca2": "MP",
        "ccn3": "580",
        "cca3": "MNP",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1670"
        ],
        "capital": [
            "Saipan"
        ],
        "altSpellings": [
            "MP",
            "Commonwealth of the Northern Mariana Islands",
            "Sankattan Siha Na Islas Mariånas"
        ],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "cal": "Carolinian",
            "cha": "Chamorro",
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Společenství Severních Marian",
                "common": "Severní Mariany"
            },
            "deu": {
                "official": "Commonwealth der Nördlichen Marianen",
                "common": "Nördliche Marianen"
            },
            "fra": {
                "official": "Commonwealth des îles Mariannes du Nord",
                "common": "Îles Mariannes du Nord"
            },
            "hrv": {
                "official": "Zajednica je Sjeverni Marijanski otoci",
                "common": "Sjevernomarijanski otoci"
            },
            "ita": {
                "official": "Commonwealth delle Isole Marianne Settentrionali",
                "common": "Isole Marianne Settentrionali"
            },
            "jpn": {
                "official": "北マリアナ諸島",
                "common": "北マリアナ諸島"
            },
            "nld": {
                "official": "Commonwealth van de Noordelijke Marianen",
                "common": "Noordelijke Marianeneilanden"
            },
            "por": {
                "official": "Comunidade das Ilhas Marianas do Norte",
                "common": "Marianas Setentrionais"
            },
            "rus": {
                "official": "Содружество Северных Марианских островов",
                "common": "Северные Марианские острова"
            },
            "slk": {
                "official": "Spoločenstvo ostrovov Severné Mariány",
                "common": "Severné Mariány"
            },
            "spa": {
                "official": "Mancomunidad de las Islas Marianas del Norte",
                "common": "Islas Marianas del Norte"
            },
            "fin": {
                "official": "Pohjois-Mariaanit",
                "common": "Pohjois-Mariaanit"
            },
            "est": {
                "official": "Põhja-Mariaani Ühendus",
                "common": "Põhja-Mariaanid"
            },
            "zho": {
                "official": "北马里亚纳群岛",
                "common": "北马里亚纳群岛"
            },
            "pol": {
                "official": "Wspólnota Marianów Północnych",
                "common": "Mariany Północne"
            }
        },
        "latlng": [
            15.2,
            145.75
        ],
        "demonym": "American",
        "landlocked": false,
        "borders": [],
        "area": 464,
        "flag": "🇲🇵"
    },
    {
        "name": {
            "common": "Mozambique",
            "official": "Republic of Mozambique",
            "native": {
                "por": {
                    "official": "República de Moçambique",
                    "common": "Moçambique"
                }
            }
        },
        "tld": [
            ".mz"
        ],
        "cca2": "MZ",
        "ccn3": "508",
        "cca3": "MOZ",
        "cioc": "MOZ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MZN"
        ],
        "callingCode": [
            "258"
        ],
        "capital": [
            "Maputo"
        ],
        "altSpellings": [
            "MZ",
            "Republic of Mozambique",
            "República de Moçambique"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "ces": {
                "official": "Mosambická republika",
                "common": "Mosambik"
            },
            "deu": {
                "official": "Republik Mosambik",
                "common": "Mosambik"
            },
            "fra": {
                "official": "République du Mozambique",
                "common": "Mozambique"
            },
            "hrv": {
                "official": "Republika Mozambiku",
                "common": "Mozambik"
            },
            "ita": {
                "official": "Repubblica del Mozambico",
                "common": "Mozambico"
            },
            "jpn": {
                "official": "モザンビーク共和国",
                "common": "モザンビーク"
            },
            "nld": {
                "official": "Republiek Mozambique",
                "common": "Mozambique"
            },
            "por": {
                "official": "República de Moçambique",
                "common": "Moçambique"
            },
            "rus": {
                "official": "Республика Мозамбик",
                "common": "Мозамбик"
            },
            "slk": {
                "official": "Mozambická republika",
                "common": "Mozambik"
            },
            "spa": {
                "official": "República de Mozambique",
                "common": "Mozambique"
            },
            "fin": {
                "official": "Mosambikin tasavalta",
                "common": "Mosambik"
            },
            "est": {
                "official": "Mosambiigi Vabariik",
                "common": "Mosambiik"
            },
            "zho": {
                "official": "莫桑比克共和国",
                "common": "莫桑比克"
            },
            "pol": {
                "official": "Republika Mozambiku",
                "common": "Mozambik"
            }
        },
        "latlng": [
            -18.25,
            35
        ],
        "demonym": "Mozambican",
        "landlocked": false,
        "borders": [
            "MWI",
            "ZAF",
            "SWZ",
            "TZA",
            "ZMB",
            "ZWE"
        ],
        "area": 801590,
        "flag": "🇲🇿"
    },
    {
        "name": {
            "common": "Mauritania",
            "official": "Islamic Republic of Mauritania",
            "native": {
                "ara": {
                    "official": "الجمهورية الإسلامية الموريتانية",
                    "common": "موريتانيا"
                }
            }
        },
        "tld": [
            ".mr"
        ],
        "cca2": "MR",
        "ccn3": "478",
        "cca3": "MRT",
        "cioc": "MTN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MRO"
        ],
        "callingCode": [
            "222"
        ],
        "capital": [
            "Nouakchott"
        ],
        "altSpellings": [
            "MR",
            "Islamic Republic of Mauritania",
            "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Mauritánská islámská republika",
                "common": "Mauritánie"
            },
            "deu": {
                "official": "Islamische Republik Mauretanien",
                "common": "Mauretanien"
            },
            "fra": {
                "official": "République islamique de Mauritanie",
                "common": "Mauritanie"
            },
            "hrv": {
                "official": "Islamska Republika Mauritanija",
                "common": "Mauritanija"
            },
            "ita": {
                "official": "Repubblica islamica di Mauritania",
                "common": "Mauritania"
            },
            "jpn": {
                "official": "モーリタニア·イスラム共和国",
                "common": "モーリタニア"
            },
            "nld": {
                "official": "Islamitische Republiek Mauritanië",
                "common": "Mauritanië"
            },
            "por": {
                "official": "República Islâmica da Mauritânia",
                "common": "Mauritânia"
            },
            "rus": {
                "official": "Исламская Республика Мавритания",
                "common": "Мавритания"
            },
            "slk": {
                "official": "Mauritánska islamská republika",
                "common": "Mauritánia"
            },
            "spa": {
                "official": "República Islámica de Mauritania",
                "common": "Mauritania"
            },
            "fin": {
                "official": "Mauritanian islamilainen tasavalta",
                "common": "Mauritania"
            },
            "est": {
                "official": "Mauritaania Islamivabariik",
                "common": "Mauritaania"
            },
            "zho": {
                "official": "毛里塔尼亚伊斯兰共和国",
                "common": "毛里塔尼亚"
            },
            "pol": {
                "official": "Islamska Republika Mauretańska",
                "common": "Mauretania"
            }
        },
        "latlng": [
            20,
            -12
        ],
        "demonym": "Mauritanian",
        "landlocked": false,
        "borders": [
            "DZA",
            "MLI",
            "SEN",
            "ESH"
        ],
        "area": 1030700,
        "flag": "🇲🇷"
    },
    {
        "name": {
            "common": "Montserrat",
            "official": "Montserrat",
            "native": {
                "eng": {
                    "official": "Montserrat",
                    "common": "Montserrat"
                }
            }
        },
        "tld": [
            ".ms"
        ],
        "cca2": "MS",
        "ccn3": "500",
        "cca3": "MSR",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1664"
        ],
        "capital": [
            "Plymouth"
        ],
        "altSpellings": [
            "MS"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "deu": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "fra": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "hrv": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "ita": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "jpn": {
                "official": "モントセラト",
                "common": "モントセラト"
            },
            "nld": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "por": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "rus": {
                "official": "Монтсеррат",
                "common": "Монтсеррат"
            },
            "slk": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "spa": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "fin": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "est": {
                "official": "Montserrat",
                "common": "Montserrat"
            },
            "zho": {
                "official": "蒙特塞拉特",
                "common": "蒙特塞拉特"
            },
            "pol": {
                "official": "Montserrat",
                "common": "Montserrat"
            }
        },
        "latlng": [
            16.75,
            -62.2
        ],
        "demonym": "Montserratian",
        "landlocked": false,
        "borders": [],
        "area": 102,
        "flag": "🇲🇸"
    },
    {
        "name": {
            "common": "Martinique",
            "official": "Martinique",
            "native": {
                "fra": {
                    "official": "Martinique",
                    "common": "Martinique"
                }
            }
        },
        "tld": [
            ".mq"
        ],
        "cca2": "MQ",
        "ccn3": "474",
        "cca3": "MTQ",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "596"
        ],
        "capital": [
            "Fort-de-France"
        ],
        "altSpellings": [
            "MQ"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Martinik",
                "common": "Martinik"
            },
            "deu": {
                "official": "Martinique",
                "common": "Martinique"
            },
            "fra": {
                "official": "Martinique",
                "common": "Martinique"
            },
            "hrv": {
                "official": "Martinique",
                "common": "Martinique"
            },
            "ita": {
                "official": "Martinique",
                "common": "Martinica"
            },
            "jpn": {
                "official": "マルティニーク島",
                "common": "マルティニーク"
            },
            "nld": {
                "official": "Martinique",
                "common": "Martinique"
            },
            "por": {
                "official": "Martinique",
                "common": "Martinica"
            },
            "rus": {
                "official": "Мартиника",
                "common": "Мартиника"
            },
            "spa": {
                "official": "Martinica",
                "common": "Martinica"
            },
            "slk": {
                "official": "Martinique",
                "common": "Martinique"
            },
            "fin": {
                "official": "Martinique",
                "common": "Martinique"
            },
            "est": {
                "official": "Martinique’i departemang",
                "common": "Martinique"
            },
            "zho": {
                "official": "马提尼克",
                "common": "马提尼克"
            },
            "pol": {
                "official": "Martynika",
                "common": "Martynika"
            }
        },
        "latlng": [
            14.666667,
            -61
        ],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 1128,
        "flag": "🇲🇶"
    },
    {
        "name": {
            "common": "Mauritius",
            "official": "Republic of Mauritius",
            "native": {
                "eng": {
                    "official": "Republic of Mauritius",
                    "common": "Mauritius"
                },
                "fra": {
                    "official": "République de Maurice",
                    "common": "Maurice"
                },
                "mfe": {
                    "official": "Republik Moris",
                    "common": "Moris"
                }
            }
        },
        "tld": [
            ".mu"
        ],
        "cca2": "MU",
        "ccn3": "480",
        "cca3": "MUS",
        "cioc": "MRI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MUR"
        ],
        "callingCode": [
            "230"
        ],
        "capital": [
            "Port Louis"
        ],
        "altSpellings": [
            "MU",
            "Republic of Mauritius",
            "République de Maurice"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "fra": "French",
            "mfe": "Mauritian Creole"
        },
        "translations": {
            "ces": {
                "official": "Mauricijská republika",
                "common": "Mauricius"
            },
            "deu": {
                "official": "Republik Mauritius",
                "common": "Mauritius"
            },
            "fra": {
                "official": "République de Maurice",
                "common": "Île Maurice"
            },
            "hrv": {
                "official": "Republika Mauricijus",
                "common": "Mauricijus"
            },
            "ita": {
                "official": "Repubblica di Mauritius",
                "common": "Mauritius"
            },
            "jpn": {
                "official": "モーリシャス共和国",
                "common": "モーリシャス"
            },
            "nld": {
                "official": "Republiek Mauritius",
                "common": "Mauritius"
            },
            "por": {
                "official": "República das Maurícias",
                "common": "Maurício"
            },
            "rus": {
                "official": "Республика Маврикий",
                "common": "Маврикий"
            },
            "slk": {
                "official": "Maurícijská republika",
                "common": "Maurícius"
            },
            "spa": {
                "official": "República de Mauricio",
                "common": "Mauricio"
            },
            "fin": {
                "official": "Mauritiuksen tasavalta",
                "common": "Mauritius"
            },
            "est": {
                "official": "Mauritiuse Vabariik",
                "common": "Mauritius"
            },
            "zho": {
                "official": "毛里求斯共和国",
                "common": "毛里求斯"
            },
            "pol": {
                "official": "Republika Mauritiusu",
                "common": "Mauritius"
            }
        },
        "latlng": [
            -20.28333333,
            57.55
        ],
        "demonym": "Mauritian",
        "landlocked": false,
        "borders": [],
        "area": 2040,
        "flag": "🇲🇺"
    },
    {
        "name": {
            "common": "Malawi",
            "official": "Republic of Malawi",
            "native": {
                "eng": {
                    "official": "Republic of Malawi",
                    "common": "Malawi"
                },
                "nya": {
                    "official": "Chalo cha Malawi, Dziko la Malaŵi",
                    "common": "Malaŵi"
                }
            }
        },
        "tld": [
            ".mw"
        ],
        "cca2": "MW",
        "ccn3": "454",
        "cca3": "MWI",
        "cioc": "MAW",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MWK"
        ],
        "callingCode": [
            "265"
        ],
        "capital": [
            "Lilongwe"
        ],
        "altSpellings": [
            "MW",
            "Republic of Malawi"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "nya": "Chewa"
        },
        "translations": {
            "ces": {
                "official": "Malawiská republika",
                "common": "Malawi"
            },
            "deu": {
                "official": "Republik Malawi",
                "common": "Malawi"
            },
            "fra": {
                "official": "République du Malawi",
                "common": "Malawi"
            },
            "hrv": {
                "official": "Republika Malavi",
                "common": "Malavi"
            },
            "ita": {
                "official": "Repubblica del Malawi",
                "common": "Malawi"
            },
            "jpn": {
                "official": "マラウイ共和国",
                "common": "マラウイ"
            },
            "nld": {
                "official": "Republiek Malawi",
                "common": "Malawi"
            },
            "por": {
                "official": "República do Malawi",
                "common": "Malawi"
            },
            "rus": {
                "official": "Республика Малави",
                "common": "Малави"
            },
            "slk": {
                "official": "Malawijská republika",
                "common": "Malawi"
            },
            "spa": {
                "official": "República de Malawi",
                "common": "Malawi"
            },
            "fin": {
                "official": "Malawin tasavalta",
                "common": "Malawi"
            },
            "est": {
                "official": "Malawi Vabariik",
                "common": "Malawi"
            },
            "zho": {
                "official": "马拉维共和国",
                "common": "马拉维"
            },
            "pol": {
                "official": "Republika Malawi",
                "common": "Malawi"
            }
        },
        "latlng": [
            -13.5,
            34
        ],
        "demonym": "Malawian",
        "landlocked": true,
        "borders": [
            "MOZ",
            "TZA",
            "ZMB"
        ],
        "area": 118484,
        "flag": "🇲🇼"
    },
    {
        "name": {
            "common": "Malaysia",
            "official": "Malaysia",
            "native": {
                "eng": {
                    "official": "Malaysia",
                    "common": "Malaysia"
                },
                "msa": {
                    "official": "مليسيا",
                    "common": "مليسيا"
                }
            }
        },
        "tld": [
            ".my"
        ],
        "cca2": "MY",
        "ccn3": "458",
        "cca3": "MYS",
        "cioc": "MAS",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "MYR"
        ],
        "callingCode": [
            "60"
        ],
        "capital": [
            "Kuala Lumpur"
        ],
        "altSpellings": [
            "MY"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "eng": "English",
            "msa": "Malay"
        },
        "translations": {
            "ces": {
                "official": "Malajsie",
                "common": "Malajsie"
            },
            "deu": {
                "official": "Malaysia",
                "common": "Malaysia"
            },
            "fra": {
                "official": "Fédération de Malaisie",
                "common": "Malaisie"
            },
            "hrv": {
                "official": "Malezija",
                "common": "Malezija"
            },
            "ita": {
                "official": "Malaysia",
                "common": "Malesia"
            },
            "jpn": {
                "official": "マレーシア",
                "common": "マレーシア"
            },
            "nld": {
                "official": "Maleisië",
                "common": "Maleisië"
            },
            "por": {
                "official": "Malásia",
                "common": "Malásia"
            },
            "rus": {
                "official": "Малайзия",
                "common": "Малайзия"
            },
            "slk": {
                "official": "Malajzia",
                "common": "Malajzia"
            },
            "spa": {
                "official": "Malasia",
                "common": "Malasia"
            },
            "fin": {
                "official": "Malesia",
                "common": "Malesia"
            },
            "est": {
                "official": "Malaisia",
                "common": "Malaisia"
            },
            "zho": {
                "official": "马来西亚",
                "common": "马来西亚"
            },
            "pol": {
                "official": "Malezja",
                "common": "Malezja"
            }
        },
        "latlng": [
            2.5,
            112.5
        ],
        "demonym": "Malaysian",
        "landlocked": false,
        "borders": [
            "BRN",
            "IDN",
            "THA"
        ],
        "area": 330803,
        "flag": "🇲🇾"
    },
    {
        "name": {
            "common": "Mayotte",
            "official": "Department of Mayotte",
            "native": {
                "fra": {
                    "official": "Département de Mayotte",
                    "common": "Mayotte"
                }
            }
        },
        "tld": [
            ".yt"
        ],
        "cca2": "YT",
        "ccn3": "175",
        "cca3": "MYT",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "262"
        ],
        "capital": [
            "Mamoudzou"
        ],
        "altSpellings": [
            "YT",
            "Department of Mayotte",
            "Département de Mayotte"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Mayotte",
                "common": "Mayotte"
            },
            "deu": {
                "official": "Übersee-Département Mayotte",
                "common": "Mayotte"
            },
            "fra": {
                "official": "Département de Mayotte",
                "common": "Mayotte"
            },
            "hrv": {
                "official": "Odjel Mayotte",
                "common": "Mayotte"
            },
            "ita": {
                "official": "Dipartimento di Mayotte",
                "common": "Mayotte"
            },
            "jpn": {
                "official": "マヨット科",
                "common": "マヨット"
            },
            "nld": {
                "official": "Afdeling Mayotte",
                "common": "Mayotte"
            },
            "por": {
                "official": "Departamento de Mayotte",
                "common": "Mayotte"
            },
            "rus": {
                "official": "Департамент Майотта",
                "common": "Майотта"
            },
            "slk": {
                "official": "Department Mayotte",
                "common": "Mayotte"
            },
            "spa": {
                "official": "Departamento de Mayotte",
                "common": "Mayotte"
            },
            "fin": {
                "official": "Mayotte",
                "common": "Mayotte"
            },
            "est": {
                "official": "Mayotte",
                "common": "Mayotte"
            },
            "zho": {
                "official": "马约特",
                "common": "马约特"
            },
            "pol": {
                "official": "Majotta",
                "common": "Majotta"
            }
        },
        "latlng": [
            -12.83333333,
            45.16666666
        ],
        "demonym": "Mahoran",
        "landlocked": false,
        "borders": [],
        "area": 374,
        "flag": "🇾🇹"
    },
    {
        "name": {
            "common": "Namibia",
            "official": "Republic of Namibia",
            "native": {
                "afr": {
                    "official": "Republiek van Namibië",
                    "common": "Namibië"
                },
                "deu": {
                    "official": "Republik Namibia",
                    "common": "Namibia"
                },
                "eng": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "her": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "hgm": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "kwn": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "loz": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "ndo": {
                    "official": "Republic of Namibia",
                    "common": "Namibia"
                },
                "tsn": {
                    "official": "Lefatshe la Namibia",
                    "common": "Namibia"
                }
            }
        },
        "tld": [
            ".na"
        ],
        "cca2": "NA",
        "ccn3": "516",
        "cca3": "NAM",
        "cioc": "NAM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "NAD",
            "ZAR"
        ],
        "callingCode": [
            "264"
        ],
        "capital": [
            "Windhoek"
        ],
        "altSpellings": [
            "NA",
            "Namibië",
            "Republic of Namibia"
        ],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "afr": "Afrikaans",
            "deu": "German",
            "eng": "English",
            "her": "Herero",
            "hgm": "Khoekhoe",
            "kwn": "Kwangali",
            "loz": "Lozi",
            "ndo": "Ndonga",
            "tsn": "Tswana"
        },
        "translations": {
            "ces": {
                "official": "Namibijská republika",
                "common": "Namibie"
            },
            "deu": {
                "official": "Republik Namibia",
                "common": "Namibia"
            },
            "fra": {
                "official": "République de Namibie",
                "common": "Namibie"
            },
            "hrv": {
                "official": "Republika Namibija",
                "common": "Namibija"
            },
            "ita": {
                "official": "Repubblica di Namibia",
                "common": "Namibia"
            },
            "jpn": {
                "official": "ナミビア共和国",
                "common": "ナミビア"
            },
            "nld": {
                "official": "Republiek Namibië",
                "common": "Namibië"
            },
            "por": {
                "official": "República da Namíbia",
                "common": "Namíbia"
            },
            "rus": {
                "official": "Республика Намибия",
                "common": "Намибия"
            },
            "slk": {
                "official": "Namíbijská republika",
                "common": "Namíbia"
            },
            "spa": {
                "official": "República de Namibia",
                "common": "Namibia"
            },
            "fin": {
                "official": "Namibian tasavalta",
                "common": "Namibia"
            },
            "est": {
                "official": "Namiibia Vabariik",
                "common": "Namiibia"
            },
            "zho": {
                "official": "纳米比亚共和国",
                "common": "纳米比亚"
            },
            "pol": {
                "official": "Republika Namibii",
                "common": "Namibia"
            }
        },
        "latlng": [
            -22,
            17
        ],
        "demonym": "Namibian",
        "landlocked": false,
        "borders": [
            "AGO",
            "BWA",
            "ZAF",
            "ZMB"
        ],
        "area": 825615,
        "flag": "🇳🇦"
    },
    {
        "name": {
            "common": "New Caledonia",
            "official": "New Caledonia",
            "native": {
                "fra": {
                    "official": "Nouvelle-Calédonie",
                    "common": "Nouvelle-Calédonie"
                }
            }
        },
        "tld": [
            ".nc"
        ],
        "cca2": "NC",
        "ccn3": "540",
        "cca3": "NCL",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "XPF"
        ],
        "callingCode": [
            "687"
        ],
        "capital": [
            "Nouméa"
        ],
        "altSpellings": [
            "NC"
        ],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Nová Kaledonie",
                "common": "Nová Kaledonie"
            },
            "deu": {
                "official": "Neukaledonien",
                "common": "Neukaledonien"
            },
            "fra": {
                "official": "Nouvelle-Calédonie",
                "common": "Nouvelle-Calédonie"
            },
            "hrv": {
                "official": "Nova Kaledonija",
                "common": "Nova Kaledonija"
            },
            "ita": {
                "official": "Nuova Caledonia",
                "common": "Nuova Caledonia"
            },
            "jpn": {
                "official": "ニューカレドニア",
                "common": "ニューカレドニア"
            },
            "nld": {
                "official": "nieuw -Caledonië",
                "common": "Nieuw-Caledonië"
            },
            "por": {
                "official": "New Caledonia",
                "common": "Nova Caledónia"
            },
            "rus": {
                "official": "Новая Каледония",
                "common": "Новая Каледония"
            },
            "slk": {
                "official": "Nová Kaledónia",
                "common": "Nová Kaledónia"
            },
            "spa": {
                "official": "nueva Caledonia",
                "common": "Nueva Caledonia"
            },
            "fin": {
                "official": "Uusi-Kaledonia",
                "common": "Uusi-Kaledonia"
            },
            "est": {
                "official": "Uus-Kaledoonia",
                "common": "Uus-Kaledoonia"
            },
            "zho": {
                "official": "新喀里多尼亚",
                "common": "新喀里多尼亚"
            },
            "pol": {
                "official": "Nowa Kaledonia",
                "common": "Nowa Kaledonia"
            }
        },
        "latlng": [
            -21.5,
            165.5
        ],
        "demonym": "New Caledonian",
        "landlocked": false,
        "borders": [],
        "area": 18575,
        "flag": "🇳🇨"
    },
    {
        "name": {
            "common": "Niger",
            "official": "Republic of Niger",
            "native": {
                "fra": {
                    "official": "République du Niger",
                    "common": "Niger"
                }
            }
        },
        "tld": [
            ".ne"
        ],
        "cca2": "NE",
        "ccn3": "562",
        "cca3": "NER",
        "cioc": "NIG",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "227"
        ],
        "capital": [
            "Niamey"
        ],
        "altSpellings": [
            "NE",
            "Nijar"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Nigerská republika",
                "common": "Niger"
            },
            "deu": {
                "official": "Republik Niger",
                "common": "Niger"
            },
            "fra": {
                "official": "République du Niger",
                "common": "Niger"
            },
            "hrv": {
                "official": "Republika Niger",
                "common": "Niger"
            },
            "ita": {
                "official": "Repubblica del Niger",
                "common": "Niger"
            },
            "jpn": {
                "official": "ニジェール共和国",
                "common": "ニジェール"
            },
            "nld": {
                "official": "Republiek Niger",
                "common": "Niger"
            },
            "por": {
                "official": "República do Níger",
                "common": "Níger"
            },
            "rus": {
                "official": "Республика Нигер",
                "common": "Нигер"
            },
            "slk": {
                "official": "Nigérská republika",
                "common": "Niger"
            },
            "spa": {
                "official": "República de Níger",
                "common": "Níger"
            },
            "fin": {
                "official": "Nigerin tasavalta",
                "common": "Niger"
            },
            "est": {
                "official": "Nigeri Vabariik",
                "common": "Niger"
            },
            "zho": {
                "official": "尼日尔共和国",
                "common": "尼日尔"
            },
            "pol": {
                "official": "Republika Nigru",
                "common": "Niger"
            }
        },
        "latlng": [
            16,
            8
        ],
        "demonym": "Nigerien",
        "landlocked": true,
        "borders": [
            "DZA",
            "BEN",
            "BFA",
            "TCD",
            "LBY",
            "MLI",
            "NGA"
        ],
        "area": 1267000,
        "flag": "🇳🇪"
    },
    {
        "name": {
            "common": "Norfolk Island",
            "official": "Territory of Norfolk Island",
            "native": {
                "eng": {
                    "official": "Territory of Norfolk Island",
                    "common": "Norfolk Island"
                },
                "pih": {
                    "official": "Teratri of Norf'k Ailen",
                    "common": "Norf'k Ailen"
                }
            }
        },
        "tld": [
            ".nf"
        ],
        "cca2": "NF",
        "ccn3": "574",
        "cca3": "NFK",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [
            "672"
        ],
        "capital": [
            "Kingston"
        ],
        "altSpellings": [
            "NF",
            "Territory of Norfolk Island",
            "Teratri of Norf'k Ailen"
        ],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English",
            "pih": "Norfuk"
        },
        "translations": {
            "ces": {
                "official": "Teritorium ostrova Norfolk",
                "common": "Norfolk"
            },
            "deu": {
                "official": "Gebiet der Norfolkinsel",
                "common": "Norfolkinsel"
            },
            "fra": {
                "official": "Territoire de l'île Norfolk",
                "common": "Île Norfolk"
            },
            "hrv": {
                "official": "Teritorij Norfolk Island",
                "common": "Otok Norfolk"
            },
            "ita": {
                "official": "Territorio di Norfolk Island",
                "common": "Isola Norfolk"
            },
            "jpn": {
                "official": "ノーフォーク島の領土",
                "common": "ノーフォーク島"
            },
            "nld": {
                "official": "Grondgebied van Norfolk Island",
                "common": "Norfolkeiland"
            },
            "por": {
                "official": "Território da Ilha Norfolk",
                "common": "Ilha Norfolk"
            },
            "rus": {
                "official": "Территория острова Норфолк",
                "common": "Норфолк"
            },
            "slk": {
                "official": "Teritórium ostrova Norfolk",
                "common": "Norfolk"
            },
            "spa": {
                "official": "Territorio de la Isla Norfolk",
                "common": "Isla de Norfolk"
            },
            "fin": {
                "official": "Norfolkinsaaren territorio",
                "common": "Norfolkinsaari"
            },
            "est": {
                "official": "Norfolki saare ala",
                "common": "Norfolk"
            },
            "zho": {
                "official": "诺福克岛",
                "common": "诺福克岛"
            },
            "pol": {
                "official": "Terytorium Wyspy Norfolk",
                "common": "Wyspa Norfolk"
            }
        },
        "latlng": [
            -29.03333333,
            167.95
        ],
        "demonym": "Norfolk Islander",
        "landlocked": false,
        "borders": [],
        "area": 36,
        "flag": "🇳🇫"
    },
    {
        "name": {
            "common": "Nigeria",
            "official": "Federal Republic of Nigeria",
            "native": {
                "eng": {
                    "official": "Federal Republic of Nigeria",
                    "common": "Nigeria"
                }
            }
        },
        "tld": [
            ".ng"
        ],
        "cca2": "NG",
        "ccn3": "566",
        "cca3": "NGA",
        "cioc": "NGR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "NGN"
        ],
        "callingCode": [
            "234"
        ],
        "capital": [
            "Abuja"
        ],
        "altSpellings": [
            "NG",
            "Nijeriya",
            "Naíjíríà",
            "Federal Republic of Nigeria"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Nigerijská federativní republika",
                "common": "Nigérie"
            },
            "deu": {
                "official": "Bundesrepublik Nigeria",
                "common": "Nigeria"
            },
            "fra": {
                "official": "République fédérale du Nigeria",
                "common": "Nigéria"
            },
            "hrv": {
                "official": "Savezna Republika Nigerija",
                "common": "Nigerija"
            },
            "ita": {
                "official": "Repubblica federale di Nigeria",
                "common": "Nigeria"
            },
            "jpn": {
                "official": "ナイジェリア連邦共和国",
                "common": "ナイジェリア"
            },
            "nld": {
                "official": "Federale Republiek Nigeria",
                "common": "Nigeria"
            },
            "por": {
                "official": "República Federal da Nigéria",
                "common": "Nigéria"
            },
            "rus": {
                "official": "Федеративная Республика Нигерия",
                "common": "Нигерия"
            },
            "slk": {
                "official": "Nigérijská federatívna republika",
                "common": "Nigéria"
            },
            "spa": {
                "official": "República Federal de Nigeria",
                "common": "Nigeria"
            },
            "fin": {
                "official": "Nigerian liittotasavalta",
                "common": "Nigeria"
            },
            "est": {
                "official": "Nigeeria Liitvabariik",
                "common": "Nigeeria"
            },
            "zho": {
                "official": "尼日利亚联邦共和国",
                "common": "尼日利亚"
            },
            "pol": {
                "official": "Federalna Republika Nigerii",
                "common": "Nigeria"
            }
        },
        "latlng": [
            10,
            8
        ],
        "demonym": "Nigerian",
        "landlocked": false,
        "borders": [
            "BEN",
            "CMR",
            "TCD",
            "NER"
        ],
        "area": 923768,
        "flag": "🇳🇬"
    },
    {
        "name": {
            "common": "Nicaragua",
            "official": "Republic of Nicaragua",
            "native": {
                "spa": {
                    "official": "República de Nicaragua",
                    "common": "Nicaragua"
                }
            }
        },
        "tld": [
            ".ni"
        ],
        "cca2": "NI",
        "ccn3": "558",
        "cca3": "NIC",
        "cioc": "NCA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "NIO"
        ],
        "callingCode": [
            "505"
        ],
        "capital": [
            "Managua"
        ],
        "altSpellings": [
            "NI",
            "Republic of Nicaragua",
            "República de Nicaragua"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Republika Nikaragua",
                "common": "Nikaragua"
            },
            "deu": {
                "official": "Republik Nicaragua",
                "common": "Nicaragua"
            },
            "fra": {
                "official": "République du Nicaragua",
                "common": "Nicaragua"
            },
            "hrv": {
                "official": "Republika Nikaragva",
                "common": "Nikaragva"
            },
            "ita": {
                "official": "Repubblica del Nicaragua",
                "common": "Nicaragua"
            },
            "jpn": {
                "official": "ニカラグア共和国",
                "common": "ニカラグア"
            },
            "nld": {
                "official": "Republiek Nicaragua",
                "common": "Nicaragua"
            },
            "por": {
                "official": "República da Nicarágua",
                "common": "Nicarágua"
            },
            "rus": {
                "official": "Республика Никарагуа",
                "common": "Никарагуа"
            },
            "slk": {
                "official": "Nikaragujská republika",
                "common": "Nikaragua"
            },
            "spa": {
                "official": "República de Nicaragua",
                "common": "Nicaragua"
            },
            "fin": {
                "official": "Nicaraguan tasavalta",
                "common": "Nicaragua"
            },
            "est": {
                "official": "Nicaragua Vabariik",
                "common": "Nicaragua"
            },
            "zho": {
                "official": "尼加拉瓜共和国",
                "common": "尼加拉瓜"
            },
            "pol": {
                "official": "Republika Nikaragui",
                "common": "Nikaragua"
            }
        },
        "latlng": [
            13,
            -85
        ],
        "demonym": "Nicaraguan",
        "landlocked": false,
        "borders": [
            "CRI",
            "HND"
        ],
        "area": 130373,
        "flag": "🇳🇮"
    },
    {
        "name": {
            "common": "Niue",
            "official": "Niue",
            "native": {
                "eng": {
                    "official": "Niue",
                    "common": "Niue"
                },
                "niu": {
                    "official": "Niuē",
                    "common": "Niuē"
                }
            }
        },
        "tld": [
            ".nu"
        ],
        "cca2": "NU",
        "ccn3": "570",
        "cca3": "NIU",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "NZD"
        ],
        "callingCode": [
            "683"
        ],
        "capital": [
            "Alofi"
        ],
        "altSpellings": [
            "NU"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "niu": "Niuean"
        },
        "translations": {
            "ces": {
                "official": "Niue",
                "common": "Niue"
            },
            "deu": {
                "official": "Niue",
                "common": "Niue"
            },
            "fra": {
                "official": "Niue",
                "common": "Niue"
            },
            "hrv": {
                "official": "Niue",
                "common": "Niue"
            },
            "ita": {
                "official": "Niue",
                "common": "Niue"
            },
            "jpn": {
                "official": "ニウエ",
                "common": "ニウエ"
            },
            "nld": {
                "official": "Niue",
                "common": "Niue"
            },
            "por": {
                "official": "Niue",
                "common": "Niue"
            },
            "rus": {
                "official": "Ниуэ",
                "common": "Ниуэ"
            },
            "slk": {
                "official": "Niue",
                "common": "Niue"
            },
            "spa": {
                "official": "Niue",
                "common": "Niue"
            },
            "fin": {
                "official": "Niue",
                "common": "Niue"
            },
            "est": {
                "official": "Niue",
                "common": "Niue"
            },
            "zho": {
                "official": "纽埃",
                "common": "纽埃"
            },
            "pol": {
                "official": "Niue",
                "common": "Niue"
            }
        },
        "latlng": [
            -19.03333333,
            -169.86666666
        ],
        "demonym": "Niuean",
        "landlocked": false,
        "borders": [],
        "area": 260,
        "flag": "🇳🇺"
    },
    {
        "name": {
            "common": "Netherlands",
            "official": "Kingdom of the Netherlands",
            "native": {
                "nld": {
                    "official": "Koninkrijk der Nederlanden",
                    "common": "Nederland"
                }
            }
        },
        "tld": [
            ".nl"
        ],
        "cca2": "NL",
        "ccn3": "528",
        "cca3": "NLD",
        "cioc": "NED",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "31"
        ],
        "capital": [
            "Amsterdam"
        ],
        "altSpellings": [
            "NL",
            "Holland",
            "Nederland",
            "The Netherlands"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "languages": {
            "nld": "Dutch"
        },
        "translations": {
            "ces": {
                "official": "Nizozemské království",
                "common": "Nizozemsko"
            },
            "deu": {
                "official": "Niederlande",
                "common": "Niederlande"
            },
            "fra": {
                "official": "Pays-Bas",
                "common": "Pays-Bas"
            },
            "hrv": {
                "official": "Holandija",
                "common": "Nizozemska"
            },
            "ita": {
                "official": "Paesi Bassi",
                "common": "Paesi Bassi"
            },
            "jpn": {
                "official": "オランダ",
                "common": "オランダ"
            },
            "nld": {
                "official": "Nederland",
                "common": "Nederland"
            },
            "por": {
                "official": "Holanda",
                "common": "Holanda"
            },
            "rus": {
                "official": "Нидерланды",
                "common": "Нидерланды"
            },
            "slk": {
                "official": "Holandské kráľovstvo",
                "common": "Holansko"
            },
            "spa": {
                "official": "Países Bajos",
                "common": "Países Bajos"
            },
            "fin": {
                "official": "Alankomaat",
                "common": "Alankomaat"
            },
            "est": {
                "official": "Madalmaade Kuningriik",
                "common": "Holland"
            },
            "zho": {
                "official": "荷兰",
                "common": "荷兰"
            },
            "pol": {
                "official": "Królestwo Niderlandów",
                "common": "Holandia"
            }
        },
        "latlng": [
            52.5,
            5.75
        ],
        "demonym": "Dutch",
        "landlocked": false,
        "borders": [
            "BEL",
            "DEU"
        ],
        "area": 41850,
        "flag": "🇳🇱"
    },
    {
        "name": {
            "common": "Norway",
            "official": "Kingdom of Norway",
            "native": {
                "nno": {
                    "official": "Kongeriket Noreg",
                    "common": "Noreg"
                },
                "nob": {
                    "official": "Kongeriket Norge",
                    "common": "Norge"
                },
                "smi": {
                    "official": "Norgga gonagasriika",
                    "common": "Norgga"
                }
            }
        },
        "tld": [
            ".no"
        ],
        "cca2": "NO",
        "ccn3": "578",
        "cca3": "NOR",
        "cioc": "NOR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "NOK"
        ],
        "callingCode": [
            "47"
        ],
        "capital": [
            "Oslo"
        ],
        "altSpellings": [
            "NO",
            "Norge",
            "Noreg",
            "Kingdom of Norway",
            "Kongeriket Norge",
            "Kongeriket Noreg"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "nno": "Norwegian Nynorsk",
            "nob": "Norwegian Bokmål",
            "smi": "Sami"
        },
        "translations": {
            "ces": {
                "official": "Norské království",
                "common": "Norsko"
            },
            "deu": {
                "official": "Königreich Norwegen",
                "common": "Norwegen"
            },
            "fra": {
                "official": "Royaume de Norvège",
                "common": "Norvège"
            },
            "hrv": {
                "official": "Kraljevina Norveška",
                "common": "Norveška"
            },
            "ita": {
                "official": "Regno di Norvegia",
                "common": "Norvegia"
            },
            "jpn": {
                "official": "ノルウェー王国",
                "common": "ノルウェー"
            },
            "nld": {
                "official": "Koninkrijk Noorwegen",
                "common": "Noorwegen"
            },
            "por": {
                "official": "Reino da Noruega",
                "common": "Noruega"
            },
            "rus": {
                "official": "Королевство Норвегия",
                "common": "Норвегия"
            },
            "slk": {
                "official": "Nórske kráľovstvo",
                "common": "Nórsko"
            },
            "spa": {
                "official": "Reino de Noruega",
                "common": "Noruega"
            },
            "fin": {
                "official": "Norjan kuningaskunta",
                "common": "Norja"
            },
            "est": {
                "official": "Norra Kuningriik",
                "common": "Norra"
            },
            "zho": {
                "official": "挪威王国",
                "common": "挪威"
            },
            "pol": {
                "official": "Królestwo Norwegii",
                "common": "Norwegia"
            }
        },
        "latlng": [
            62,
            10
        ],
        "demonym": "Norwegian",
        "landlocked": false,
        "borders": [
            "FIN",
            "SWE",
            "RUS"
        ],
        "area": 323802,
        "flag": "🇳🇴"
    },
    {
        "name": {
            "common": "Nepal",
            "official": "Federal Democratic Republic of Nepal",
            "native": {
                "nep": {
                    "official": "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
                    "common": "नेपाल"
                }
            }
        },
        "tld": [
            ".np"
        ],
        "cca2": "NP",
        "ccn3": "524",
        "cca3": "NPL",
        "cioc": "NEP",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "NPR"
        ],
        "callingCode": [
            "977"
        ],
        "capital": [
            "Kathmandu"
        ],
        "altSpellings": [
            "NP",
            "Federal Democratic Republic of Nepal",
            "Loktāntrik Ganatantra Nepāl"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "nep": "Nepali"
        },
        "translations": {
            "ces": {
                "official": "Federativní demokratická republika Nepál",
                "common": "Nepál"
            },
            "deu": {
                "official": "Demokratischen Bundesrepublik Nepal",
                "common": "Nepal"
            },
            "fra": {
                "official": "République du Népal",
                "common": "Népal"
            },
            "hrv": {
                "official": "Savezna Demokratska Republika Nepal",
                "common": "Nepal"
            },
            "ita": {
                "official": "Repubblica federale democratica del Nepal",
                "common": "Nepal"
            },
            "jpn": {
                "official": "ネパール連邦民主共和国",
                "common": "ネパール"
            },
            "nld": {
                "official": "Federale Democratische Republiek Nepal",
                "common": "Nepal"
            },
            "por": {
                "official": "República Democrática Federal do Nepal",
                "common": "Nepal"
            },
            "rus": {
                "official": "Федеративная Демократическая Республика Непал",
                "common": "Непал"
            },
            "slk": {
                "official": "Nepálska federatívna demokratická republika",
                "common": "Nepál"
            },
            "spa": {
                "official": "República Democrática Federal de Nepal",
                "common": "Nepal"
            },
            "fin": {
                "official": "Nepalin demokraattinen liittotasavalta",
                "common": "Nepal"
            },
            "est": {
                "official": "Nepali Demokraatlik Liitvabariik",
                "common": "Nepal"
            },
            "zho": {
                "official": "尼泊尔联邦民主共和国",
                "common": "尼泊尔"
            },
            "pol": {
                "official": "Federalna Demokratyczna Republika Nepalu",
                "common": "Nepal"
            }
        },
        "latlng": [
            28,
            84
        ],
        "demonym": "Nepalese",
        "landlocked": true,
        "borders": [
            "CHN",
            "IND"
        ],
        "area": 147181,
        "flag": "🇳🇵"
    },
    {
        "name": {
            "common": "Nauru",
            "official": "Republic of Nauru",
            "native": {
                "eng": {
                    "official": "Republic of Nauru",
                    "common": "Nauru"
                },
                "nau": {
                    "official": "Republic of Nauru",
                    "common": "Nauru"
                }
            }
        },
        "tld": [
            ".nr"
        ],
        "cca2": "NR",
        "ccn3": "520",
        "cca3": "NRU",
        "cioc": "NRU",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [
            "674"
        ],
        "capital": [
            "Yaren"
        ],
        "altSpellings": [
            "NR",
            "Naoero",
            "Pleasant Island",
            "Republic of Nauru",
            "Ripublik Naoero"
        ],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "nau": "Nauru"
        },
        "translations": {
            "ces": {
                "official": "Republika Nauru",
                "common": "Nauru"
            },
            "deu": {
                "official": "Republik Nauru",
                "common": "Nauru"
            },
            "fra": {
                "official": "République de Nauru",
                "common": "Nauru"
            },
            "hrv": {
                "official": "Republika Nauru",
                "common": "Nauru"
            },
            "ita": {
                "official": "Repubblica di Nauru",
                "common": "Nauru"
            },
            "jpn": {
                "official": "ナウル共和国",
                "common": "ナウル"
            },
            "nld": {
                "official": "Republiek Nauru",
                "common": "Nauru"
            },
            "por": {
                "official": "República de Nauru",
                "common": "Nauru"
            },
            "rus": {
                "official": "Республика Науру",
                "common": "Науру"
            },
            "slk": {
                "official": "Naurská republika",
                "common": "Nauru"
            },
            "spa": {
                "official": "República de Nauru",
                "common": "Nauru"
            },
            "fin": {
                "official": "Naurun tasavalta",
                "common": "Nauru"
            },
            "est": {
                "official": "Nauru Vabariik",
                "common": "Nauru"
            },
            "zho": {
                "official": "瑙鲁共和国",
                "common": "瑙鲁"
            },
            "pol": {
                "official": "Republika Nauru",
                "common": "Nauru"
            }
        },
        "latlng": [
            -0.53333333,
            166.91666666
        ],
        "demonym": "Nauruan",
        "landlocked": false,
        "borders": [],
        "area": 21,
        "flag": "🇳🇷"
    },
    {
        "name": {
            "common": "New Zealand",
            "official": "New Zealand",
            "native": {
                "eng": {
                    "official": "New Zealand",
                    "common": "New Zealand"
                },
                "mri": {
                    "official": "Aotearoa",
                    "common": "Aotearoa"
                },
                "nzs": {
                    "official": "New Zealand",
                    "common": "New Zealand"
                }
            }
        },
        "tld": [
            ".nz"
        ],
        "cca2": "NZ",
        "ccn3": "554",
        "cca3": "NZL",
        "cioc": "NZL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "NZD"
        ],
        "callingCode": [
            "64"
        ],
        "capital": [
            "Wellington"
        ],
        "altSpellings": [
            "NZ",
            "Aotearoa"
        ],
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "languages": {
            "eng": "English",
            "mri": "Māori",
            "nzs": "New Zealand Sign Language"
        },
        "translations": {
            "ces": {
                "official": "Nový Zéland",
                "common": "Nový Zéland"
            },
            "deu": {
                "official": "Neuseeland",
                "common": "Neuseeland"
            },
            "fra": {
                "official": "Nouvelle-Zélande",
                "common": "Nouvelle-Zélande"
            },
            "hrv": {
                "official": "Novi Zeland",
                "common": "Novi Zeland"
            },
            "ita": {
                "official": "Nuova Zelanda",
                "common": "Nuova Zelanda"
            },
            "jpn": {
                "official": "ニュージーランド",
                "common": "ニュージーランド"
            },
            "nld": {
                "official": "Nieuw Zeeland",
                "common": "Nieuw-Zeeland"
            },
            "por": {
                "official": "nova Zelândia",
                "common": "Nova Zelândia"
            },
            "rus": {
                "official": "Новая Зеландия",
                "common": "Новая Зеландия"
            },
            "slk": {
                "official": "Nový Zéland",
                "common": "Nový Zéland"
            },
            "spa": {
                "official": "nueva Zelanda",
                "common": "Nueva Zelanda"
            },
            "fin": {
                "official": "Uusi-Seelanti",
                "common": "Uusi-Seelanti"
            },
            "est": {
                "official": "Uus-Meremaa",
                "common": "Uus-Meremaa"
            },
            "zho": {
                "official": "新西兰",
                "common": "新西兰"
            },
            "pol": {
                "official": "Nowa Zelandia",
                "common": "Nowa Zelandia"
            }
        },
        "latlng": [
            -41,
            174
        ],
        "demonym": "New Zealander",
        "landlocked": false,
        "borders": [],
        "area": 270467,
        "flag": "🇳🇿"
    },
    {
        "name": {
            "common": "Oman",
            "official": "Sultanate of Oman",
            "native": {
                "ara": {
                    "official": "سلطنة عمان",
                    "common": "عمان"
                }
            }
        },
        "tld": [
            ".om"
        ],
        "cca2": "OM",
        "ccn3": "512",
        "cca3": "OMN",
        "cioc": "OMA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "OMR"
        ],
        "callingCode": [
            "968"
        ],
        "capital": [
            "Muscat"
        ],
        "altSpellings": [
            "OM",
            "Sultanate of Oman",
            "Salṭanat ʻUmān"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Sultanát Omán",
                "common": "Omán"
            },
            "deu": {
                "official": "Sultanat Oman",
                "common": "Oman"
            },
            "fra": {
                "official": "Sultanat d'Oman",
                "common": "Oman"
            },
            "hrv": {
                "official": "Sultanat Oman",
                "common": "Oman"
            },
            "ita": {
                "official": "Sultanato dell'Oman",
                "common": "oman"
            },
            "jpn": {
                "official": "オマーン·スルタン国",
                "common": "オマーン"
            },
            "nld": {
                "official": "Sultanaat van Oman",
                "common": "Oman"
            },
            "por": {
                "official": "Sultanato de Omã",
                "common": "Omã"
            },
            "rus": {
                "official": "Султанат Оман",
                "common": "Оман"
            },
            "slk": {
                "official": "Ománsky sultanát",
                "common": "Omán"
            },
            "spa": {
                "official": "Sultanato de Omán",
                "common": "Omán"
            },
            "fin": {
                "official": "Omanin sulttaanikunta",
                "common": "Oman"
            },
            "est": {
                "official": "Omaani Sultaniriik",
                "common": "Omaan"
            },
            "zho": {
                "official": "阿曼苏丹国",
                "common": "阿曼"
            },
            "pol": {
                "official": "Sułtanat Omanu",
                "common": "Oman"
            }
        },
        "latlng": [
            21,
            57
        ],
        "demonym": "Omani",
        "landlocked": false,
        "borders": [
            "SAU",
            "ARE",
            "YEM"
        ],
        "area": 309500,
        "flag": "🇴🇲"
    },
    {
        "name": {
            "common": "Pakistan",
            "official": "Islamic Republic of Pakistan",
            "native": {
                "eng": {
                    "official": "Islamic Republic of Pakistan",
                    "common": "Pakistan"
                },
                "urd": {
                    "official": "اسلامی جمہوریۂ پاكستان",
                    "common": "پاكستان"
                }
            }
        },
        "tld": [
            ".pk"
        ],
        "cca2": "PK",
        "ccn3": "586",
        "cca3": "PAK",
        "cioc": "PAK",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "PKR"
        ],
        "callingCode": [
            "92"
        ],
        "capital": [
            "Islamabad"
        ],
        "altSpellings": [
            "PK",
            "Pākistān",
            "Islamic Republic of Pakistan",
            "Islāmī Jumhūriya'eh Pākistān"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "eng": "English",
            "urd": "Urdu"
        },
        "translations": {
            "ces": {
                "official": "Pákistánská islámská republika",
                "common": "Pákistán"
            },
            "deu": {
                "official": "Islamische Republik Pakistan",
                "common": "Pakistan"
            },
            "fra": {
                "official": "République islamique du Pakistan",
                "common": "Pakistan"
            },
            "hrv": {
                "official": "Islamska Republika Pakistan",
                "common": "Pakistan"
            },
            "ita": {
                "official": "Repubblica islamica del Pakistan",
                "common": "Pakistan"
            },
            "jpn": {
                "official": "パキスタン",
                "common": "パキスタン"
            },
            "nld": {
                "official": "Islamitische Republiek Pakistan",
                "common": "Pakistan"
            },
            "por": {
                "official": "República Islâmica do Paquistão",
                "common": "Paquistão"
            },
            "rus": {
                "official": "Исламская Республика Пакистан",
                "common": "Пакистан"
            },
            "slk": {
                "official": "Pakistanská islamská republika",
                "common": "Pakistan"
            },
            "spa": {
                "official": "República Islámica de Pakistán",
                "common": "Pakistán"
            },
            "fin": {
                "official": "Pakistanin islamilainen tasavalta",
                "common": "Pakistan"
            },
            "est": {
                "official": "Pakistani Islamivabariik",
                "common": "Pakistan"
            },
            "zho": {
                "official": "巴基斯坦伊斯兰共和国",
                "common": "巴基斯坦"
            },
            "pol": {
                "official": "Islamska Republika Pakistanu",
                "common": "Pakistan"
            }
        },
        "latlng": [
            30,
            70
        ],
        "demonym": "Pakistani",
        "landlocked": false,
        "borders": [
            "AFG",
            "CHN",
            "IND",
            "IRN"
        ],
        "area": 881912,
        "flag": "🇵🇰"
    },
    {
        "name": {
            "common": "Panama",
            "official": "Republic of Panama",
            "native": {
                "spa": {
                    "official": "República de Panamá",
                    "common": "Panamá"
                }
            }
        },
        "tld": [
            ".pa"
        ],
        "cca2": "PA",
        "ccn3": "591",
        "cca3": "PAN",
        "cioc": "PAN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "PAB",
            "USD"
        ],
        "callingCode": [
            "507"
        ],
        "capital": [
            "Panama City"
        ],
        "altSpellings": [
            "PA",
            "Republic of Panama",
            "República de Panamá"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Panamská republika",
                "common": "Panama"
            },
            "deu": {
                "official": "Republik Panama",
                "common": "Panama"
            },
            "fra": {
                "official": "République du Panama",
                "common": "Panama"
            },
            "hrv": {
                "official": "Republika Panama",
                "common": "Panama"
            },
            "ita": {
                "official": "Repubblica di Panama",
                "common": "Panama"
            },
            "jpn": {
                "official": "パナマ共和国",
                "common": "パナマ"
            },
            "nld": {
                "official": "Republiek Panama",
                "common": "Panama"
            },
            "por": {
                "official": "República do Panamá",
                "common": "Panamá"
            },
            "rus": {
                "official": "Республика Панама",
                "common": "Панама"
            },
            "slk": {
                "official": "Panamská republika",
                "common": "Panama"
            },
            "spa": {
                "official": "República de Panamá",
                "common": "Panamá"
            },
            "fin": {
                "official": "Panaman tasavalta",
                "common": "Panama"
            },
            "est": {
                "official": "Panama Vabariik",
                "common": "Panama"
            },
            "zho": {
                "official": "巴拿马共和国",
                "common": "巴拿马"
            },
            "pol": {
                "official": "Republika Panamy",
                "common": "Panama"
            }
        },
        "latlng": [
            9,
            -80
        ],
        "demonym": "Panamanian",
        "landlocked": false,
        "borders": [
            "COL",
            "CRI"
        ],
        "area": 75417,
        "flag": "🇵🇦"
    },
    {
        "name": {
            "common": "Pitcairn Islands",
            "official": "Pitcairn Group of Islands",
            "native": {
                "eng": {
                    "official": "Pitcairn Group of Islands",
                    "common": "Pitcairn Islands"
                }
            }
        },
        "tld": [
            ".pn"
        ],
        "cca2": "PN",
        "ccn3": "612",
        "cca3": "PCN",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "NZD"
        ],
        "callingCode": [
            "64"
        ],
        "capital": [
            "Adamstown"
        ],
        "altSpellings": [
            "PN",
            "Pitcairn",
            "Pitcairn Henderson Ducie and Oeno Islands"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Pitcairnovy ostrovy",
                "common": "Pitcairnovy ostrovy"
            },
            "deu": {
                "official": "Pitcairninseln",
                "common": "Pitcairninseln"
            },
            "fra": {
                "official": "Groupe d'îles Pitcairn",
                "common": "Îles Pitcairn"
            },
            "hrv": {
                "official": "Pitcairn skupine otoka",
                "common": "Pitcairnovo otočje"
            },
            "ita": {
                "official": "Pitcairn gruppo di isole",
                "common": "Isole Pitcairn"
            },
            "jpn": {
                "official": "島のピトケアングループ",
                "common": "ピトケアン"
            },
            "nld": {
                "official": "Pitcairn groep eilanden",
                "common": "Pitcairneilanden"
            },
            "por": {
                "official": "Pitcairn grupo de ilhas",
                "common": "Ilhas Pitcairn"
            },
            "rus": {
                "official": "Питкэрн группа островов",
                "common": "Острова Питкэрн"
            },
            "slk": {
                "official": "Pitcairnove ostrovy",
                "common": "Pitcairnove ostrovy"
            },
            "spa": {
                "official": "Grupo de Islas Pitcairn",
                "common": "Islas Pitcairn"
            },
            "fin": {
                "official": "Pitcairn",
                "common": "Pitcairn"
            },
            "est": {
                "official": "Pitcairni, Hendersoni, Ducie ja Oeno saar",
                "common": "Pitcairn"
            },
            "zho": {
                "official": "皮特凯恩群岛",
                "common": "皮特凯恩群岛"
            },
            "pol": {
                "official": "Wyspy Pitcairn, Henderson, Ducie i Oeno",
                "common": "Pitcairn"
            }
        },
        "latlng": [
            -25.06666666,
            -130.1
        ],
        "demonym": "Pitcairn Islander",
        "landlocked": false,
        "borders": [],
        "area": 47,
        "flag": "🇵🇳"
    },
    {
        "name": {
            "common": "Peru",
            "official": "Republic of Peru",
            "native": {
                "aym": {
                    "official": "Piruw Suyu",
                    "common": "Piruw"
                },
                "que": {
                    "official": "Piruw Ripuwlika",
                    "common": "Piruw"
                },
                "spa": {
                    "official": "República del Perú",
                    "common": "Perú"
                }
            }
        },
        "tld": [
            ".pe"
        ],
        "cca2": "PE",
        "ccn3": "604",
        "cca3": "PER",
        "cioc": "PER",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "PEN"
        ],
        "callingCode": [
            "51"
        ],
        "capital": [
            "Lima"
        ],
        "altSpellings": [
            "PE",
            "Republic of Peru",
            "República del Perú"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "aym": "Aymara",
            "que": "Quechua",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Peruánská republika",
                "common": "Peru"
            },
            "deu": {
                "official": "Republik Peru",
                "common": "Peru"
            },
            "fra": {
                "official": "République du Pérou",
                "common": "Pérou"
            },
            "hrv": {
                "official": "Republika Peru",
                "common": "Peru"
            },
            "ita": {
                "official": "Repubblica del Perù",
                "common": "Perù"
            },
            "jpn": {
                "official": "ペルー共和国",
                "common": "ペルー"
            },
            "nld": {
                "official": "Republiek Peru",
                "common": "Peru"
            },
            "por": {
                "official": "República do Peru",
                "common": "Perú"
            },
            "rus": {
                "official": "Республика Перу",
                "common": "Перу"
            },
            "slk": {
                "official": "Peruánska republika",
                "common": "Peru"
            },
            "spa": {
                "official": "República de Perú",
                "common": "Perú"
            },
            "fin": {
                "official": "Perun tasavalta",
                "common": "Peru"
            },
            "est": {
                "official": "Peruu Vabariik",
                "common": "Peruu"
            },
            "zho": {
                "official": "秘鲁共和国",
                "common": "秘鲁"
            },
            "pol": {
                "official": "Republika Peru",
                "common": "Peru"
            }
        },
        "latlng": [
            -10,
            -76
        ],
        "demonym": "Peruvian",
        "landlocked": false,
        "borders": [
            "BOL",
            "BRA",
            "CHL",
            "COL",
            "ECU"
        ],
        "area": 1285216,
        "flag": "🇵🇪"
    },
    {
        "name": {
            "common": "Philippines",
            "official": "Republic of the Philippines",
            "native": {
                "eng": {
                    "official": "Republic of the Philippines",
                    "common": "Philippines"
                },
                "fil": {
                    "official": "Republic of the Philippines",
                    "common": "Pilipinas"
                }
            }
        },
        "tld": [
            ".ph"
        ],
        "cca2": "PH",
        "ccn3": "608",
        "cca3": "PHL",
        "cioc": "PHI",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "PHP"
        ],
        "callingCode": [
            "63"
        ],
        "capital": [
            "Manila"
        ],
        "altSpellings": [
            "PH",
            "Republic of the Philippines",
            "Repúblika ng Pilipinas"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "eng": "English",
            "fil": "Filipino"
        },
        "translations": {
            "ces": {
                "official": "Filipínská republika",
                "common": "Filipíny"
            },
            "deu": {
                "official": "Republik der Philippinen",
                "common": "Philippinen"
            },
            "fra": {
                "official": "République des Philippines",
                "common": "Philippines"
            },
            "hrv": {
                "official": "Republika Filipini",
                "common": "Filipini"
            },
            "ita": {
                "official": "Repubblica delle Filippine",
                "common": "Filippine"
            },
            "jpn": {
                "official": "フィリピン共和国",
                "common": "フィリピン"
            },
            "nld": {
                "official": "Republiek der Filipijnen",
                "common": "Filipijnen"
            },
            "por": {
                "official": "República das Filipinas",
                "common": "Filipinas"
            },
            "rus": {
                "official": "Республика Филиппины",
                "common": "Филиппины"
            },
            "slk": {
                "official": "Filipínska republika",
                "common": "Filipíny"
            },
            "spa": {
                "official": "República de las Filipinas",
                "common": "Filipinas"
            },
            "fin": {
                "official": "Filippiinien tasavalta",
                "common": "Filippiinit"
            },
            "est": {
                "official": "Filipiini Vabariik",
                "common": "Filipiinid"
            },
            "zho": {
                "official": "菲律宾共和国",
                "common": "菲律宾"
            },
            "pol": {
                "official": "Republika Filipin",
                "common": "Filipiny"
            }
        },
        "latlng": [
            13,
            122
        ],
        "demonym": "Filipino",
        "landlocked": false,
        "borders": [],
        "area": 342353,
        "flag": "🇵🇭"
    },
    {
        "name": {
            "common": "Palau",
            "official": "Republic of Palau",
            "native": {
                "eng": {
                    "official": "Republic of Palau",
                    "common": "Palau"
                },
                "pau": {
                    "official": "Beluu er a Belau",
                    "common": "Belau"
                }
            }
        },
        "tld": [
            ".pw"
        ],
        "cca2": "PW",
        "ccn3": "585",
        "cca3": "PLW",
        "cioc": "PLW",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "680"
        ],
        "capital": [
            "Ngerulmud"
        ],
        "altSpellings": [
            "PW",
            "Republic of Palau",
            "Beluu er a Belau"
        ],
        "region": "Oceania",
        "subregion": "Micronesia",
        "languages": {
            "eng": "English",
            "pau": "Palauan"
        },
        "translations": {
            "ces": {
                "official": "Republika Palau",
                "common": "Palau"
            },
            "deu": {
                "official": "Republik Palau",
                "common": "Palau"
            },
            "fra": {
                "official": "République des Palaos (Palau)",
                "common": "Palaos (Palau)"
            },
            "hrv": {
                "official": "Republika Palau",
                "common": "Palau"
            },
            "ita": {
                "official": "Repubblica di Palau",
                "common": "Palau"
            },
            "jpn": {
                "official": "パラオ共和国",
                "common": "パラオ"
            },
            "nld": {
                "official": "Republiek van Palau",
                "common": "Palau"
            },
            "por": {
                "official": "República de Palau",
                "common": "Palau"
            },
            "rus": {
                "official": "Республика Палау",
                "common": "Палау"
            },
            "slk": {
                "official": "Palauská republika",
                "common": "Palau"
            },
            "spa": {
                "official": "República de Palau",
                "common": "Palau"
            },
            "fin": {
                "official": "Palaun tasavalta",
                "common": "Palau"
            },
            "est": {
                "official": "Belau Vabariik",
                "common": "Belau"
            },
            "zho": {
                "official": "帕劳共和国",
                "common": "帕劳"
            },
            "pol": {
                "official": "Republika Palau",
                "common": "Palau"
            }
        },
        "latlng": [
            7.5,
            134.5
        ],
        "demonym": "Palauan",
        "landlocked": false,
        "borders": [],
        "area": 459,
        "flag": "🇵🇼"
    },
    {
        "name": {
            "common": "Papua New Guinea",
            "official": "Independent State of Papua New Guinea",
            "native": {
                "eng": {
                    "official": "Independent State of Papua New Guinea",
                    "common": "Papua New Guinea"
                },
                "hmo": {
                    "official": "Independen Stet bilong Papua Niugini",
                    "common": "Papua Niu Gini"
                },
                "tpi": {
                    "official": "Independen Stet bilong Papua Niugini",
                    "common": "Papua Niugini"
                }
            }
        },
        "tld": [
            ".pg"
        ],
        "cca2": "PG",
        "ccn3": "598",
        "cca3": "PNG",
        "cioc": "PNG",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "PGK"
        ],
        "callingCode": [
            "675"
        ],
        "capital": [
            "Port Moresby"
        ],
        "altSpellings": [
            "PG",
            "Independent State of Papua New Guinea",
            "Independen Stet bilong Papua Niugini"
        ],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "eng": "English",
            "hmo": "Hiri Motu",
            "tpi": "Tok Pisin"
        },
        "translations": {
            "ces": {
                "official": "Nezávislý stát Papua Nová Guinea",
                "common": "Papua-Nová Guinea"
            },
            "deu": {
                "official": "Unabhängiger Staat Papua-Neuguinea",
                "common": "Papua-Neuguinea"
            },
            "fra": {
                "official": "État indépendant de Papouasie-Nouvelle-Guinée",
                "common": "Papouasie-Nouvelle-Guinée"
            },
            "hrv": {
                "official": "Nezavisna Država Papui Novoj Gvineji",
                "common": "Papua Nova Gvineja"
            },
            "ita": {
                "official": "Stato indipendente di Papua Nuova Guinea",
                "common": "Papua Nuova Guinea"
            },
            "jpn": {
                "official": "パプアニューギニア独立国",
                "common": "パプアニューギニア"
            },
            "nld": {
                "official": "Onafhankelijke Staat Papoea -Nieuw-Guinea",
                "common": "Papoea-Nieuw-Guinea"
            },
            "por": {
                "official": "Estado Independente da Papua Nova Guiné",
                "common": "Papua Nova Guiné"
            },
            "rus": {
                "official": "Независимое Государство Папуа-Новой Гвинеи",
                "common": "Папуа — Новая Гвинея"
            },
            "slk": {
                "official": "Nezávislý štát Papua-Nová Guinea",
                "common": "Papua-Nová Guinea"
            },
            "spa": {
                "official": "Estado Independiente de Papúa Nueva Guinea",
                "common": "Papúa Nueva Guinea"
            },
            "fin": {
                "official": "Papua-Uuden-Guinean Itsenäinen valtio",
                "common": "Papua-Uusi-Guinea"
            },
            "est": {
                "official": "Paapua Uus-Guinea Iseseisvusriik",
                "common": "Paapua Uus-Guinea"
            },
            "zho": {
                "official": "巴布亚新几内亚",
                "common": "巴布亚新几内亚"
            },
            "pol": {
                "official": "Niezależne Państwo Papui-Nowej Gwinei",
                "common": "Papua-Nowa Gwinea"
            }
        },
        "latlng": [
            -6,
            147
        ],
        "demonym": "Papua New Guinean",
        "landlocked": false,
        "borders": [
            "IDN"
        ],
        "area": 462840,
        "flag": "🇵🇬"
    },
    {
        "name": {
            "common": "Poland",
            "official": "Republic of Poland",
            "native": {
                "pol": {
                    "official": "Rzeczpospolita Polska",
                    "common": "Polska"
                }
            }
        },
        "tld": [
            ".pl"
        ],
        "cca2": "PL",
        "ccn3": "616",
        "cca3": "POL",
        "cioc": "POL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "PLN"
        ],
        "callingCode": [
            "48"
        ],
        "capital": [
            "Warsaw"
        ],
        "altSpellings": [
            "PL",
            "Republic of Poland",
            "Rzeczpospolita Polska"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "pol": "Polish"
        },
        "translations": {
            "ces": {
                "official": "Polská republika",
                "common": "Polsko"
            },
            "deu": {
                "official": "Republik Polen",
                "common": "Polen"
            },
            "fra": {
                "official": "République de Pologne",
                "common": "Pologne"
            },
            "hrv": {
                "official": "Republika Poljska",
                "common": "Poljska"
            },
            "ita": {
                "official": "Repubblica di Polonia",
                "common": "Polonia"
            },
            "jpn": {
                "official": "ポーランド共和国",
                "common": "ポーランド"
            },
            "nld": {
                "official": "Republiek Polen",
                "common": "Polen"
            },
            "por": {
                "official": "República da Polónia",
                "common": "Polónia"
            },
            "rus": {
                "official": "Республика Польша",
                "common": "Польша"
            },
            "slk": {
                "official": "Poľská republika",
                "common": "Poľsko"
            },
            "spa": {
                "official": "República de Polonia",
                "common": "Polonia"
            },
            "fin": {
                "official": "Puolan tasavalta",
                "common": "Puola"
            },
            "est": {
                "official": "Poola Vabariik",
                "common": "Poola"
            },
            "zho": {
                "official": "波兰共和国",
                "common": "波兰"
            },
            "pol": {
                "official": "Rzeczpospolita Polska",
                "common": "Polska"
            }
        },
        "latlng": [
            52,
            20
        ],
        "demonym": "Polish",
        "landlocked": false,
        "borders": [
            "BLR",
            "CZE",
            "DEU",
            "LTU",
            "RUS",
            "SVK",
            "UKR"
        ],
        "area": 312679,
        "flag": "🇵🇱"
    },
    {
        "name": {
            "common": "Puerto Rico",
            "official": "Commonwealth of Puerto Rico",
            "native": {
                "eng": {
                    "official": "Commonwealth of Puerto Rico",
                    "common": "Puerto Rico"
                },
                "spa": {
                    "official": "Estado Libre Asociado de Puerto Rico",
                    "common": "Puerto Rico"
                }
            }
        },
        "tld": [
            ".pr"
        ],
        "cca2": "PR",
        "ccn3": "630",
        "cca3": "PRI",
        "cioc": "PUR",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1787",
            "1939"
        ],
        "capital": [
            "San Juan"
        ],
        "altSpellings": [
            "PR",
            "Commonwealth of Puerto Rico",
            "Estado Libre Asociado de Puerto Rico"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Portoriko",
                "common": "Portoriko"
            },
            "deu": {
                "official": "Freistaat Puerto Rico",
                "common": "Puerto Rico"
            },
            "fra": {
                "official": "Porto Rico",
                "common": "Porto Rico"
            },
            "hrv": {
                "official": "Zajednica Puerto Rico",
                "common": "Portoriko"
            },
            "ita": {
                "official": "Commonwealth di Porto Rico",
                "common": "Porto Rico"
            },
            "jpn": {
                "official": "プエルトリコのコモンウェルス",
                "common": "プエルトリコ"
            },
            "nld": {
                "official": "Gemenebest van Puerto Rico",
                "common": "Puerto Rico"
            },
            "por": {
                "official": "Commonwealth of Puerto Rico",
                "common": "Porto Rico"
            },
            "rus": {
                "official": "Содружество Пуэрто-Рико",
                "common": "Пуэрто-Рико"
            },
            "slk": {
                "official": "Portorické spoločenstvo",
                "common": "Portoriko"
            },
            "spa": {
                "official": "Asociado de Puerto Rico",
                "common": "Puerto Rico"
            },
            "fin": {
                "official": "Puerto Rico",
                "common": "Puerto Rico"
            },
            "est": {
                "official": "Puerto Rico Ühendus",
                "common": "Puerto Rico"
            },
            "zho": {
                "official": "波多黎各联邦",
                "common": "波多黎各"
            },
            "pol": {
                "official": "Wolne Stowarzyszone Państwo Portoryko",
                "common": "Portoryko"
            }
        },
        "latlng": [
            18.25,
            -66.5
        ],
        "demonym": "Puerto Rican",
        "landlocked": false,
        "borders": [],
        "area": 8870,
        "flag": "🇵🇷"
    },
    {
        "name": {
            "common": "North Korea",
            "official": "Democratic People's Republic of Korea",
            "native": {
                "kor": {
                    "official": "조선 민주주의 인민 공화국",
                    "common": "북한"
                }
            }
        },
        "tld": [
            ".kp"
        ],
        "cca2": "KP",
        "ccn3": "408",
        "cca3": "PRK",
        "cioc": "PRK",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "KPW"
        ],
        "callingCode": [
            "850"
        ],
        "capital": [
            "Pyongyang"
        ],
        "altSpellings": [
            "KP",
            "Democratic People's Republic of Korea",
            "조선민주주의인민공화국",
            "Chosŏn Minjujuŭi Inmin Konghwaguk",
            "Korea, Democratic People's Republic of"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "kor": "Korean"
        },
        "translations": {
            "ces": {
                "official": "Korejská lidově demokratická republika",
                "common": "Severní Korea"
            },
            "deu": {
                "official": "Demokratische Volksrepublik Korea",
                "common": "Nordkorea"
            },
            "fra": {
                "official": "République populaire démocratique de Corée",
                "common": "Corée du Nord"
            },
            "hrv": {
                "official": "Demokratska Narodna Republika Koreja",
                "common": "Sjeverna Koreja"
            },
            "ita": {
                "official": "Repubblica democratica popolare di Corea",
                "common": "Corea del Nord"
            },
            "jpn": {
                "official": "朝鮮民主主義人民共和国",
                "common": "朝鮮民主主義人民共和国"
            },
            "nld": {
                "official": "Democratische Volksrepubliek Korea",
                "common": "Noord-Korea"
            },
            "por": {
                "official": "República Popular Democrática da Coreia",
                "common": "Coreia do Norte"
            },
            "rus": {
                "official": "Корейская Народно-Демократическая Республика Корея",
                "common": "Северная Корея"
            },
            "slk": {
                "official": "Kórejská ľudovodemokratická republika",
                "common": "Kórejská ľudovodemokratická republika (KĽR, Severná Kórea)"
            },
            "spa": {
                "official": "República Popular Democrática de Corea",
                "common": "Corea del Norte"
            },
            "fin": {
                "official": "Korean demokraattinen kansantasavalta",
                "common": "Pohjois-Korea"
            },
            "est": {
                "official": "Korea Rahvademokraatlik Vabariik",
                "common": "Põhja-Korea"
            },
            "zho": {
                "official": "朝鲜人民民主共和国",
                "common": "朝鲜"
            },
            "pol": {
                "official": "Koreańska Republika Ludowo-Demokratyczna",
                "common": "Korea Północna"
            }
        },
        "latlng": [
            40,
            127
        ],
        "demonym": "North Korean",
        "landlocked": false,
        "borders": [
            "CHN",
            "KOR",
            "RUS"
        ],
        "area": 120538,
        "flag": "🇰🇵"
    },
    {
        "name": {
            "common": "Portugal",
            "official": "Portuguese Republic",
            "native": {
                "por": {
                    "official": "República português",
                    "common": "Portugal"
                }
            }
        },
        "tld": [
            ".pt"
        ],
        "cca2": "PT",
        "ccn3": "620",
        "cca3": "PRT",
        "cioc": "POR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "351"
        ],
        "capital": [
            "Lisbon"
        ],
        "altSpellings": [
            "PT",
            "Portuguesa",
            "Portuguese Republic",
            "República Portuguesa"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "ces": {
                "official": "Portugalská republika",
                "common": "Portugalsko"
            },
            "deu": {
                "official": "Portugiesische Republik",
                "common": "Portugal"
            },
            "fra": {
                "official": "République portugaise",
                "common": "Portugal"
            },
            "hrv": {
                "official": "Portugalska Republika",
                "common": "Portugal"
            },
            "ita": {
                "official": "Repubblica portoghese",
                "common": "Portogallo"
            },
            "jpn": {
                "official": "ポルトガル共和国",
                "common": "ポルトガル"
            },
            "nld": {
                "official": "Portugese Republiek",
                "common": "Portugal"
            },
            "por": {
                "official": "República português",
                "common": "Portugal"
            },
            "rus": {
                "official": "Португальская Республика",
                "common": "Португалия"
            },
            "slk": {
                "official": "Portugalská republika",
                "common": "Portugalsko"
            },
            "spa": {
                "official": "República Portuguesa",
                "common": "Portugal"
            },
            "fin": {
                "official": "Portugalin tasavalta",
                "common": "Portugali"
            },
            "est": {
                "official": "Portugali Vabariik",
                "common": "Portugal"
            },
            "zho": {
                "official": "葡萄牙共和国",
                "common": "葡萄牙"
            },
            "pol": {
                "official": "Republika Portugalska",
                "common": "Portugalia"
            }
        },
        "latlng": [
            39.5,
            -8
        ],
        "demonym": "Portuguese",
        "landlocked": false,
        "borders": [
            "ESP"
        ],
        "area": 92090,
        "flag": "🇵🇹"
    },
    {
        "name": {
            "common": "Paraguay",
            "official": "Republic of Paraguay",
            "native": {
                "grn": {
                    "official": "Tetã Paraguái",
                    "common": "Paraguái"
                },
                "spa": {
                    "official": "República de Paraguay",
                    "common": "Paraguay"
                }
            }
        },
        "tld": [
            ".py"
        ],
        "cca2": "PY",
        "ccn3": "600",
        "cca3": "PRY",
        "cioc": "PAR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "PYG"
        ],
        "callingCode": [
            "595"
        ],
        "capital": [
            "Asunción"
        ],
        "altSpellings": [
            "PY",
            "Republic of Paraguay",
            "República del Paraguay",
            "Tetã Paraguái"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "grn": "Guaraní",
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Paraguayská republika",
                "common": "Paraguay"
            },
            "deu": {
                "official": "Republik Paraguay",
                "common": "Paraguay"
            },
            "fra": {
                "official": "République du Paraguay",
                "common": "Paraguay"
            },
            "hrv": {
                "official": "Republika Paragvaj",
                "common": "Paragvaj"
            },
            "ita": {
                "official": "Repubblica del Paraguay",
                "common": "Paraguay"
            },
            "jpn": {
                "official": "パラグアイ共和国",
                "common": "パラグアイ"
            },
            "nld": {
                "official": "Republiek Paraguay",
                "common": "Paraguay"
            },
            "por": {
                "official": "República do Paraguai",
                "common": "Paraguai"
            },
            "rus": {
                "official": "Республика Парагвай",
                "common": "Парагвай"
            },
            "slk": {
                "official": "Paraguajská republika",
                "common": "Paraguaj"
            },
            "spa": {
                "official": "República de Paraguay",
                "common": "Paraguay"
            },
            "fin": {
                "official": "Paraguayn tasavalta",
                "common": "Paraguay"
            },
            "est": {
                "official": "Paraguay Vabariik",
                "common": "Paraguay"
            },
            "zho": {
                "official": "巴拉圭共和国",
                "common": "巴拉圭"
            },
            "pol": {
                "official": "Republika Paragwaju",
                "common": "Paragwaj"
            }
        },
        "latlng": [
            -23,
            -58
        ],
        "demonym": "Paraguayan",
        "landlocked": true,
        "borders": [
            "ARG",
            "BOL",
            "BRA"
        ],
        "area": 406752,
        "flag": "🇵🇾"
    },
    {
        "name": {
            "common": "Palestine",
            "official": "State of Palestine",
            "native": {
                "ara": {
                    "official": "دولة فلسطين",
                    "common": "فلسطين"
                }
            }
        },
        "tld": [
            ".ps",
            "فلسطين."
        ],
        "cca2": "PS",
        "ccn3": "275",
        "cca3": "PSE",
        "cioc": "PLE",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "ILS"
        ],
        "callingCode": [
            "970"
        ],
        "capital": [
            "Ramallah"
        ],
        "altSpellings": [
            "PS",
            "Palestine, State of",
            "State of Palestine",
            "Dawlat Filasṭin"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Stát Palestina",
                "common": "Palestina"
            },
            "deu": {
                "official": "Staat Palästina",
                "common": "Palästina"
            },
            "fra": {
                "official": "État de Palestine",
                "common": "Palestine"
            },
            "hrv": {
                "official": "State of Palestine",
                "common": "Palestina"
            },
            "ita": {
                "official": "Stato di Palestina",
                "common": "Palestina"
            },
            "jpn": {
                "official": "パレスチナ自治政府",
                "common": "パレスチナ"
            },
            "nld": {
                "official": "Staat Palestina",
                "common": "Palestijnse gebieden"
            },
            "por": {
                "official": "Estado da Palestina",
                "common": "Palestina"
            },
            "rus": {
                "official": "Государство Палестина",
                "common": "Палестина"
            },
            "slk": {
                "official": "Palestínsky štát",
                "common": "Palestína"
            },
            "spa": {
                "official": "Estado de Palestina",
                "common": "Palestina"
            },
            "fin": {
                "official": "Palestiinan valtio",
                "common": "Palestiina"
            },
            "est": {
                "official": "Palestiina Riik",
                "common": "Palestiina"
            },
            "zho": {
                "official": "巴勒斯坦国",
                "common": "巴勒斯坦"
            },
            "pol": {
                "official": "Państwo Palestyna",
                "common": "Palestyna"
            }
        },
        "latlng": [
            31.9,
            35.2
        ],
        "demonym": "Palestinian",
        "landlocked": false,
        "borders": [
            "ISR",
            "EGY",
            "JOR"
        ],
        "area": 6220,
        "flag": "🇵🇸"
    },
    {
        "name": {
            "common": "French Polynesia",
            "official": "French Polynesia",
            "native": {
                "fra": {
                    "official": "Polynésie française",
                    "common": "Polynésie française"
                }
            }
        },
        "tld": [
            ".pf"
        ],
        "cca2": "PF",
        "ccn3": "258",
        "cca3": "PYF",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "XPF"
        ],
        "callingCode": [
            "689"
        ],
        "capital": [
            "Papeetē"
        ],
        "altSpellings": [
            "PF",
            "Polynésie française",
            "French Polynesia",
            "Pōrīnetia Farāni"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Francouzská Polynésie",
                "common": "Francouzská Polynésie"
            },
            "deu": {
                "official": "Französisch-Polynesien",
                "common": "Französisch-Polynesien"
            },
            "fra": {
                "official": "Polynésie française",
                "common": "Polynésie française"
            },
            "hrv": {
                "official": "Francuska Polinezija",
                "common": "Francuska Polinezija"
            },
            "ita": {
                "official": "Polinesia Francese",
                "common": "Polinesia Francese"
            },
            "jpn": {
                "official": "フランス領ポリネシア",
                "common": "フランス領ポリネシア"
            },
            "nld": {
                "official": "Frans-Polynesië",
                "common": "Frans-Polynesië"
            },
            "por": {
                "official": "Polinésia Francesa",
                "common": "Polinésia Francesa"
            },
            "rus": {
                "official": "Французская Полинезия",
                "common": "Французская Полинезия"
            },
            "slk": {
                "official": "Francúzska Polynézia",
                "common": "Francúzska Polynézia"
            },
            "spa": {
                "official": "Polinesia francés",
                "common": "Polinesia Francesa"
            },
            "fin": {
                "official": "Ranskan Polynesia",
                "common": "Ranskan Polynesia"
            },
            "est": {
                "official": "Prantsuse Polüneesia",
                "common": "Prantsuse Polüneesia"
            },
            "zho": {
                "official": "法属波利尼西亚",
                "common": "法属波利尼西亚"
            },
            "pol": {
                "official": "Polinezja Francuska",
                "common": "Polinezja Francuska"
            }
        },
        "latlng": [
            -15,
            -140
        ],
        "demonym": "French Polynesian",
        "landlocked": false,
        "borders": [],
        "area": 4167,
        "flag": "🇵🇫"
    },
    {
        "name": {
            "common": "Qatar",
            "official": "State of Qatar",
            "native": {
                "ara": {
                    "official": "دولة قطر",
                    "common": "قطر"
                }
            }
        },
        "tld": [
            ".qa",
            "قطر."
        ],
        "cca2": "QA",
        "ccn3": "634",
        "cca3": "QAT",
        "cioc": "QAT",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "QAR"
        ],
        "callingCode": [
            "974"
        ],
        "capital": [
            "Doha"
        ],
        "altSpellings": [
            "QA",
            "State of Qatar",
            "Dawlat Qaṭar"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Stát Katar",
                "common": "Katar"
            },
            "deu": {
                "official": "Staat Katar",
                "common": "Katar"
            },
            "fra": {
                "official": "État du Qatar",
                "common": "Qatar"
            },
            "hrv": {
                "official": "Država Katar",
                "common": "Katar"
            },
            "ita": {
                "official": "Stato del Qatar",
                "common": "Qatar"
            },
            "jpn": {
                "official": "カタール国",
                "common": "カタール"
            },
            "nld": {
                "official": "Staat Qatar",
                "common": "Qatar"
            },
            "por": {
                "official": "Estado do Qatar",
                "common": "Catar"
            },
            "rus": {
                "official": "Государство Катар",
                "common": "Катар"
            },
            "slk": {
                "official": "Katarský štát",
                "common": "Katar"
            },
            "spa": {
                "official": "Estado de Qatar",
                "common": "Catar"
            },
            "fin": {
                "official": "Qatarin valtio",
                "common": "Qatar"
            },
            "est": {
                "official": "Katari Riik",
                "common": "Katar"
            },
            "zho": {
                "official": "卡塔尔国",
                "common": "卡塔尔"
            },
            "pol": {
                "official": "Państwo Katar",
                "common": "Katar"
            }
        },
        "latlng": [
            25.5,
            51.25
        ],
        "demonym": "Qatari",
        "landlocked": false,
        "borders": [
            "SAU"
        ],
        "area": 11586,
        "flag": "🇶🇦"
    },
    {
        "name": {
            "common": "Réunion",
            "official": "Réunion Island",
            "native": {
                "fra": {
                    "official": "Ile de la Réunion",
                    "common": "La Réunion"
                }
            }
        },
        "tld": [
            ".re"
        ],
        "cca2": "RE",
        "ccn3": "638",
        "cca3": "REU",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "262"
        ],
        "capital": [
            "Saint-Denis"
        ],
        "altSpellings": [
            "RE",
            "Reunion"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Réunion",
                "common": "Réunion"
            },
            "deu": {
                "official": "Réunion",
                "common": "Réunion"
            },
            "fra": {
                "official": "Ile de la Réunion",
                "common": "Réunion"
            },
            "hrv": {
                "official": "Réunion Island",
                "common": "Réunion"
            },
            "ita": {
                "official": "Réunion",
                "common": "Riunione"
            },
            "jpn": {
                "official": "レユニオン島",
                "common": "レユニオン"
            },
            "nld": {
                "official": "Réunion",
                "common": "Réunion"
            },
            "por": {
                "official": "Ilha da Reunião",
                "common": "Reunião"
            },
            "rus": {
                "official": "Реюньон",
                "common": "Реюньон"
            },
            "slk": {
                "official": "Réunionský zámorský departmán",
                "common": "Réunion"
            },
            "spa": {
                "official": "Isla de la Reunión",
                "common": "Reunión"
            },
            "fin": {
                "official": "Réunion",
                "common": "Réunion"
            },
            "est": {
                "official": "Réunioni departemang",
                "common": "Réunion"
            },
            "zho": {
                "official": "留尼旺岛",
                "common": "留尼旺岛"
            },
            "pol": {
                "official": "Reunion",
                "common": "Reunion"
            }
        },
        "latlng": [
            -21.15,
            55.5
        ],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 2511,
        "flag": "🇷🇪"
    },
    {
        "name": {
            "common": "Romania",
            "official": "Romania",
            "native": {
                "ron": {
                    "official": "România",
                    "common": "România"
                }
            }
        },
        "tld": [
            ".ro"
        ],
        "cca2": "RO",
        "ccn3": "642",
        "cca3": "ROU",
        "cioc": "ROU",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "RON"
        ],
        "callingCode": [
            "40"
        ],
        "capital": [
            "Bucharest"
        ],
        "altSpellings": [
            "RO",
            "Rumania",
            "Roumania",
            "România"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ron": "Romanian"
        },
        "translations": {
            "ces": {
                "official": "Rumunsko",
                "common": "Rumunsko"
            },
            "deu": {
                "official": "Rumänien",
                "common": "Rumänien"
            },
            "fra": {
                "official": "Roumanie",
                "common": "Roumanie"
            },
            "hrv": {
                "official": "Rumunija",
                "common": "Rumunjska"
            },
            "ita": {
                "official": "Romania",
                "common": "Romania"
            },
            "jpn": {
                "official": "ルーマニア",
                "common": "ルーマニア"
            },
            "nld": {
                "official": "Roemenië",
                "common": "Roemenië"
            },
            "por": {
                "official": "Romênia",
                "common": "Roménia"
            },
            "rus": {
                "official": "Румыния",
                "common": "Румыния"
            },
            "slk": {
                "official": "Rumunsko",
                "common": "Rumunsko"
            },
            "spa": {
                "official": "Rumania",
                "common": "Rumania"
            },
            "fin": {
                "official": "Romania",
                "common": "Romania"
            },
            "est": {
                "official": "Rumeenia",
                "common": "Rumeenia"
            },
            "zho": {
                "official": "罗马尼亚",
                "common": "罗马尼亚"
            },
            "pol": {
                "official": "Rumunia",
                "common": "Rumunia"
            }
        },
        "latlng": [
            46,
            25
        ],
        "demonym": "Romanian",
        "landlocked": false,
        "borders": [
            "BGR",
            "HUN",
            "MDA",
            "SRB",
            "UKR"
        ],
        "area": 238391,
        "flag": "🇷🇴"
    },
    {
        "name": {
            "common": "Russia",
            "official": "Russian Federation",
            "native": {
                "rus": {
                    "official": "Российская Федерация",
                    "common": "Россия"
                }
            }
        },
        "tld": [
            ".ru",
            ".su",
            ".рф"
        ],
        "cca2": "RU",
        "ccn3": "643",
        "cca3": "RUS",
        "cioc": "RUS",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "RUB"
        ],
        "callingCode": [
            "7"
        ],
        "capital": [
            "Moscow"
        ],
        "altSpellings": [
            "RU",
            "Russian Federation",
            "Российская Федерация"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "rus": "Russian"
        },
        "translations": {
            "ces": {
                "official": "Ruská federace",
                "common": "Rusko"
            },
            "deu": {
                "official": "Russische Föderation",
                "common": "Russland"
            },
            "fra": {
                "official": "Fédération de Russie",
                "common": "Russie"
            },
            "hrv": {
                "official": "Ruska Federacija",
                "common": "Rusija"
            },
            "ita": {
                "official": "Federazione russa",
                "common": "Russia"
            },
            "jpn": {
                "official": "ロシア連邦",
                "common": "ロシア連邦"
            },
            "nld": {
                "official": "Russische Federatie",
                "common": "Rusland"
            },
            "por": {
                "official": "Federação Russa",
                "common": "Rússia"
            },
            "rus": {
                "official": "Российская Федерация",
                "common": "Россия"
            },
            "slk": {
                "official": "Ruská federácia",
                "common": "Rusko"
            },
            "spa": {
                "official": "Federación de Rusia",
                "common": "Rusia"
            },
            "fin": {
                "official": "Venäjän federaatio",
                "common": "Venäjä"
            },
            "est": {
                "official": "Venemaa Föderatsioon",
                "common": "Venemaa"
            },
            "zho": {
                "official": "俄罗斯联邦",
                "common": "俄罗斯"
            },
            "pol": {
                "official": "Federacja Rosyjska",
                "common": "Rosja"
            }
        },
        "latlng": [
            60,
            100
        ],
        "demonym": "Russian",
        "landlocked": false,
        "borders": [
            "AZE",
            "BLR",
            "CHN",
            "EST",
            "FIN",
            "GEO",
            "KAZ",
            "PRK",
            "LVA",
            "LTU",
            "MNG",
            "NOR",
            "POL",
            "UKR"
        ],
        "area": 17098242,
        "flag": "🇷🇺"
    },
    {
        "name": {
            "common": "Rwanda",
            "official": "Republic of Rwanda",
            "native": {
                "eng": {
                    "official": "Republic of Rwanda",
                    "common": "Rwanda"
                },
                "fra": {
                    "official": "République rwandaise",
                    "common": "Rwanda"
                },
                "kin": {
                    "official": "Repubulika y'u Rwanda",
                    "common": "Rwanda"
                }
            }
        },
        "tld": [
            ".rw"
        ],
        "cca2": "RW",
        "ccn3": "646",
        "cca3": "RWA",
        "cioc": "RWA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "RWF"
        ],
        "callingCode": [
            "250"
        ],
        "capital": [
            "Kigali"
        ],
        "altSpellings": [
            "RW",
            "Republic of Rwanda",
            "Repubulika y'u Rwanda",
            "République du Rwanda"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "fra": "French",
            "kin": "Kinyarwanda"
        },
        "translations": {
            "ces": {
                "official": "Rwandská republika",
                "common": "Rwanda"
            },
            "deu": {
                "official": "Republik Ruanda",
                "common": "Ruanda"
            },
            "fra": {
                "official": "République rwandaise",
                "common": "Rwanda"
            },
            "hrv": {
                "official": "Republika Ruandi",
                "common": "Ruanda"
            },
            "ita": {
                "official": "Repubblica del Ruanda",
                "common": "Ruanda"
            },
            "jpn": {
                "official": "ルワンダ共和国",
                "common": "ルワンダ"
            },
            "nld": {
                "official": "Republiek Rwanda",
                "common": "Rwanda"
            },
            "por": {
                "official": "República do Ruanda",
                "common": "Ruanda"
            },
            "rus": {
                "official": "Республика Руанда",
                "common": "Руанда"
            },
            "slk": {
                "official": "Rwandská republika",
                "common": "Rwanda"
            },
            "spa": {
                "official": "República de Rwanda",
                "common": "Ruanda"
            },
            "fin": {
                "official": "Ruandan tasavalta",
                "common": "Ruanda"
            },
            "est": {
                "official": "Rwanda Vabariik",
                "common": "Rwanda"
            },
            "zho": {
                "official": "卢旺达共和国",
                "common": "卢旺达"
            },
            "pol": {
                "official": "Republika Rwandy",
                "common": "Rwanda"
            }
        },
        "latlng": [
            -2,
            30
        ],
        "demonym": "Rwandan",
        "landlocked": true,
        "borders": [
            "BDI",
            "COD",
            "TZA",
            "UGA"
        ],
        "area": 26338,
        "flag": "🇷🇼"
    },
    {
        "name": {
            "common": "Saudi Arabia",
            "official": "Kingdom of Saudi Arabia",
            "native": {
                "ara": {
                    "official": "المملكة العربية السعودية",
                    "common": "العربية السعودية"
                }
            }
        },
        "tld": [
            ".sa",
            ".السعودية"
        ],
        "cca2": "SA",
        "ccn3": "682",
        "cca3": "SAU",
        "cioc": "KSA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SAR"
        ],
        "callingCode": [
            "966"
        ],
        "capital": [
            "Riyadh"
        ],
        "altSpellings": [
            "Saudi",
            "SA",
            "Kingdom of Saudi Arabia",
            "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Saúdskoarabské království",
                "common": "Saúdská Arábie"
            },
            "deu": {
                "official": "Königreich Saudi-Arabien",
                "common": "Saudi-Arabien"
            },
            "fra": {
                "official": "Royaume d'Arabie Saoudite",
                "common": "Arabie Saoudite"
            },
            "hrv": {
                "official": "Kraljevina Saudijska Arabija",
                "common": "Saudijska Arabija"
            },
            "ita": {
                "official": "Arabia Saudita",
                "common": "Arabia Saudita"
            },
            "jpn": {
                "official": "サウジアラビア王国",
                "common": "サウジアラビア"
            },
            "nld": {
                "official": "Koninkrijk van Saoedi-Arabië",
                "common": "Saoedi-Arabië"
            },
            "por": {
                "official": "Reino da Arábia Saudita",
                "common": "Arábia Saudita"
            },
            "rus": {
                "official": "Королевство Саудовская Аравия",
                "common": "Саудовская Аравия"
            },
            "slk": {
                "official": "Saudskoarabské kráľovstvo",
                "common": "Saudská Arábia"
            },
            "spa": {
                "official": "Reino de Arabia Saudita",
                "common": "Arabia Saudí"
            },
            "fin": {
                "official": "Saudi-Arabian kuningaskunta",
                "common": "Saudi-Arabia"
            },
            "est": {
                "official": "Saudi Araabia Kuningriik",
                "common": "Saudi Araabia"
            },
            "zho": {
                "official": "沙特阿拉伯王国",
                "common": "沙特阿拉伯"
            },
            "pol": {
                "official": "Królestwo Arabii Saudyjskiej",
                "common": "Arabia Saudyjska"
            }
        },
        "latlng": [
            25,
            45
        ],
        "demonym": "Saudi Arabian",
        "landlocked": false,
        "borders": [
            "IRQ",
            "JOR",
            "KWT",
            "OMN",
            "QAT",
            "ARE",
            "YEM"
        ],
        "area": 2149690,
        "flag": "🇸🇦"
    },
    {
        "name": {
            "common": "Sudan",
            "official": "Republic of the Sudan",
            "native": {
                "ara": {
                    "official": "جمهورية السودان",
                    "common": "السودان"
                },
                "eng": {
                    "official": "Republic of the Sudan",
                    "common": "Sudan"
                }
            }
        },
        "tld": [
            ".sd"
        ],
        "cca2": "SD",
        "ccn3": "729",
        "cca3": "SDN",
        "cioc": "SUD",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SDG"
        ],
        "callingCode": [
            "249"
        ],
        "capital": [
            "Khartoum"
        ],
        "altSpellings": [
            "SD",
            "Republic of the Sudan",
            "Jumhūrīyat as-Sūdān"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic",
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Súdánská republika",
                "common": "Súdán"
            },
            "deu": {
                "official": "Republik Sudan",
                "common": "Sudan"
            },
            "fra": {
                "official": "République du Soudan",
                "common": "Soudan"
            },
            "hrv": {
                "official": "Republika Sudan",
                "common": "Sudan"
            },
            "ita": {
                "official": "Repubblica del Sudan",
                "common": "Sudan"
            },
            "jpn": {
                "official": "スーダン共和国",
                "common": "スーダン"
            },
            "nld": {
                "official": "Republiek Soedan",
                "common": "Soedan"
            },
            "por": {
                "official": "República do Sudão",
                "common": "Sudão"
            },
            "rus": {
                "official": "Республика Судан",
                "common": "Судан"
            },
            "slk": {
                "official": "Sudánska republika",
                "common": "Sudán"
            },
            "spa": {
                "official": "República de Sudán",
                "common": "Sudán"
            },
            "fin": {
                "official": "Sudanin tasavalta",
                "common": "Sudan"
            },
            "est": {
                "official": "Sudaani Vabariik",
                "common": "Sudaan"
            },
            "zho": {
                "official": "苏丹共和国",
                "common": "苏丹"
            },
            "pol": {
                "official": "Republika Sudanu",
                "common": "Sudan"
            }
        },
        "latlng": [
            15,
            30
        ],
        "demonym": "Sudanese",
        "landlocked": false,
        "borders": [
            "CAF",
            "TCD",
            "EGY",
            "ERI",
            "ETH",
            "LBY",
            "SSD"
        ],
        "area": 1886068,
        "flag": "🇸🇩"
    },
    {
        "name": {
            "common": "Senegal",
            "official": "Republic of Senegal",
            "native": {
                "fra": {
                    "official": "République du Sénégal",
                    "common": "Sénégal"
                }
            }
        },
        "tld": [
            ".sn"
        ],
        "cca2": "SN",
        "ccn3": "686",
        "cca3": "SEN",
        "cioc": "SEN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "221"
        ],
        "capital": [
            "Dakar"
        ],
        "altSpellings": [
            "SN",
            "Republic of Senegal",
            "République du Sénégal"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Senegalská republika",
                "common": "Senegal"
            },
            "deu": {
                "official": "Republik Senegal",
                "common": "Senegal"
            },
            "fra": {
                "official": "République du Sénégal",
                "common": "Sénégal"
            },
            "hrv": {
                "official": "Republika Senegal",
                "common": "Senegal"
            },
            "ita": {
                "official": "Repubblica del Senegal",
                "common": "Senegal"
            },
            "jpn": {
                "official": "セネガル共和国",
                "common": "セネガル"
            },
            "nld": {
                "official": "Republiek Senegal",
                "common": "Senegal"
            },
            "por": {
                "official": "República do Senegal",
                "common": "Senegal"
            },
            "rus": {
                "official": "Республика Сенегал",
                "common": "Сенегал"
            },
            "slk": {
                "official": "Senegalská republika",
                "common": "Senegal"
            },
            "spa": {
                "official": "República de Senegal",
                "common": "Senegal"
            },
            "fin": {
                "official": "Senegalin tasavalta",
                "common": "Senegal"
            },
            "est": {
                "official": "Senegali Vabariik",
                "common": "Senegal"
            },
            "zho": {
                "official": "塞内加尔共和国",
                "common": "塞内加尔"
            },
            "pol": {
                "official": "Senegal",
                "common": "Senegal"
            }
        },
        "latlng": [
            14,
            -14
        ],
        "demonym": "Senegalese",
        "landlocked": false,
        "borders": [
            "GMB",
            "GIN",
            "GNB",
            "MLI",
            "MRT"
        ],
        "area": 196722,
        "flag": "🇸🇳"
    },
    {
        "name": {
            "common": "Singapore",
            "official": "Republic of Singapore",
            "native": {
                "zho": {
                    "official": "新加坡共和国",
                    "common": "新加坡"
                },
                "eng": {
                    "official": "Republic of Singapore",
                    "common": "Singapore"
                },
                "msa": {
                    "official": "Republik Singapura",
                    "common": "Singapura"
                },
                "tam": {
                    "official": "சிங்கப்பூர் குடியரசு",
                    "common": "சிங்கப்பூர்"
                }
            }
        },
        "tld": [
            ".sg",
            ".新加坡",
            ".சிங்கப்பூர்"
        ],
        "cca2": "SG",
        "ccn3": "702",
        "cca3": "SGP",
        "cioc": "SIN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SGD"
        ],
        "callingCode": [
            "65"
        ],
        "capital": [
            "Singapore"
        ],
        "altSpellings": [
            "SG",
            "Singapura",
            "Republik Singapura",
            "新加坡共和国"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "zho": "Chinese",
            "eng": "English",
            "msa": "Malay",
            "tam": "Tamil"
        },
        "translations": {
            "ces": {
                "official": "Singapurská republika",
                "common": "Singapur"
            },
            "deu": {
                "official": "Republik Singapur",
                "common": "Singapur"
            },
            "fra": {
                "official": "République de Singapour",
                "common": "Singapour"
            },
            "hrv": {
                "official": "Republika Singapur",
                "common": "Singapur"
            },
            "ita": {
                "official": "Repubblica di Singapore",
                "common": "Singapore"
            },
            "jpn": {
                "official": "シンガポール共和国",
                "common": "シンガポール"
            },
            "nld": {
                "official": "Republiek Singapore",
                "common": "Singapore"
            },
            "por": {
                "official": "República de Singapura",
                "common": "Singapura"
            },
            "rus": {
                "official": "Республика Сингапур",
                "common": "Сингапур"
            },
            "slk": {
                "official": "Singapurská republika",
                "common": "Singapur"
            },
            "spa": {
                "official": "República de Singapur",
                "common": "Singapur"
            },
            "fin": {
                "official": "Singaporen tasavalta",
                "common": "Singapore"
            },
            "est": {
                "official": "Singapuri Vabariik",
                "common": "Singapur"
            },
            "pol": {
                "official": "Republika Singapuru",
                "common": "Singapur"
            }
        },
        "latlng": [
            1.36666666,
            103.8
        ],
        "demonym": "Singaporean",
        "landlocked": false,
        "borders": [],
        "area": 710,
        "flag": "🇸🇬"
    },
    {
        "name": {
            "common": "South Georgia",
            "official": "South Georgia and the South Sandwich Islands",
            "native": {
                "eng": {
                    "official": "South Georgia and the South Sandwich Islands",
                    "common": "South Georgia"
                }
            }
        },
        "tld": [
            ".gs"
        ],
        "cca2": "GS",
        "ccn3": "239",
        "cca3": "SGS",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "GBP"
        ],
        "callingCode": [
            "500"
        ],
        "capital": [
            "King Edward Point"
        ],
        "altSpellings": [
            "GS",
            "South Georgia and the South Sandwich Islands"
        ],
        "region": "Antarctic",
        "subregion": "",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Jižní Georgie a Jižní Sandwichovy ostrovy",
                "common": "Jižní Georgie a Jižní Sandwichovy ostrovy"
            },
            "deu": {
                "official": "Südgeorgien und die Südlichen Sandwichinseln",
                "common": "Südgeorgien und die Südlichen Sandwichinseln"
            },
            "fra": {
                "official": "Géorgie du Sud et les îles Sandwich du Sud",
                "common": "Géorgie du Sud-et-les Îles Sandwich du Sud"
            },
            "hrv": {
                "official": "Južna Džordžija i Otoci Južni Sendvič",
                "common": "Južna Georgija i otočje Južni Sandwich"
            },
            "ita": {
                "official": "Georgia del Sud e isole Sandwich del Sud",
                "common": "Georgia del Sud e Isole Sandwich Meridionali"
            },
            "jpn": {
                "official": "サウスジョージア·サウスサンドウィッチ諸島",
                "common": "サウスジョージア・サウスサンドウィッチ諸島"
            },
            "nld": {
                "official": "Zuid-Georgië en de Zuidelijke Sandwich-eilanden",
                "common": "Zuid-Georgia en Zuidelijke Sandwicheilanden"
            },
            "por": {
                "official": "Geórgia do Sul e Sandwich do Sul",
                "common": "Ilhas Geórgia do Sul e Sandwich do Sul"
            },
            "rus": {
                "official": "Южная Георгия и Южные Сандвичевы острова",
                "common": "Южная Георгия и Южные Сандвичевы острова"
            },
            "slk": {
                "official": "Južná Georgia a Južné Sandwichove ostrovy",
                "common": "Južná Georgia a Južné Sandwichove ostrovy"
            },
            "spa": {
                "official": "Georgia del Sur y las Islas Sandwich del Sur",
                "common": "Islas Georgias del Sur y Sandwich del Sur"
            },
            "fin": {
                "official": "Etelä-Georgia ja Eteläiset Sandwichsaaret",
                "common": "Etelä-Georgia ja Eteläiset Sandwichsaaret"
            },
            "est": {
                "official": "Lõuna-Georgia ja Lõuna-Sandwichi saared",
                "common": "Lõuna-Georgia ja Lõuna-Sandwichi saared"
            },
            "zho": {
                "official": "南乔治亚岛和南桑威奇群岛",
                "common": "南乔治亚"
            },
            "pol": {
                "official": "Georgia Południowa i Sandwich Południowy",
                "common": "Georgia Południowa i Sandwich Południowy"
            }
        },
        "latlng": [
            -54.5,
            -37
        ],
        "demonym": "South Georgian South Sandwich Islander",
        "landlocked": false,
        "borders": [],
        "area": 3903,
        "flag": "🇬🇸"
    },
    {
        "name": {
            "common": "Svalbard and Jan Mayen",
            "official": "Svalbard og Jan Mayen",
            "native": {
                "nor": {
                    "official": "Svalbard og Jan Mayen",
                    "common": "Svalbard og Jan Mayen"
                }
            }
        },
        "tld": [
            ".sj"
        ],
        "cca2": "SJ",
        "ccn3": "744",
        "cca3": "SJM",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "NOK"
        ],
        "callingCode": [
            "4779"
        ],
        "capital": [
            "Longyearbyen"
        ],
        "altSpellings": [
            "SJ",
            "Svalbard and Jan Mayen Islands"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "nor": "Norwegian"
        },
        "translations": {
            "ces": {
                "official": "Špicberky a Jan Mayen",
                "common": "Špicberky a Jan Mayen"
            },
            "deu": {
                "official": "Spitzbergen und Jan Mayen",
                "common": "Spitzbergen und Jan Mayen"
            },
            "fra": {
                "official": "Jan Mayen Svalbard",
                "common": "Svalbard et Jan Mayen"
            },
            "hrv": {
                "official": "Svalbard og Jan Mayen",
                "common": "Svalbard i Jan Mayen"
            },
            "ita": {
                "official": "Svalbard og Jan Mayen",
                "common": "Svalbard e Jan Mayen"
            },
            "jpn": {
                "official": "スバールバル諸島OGヤンマイエン",
                "common": "スヴァールバル諸島およびヤンマイエン島"
            },
            "nld": {
                "official": "Svalbard og Jan Mayen",
                "common": "Svalbard en Jan Mayen"
            },
            "por": {
                "official": "Svalbard og Jan Mayen",
                "common": "Ilhas Svalbard e Jan Mayen"
            },
            "rus": {
                "official": "Свальбарда ог Ян-Майен",
                "common": "Шпицберген и Ян-Майен"
            },
            "slk": {
                "official": "Svalbard a Jan Mayen",
                "common": "Svalbard a Jan Mayen"
            },
            "spa": {
                "official": "Svalbard og Jan Mayen",
                "common": "Islas Svalbard y Jan Mayen"
            },
            "fin": {
                "official": "Huippuvuoret",
                "common": "Huippuvuoret"
            },
            "est": {
                "official": "Svalbard",
                "common": "Svalbard"
            },
            "zho": {
                "official": "斯瓦尔巴特",
                "common": "斯瓦尔巴特"
            },
            "pol": {
                "official": "Svalbard i Jan Mayen",
                "common": "Svalbard i Jan Mayen"
            }
        },
        "latlng": [
            78,
            20
        ],
        "demonym": "Norwegian",
        "landlocked": false,
        "borders": [],
        "area": -1,
        "flag": "🇸🇯"
    },
    {
        "name": {
            "common": "Solomon Islands",
            "official": "Solomon Islands",
            "native": {
                "eng": {
                    "official": "Solomon Islands",
                    "common": "Solomon Islands"
                }
            }
        },
        "tld": [
            ".sb"
        ],
        "cca2": "SB",
        "ccn3": "090",
        "cca3": "SLB",
        "cioc": "SOL",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SBD"
        ],
        "callingCode": [
            "677"
        ],
        "capital": [
            "Honiara"
        ],
        "altSpellings": [
            "SB"
        ],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Šalamounovy ostrovy",
                "common": "Šalamounovy ostrovy"
            },
            "deu": {
                "official": "Salomonen",
                "common": "Salomonen"
            },
            "fra": {
                "official": "Îles Salomon",
                "common": "Îles Salomon"
            },
            "hrv": {
                "official": "Solomonski Otoci",
                "common": "Solomonski Otoci"
            },
            "ita": {
                "official": "Isole Salomone",
                "common": "Isole Salomone"
            },
            "jpn": {
                "official": "ソロモン諸島",
                "common": "ソロモン諸島"
            },
            "nld": {
                "official": "Solomon eilanden",
                "common": "Salomonseilanden"
            },
            "por": {
                "official": "Ilhas Salomão",
                "common": "Ilhas Salomão"
            },
            "rus": {
                "official": "Соломоновы острова",
                "common": "Соломоновы Острова"
            },
            "slk": {
                "official": "Salomonove ostrovy",
                "common": "Salomonove ostrovy"
            },
            "spa": {
                "official": "islas Salomón",
                "common": "Islas Salomón"
            },
            "fin": {
                "official": "Salomonsaaret",
                "common": "Salomonsaaret"
            },
            "est": {
                "official": "Saalomoni Saared",
                "common": "Saalomoni Saared"
            },
            "zho": {
                "official": "所罗门群岛",
                "common": "所罗门群岛"
            },
            "pol": {
                "official": "Wyspy Salomona",
                "common": "Wyspy Salomona"
            }
        },
        "latlng": [
            -8,
            159
        ],
        "demonym": "Solomon Islander",
        "landlocked": false,
        "borders": [],
        "area": 28896,
        "flag": "🇸🇧"
    },
    {
        "name": {
            "common": "Sierra Leone",
            "official": "Republic of Sierra Leone",
            "native": {
                "eng": {
                    "official": "Republic of Sierra Leone",
                    "common": "Sierra Leone"
                }
            }
        },
        "tld": [
            ".sl"
        ],
        "cca2": "SL",
        "ccn3": "694",
        "cca3": "SLE",
        "cioc": "SLE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SLL"
        ],
        "callingCode": [
            "232"
        ],
        "capital": [
            "Freetown"
        ],
        "altSpellings": [
            "SL",
            "Republic of Sierra Leone"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Republika Sierra Leone",
                "common": "Sierra Leone"
            },
            "deu": {
                "official": "Republik Sierra Leone",
                "common": "Sierra Leone"
            },
            "fra": {
                "official": "République de Sierra Leone",
                "common": "Sierra Leone"
            },
            "hrv": {
                "official": "Republika Sijera Leone",
                "common": "Sijera Leone"
            },
            "ita": {
                "official": "Repubblica della Sierra Leone",
                "common": "Sierra Leone"
            },
            "jpn": {
                "official": "シエラレオネ共和国",
                "common": "シエラレオネ"
            },
            "nld": {
                "official": "Republiek Sierra Leone",
                "common": "Sierra Leone"
            },
            "por": {
                "official": "República da Serra Leoa",
                "common": "Serra Leoa"
            },
            "rus": {
                "official": "Республика Сьерра-Леоне",
                "common": "Сьерра-Леоне"
            },
            "slk": {
                "official": "Sierraleonská republika",
                "common": "Sierra Leone"
            },
            "spa": {
                "official": "República de Sierra Leona",
                "common": "Sierra Leone"
            },
            "fin": {
                "official": "Sierra Leonen tasavalta",
                "common": "Sierra Leone"
            },
            "est": {
                "official": "Sierra Leone Vabariik",
                "common": "Sierra Leone"
            },
            "zho": {
                "official": "塞拉利昂共和国",
                "common": "塞拉利昂"
            },
            "pol": {
                "official": "Sierra Leone",
                "common": "Sierra Leone"
            }
        },
        "latlng": [
            8.5,
            -11.5
        ],
        "demonym": "Sierra Leonean",
        "landlocked": false,
        "borders": [
            "GIN",
            "LBR"
        ],
        "area": 71740,
        "flag": "🇸🇱"
    },
    {
        "name": {
            "common": "El Salvador",
            "official": "Republic of El Salvador",
            "native": {
                "spa": {
                    "official": "República de El Salvador",
                    "common": "El Salvador"
                }
            }
        },
        "tld": [
            ".sv"
        ],
        "cca2": "SV",
        "ccn3": "222",
        "cca3": "SLV",
        "cioc": "ESA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SVC",
            "USD"
        ],
        "callingCode": [
            "503"
        ],
        "capital": [
            "San Salvador"
        ],
        "altSpellings": [
            "SV",
            "Republic of El Salvador",
            "República de El Salvador"
        ],
        "region": "Americas",
        "subregion": "Central America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Salvadorská republika",
                "common": "Salvador"
            },
            "cym": {
                "official": "Gweriniaeth El Salfador",
                "common": "El Salfador"
            },
            "deu": {
                "official": "Republik El Salvador",
                "common": "El Salvador"
            },
            "fra": {
                "official": "République du Salvador",
                "common": "Salvador"
            },
            "hrv": {
                "official": "Republika El Salvador",
                "common": "Salvador"
            },
            "ita": {
                "official": "Repubblica di El Salvador",
                "common": "El Salvador"
            },
            "jpn": {
                "official": "エルサルバドル共和国",
                "common": "エルサルバドル"
            },
            "nld": {
                "official": "Republiek El Salvador",
                "common": "El Salvador"
            },
            "por": {
                "official": "República de El Salvador",
                "common": "El Salvador"
            },
            "rus": {
                "official": "Республика Эль-Сальвадор",
                "common": "Сальвадор"
            },
            "slk": {
                "official": "Salvádorská republika",
                "common": "Salvádor"
            },
            "spa": {
                "official": "República de El Salvador",
                "common": "El Salvador"
            },
            "fin": {
                "official": "El Salvadorin tasavalta",
                "common": "El Salvador"
            },
            "est": {
                "official": "El Salvadori Vabariik",
                "common": "El Salvador"
            },
            "zho": {
                "official": "萨尔瓦多共和国",
                "common": "萨尔瓦多"
            },
            "pol": {
                "official": "Republika Salwadoru",
                "common": "Salwador"
            }
        },
        "latlng": [
            13.83333333,
            -88.91666666
        ],
        "demonym": "Salvadoran",
        "landlocked": false,
        "borders": [
            "GTM",
            "HND"
        ],
        "area": 21041,
        "flag": "🇸🇻"
    },
    {
        "name": {
            "common": "San Marino",
            "official": "Most Serene Republic of San Marino",
            "native": {
                "ita": {
                    "official": "Serenissima Repubblica di San Marino",
                    "common": "San Marino"
                }
            }
        },
        "tld": [
            ".sm"
        ],
        "cca2": "SM",
        "ccn3": "674",
        "cca3": "SMR",
        "cioc": "SMR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "378"
        ],
        "capital": [
            "City of San Marino"
        ],
        "altSpellings": [
            "SM",
            "Republic of San Marino",
            "Repubblica di San Marino"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ita": "Italian"
        },
        "translations": {
            "ces": {
                "official": "Republika San Marino",
                "common": "San Marino"
            },
            "deu": {
                "official": "Republik San Marino",
                "common": "San Marino"
            },
            "fra": {
                "official": "République de Saint-Marin",
                "common": "Saint-Marin"
            },
            "hrv": {
                "official": "Većina Serene Republika San Marino",
                "common": "San Marino"
            },
            "ita": {
                "official": "Serenissima Repubblica di San Marino",
                "common": "San Marino"
            },
            "jpn": {
                "official": "サンマリノのほとんどセリーヌ共和国",
                "common": "サンマリノ"
            },
            "nld": {
                "official": "Meest Serene Republiek San Marino",
                "common": "San Marino"
            },
            "por": {
                "official": "Sereníssima República de San Marino",
                "common": "San Marino"
            },
            "rus": {
                "official": "Большинство Serene Республика Сан-Марино",
                "common": "Сан-Марино"
            },
            "slk": {
                "official": "Sanmarínska republika",
                "common": "San Maríno"
            },
            "spa": {
                "official": "Serenísima República de San Marino",
                "common": "San Marino"
            },
            "fin": {
                "official": "San Marinon seesteinen tasavalta",
                "common": "San Marino"
            },
            "est": {
                "official": "San Marino Vabariik",
                "common": "San Marino"
            },
            "zho": {
                "official": "圣马力诺共和国",
                "common": "圣马力诺"
            },
            "pol": {
                "official": "Republika San Marino",
                "common": "San Marino"
            }
        },
        "latlng": [
            43.76666666,
            12.41666666
        ],
        "demonym": "Sammarinese",
        "landlocked": true,
        "borders": [
            "ITA"
        ],
        "area": 61,
        "flag": "🇸🇲"
    },
    {
        "name": {
            "common": "Somalia",
            "official": "Federal Republic of Somalia",
            "native": {
                "ara": {
                    "official": "جمهورية الصومال\u200e\u200e",
                    "common": "الصومال\u200e\u200e"
                },
                "som": {
                    "official": "Jamhuuriyadda Federaalka Soomaaliya",
                    "common": "Soomaaliya"
                }
            }
        },
        "tld": [
            ".so"
        ],
        "cca2": "SO",
        "ccn3": "706",
        "cca3": "SOM",
        "cioc": "SOM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SOS"
        ],
        "callingCode": [
            "252"
        ],
        "capital": [
            "Mogadishu"
        ],
        "altSpellings": [
            "SO",
            "aṣ-Ṣūmāl",
            "Federal Republic of Somalia",
            "Jamhuuriyadda Federaalka Soomaaliya",
            "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "ara": "Arabic",
            "som": "Somali"
        },
        "translations": {
            "ces": {
                "official": "Somálská demokratická republika",
                "common": "Somálsko"
            },
            "deu": {
                "official": "Bundesrepublik Somalia",
                "common": "Somalia"
            },
            "fra": {
                "official": "République fédérale de Somalie",
                "common": "Somalie"
            },
            "hrv": {
                "official": "Savezna Republika Somaliji",
                "common": "Somalija"
            },
            "ita": {
                "official": "Repubblica federale di Somalia",
                "common": "Somalia"
            },
            "jpn": {
                "official": "ソマリア連邦共和国",
                "common": "ソマリア"
            },
            "nld": {
                "official": "Federale Republiek Somalië",
                "common": "Somalië"
            },
            "por": {
                "official": "República Federal da Somália",
                "common": "Somália"
            },
            "rus": {
                "official": "Федеративная Республика Сомали",
                "common": "Сомали"
            },
            "slk": {
                "official": "Somálska federatívna republika",
                "common": "Somálsko"
            },
            "spa": {
                "official": "República Federal de Somalia",
                "common": "Somalia"
            },
            "fin": {
                "official": "Somalian liittotasavalta",
                "common": "Somalia"
            },
            "est": {
                "official": "Somaalia Liitvabariik",
                "common": "Somaalia"
            },
            "zho": {
                "official": "索马里共和国",
                "common": "索马里"
            },
            "pol": {
                "official": "Federalna Republika Somalii",
                "common": "Somalia"
            }
        },
        "latlng": [
            10,
            49
        ],
        "demonym": "Somali",
        "landlocked": false,
        "borders": [
            "DJI",
            "ETH",
            "KEN"
        ],
        "area": 637657,
        "flag": "🇸🇴"
    },
    {
        "name": {
            "common": "Saint Pierre and Miquelon",
            "official": "Saint Pierre and Miquelon",
            "native": {
                "fra": {
                    "official": "Collectivité territoriale de Saint-Pierre-et-Miquelon",
                    "common": "Saint-Pierre-et-Miquelon"
                }
            }
        },
        "tld": [
            ".pm"
        ],
        "cca2": "PM",
        "ccn3": "666",
        "cca3": "SPM",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "508"
        ],
        "capital": [
            "Saint-Pierre"
        ],
        "altSpellings": [
            "PM",
            "Collectivité territoriale de Saint-Pierre-et-Miquelon"
        ],
        "region": "Americas",
        "subregion": "North America",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Saint-Pierre a Miquelon",
                "common": "Saint-Pierre a Miquelon"
            },
            "deu": {
                "official": "St. Pierre und Miquelon",
                "common": "St. Pierre und Miquelon"
            },
            "fra": {
                "official": "Saint-Pierre-et-Miquelon",
                "common": "Saint-Pierre-et-Miquelon"
            },
            "hrv": {
                "official": "Saint Pierre i Miquelon",
                "common": "Sveti Petar i Mikelon"
            },
            "ita": {
                "official": "Saint Pierre e Miquelon",
                "common": "Saint-Pierre e Miquelon"
            },
            "jpn": {
                "official": "サンピエール島·ミクロン島",
                "common": "サンピエール島・ミクロン島"
            },
            "nld": {
                "official": "Saint-Pierre en Miquelon",
                "common": "Saint Pierre en Miquelon"
            },
            "por": {
                "official": "Saint Pierre e Miquelon",
                "common": "Saint-Pierre e Miquelon"
            },
            "rus": {
                "official": "Сен-Пьер и Микелон",
                "common": "Сен-Пьер и Микелон"
            },
            "slk": {
                "official": "Ostrovy Saint Pierre a Miquelon",
                "common": "Saint Pierre a Miquelon"
            },
            "spa": {
                "official": "San Pedro y Miquelón",
                "common": "San Pedro y Miquelón"
            },
            "fin": {
                "official": "Saint-Pierre ja Miquelon",
                "common": "Saint-Pierre ja Miquelon"
            },
            "est": {
                "official": "Saint-Pierre’i ja Miqueloni territoriaalühendus",
                "common": "Saint-Pierre ja Miquelon"
            },
            "zho": {
                "official": "圣皮埃尔和密克隆",
                "common": "圣皮埃尔和密克隆"
            },
            "pol": {
                "official": "Saint-Pierre i Miquelon",
                "common": "Saint-Pierre i Miquelon"
            }
        },
        "latlng": [
            46.83333333,
            -56.33333333
        ],
        "demonym": "French",
        "landlocked": false,
        "borders": [],
        "area": 242,
        "flag": "🇵🇲"
    },
    {
        "name": {
            "common": "Serbia",
            "official": "Republic of Serbia",
            "native": {
                "srp": {
                    "official": "Република Србија",
                    "common": "Србија"
                }
            }
        },
        "tld": [
            ".rs",
            ".срб"
        ],
        "cca2": "RS",
        "ccn3": "688",
        "cca3": "SRB",
        "cioc": "SRB",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "RSD"
        ],
        "callingCode": [
            "381"
        ],
        "capital": [
            "Belgrade"
        ],
        "altSpellings": [
            "RS",
            "Srbija",
            "Republic of Serbia",
            "Република Србија",
            "Republika Srbija"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "srp": "Serbian"
        },
        "translations": {
            "ces": {
                "official": "Srbská republika",
                "common": "Srbsko"
            },
            "deu": {
                "official": "Republik Serbien",
                "common": "Serbien"
            },
            "fra": {
                "official": "République de Serbie",
                "common": "Serbie"
            },
            "hrv": {
                "official": "Republika Srbija",
                "common": "Srbija"
            },
            "ita": {
                "official": "Repubblica di Serbia",
                "common": "Serbia"
            },
            "jpn": {
                "official": "セルビア共和国",
                "common": "セルビア"
            },
            "nld": {
                "official": "Republiek Servië",
                "common": "Servië"
            },
            "por": {
                "official": "República da Sérvia",
                "common": "Sérvia"
            },
            "rus": {
                "official": "Республика Сербия",
                "common": "Сербия"
            },
            "slk": {
                "official": "Srbská republika",
                "common": "Srbsko"
            },
            "spa": {
                "official": "República de Serbia",
                "common": "Serbia"
            },
            "fin": {
                "official": "Serbian tasavalta",
                "common": "Serbia"
            },
            "est": {
                "official": "Serbia Vabariik",
                "common": "Serbia"
            },
            "zho": {
                "official": "塞尔维亚共和国",
                "common": "塞尔维亚"
            },
            "pol": {
                "official": "Republika Serbii",
                "common": "Serbia"
            }
        },
        "latlng": [
            44,
            21
        ],
        "demonym": "Serbian",
        "landlocked": true,
        "borders": [
            "BIH",
            "BGR",
            "HRV",
            "HUN",
            "UNK",
            "MKD",
            "MNE",
            "ROU"
        ],
        "area": 88361,
        "flag": "🇷🇸"
    },
    {
        "name": {
            "common": "South Sudan",
            "official": "Republic of South Sudan",
            "native": {
                "eng": {
                    "official": "Republic of South Sudan",
                    "common": "South Sudan"
                }
            }
        },
        "tld": [
            ".ss"
        ],
        "cca2": "SS",
        "ccn3": "728",
        "cca3": "SSD",
        "cioc": "",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SSP"
        ],
        "callingCode": [
            "211"
        ],
        "capital": [
            "Juba"
        ],
        "altSpellings": [
            "SS"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Jihosúdánská republika",
                "common": "Jižní Súdán"
            },
            "deu": {
                "official": "Republik Südsudan",
                "common": "Südsudan"
            },
            "fra": {
                "official": "République du Soudan du Sud",
                "common": "Soudan du Sud"
            },
            "hrv": {
                "official": "Republika Južni Sudan",
                "common": "Južni Sudan"
            },
            "ita": {
                "official": "Repubblica del Sudan del Sud",
                "common": "Sudan del sud"
            },
            "jpn": {
                "official": "南スーダン共和国",
                "common": "南スーダン"
            },
            "nld": {
                "official": "Republiek Zuid-Soedan",
                "common": "Zuid-Soedan"
            },
            "por": {
                "official": "República do Sudão do Sul",
                "common": "Sudão do Sul"
            },
            "rus": {
                "official": "Республика Южный Судан",
                "common": "Южный Судан"
            },
            "slk": {
                "official": "Juhosudánska republika",
                "common": "Južný Sudán"
            },
            "spa": {
                "official": "República de Sudán del Sur",
                "common": "Sudán del Sur"
            },
            "fin": {
                "official": "Etelä-Sudanin tasavalta",
                "common": "Etelä-Sudan"
            },
            "est": {
                "official": "Lõuna-Sudaani Vabariik",
                "common": "Lõuna-Sudaan"
            },
            "zho": {
                "official": "南苏丹共和国",
                "common": "南苏丹"
            },
            "pol": {
                "official": "Republika Sudanu",
                "common": "Sudan"
            }
        },
        "latlng": [
            7,
            30
        ],
        "demonym": "South Sudanese",
        "landlocked": true,
        "borders": [
            "CAF",
            "COD",
            "ETH",
            "KEN",
            "SDN",
            "UGA"
        ],
        "area": 619745,
        "flag": "🇸🇸"
    },
    {
        "name": {
            "common": "São Tomé and Príncipe",
            "official": "Democratic Republic of São Tomé and Príncipe",
            "native": {
                "por": {
                    "official": "República Democrática do São Tomé e Príncipe",
                    "common": "São Tomé e Príncipe"
                }
            }
        },
        "tld": [
            ".st"
        ],
        "cca2": "ST",
        "ccn3": "678",
        "cca3": "STP",
        "cioc": "STP",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "STD"
        ],
        "callingCode": [
            "239"
        ],
        "capital": [
            "São Tomé"
        ],
        "altSpellings": [
            "ST",
            "Democratic Republic of São Tomé and Príncipe",
            "Sao Tome and Principe",
            "República Democrática de São Tomé e Príncipe"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "por": "Portuguese"
        },
        "translations": {
            "ces": {
                "official": "Demokratická republika Svatý Tomáš a Princův ostrov",
                "common": "Svatý Tomáš a Princův ostrov"
            },
            "deu": {
                "official": "Demokratische Republik São Tomé und Príncipe",
                "common": "São Tomé und Príncipe"
            },
            "fra": {
                "official": "République démocratique de São Tomé et Príncipe",
                "common": "São Tomé et Príncipe"
            },
            "hrv": {
                "official": "Demokratska Republika São Tome i Principe",
                "common": "Sveti Toma i Princip"
            },
            "ita": {
                "official": "Repubblica democratica di São Tomé e Príncipe",
                "common": "São Tomé e Príncipe"
            },
            "jpn": {
                "official": "サントメ·プリンシペ民主共和国",
                "common": "サントメ・プリンシペ"
            },
            "nld": {
                "official": "Democratische Republiek Sao Tomé en Principe",
                "common": "Sao Tomé en Principe"
            },
            "por": {
                "official": "República Democrática de São Tomé e Príncipe",
                "common": "São Tomé e Príncipe"
            },
            "spa": {
                "official": "República Democrática de Santo Tomé y Príncipe",
                "common": "Santo Tomé y Príncipe"
            },
            "rus": {
                "official": "Демократическая Республика Сан-Томе и Принсипи",
                "common": "Сан-Томе и Принсипи"
            },
            "slk": {
                "official": "Demokratická republika Svätého Tomáša A princovho ostrova",
                "common": "Svätý Tomáš a Princov ostrov"
            },
            "fin": {
                "official": "São Tomé ja Príncipen demokraattinen tasavalta",
                "common": "São Téme ja Príncipe"
            },
            "est": {
                "official": "São Tomé ja Príncipe Demokraatlik Vabariik",
                "common": "São Tomé ja Príncipe"
            },
            "zho": {
                "official": "圣多美和普林西比民主共和国",
                "common": "圣多美和普林西比"
            },
            "pol": {
                "official": "Demokratyczna Republika Wysp Świętego Tomasza i Książęcej",
                "common": "Wyspy Świętego Tomasza i Książęca"
            }
        },
        "latlng": [
            1,
            7
        ],
        "demonym": "Sao Tomean",
        "landlocked": false,
        "borders": [],
        "area": 964,
        "flag": "🇸🇹"
    },
    {
        "name": {
            "common": "Suriname",
            "official": "Republic of Suriname",
            "native": {
                "nld": {
                    "official": "Republiek Suriname",
                    "common": "Suriname"
                }
            }
        },
        "tld": [
            ".sr"
        ],
        "cca2": "SR",
        "ccn3": "740",
        "cca3": "SUR",
        "cioc": "SUR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SRD"
        ],
        "callingCode": [
            "597"
        ],
        "capital": [
            "Paramaribo"
        ],
        "altSpellings": [
            "SR",
            "Sarnam",
            "Sranangron",
            "Republic of Suriname",
            "Republiek Suriname"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "nld": "Dutch"
        },
        "translations": {
            "ces": {
                "official": "Republika Surinam",
                "common": "Surinam"
            },
            "deu": {
                "official": "Republik Suriname",
                "common": "Suriname"
            },
            "fra": {
                "official": "République du Suriname",
                "common": "Surinam"
            },
            "hrv": {
                "official": "Republika Surinam",
                "common": "Surinam"
            },
            "ita": {
                "official": "Repubblica del Suriname",
                "common": "Suriname"
            },
            "jpn": {
                "official": "スリナム共和国",
                "common": "スリナム"
            },
            "nld": {
                "official": "Republiek Suriname",
                "common": "Suriname"
            },
            "por": {
                "official": "República do Suriname",
                "common": "Suriname"
            },
            "rus": {
                "official": "Республика Суринам",
                "common": "Суринам"
            },
            "slk": {
                "official": "Surinamská republika",
                "common": "Surinam"
            },
            "spa": {
                "official": "República de Suriname",
                "common": "Surinam"
            },
            "fin": {
                "official": "Surinamen tasavalta",
                "common": "Suriname"
            },
            "est": {
                "official": "Suriname Vabariik",
                "common": "Suriname"
            },
            "zho": {
                "official": "苏里南共和国",
                "common": "苏里南"
            },
            "pol": {
                "official": "Republika Surinamu",
                "common": "Surinam"
            }
        },
        "latlng": [
            4,
            -56
        ],
        "demonym": "Surinamer",
        "landlocked": false,
        "borders": [
            "BRA",
            "GUF",
            "GUY"
        ],
        "area": 163820,
        "flag": "🇸🇷"
    },
    {
        "name": {
            "common": "Slovakia",
            "official": "Slovak Republic",
            "native": {
                "slk": {
                    "official": "Slovenská republika",
                    "common": "Slovensko"
                }
            }
        },
        "tld": [
            ".sk"
        ],
        "cca2": "SK",
        "ccn3": "703",
        "cca3": "SVK",
        "cioc": "SVK",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "421"
        ],
        "capital": [
            "Bratislava"
        ],
        "altSpellings": [
            "SK",
            "Slovak Republic",
            "Slovenská republika"
        ],
        "region": "Europe",
        "subregion": "Central Europe",
        "languages": {
            "slk": "Slovak"
        },
        "translations": {
            "ces": {
                "official": "Slovenská republika",
                "common": "Slovensko"
            },
            "deu": {
                "official": "Slowakische Republik",
                "common": "Slowakei"
            },
            "fra": {
                "official": "République slovaque",
                "common": "Slovaquie"
            },
            "hrv": {
                "official": "slovačka",
                "common": "Slovačka"
            },
            "ita": {
                "official": "Repubblica slovacca",
                "common": "Slovacchia"
            },
            "jpn": {
                "official": "スロバキア共和国",
                "common": "スロバキア"
            },
            "nld": {
                "official": "Slowaakse Republiek",
                "common": "Slowakije"
            },
            "por": {
                "official": "República Eslovaca",
                "common": "Eslováquia"
            },
            "rus": {
                "official": "Словацкая Республика",
                "common": "Словакия"
            },
            "slk": {
                "official": "Slovenská republika",
                "common": "Slovensko"
            },
            "spa": {
                "official": "República Eslovaca",
                "common": "República Eslovaca"
            },
            "fin": {
                "official": "Slovakian tasavalta",
                "common": "Slovakia"
            },
            "est": {
                "official": "Slovaki Vabariik",
                "common": "Slovakkia"
            },
            "zho": {
                "official": "斯洛伐克共和国",
                "common": "斯洛伐克"
            },
            "pol": {
                "official": "Republika Słowacka",
                "common": "Słowacja"
            }
        },
        "latlng": [
            48.66666666,
            19.5
        ],
        "demonym": "Slovak",
        "landlocked": true,
        "borders": [
            "AUT",
            "CZE",
            "HUN",
            "POL",
            "UKR"
        ],
        "area": 49037,
        "flag": "🇸🇰"
    },
    {
        "name": {
            "common": "Slovenia",
            "official": "Republic of Slovenia",
            "native": {
                "slv": {
                    "official": "Republika Slovenija",
                    "common": "Slovenija"
                }
            }
        },
        "tld": [
            ".si"
        ],
        "cca2": "SI",
        "ccn3": "705",
        "cca3": "SVN",
        "cioc": "SLO",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "386"
        ],
        "capital": [
            "Ljubljana"
        ],
        "altSpellings": [
            "SI",
            "Republic of Slovenia",
            "Republika Slovenija"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "slv": "Slovene"
        },
        "translations": {
            "ces": {
                "official": "Slovinská republika",
                "common": "Slovinsko"
            },
            "deu": {
                "official": "Republik Slowenien",
                "common": "Slowenien"
            },
            "fra": {
                "official": "République de Slovénie",
                "common": "Slovénie"
            },
            "hrv": {
                "official": "Republika Slovenija",
                "common": "Slovenija"
            },
            "ita": {
                "official": "Repubblica di Slovenia",
                "common": "Slovenia"
            },
            "jpn": {
                "official": "スロベニア共和国",
                "common": "スロベニア"
            },
            "nld": {
                "official": "Republiek Slovenië",
                "common": "Slovenië"
            },
            "por": {
                "official": "República da Eslovénia",
                "common": "Eslovénia"
            },
            "rus": {
                "official": "Республика Словения",
                "common": "Словения"
            },
            "slk": {
                "official": "Slovinská republika",
                "common": "Slovinsko"
            },
            "spa": {
                "official": "República de Eslovenia",
                "common": "Eslovenia"
            },
            "fin": {
                "official": "Slovenian tasavalta",
                "common": "Slovenia"
            },
            "est": {
                "official": "Sloveenia Vabariik",
                "common": "Sloveenia"
            },
            "zho": {
                "official": "斯洛文尼亚共和国",
                "common": "斯洛文尼亚"
            },
            "pol": {
                "official": "Republika Słowenii",
                "common": "Słowenia"
            }
        },
        "latlng": [
            46.11666666,
            14.81666666
        ],
        "demonym": "Slovene",
        "landlocked": false,
        "borders": [
            "AUT",
            "HRV",
            "ITA",
            "HUN"
        ],
        "area": 20273,
        "flag": "🇸🇮"
    },
    {
        "name": {
            "common": "Sweden",
            "official": "Kingdom of Sweden",
            "native": {
                "swe": {
                    "official": "Konungariket Sverige",
                    "common": "Sverige"
                }
            }
        },
        "tld": [
            ".se"
        ],
        "cca2": "SE",
        "ccn3": "752",
        "cca3": "SWE",
        "cioc": "SWE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SEK"
        ],
        "callingCode": [
            "46"
        ],
        "capital": [
            "Stockholm"
        ],
        "altSpellings": [
            "SE",
            "Kingdom of Sweden",
            "Konungariket Sverige"
        ],
        "region": "Europe",
        "subregion": "Northern Europe",
        "languages": {
            "swe": "Swedish"
        },
        "translations": {
            "ces": {
                "official": "Švédské království",
                "common": "Švédsko"
            },
            "deu": {
                "official": "Königreich Schweden",
                "common": "Schweden"
            },
            "fra": {
                "official": "Royaume de Suède",
                "common": "Suède"
            },
            "hrv": {
                "official": "Kraljevina Švedska",
                "common": "Švedska"
            },
            "ita": {
                "official": "Regno di Svezia",
                "common": "Svezia"
            },
            "jpn": {
                "official": "スウェーデン王国",
                "common": "スウェーデン"
            },
            "nld": {
                "official": "Koninkrijk Zweden",
                "common": "Zweden"
            },
            "por": {
                "official": "Reino da Suécia",
                "common": "Suécia"
            },
            "rus": {
                "official": "Королевство Швеция",
                "common": "Швеция"
            },
            "slk": {
                "official": "Švédske kráľovstvo",
                "common": "Švédsko"
            },
            "spa": {
                "official": "Reino de Suecia",
                "common": "Suecia"
            },
            "fin": {
                "official": "Ruotsin kuningaskunta",
                "common": "Ruotsi"
            },
            "est": {
                "official": "Rootsi Kuningriik",
                "common": "Rootsi"
            },
            "zho": {
                "official": "瑞典王国",
                "common": "瑞典"
            },
            "pol": {
                "official": "Królestwo Szwecji",
                "common": "Szwecja"
            }
        },
        "latlng": [
            62,
            15
        ],
        "demonym": "Swedish",
        "landlocked": false,
        "borders": [
            "FIN",
            "NOR"
        ],
        "area": 450295,
        "flag": "🇸🇪"
    },
    {
        "name": {
            "common": "Eswatini",
            "official": "Kingdom of Eswatini",
            "native": {
                "eng": {
                    "official": "Kingdom of Eswatini",
                    "common": "Eswatini"
                },
                "ssw": {
                    "official": "Umbuso weSwatini",
                    "common": "eSwatini"
                }
            }
        },
        "tld": [
            ".sz"
        ],
        "cca2": "SZ",
        "ccn3": "748",
        "cca3": "SWZ",
        "cioc": "SWZ",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SZL"
        ],
        "callingCode": [
            "268"
        ],
        "capital": [
            "Lobamba"
        ],
        "altSpellings": [
            "SZ",
            "Swaziland",
            "weSwatini",
            "Swatini",
            "Ngwane",
            "Kingdom of Eswatini",
            "Umbuso weSwatini"
        ],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "eng": "English",
            "ssw": "Swazi"
        },
        "translations": {
            "ces": {
                "official": "Svazijské království",
                "common": "Svazijsko"
            },
            "deu": {
                "official": "Königreich Eswatini",
                "common": "Swasiland"
            },
            "fra": {
                "official": "Royaume d’Eswatini",
                "common": "Swaziland"
            },
            "hrv": {
                "official": "Kraljevina eSwatini",
                "common": "Svazi"
            },
            "ita": {
                "official": "Regno di eSwatini",
                "common": "Swaziland"
            },
            "jpn": {
                "official": "スワジランド王国",
                "common": "スワジランド"
            },
            "nld": {
                "official": "Koninkrijk eSwatini",
                "common": "Swaziland"
            },
            "por": {
                "official": "Reino de eSwatini",
                "common": "Suazilândia"
            },
            "rus": {
                "official": "Королевство Свазиленд",
                "common": "Свазиленд"
            },
            "slk": {
                "official": "Svazijské kráľovstvo",
                "common": "Svazijsko"
            },
            "spa": {
                "official": "Reino de eSwatini",
                "common": "Suazilandia"
            },
            "fin": {
                "official": "Swazimaan kuningaskunta",
                "common": "Swazimaa"
            },
            "est": {
                "official": "eSwatini Kuningriik",
                "common": "Svaasimaa"
            },
            "pol": {
                "official": "Królestwo Suazi",
                "common": "Suazi"
            },
            "zho": {
                "official": "斯威士兰王国",
                "common": "斯威士兰"
            }
        },
        "latlng": [
            -26.5,
            31.5
        ],
        "demonym": "Swazi",
        "landlocked": true,
        "borders": [
            "MOZ",
            "ZAF"
        ],
        "area": 17364,
        "flag": "🇸🇿"
    },
    {
        "name": {
            "common": "Sint Maarten",
            "official": "Sint Maarten",
            "native": {
                "eng": {
                    "official": "Sint Maarten",
                    "common": "Sint Maarten"
                },
                "fra": {
                    "official": "Saint-Martin",
                    "common": "Saint-Martin"
                },
                "nld": {
                    "official": "Sint Maarten",
                    "common": "Sint Maarten"
                }
            }
        },
        "tld": [
            ".sx"
        ],
        "cca2": "SX",
        "ccn3": "534",
        "cca3": "SXM",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "ANG"
        ],
        "callingCode": [
            "1721"
        ],
        "capital": [
            "Philipsburg"
        ],
        "altSpellings": [
            "SX",
            "Sint Maarten (Dutch part)"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English",
            "fra": "French",
            "nld": "Dutch"
        },
        "translations": {
            "ces": {
                "official": "Svatý Martin",
                "common": "Svatý Martin (Nizozemsko)"
            },
            "deu": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            },
            "fra": {
                "official": "Sint Maarten",
                "common": "Saint-Martin"
            },
            "hrv": {
                "official": "Sveti Martin",
                "common": "Sveti Martin"
            },
            "ita": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            },
            "jpn": {
                "official": "シントマールテン島",
                "common": "シント・マールテン"
            },
            "nld": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            },
            "por": {
                "official": "Sint Maarten",
                "common": "São Martinho"
            },
            "rus": {
                "official": "Синт-Маартен",
                "common": "Синт-Мартен"
            },
            "slk": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            },
            "spa": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            },
            "fin": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            },
            "est": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            },
            "zho": {
                "official": "圣马丁岛",
                "common": "圣马丁岛"
            },
            "pol": {
                "official": "Sint Maarten",
                "common": "Sint Maarten"
            }
        },
        "latlng": [
            18.033333,
            -63.05
        ],
        "demonym": "St. Maartener",
        "landlocked": false,
        "borders": [
            "MAF"
        ],
        "area": 34,
        "flag": "🇸🇽"
    },
    {
        "name": {
            "common": "Seychelles",
            "official": "Republic of Seychelles",
            "native": {
                "crs": {
                    "official": "Repiblik Sesel",
                    "common": "Sesel"
                },
                "eng": {
                    "official": "Republic of Seychelles",
                    "common": "Seychelles"
                },
                "fra": {
                    "official": "République des Seychelles",
                    "common": "Seychelles"
                }
            }
        },
        "tld": [
            ".sc"
        ],
        "cca2": "SC",
        "ccn3": "690",
        "cca3": "SYC",
        "cioc": "SEY",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SCR"
        ],
        "callingCode": [
            "248"
        ],
        "capital": [
            "Victoria"
        ],
        "altSpellings": [
            "SC",
            "Republic of Seychelles",
            "Repiblik Sesel",
            "République des Seychelles"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "crs": "Seychellois Creole",
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Seychelská republika",
                "common": "Seychely"
            },
            "deu": {
                "official": "Republik der Seychellen",
                "common": "Seychellen"
            },
            "fra": {
                "official": "République des Seychelles",
                "common": "Seychelles"
            },
            "hrv": {
                "official": "Republika Sejšeli",
                "common": "Sejšeli"
            },
            "ita": {
                "official": "Repubblica delle Seychelles",
                "common": "Seychelles"
            },
            "jpn": {
                "official": "セイシェル共和国",
                "common": "セーシェル"
            },
            "nld": {
                "official": "Republiek der Seychellen",
                "common": "Seychellen"
            },
            "por": {
                "official": "República das Seychelles",
                "common": "Seicheles"
            },
            "rus": {
                "official": "Республика Сейшельские Острова",
                "common": "Сейшельские Острова"
            },
            "slk": {
                "official": "Seychelská republika",
                "common": "Seychely"
            },
            "spa": {
                "official": "República de las Seychelles",
                "common": "Seychelles"
            },
            "fin": {
                "official": "Seychellien tasavalta",
                "common": "Seychellit"
            },
            "est": {
                "official": "Seišelli Vabariik",
                "common": "Seišellid"
            },
            "zho": {
                "official": "塞舌尔共和国",
                "common": "塞舌尔"
            },
            "pol": {
                "official": "Republika Seszeli",
                "common": "Seszele"
            }
        },
        "latlng": [
            -4.58333333,
            55.66666666
        ],
        "demonym": "Seychellois",
        "landlocked": false,
        "borders": [],
        "area": 452,
        "flag": "🇸🇨"
    },
    {
        "name": {
            "common": "Syria",
            "official": "Syrian Arab Republic",
            "native": {
                "ara": {
                    "official": "الجمهورية العربية السورية",
                    "common": "سوريا"
                }
            }
        },
        "tld": [
            ".sy",
            "سوريا."
        ],
        "cca2": "SY",
        "ccn3": "760",
        "cca3": "SYR",
        "cioc": "SYR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "SYP"
        ],
        "callingCode": [
            "963"
        ],
        "capital": [
            "Damascus"
        ],
        "altSpellings": [
            "SY",
            "Syrian Arab Republic",
            "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Syrská arabská republika",
                "common": "Sýrie"
            },
            "deu": {
                "official": "Arabische Republik Syrien",
                "common": "Syrien"
            },
            "fra": {
                "official": "République arabe syrienne",
                "common": "Syrie"
            },
            "hrv": {
                "official": "Sirijska Arapska Republika",
                "common": "Sirija"
            },
            "ita": {
                "official": "Repubblica araba siriana",
                "common": "Siria"
            },
            "jpn": {
                "official": "シリアアラブ共和国",
                "common": "シリア・アラブ共和国"
            },
            "nld": {
                "official": "Syrische Arabische Republiek",
                "common": "Syrië"
            },
            "por": {
                "official": "República Árabe Síria",
                "common": "Síria"
            },
            "rus": {
                "official": "Сирийская Арабская Республика",
                "common": "Сирия"
            },
            "slk": {
                "official": "Sýrska arabská republika",
                "common": "Sýria"
            },
            "spa": {
                "official": "República Árabe Siria",
                "common": "Siria"
            },
            "fin": {
                "official": "Syyrian arabitasavalta",
                "common": "Syyria"
            },
            "est": {
                "official": "Süüria Araabia Vabariik",
                "common": "Süüria"
            },
            "zho": {
                "official": "叙利亚阿拉伯共和国",
                "common": "叙利亚"
            },
            "pol": {
                "official": "Syryjska Republika Arabska",
                "common": "Syria"
            }
        },
        "latlng": [
            35,
            38
        ],
        "demonym": "Syrian",
        "landlocked": false,
        "borders": [
            "IRQ",
            "ISR",
            "JOR",
            "LBN",
            "TUR"
        ],
        "area": 185180,
        "flag": "🇸🇾"
    },
    {
        "name": {
            "common": "Turks and Caicos Islands",
            "official": "Turks and Caicos Islands",
            "native": {
                "eng": {
                    "official": "Turks and Caicos Islands",
                    "common": "Turks and Caicos Islands"
                }
            }
        },
        "tld": [
            ".tc"
        ],
        "cca2": "TC",
        "ccn3": "796",
        "cca3": "TCA",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1649"
        ],
        "capital": [
            "Cockburn Town"
        ],
        "altSpellings": [
            "TC"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Turks a Caicos",
                "common": "Turks a Caicos"
            },
            "deu": {
                "official": "Turks und Caicos Inseln",
                "common": "Turks-und Caicosinseln"
            },
            "fra": {
                "official": "Îles Turques et Caïques",
                "common": "Îles Turques-et-Caïques"
            },
            "hrv": {
                "official": "Otoci Turks i Caicos",
                "common": "Otoci Turks i Caicos"
            },
            "ita": {
                "official": "Turks e Caicos",
                "common": "Isole Turks e Caicos"
            },
            "jpn": {
                "official": "タークス·カイコス諸島",
                "common": "タークス・カイコス諸島"
            },
            "nld": {
                "official": "Turks-en Caicoseilanden",
                "common": "Turks-en Caicoseilanden"
            },
            "por": {
                "official": "Ilhas Turks e Caicos",
                "common": "Ilhas Turks e Caicos"
            },
            "rus": {
                "official": "Теркс и Кайкос острова",
                "common": "Теркс и Кайкос"
            },
            "slk": {
                "official": "Ostrovy Turks a Caicos",
                "common": "Turks a Caicos"
            },
            "spa": {
                "official": "Islas Turcas y Caicos",
                "common": "Islas Turks y Caicos"
            },
            "fin": {
                "official": "Turks-ja Caicossaaret",
                "common": "Turks-ja Caicossaaret"
            },
            "est": {
                "official": "Turksi ja Caicose saared",
                "common": "Turks ja Caicos"
            },
            "zho": {
                "official": "特克斯和凯科斯群岛",
                "common": "特克斯和凯科斯群岛"
            },
            "pol": {
                "official": "Turks i Caicos",
                "common": "Turks i Caicos"
            }
        },
        "latlng": [
            21.75,
            -71.58333333
        ],
        "demonym": "Turks and Caicos Islander",
        "landlocked": false,
        "borders": [],
        "area": 948,
        "flag": "🇹🇨"
    },
    {
        "name": {
            "common": "Chad",
            "official": "Republic of Chad",
            "native": {
                "ara": {
                    "official": "جمهورية تشاد",
                    "common": "تشاد\u200e"
                },
                "fra": {
                    "official": "République du Tchad",
                    "common": "Tchad"
                }
            }
        },
        "tld": [
            ".td"
        ],
        "cca2": "TD",
        "ccn3": "148",
        "cca3": "TCD",
        "cioc": "CHA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XAF"
        ],
        "callingCode": [
            "235"
        ],
        "capital": [
            "N'Djamena"
        ],
        "altSpellings": [
            "TD",
            "Tchad",
            "Republic of Chad",
            "République du Tchad"
        ],
        "region": "Africa",
        "subregion": "Middle Africa",
        "languages": {
            "ara": "Arabic",
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Čadská republika",
                "common": "Čad"
            },
            "cym": {
                "official": "Gweriniaeth Tsiad",
                "common": "Tsiad"
            },
            "deu": {
                "official": "Republik Tschad",
                "common": "Tschad"
            },
            "fra": {
                "official": "République du Tchad",
                "common": "Tchad"
            },
            "hrv": {
                "official": "Čadu",
                "common": "Čad"
            },
            "ita": {
                "official": "Repubblica del Ciad",
                "common": "Ciad"
            },
            "jpn": {
                "official": "チャド共和国",
                "common": "チャド"
            },
            "nld": {
                "official": "Republiek Tsjaad",
                "common": "Tsjaad"
            },
            "por": {
                "official": "República do Chade",
                "common": "Chade"
            },
            "rus": {
                "official": "Республика Чад",
                "common": "Чад"
            },
            "slk": {
                "official": "Čadská republika",
                "common": "Čad"
            },
            "spa": {
                "official": "República de Chad",
                "common": "Chad"
            },
            "fin": {
                "official": "Tšadin tasavalta",
                "common": "Tšad"
            },
            "est": {
                "official": "Tšaadi Vabariik",
                "common": "Tšaad"
            },
            "zho": {
                "official": "乍得共和国",
                "common": "乍得"
            },
            "pol": {
                "official": "Republika Czadu",
                "common": "Czad"
            }
        },
        "latlng": [
            15,
            19
        ],
        "demonym": "Chadian",
        "landlocked": true,
        "borders": [
            "CMR",
            "CAF",
            "LBY",
            "NER",
            "NGA",
            "SDN"
        ],
        "area": 1284000,
        "flag": "🇹🇩"
    },
    {
        "name": {
            "common": "Togo",
            "official": "Togolese Republic",
            "native": {
                "fra": {
                    "official": "République togolaise",
                    "common": "Togo"
                }
            }
        },
        "tld": [
            ".tg"
        ],
        "cca2": "TG",
        "ccn3": "768",
        "cca3": "TGO",
        "cioc": "TOG",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XOF"
        ],
        "callingCode": [
            "228"
        ],
        "capital": [
            "Lomé"
        ],
        "altSpellings": [
            "TG",
            "Togolese",
            "Togolese Republic",
            "République Togolaise"
        ],
        "region": "Africa",
        "subregion": "Western Africa",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Republika Togo",
                "common": "Togo"
            },
            "deu": {
                "official": "Republik Togo",
                "common": "Togo"
            },
            "fra": {
                "official": "République togolaise",
                "common": "Togo"
            },
            "hrv": {
                "official": "Togolese Republika",
                "common": "Togo"
            },
            "ita": {
                "official": "Repubblica del Togo",
                "common": "Togo"
            },
            "jpn": {
                "official": "トーゴ共和国",
                "common": "トーゴ"
            },
            "nld": {
                "official": "Republiek Togo",
                "common": "Togo"
            },
            "por": {
                "official": "República do Togo",
                "common": "Togo"
            },
            "rus": {
                "official": "Того Республика",
                "common": "Того"
            },
            "slk": {
                "official": "Togská republika",
                "common": "Togo"
            },
            "spa": {
                "official": "República de Togo",
                "common": "Togo"
            },
            "fin": {
                "official": "Togon tasavalta",
                "common": "Togo"
            },
            "est": {
                "official": "Togo Vabariik",
                "common": "Togo"
            },
            "zho": {
                "official": "多哥共和国",
                "common": "多哥"
            },
            "pol": {
                "official": "Republika Togijska",
                "common": "Togo"
            }
        },
        "latlng": [
            8,
            1.16666666
        ],
        "demonym": "Togolese",
        "landlocked": false,
        "borders": [
            "BEN",
            "BFA",
            "GHA"
        ],
        "area": 56785,
        "flag": "🇹🇬"
    },
    {
        "name": {
            "common": "Thailand",
            "official": "Kingdom of Thailand",
            "native": {
                "tha": {
                    "official": "ราชอาณาจักรไทย",
                    "common": "ประเทศไทย"
                }
            }
        },
        "tld": [
            ".th",
            ".ไทย"
        ],
        "cca2": "TH",
        "ccn3": "764",
        "cca3": "THA",
        "cioc": "THA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "THB"
        ],
        "callingCode": [
            "66"
        ],
        "capital": [
            "Bangkok"
        ],
        "altSpellings": [
            "TH",
            "Prathet",
            "Thai",
            "Kingdom of Thailand",
            "ราชอาณาจักรไทย",
            "Ratcha Anachak Thai"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "tha": "Thai"
        },
        "translations": {
            "ces": {
                "official": "Thajské království",
                "common": "Thajsko"
            },
            "deu": {
                "official": "Königreich Thailand",
                "common": "Thailand"
            },
            "fra": {
                "official": "Royaume de Thaïlande",
                "common": "Thaïlande"
            },
            "hrv": {
                "official": "Kraljevina Tajland",
                "common": "Tajland"
            },
            "ita": {
                "official": "Regno di Thailandia",
                "common": "Tailandia"
            },
            "jpn": {
                "official": "タイ王国",
                "common": "タイ"
            },
            "nld": {
                "official": "Koninkrijk Thailand",
                "common": "Thailand"
            },
            "por": {
                "official": "Reino da Tailândia",
                "common": "Tailândia"
            },
            "rus": {
                "official": "Королевство Таиланд",
                "common": "Таиланд"
            },
            "slk": {
                "official": "Thajské kráľovstvo",
                "common": "Thajsko"
            },
            "spa": {
                "official": "Reino de Tailandia",
                "common": "Tailandia"
            },
            "fin": {
                "official": "Thaimaan kuningaskunta",
                "common": "Thaimaa"
            },
            "est": {
                "official": "Tai Kuningriik",
                "common": "Tai"
            },
            "zho": {
                "official": "泰王国",
                "common": "泰国"
            },
            "pol": {
                "official": "Królestwo Tajlandii",
                "common": "Tajlandia"
            }
        },
        "latlng": [
            15,
            100
        ],
        "demonym": "Thai",
        "landlocked": false,
        "borders": [
            "MMR",
            "KHM",
            "LAO",
            "MYS"
        ],
        "area": 513120,
        "flag": "🇹🇭"
    },
    {
        "name": {
            "common": "Tajikistan",
            "official": "Republic of Tajikistan",
            "native": {
                "rus": {
                    "official": "Республика Таджикистан",
                    "common": "Таджикистан"
                },
                "tgk": {
                    "official": "Ҷумҳурии Тоҷикистон",
                    "common": "Тоҷикистон"
                }
            }
        },
        "tld": [
            ".tj"
        ],
        "cca2": "TJ",
        "ccn3": "762",
        "cca3": "TJK",
        "cioc": "TJK",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "TJS"
        ],
        "callingCode": [
            "992"
        ],
        "capital": [
            "Dushanbe"
        ],
        "altSpellings": [
            "TJ",
            "Toçikiston",
            "Republic of Tajikistan",
            "Ҷумҳурии Тоҷикистон",
            "Çumhuriyi Toçikiston"
        ],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "rus": "Russian",
            "tgk": "Tajik"
        },
        "translations": {
            "ces": {
                "official": "Republika Tádžikistán",
                "common": "Tádžikistán"
            },
            "deu": {
                "official": "Republik Tadschikistan",
                "common": "Tadschikistan"
            },
            "fra": {
                "official": "République du Tadjikistan",
                "common": "Tadjikistan"
            },
            "hrv": {
                "official": "Republika Tadžikistan",
                "common": "Tađikistan"
            },
            "ita": {
                "official": "Repubblica del Tajikistan",
                "common": "Tagikistan"
            },
            "jpn": {
                "official": "タジキスタン共和国",
                "common": "タジキスタン"
            },
            "nld": {
                "official": "Tadzjikistan",
                "common": "Tadzjikistan"
            },
            "por": {
                "official": "República do Tajiquistão",
                "common": "Tajiquistão"
            },
            "rus": {
                "official": "Республика Таджикистан",
                "common": "Таджикистан"
            },
            "slk": {
                "official": "Taǆická republika",
                "common": "Taǆikistan"
            },
            "spa": {
                "official": "República de Tayikistán",
                "common": "Tayikistán"
            },
            "fin": {
                "official": "Tadžikistanin tasavalta",
                "common": "Tadžikistan"
            },
            "est": {
                "official": "Tadžikistani Vabariik",
                "common": "Tadžikistan"
            },
            "zho": {
                "official": "塔吉克斯坦共和国",
                "common": "塔吉克斯坦"
            },
            "pol": {
                "official": "Republika Tadżykistanu",
                "common": "Tadżykistan"
            }
        },
        "latlng": [
            39,
            71
        ],
        "demonym": "Tadzhik",
        "landlocked": true,
        "borders": [
            "AFG",
            "CHN",
            "KGZ",
            "UZB"
        ],
        "area": 143100,
        "flag": "🇹🇯"
    },
    {
        "name": {
            "common": "Tokelau",
            "official": "Tokelau",
            "native": {
                "eng": {
                    "official": "Tokelau",
                    "common": "Tokelau"
                },
                "smo": {
                    "official": "Tokelau",
                    "common": "Tokelau"
                },
                "tkl": {
                    "official": "Tokelau",
                    "common": "Tokelau"
                }
            }
        },
        "tld": [
            ".tk"
        ],
        "cca2": "TK",
        "ccn3": "772",
        "cca3": "TKL",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "NZD"
        ],
        "callingCode": [
            "690"
        ],
        "capital": [
            "Fakaofo"
        ],
        "altSpellings": [
            "TK"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "smo": "Samoan",
            "tkl": "Tokelauan"
        },
        "translations": {
            "ces": {
                "official": "Tokelau",
                "common": "Tokelau"
            },
            "deu": {
                "official": "Tokelau",
                "common": "Tokelau"
            },
            "fra": {
                "official": "Îles Tokelau",
                "common": "Tokelau"
            },
            "hrv": {
                "official": "Tokelau",
                "common": "Tokelau"
            },
            "ita": {
                "official": "Tokelau",
                "common": "Isole Tokelau"
            },
            "jpn": {
                "official": "トケラウ諸島",
                "common": "トケラウ"
            },
            "nld": {
                "official": "Tokelau",
                "common": "Tokelau"
            },
            "por": {
                "official": "Tokelau",
                "common": "Tokelau"
            },
            "rus": {
                "official": "Токелау",
                "common": "Токелау"
            },
            "slk": {
                "official": "Tokelauské ostrovy",
                "common": "Tokelau"
            },
            "spa": {
                "official": "Tokelau",
                "common": "Islas Tokelau"
            },
            "fin": {
                "official": "Tokelau",
                "common": "Tokelau"
            },
            "est": {
                "official": "Tokelau",
                "common": "Tokelau"
            },
            "zho": {
                "official": "托克劳",
                "common": "托克劳"
            },
            "pol": {
                "official": "Tokelau",
                "common": "Tokelau"
            }
        },
        "latlng": [
            -9,
            -172
        ],
        "demonym": "Tokelauan",
        "landlocked": false,
        "borders": [],
        "area": 12,
        "flag": "🇹🇰"
    },
    {
        "name": {
            "common": "Turkmenistan",
            "official": "Turkmenistan",
            "native": {
                "rus": {
                    "official": "Туркменистан",
                    "common": "Туркмения"
                },
                "tuk": {
                    "official": "Türkmenistan",
                    "common": "Türkmenistan"
                }
            }
        },
        "tld": [
            ".tm"
        ],
        "cca2": "TM",
        "ccn3": "795",
        "cca3": "TKM",
        "cioc": "TKM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "TMT"
        ],
        "callingCode": [
            "993"
        ],
        "capital": [
            "Ashgabat"
        ],
        "altSpellings": [
            "TM"
        ],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "rus": "Russian",
            "tuk": "Turkmen"
        },
        "translations": {
            "ces": {
                "official": "Turkmenistán",
                "common": "Turkmenistán"
            },
            "deu": {
                "official": "Turkmenistan",
                "common": "Turkmenistan"
            },
            "fra": {
                "official": "Turkménistan",
                "common": "Turkménistan"
            },
            "hrv": {
                "official": "Turkmenistan",
                "common": "Turkmenistan"
            },
            "ita": {
                "official": "Turkmenistan",
                "common": "Turkmenistan"
            },
            "jpn": {
                "official": "トルクメニスタン",
                "common": "トルクメニスタン"
            },
            "nld": {
                "official": "Turkmenistan",
                "common": "Turkmenistan"
            },
            "por": {
                "official": "Turcomenistão",
                "common": "Turquemenistão"
            },
            "rus": {
                "official": "Туркменистан",
                "common": "Туркмения"
            },
            "slk": {
                "official": "Turkménsko",
                "common": "Turkménsko"
            },
            "spa": {
                "official": "Turkmenistán",
                "common": "Turkmenistán"
            },
            "fin": {
                "official": "Turkmenistan",
                "common": "Turkmenistan"
            },
            "est": {
                "official": "Türkmenistan",
                "common": "Türkmenistan"
            },
            "zho": {
                "official": "土库曼斯坦",
                "common": "土库曼斯坦"
            },
            "pol": {
                "official": "Republika Turkmenistanu",
                "common": "Turkmenistan"
            }
        },
        "latlng": [
            40,
            60
        ],
        "demonym": "Turkmen",
        "landlocked": true,
        "borders": [
            "AFG",
            "IRN",
            "KAZ",
            "UZB"
        ],
        "area": 488100,
        "flag": "🇹🇲"
    },
    {
        "name": {
            "common": "Timor-Leste",
            "official": "Democratic Republic of Timor-Leste",
            "native": {
                "por": {
                    "official": "República Democrática de Timor-Leste",
                    "common": "Timor-Leste"
                },
                "tet": {
                    "official": "Repúblika Demokrátika Timór-Leste",
                    "common": "Timór-Leste"
                }
            }
        },
        "tld": [
            ".tl"
        ],
        "cca2": "TL",
        "ccn3": "626",
        "cca3": "TLS",
        "cioc": "TLS",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "670"
        ],
        "capital": [
            "Dili"
        ],
        "altSpellings": [
            "TL",
            "East Timor",
            "Democratic Republic of Timor-Leste",
            "República Democrática de Timor-Leste",
            "Repúblika Demokrátika Timór-Leste",
            "Timór Lorosa'e",
            "Timor Lorosae"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "por": "Portuguese",
            "tet": "Tetum"
        },
        "translations": {
            "ces": {
                "official": "Demokratická republika Východní Timor",
                "common": "Východní Timor"
            },
            "deu": {
                "official": "Demokratische Republik Timor-Leste",
                "common": "Osttimor"
            },
            "fra": {
                "official": "République démocratique du Timor oriental",
                "common": "Timor oriental"
            },
            "hrv": {
                "official": "Demokratska Republika Timor-Leste",
                "common": "Istočni Timor"
            },
            "ita": {
                "official": "Repubblica Democratica di Timor Est",
                "common": "Timor Est"
            },
            "jpn": {
                "official": "東ティモール民主共和国",
                "common": "東ティモール"
            },
            "nld": {
                "official": "Democratische Republiek Oost-Timor",
                "common": "Oost-Timor"
            },
            "por": {
                "official": "República Democrática de Timor-Leste",
                "common": "Timor-Leste"
            },
            "rus": {
                "official": "Демократическая Республика Тимор -Лешти",
                "common": "Восточный Тимор"
            },
            "slk": {
                "official": "Východotimorská demokratická republika",
                "common": "Východný Timor"
            },
            "spa": {
                "official": "República Democrática de Timor-Leste",
                "common": "Timor Oriental"
            },
            "fin": {
                "official": "Itä-Timorin demokraattinen tasavalta",
                "common": "Itä-Timor"
            },
            "est": {
                "official": "Timor-Leste Demokraatlik Vabariik",
                "common": "Ida-Timor"
            },
            "zho": {
                "official": "东帝汶民主共和国",
                "common": "东帝汶"
            },
            "pol": {
                "official": "Demokratyczna Republika Timoru Wschodniego",
                "common": "Timor Wschodni"
            }
        },
        "latlng": [
            -8.83333333,
            125.91666666
        ],
        "demonym": "East Timorese",
        "landlocked": false,
        "borders": [
            "IDN"
        ],
        "area": 14874,
        "flag": "🇹🇱"
    },
    {
        "name": {
            "common": "Tonga",
            "official": "Kingdom of Tonga",
            "native": {
                "eng": {
                    "official": "Kingdom of Tonga",
                    "common": "Tonga"
                },
                "ton": {
                    "official": "Kingdom of Tonga",
                    "common": "Tonga"
                }
            }
        },
        "tld": [
            ".to"
        ],
        "cca2": "TO",
        "ccn3": "776",
        "cca3": "TON",
        "cioc": "TGA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "TOP"
        ],
        "callingCode": [
            "676"
        ],
        "capital": [
            "Nuku'alofa"
        ],
        "altSpellings": [
            "TO"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "ton": "Tongan"
        },
        "translations": {
            "ces": {
                "official": "Království Tonga",
                "common": "Tonga"
            },
            "deu": {
                "official": "Königreich Tonga",
                "common": "Tonga"
            },
            "fra": {
                "official": "Royaume des Tonga",
                "common": "Tonga"
            },
            "hrv": {
                "official": "Kraljevina Tonga",
                "common": "Tonga"
            },
            "ita": {
                "official": "Regno di Tonga",
                "common": "Tonga"
            },
            "jpn": {
                "official": "トンガ王国",
                "common": "トンガ"
            },
            "nld": {
                "official": "Koninkrijk Tonga",
                "common": "Tonga"
            },
            "por": {
                "official": "Reino de Tonga",
                "common": "Tonga"
            },
            "rus": {
                "official": "Королевство Тонга",
                "common": "Тонга"
            },
            "slk": {
                "official": "Tongské kráľovstvo",
                "common": "Tonga"
            },
            "spa": {
                "official": "Reino de Tonga",
                "common": "Tonga"
            },
            "fin": {
                "official": "Tongan kuningaskunta",
                "common": "Tonga"
            },
            "est": {
                "official": "Tonga Kuningriik",
                "common": "Tonga"
            },
            "zho": {
                "official": "汤加王国",
                "common": "汤加"
            },
            "pol": {
                "official": "Królestwo Tonga",
                "common": "Tonga"
            }
        },
        "latlng": [
            -20,
            -175
        ],
        "demonym": "Tongan",
        "landlocked": false,
        "borders": [],
        "area": 747,
        "flag": "🇹🇴"
    },
    {
        "name": {
            "common": "Trinidad and Tobago",
            "official": "Republic of Trinidad and Tobago",
            "native": {
                "eng": {
                    "official": "Republic of Trinidad and Tobago",
                    "common": "Trinidad and Tobago"
                }
            }
        },
        "tld": [
            ".tt"
        ],
        "cca2": "TT",
        "ccn3": "780",
        "cca3": "TTO",
        "cioc": "TTO",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "TTD"
        ],
        "callingCode": [
            "1868"
        ],
        "capital": [
            "Port of Spain"
        ],
        "altSpellings": [
            "TT",
            "Republic of Trinidad and Tobago"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Republika Trinidad a Tobago",
                "common": "Trinidad a Tobago"
            },
            "deu": {
                "official": "Republik Trinidad und Tobago",
                "common": "Trinidad und Tobago"
            },
            "fra": {
                "official": "République de Trinité-et-Tobago",
                "common": "Trinité-et-Tobago"
            },
            "hrv": {
                "official": "Republika Trinidad i Tobago",
                "common": "Trinidad i Tobago"
            },
            "ita": {
                "official": "Repubblica di Trinidad e Tobago",
                "common": "Trinidad e Tobago"
            },
            "jpn": {
                "official": "トリニダード·トバゴ共和国",
                "common": "トリニダード・トバゴ"
            },
            "nld": {
                "official": "Republiek Trinidad en Tobago",
                "common": "Trinidad en Tobago"
            },
            "por": {
                "official": "República de Trinidad e Tobago",
                "common": "Trinidade e Tobago"
            },
            "rus": {
                "official": "Республика Тринидад и Тобаго",
                "common": "Тринидад и Тобаго"
            },
            "slk": {
                "official": "Republika Trinidad a Tobaga",
                "common": "Trinidad a Tobago"
            },
            "spa": {
                "official": "República de Trinidad y Tobago",
                "common": "Trinidad y Tobago"
            },
            "fin": {
                "official": "Trinidadin ja Tobagon tasavalta",
                "common": "Trinidad ja Tobago"
            },
            "est": {
                "official": "Trinidadi ja Tobago Vabariik",
                "common": "Trinidad ja Tobago"
            },
            "zho": {
                "official": "特立尼达和多巴哥共和国",
                "common": "特立尼达和多巴哥"
            },
            "pol": {
                "official": "Trynidad i Tobago",
                "common": "Trynidad i Tobago"
            }
        },
        "latlng": [
            11,
            -61
        ],
        "demonym": "Trinidadian",
        "landlocked": false,
        "borders": [],
        "area": 5130,
        "flag": "🇹🇹"
    },
    {
        "name": {
            "common": "Tunisia",
            "official": "Tunisian Republic",
            "native": {
                "ara": {
                    "official": "الجمهورية التونسية",
                    "common": "تونس"
                }
            }
        },
        "tld": [
            ".tn"
        ],
        "cca2": "TN",
        "ccn3": "788",
        "cca3": "TUN",
        "cioc": "TUN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "TND"
        ],
        "callingCode": [
            "216"
        ],
        "capital": [
            "Tunis"
        ],
        "altSpellings": [
            "TN",
            "Republic of Tunisia",
            "al-Jumhūriyyah at-Tūnisiyyah"
        ],
        "region": "Africa",
        "subregion": "Northern Africa",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Tuniská republika",
                "common": "Tunisko"
            },
            "deu": {
                "official": "Tunesische Republik",
                "common": "Tunesien"
            },
            "fra": {
                "official": "République tunisienne",
                "common": "Tunisie"
            },
            "hrv": {
                "official": "Tuniski Republika",
                "common": "Tunis"
            },
            "ita": {
                "official": "Repubblica tunisina",
                "common": "Tunisia"
            },
            "jpn": {
                "official": "チュニジア共和国",
                "common": "チュニジア"
            },
            "nld": {
                "official": "Republiek Tunesië",
                "common": "Tunesië"
            },
            "por": {
                "official": "República da Tunísia",
                "common": "Tunísia"
            },
            "rus": {
                "official": "Тунисской Республики",
                "common": "Тунис"
            },
            "slk": {
                "official": "Tuniská republika",
                "common": "Tunisko"
            },
            "spa": {
                "official": "República de Túnez",
                "common": "Túnez"
            },
            "fin": {
                "official": "Tunisian tasavalta",
                "common": "Tunisia"
            },
            "est": {
                "official": "Tuneesia Vabariik",
                "common": "Tuneesia"
            },
            "zho": {
                "official": "突尼斯共和国",
                "common": "突尼斯"
            },
            "pol": {
                "official": "Republika Tunezyjska",
                "common": "Tunezja"
            }
        },
        "latlng": [
            34,
            9
        ],
        "demonym": "Tunisian",
        "landlocked": false,
        "borders": [
            "DZA",
            "LBY"
        ],
        "area": 163610,
        "flag": "🇹🇳"
    },
    {
        "name": {
            "common": "Turkey",
            "official": "Republic of Turkey",
            "native": {
                "tur": {
                    "official": "Türkiye Cumhuriyeti",
                    "common": "Türkiye"
                }
            }
        },
        "tld": [
            ".tr"
        ],
        "cca2": "TR",
        "ccn3": "792",
        "cca3": "TUR",
        "cioc": "TUR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "TRY"
        ],
        "callingCode": [
            "90"
        ],
        "capital": [
            "Ankara"
        ],
        "altSpellings": [
            "TR",
            "Turkiye",
            "Republic of Turkey",
            "Türkiye Cumhuriyeti"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "tur": "Turkish"
        },
        "translations": {
            "ces": {
                "official": "Turecká republika",
                "common": "Turecko"
            },
            "deu": {
                "official": "Republik Türkei",
                "common": "Türkei"
            },
            "fra": {
                "official": "République de Turquie",
                "common": "Turquie"
            },
            "hrv": {
                "official": "Republika Turska",
                "common": "Turska"
            },
            "ita": {
                "official": "Repubblica di Turchia",
                "common": "Turchia"
            },
            "jpn": {
                "official": "トルコ共和国",
                "common": "トルコ"
            },
            "nld": {
                "official": "Republiek Turkije",
                "common": "Turkije"
            },
            "por": {
                "official": "República da Turquia",
                "common": "Turquia"
            },
            "rus": {
                "official": "Республика Турции",
                "common": "Турция"
            },
            "slk": {
                "official": "Turecká republika",
                "common": "Turecko"
            },
            "spa": {
                "official": "República de Turquía",
                "common": "Turquía"
            },
            "fin": {
                "official": "Turkin tasavalta",
                "common": "Turkki"
            },
            "est": {
                "official": "Türgi Vabariik",
                "common": "Türgi"
            },
            "zho": {
                "official": "土耳其共和国",
                "common": "土耳其"
            },
            "pol": {
                "official": "Republika Turcji",
                "common": "Turcja"
            }
        },
        "latlng": [
            39,
            35
        ],
        "demonym": "Turkish",
        "landlocked": false,
        "borders": [
            "ARM",
            "AZE",
            "BGR",
            "GEO",
            "GRC",
            "IRN",
            "IRQ",
            "SYR"
        ],
        "area": 783562,
        "flag": "🇹🇷"
    },
    {
        "name": {
            "common": "Tuvalu",
            "official": "Tuvalu",
            "native": {
                "eng": {
                    "official": "Tuvalu",
                    "common": "Tuvalu"
                },
                "tvl": {
                    "official": "Tuvalu",
                    "common": "Tuvalu"
                }
            }
        },
        "tld": [
            ".tv"
        ],
        "cca2": "TV",
        "ccn3": "798",
        "cca3": "TUV",
        "cioc": "TUV",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "AUD"
        ],
        "callingCode": [
            "688"
        ],
        "capital": [
            "Funafuti"
        ],
        "altSpellings": [
            "TV"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "tvl": "Tuvaluan"
        },
        "translations": {
            "ces": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "deu": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "fra": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "hrv": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "ita": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "jpn": {
                "official": "ツバル",
                "common": "ツバル"
            },
            "nld": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "por": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "rus": {
                "official": "Тувалу",
                "common": "Тувалу"
            },
            "slk": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "spa": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "fin": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "est": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            },
            "zho": {
                "official": "图瓦卢",
                "common": "图瓦卢"
            },
            "pol": {
                "official": "Tuvalu",
                "common": "Tuvalu"
            }
        },
        "latlng": [
            -8,
            178
        ],
        "demonym": "Tuvaluan",
        "landlocked": false,
        "borders": [],
        "area": 26,
        "flag": "🇹🇻"
    },
    {
        "name": {
            "common": "Taiwan",
            "official": "Republic of China (Taiwan)",
            "native": {
                "zho": {
                    "official": "中華民國",
                    "common": "台灣"
                }
            }
        },
        "tld": [
            ".tw",
            ".台灣",
            ".台湾"
        ],
        "cca2": "TW",
        "ccn3": "158",
        "cca3": "TWN",
        "cioc": "TPE",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "TWD"
        ],
        "callingCode": [
            "886"
        ],
        "capital": [
            "Taipei"
        ],
        "altSpellings": [
            "TW",
            "Táiwān",
            "Republic of China",
            "中華民國",
            "Zhōnghuá Mínguó",
            "Chinese Taipei"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "zho": "Chinese"
        },
        "translations": {
            "ces": {
                "official": "Čínská republika",
                "common": "Tchaj-wan"
            },
            "deu": {
                "official": "Republik China (Taiwan)",
                "common": "Taiwan"
            },
            "fra": {
                "official": "République de Chine (Taïwan)",
                "common": "Taïwan"
            },
            "hrv": {
                "official": "Republika Kina",
                "common": "Tajvan"
            },
            "ita": {
                "official": "Repubblica cinese (Taiwan)",
                "common": "Taiwan"
            },
            "jpn": {
                "official": "中華民国",
                "common": "台湾"
            },
            "nld": {
                "official": "Republiek China (Taiwan)",
                "common": "Taiwan"
            },
            "por": {
                "official": "República da China",
                "common": "Ilha Formosa"
            },
            "rus": {
                "official": "Китайская Республика",
                "common": "Тайвань"
            },
            "slk": {
                "official": "Čínska republika",
                "common": "Taiwan"
            },
            "spa": {
                "official": "República de China en Taiwán",
                "common": "Taiwán"
            },
            "fin": {
                "official": "Kiinan tasavalta",
                "common": "Taiwan"
            },
            "est": {
                "official": "Taiwani",
                "common": "Taiwan"
            },
            "pol": {
                "official": "Republika Chińska (Tajwan)",
                "common": "Tajwan"
            }
        },
        "latlng": [
            23.5,
            121
        ],
        "demonym": "Taiwanese",
        "landlocked": false,
        "borders": [],
        "area": 36193,
        "flag": "🇹🇼"
    },
    {
        "name": {
            "common": "Tanzania",
            "official": "United Republic of Tanzania",
            "native": {
                "eng": {
                    "official": "United Republic of Tanzania",
                    "common": "Tanzania"
                },
                "swa": {
                    "official": "Jamhuri ya Muungano wa Tanzania",
                    "common": "Tanzania"
                }
            }
        },
        "tld": [
            ".tz"
        ],
        "cca2": "TZ",
        "ccn3": "834",
        "cca3": "TZA",
        "cioc": "TAN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "TZS"
        ],
        "callingCode": [
            "255"
        ],
        "capital": [
            "Dodoma"
        ],
        "altSpellings": [
            "TZ",
            "Tanzania, United Republic of",
            "United Republic of Tanzania",
            "Jamhuri ya Muungano wa Tanzania"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "swa": "Swahili"
        },
        "translations": {
            "ces": {
                "official": "Sjednocená tanzanská republika",
                "common": "Tanzanie"
            },
            "deu": {
                "official": "Vereinigte Republik Tansania",
                "common": "Tansania"
            },
            "fra": {
                "official": "République -Unie de Tanzanie",
                "common": "Tanzanie"
            },
            "hrv": {
                "official": "Ujedinjena Republika Tanzanija",
                "common": "Tanzanija"
            },
            "ita": {
                "official": "Repubblica Unita di Tanzania",
                "common": "Tanzania"
            },
            "jpn": {
                "official": "タンザニア連合共和国",
                "common": "タンザニア"
            },
            "nld": {
                "official": "Verenigde Republiek Tanzania",
                "common": "Tanzania"
            },
            "por": {
                "official": "República Unida da Tanzânia",
                "common": "Tanzânia"
            },
            "rus": {
                "official": "Объединенная Республика Танзания",
                "common": "Танзания"
            },
            "slk": {
                "official": "Tanzánijská zjednotená republika",
                "common": "Tanzánia"
            },
            "spa": {
                "official": "República Unida de Tanzania",
                "common": "Tanzania"
            },
            "fin": {
                "official": "Tansanian yhdistynyt tasavalta",
                "common": "Tansania"
            },
            "est": {
                "official": "Tansaania Ühendvabariik",
                "common": "Tansaania"
            },
            "zho": {
                "official": "坦桑尼亚联合共和国",
                "common": "坦桑尼亚"
            },
            "pol": {
                "official": "Zjednoczona Republika Tanzanii",
                "common": "Tanzania"
            }
        },
        "latlng": [
            -6,
            35
        ],
        "demonym": "Tanzanian",
        "landlocked": false,
        "borders": [
            "BDI",
            "COD",
            "KEN",
            "MWI",
            "MOZ",
            "RWA",
            "UGA",
            "ZMB"
        ],
        "area": 945087,
        "flag": "🇹🇿"
    },
    {
        "name": {
            "common": "Uganda",
            "official": "Republic of Uganda",
            "native": {
                "eng": {
                    "official": "Republic of Uganda",
                    "common": "Uganda"
                },
                "swa": {
                    "official": "Republic of Uganda",
                    "common": "Uganda"
                }
            }
        },
        "tld": [
            ".ug"
        ],
        "cca2": "UG",
        "ccn3": "800",
        "cca3": "UGA",
        "cioc": "UGA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "UGX"
        ],
        "callingCode": [
            "256"
        ],
        "capital": [
            "Kampala"
        ],
        "altSpellings": [
            "UG",
            "Republic of Uganda",
            "Jamhuri ya Uganda"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English",
            "swa": "Swahili"
        },
        "translations": {
            "ces": {
                "official": "Ugandská republika",
                "common": "Uganda"
            },
            "deu": {
                "official": "Republik Uganda",
                "common": "Uganda"
            },
            "fra": {
                "official": "République de l'Ouganda",
                "common": "Ouganda"
            },
            "hrv": {
                "official": "Republika Uganda",
                "common": "Uganda"
            },
            "ita": {
                "official": "Repubblica di Uganda",
                "common": "Uganda"
            },
            "jpn": {
                "official": "ウガンダ共和国",
                "common": "ウガンダ"
            },
            "nld": {
                "official": "Republiek Uganda",
                "common": "Oeganda"
            },
            "por": {
                "official": "República do Uganda",
                "common": "Uganda"
            },
            "rus": {
                "official": "Республика Уганда",
                "common": "Уганда"
            },
            "slk": {
                "official": "Ugandská republika",
                "common": "Uganda"
            },
            "spa": {
                "official": "República de Uganda",
                "common": "Uganda"
            },
            "fin": {
                "official": "Ugandan tasavalta",
                "common": "Uganda"
            },
            "est": {
                "official": "Uganda Vabariik",
                "common": "Uganda"
            },
            "zho": {
                "official": "乌干达共和国",
                "common": "乌干达"
            },
            "pol": {
                "official": "Republika Ugandy",
                "common": "Uganda"
            }
        },
        "latlng": [
            1,
            32
        ],
        "demonym": "Ugandan",
        "landlocked": true,
        "borders": [
            "COD",
            "KEN",
            "RWA",
            "SSD",
            "TZA"
        ],
        "area": 241550,
        "flag": "🇺🇬"
    },
    {
        "name": {
            "common": "Ukraine",
            "official": "Ukraine",
            "native": {
                "ukr": {
                    "official": "Україна",
                    "common": "Україна"
                }
            }
        },
        "tld": [
            ".ua",
            ".укр"
        ],
        "cca2": "UA",
        "ccn3": "804",
        "cca3": "UKR",
        "cioc": "UKR",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "UAH"
        ],
        "callingCode": [
            "380"
        ],
        "capital": [
            "Kyiv"
        ],
        "altSpellings": [
            "UA",
            "Ukrayina"
        ],
        "region": "Europe",
        "subregion": "Eastern Europe",
        "languages": {
            "ukr": "Ukrainian"
        },
        "translations": {
            "ces": {
                "official": "Ukrajina",
                "common": "Ukrajina"
            },
            "deu": {
                "official": "Ukraine",
                "common": "Ukraine"
            },
            "fra": {
                "official": "Ukraine",
                "common": "Ukraine"
            },
            "hrv": {
                "official": "Ukrajina",
                "common": "Ukrajina"
            },
            "ita": {
                "official": "Ucraina",
                "common": "Ucraina"
            },
            "jpn": {
                "official": "ウクライナ",
                "common": "ウクライナ"
            },
            "nld": {
                "official": "Oekraïne",
                "common": "Oekraïne"
            },
            "por": {
                "official": "Ucrânia",
                "common": "Ucrânia"
            },
            "rus": {
                "official": "Украина",
                "common": "Украина"
            },
            "slk": {
                "official": "Ukrajina",
                "common": "Ukrajina"
            },
            "spa": {
                "official": "Ucrania",
                "common": "Ucrania"
            },
            "fin": {
                "official": "Ukraina",
                "common": "Ukraina"
            },
            "est": {
                "official": "Ukraina",
                "common": "Ukraina"
            },
            "zho": {
                "official": "乌克兰",
                "common": "乌克兰"
            },
            "pol": {
                "official": "Ukraina",
                "common": "Ukraina"
            }
        },
        "latlng": [
            49,
            32
        ],
        "demonym": "Ukrainian",
        "landlocked": false,
        "borders": [
            "BLR",
            "HUN",
            "MDA",
            "POL",
            "ROU",
            "RUS",
            "SVK"
        ],
        "area": 603500,
        "flag": "🇺🇦"
    },
    {
        "name": {
            "common": "United States Minor Outlying Islands",
            "official": "United States Minor Outlying Islands",
            "native": {
                "eng": {
                    "official": "United States Minor Outlying Islands",
                    "common": "United States Minor Outlying Islands"
                }
            }
        },
        "tld": [
            ".us"
        ],
        "cca2": "UM",
        "ccn3": "581",
        "cca3": "UMI",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [],
        "capital": [
            ""
        ],
        "altSpellings": [
            "UM"
        ],
        "region": "Americas",
        "subregion": "North America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Menší odlehlé ostrovy Spojených států amerických",
                "common": "Menší odlehlé ostrovy USA"
            },
            "deu": {
                "official": "USA, kleinere ausgelagerte Inseln",
                "common": "Kleinere Inselbesitzungen der Vereinigten Staaten"
            },
            "fra": {
                "official": "Îles mineures éloignées des États-Unis",
                "common": "Îles mineures éloignées des États-Unis"
            },
            "hrv": {
                "official": "Mali udaljeni otoci SAD-a",
                "common": "Mali udaljeni otoci SAD-a"
            },
            "ita": {
                "official": "Stati Uniti Isole Minori",
                "common": "Isole minori esterne degli Stati Uniti d'America"
            },
            "jpn": {
                "official": "アメリカ合衆国外諸島",
                "common": "合衆国領有小離島"
            },
            "nld": {
                "official": "Kleine afgelegen eilanden van de Verenigde Staten",
                "common": "Kleine afgelegen eilanden van de Verenigde Staten"
            },
            "por": {
                "official": "Estados Unidos Ilhas Menores Distantes",
                "common": "Ilhas Menores Distantes dos Estados Unidos"
            },
            "rus": {
                "official": "Внешние малые острова США",
                "common": "Внешние малые острова США"
            },
            "slk": {
                "official": "Menšie odľahlé ostrovy Spjoených štátov",
                "common": "Menšie odľahlé ostrovy USA"
            },
            "spa": {
                "official": "Estados Unidos Islas menores alejadas de",
                "common": "Islas Ultramarinas Menores de Estados Unidos"
            },
            "fin": {
                "official": "Yhdysvaltain asumattomat saaret",
                "common": "Yhdysvaltain asumattomat saaret"
            },
            "est": {
                "official": "Ühendriikide väikesed hajasaared",
                "common": "Ühendriikide hajasaared"
            },
            "zho": {
                "official": "美国本土外小岛屿",
                "common": "美国本土外小岛屿"
            },
            "pol": {
                "official": "Dalekie Wyspy Mniejsze Stanów Zjednoczonych",
                "common": "Dalekie Wyspy Mniejsze Stanów Zjednoczonych"
            }
        },
        "latlng": [
            19.3,
            166.633333
        ],
        "demonym": "American",
        "landlocked": false,
        "borders": [],
        "area": 34.2,
        "flag": "🇺🇲"
    },
    {
        "name": {
            "common": "Uruguay",
            "official": "Oriental Republic of Uruguay",
            "native": {
                "spa": {
                    "official": "República Oriental del Uruguay",
                    "common": "Uruguay"
                }
            }
        },
        "tld": [
            ".uy"
        ],
        "cca2": "UY",
        "ccn3": "858",
        "cca3": "URY",
        "cioc": "URU",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "UYU"
        ],
        "callingCode": [
            "598"
        ],
        "capital": [
            "Montevideo"
        ],
        "altSpellings": [
            "UY",
            "Oriental Republic of Uruguay",
            "República Oriental del Uruguay"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Uruguayská východní republika",
                "common": "Uruguay"
            },
            "deu": {
                "official": "Republik Östlich des Uruguay",
                "common": "Uruguay"
            },
            "fra": {
                "official": "République orientale de l'Uruguay",
                "common": "Uruguay"
            },
            "hrv": {
                "official": "Orijentalna Republika Urugvaj",
                "common": "Urugvaj"
            },
            "ita": {
                "official": "Repubblica Orientale dell'Uruguay",
                "common": "Uruguay"
            },
            "jpn": {
                "official": "ウルグアイ東方共和国",
                "common": "ウルグアイ"
            },
            "nld": {
                "official": "Oosterse Republiek Uruguay",
                "common": "Uruguay"
            },
            "por": {
                "official": "República Oriental do Uruguai",
                "common": "Uruguai"
            },
            "rus": {
                "official": "Восточной Республики Уругвай",
                "common": "Уругвай"
            },
            "slk": {
                "official": "Uruguajská východná republika",
                "common": "Uruguaj"
            },
            "spa": {
                "official": "República Oriental del Uruguay",
                "common": "Uruguay"
            },
            "fin": {
                "official": "Uruguayn itäinen tasavalta",
                "common": "Uruguay"
            },
            "est": {
                "official": "Uruguay Idavabariik",
                "common": "Uruguay"
            },
            "zho": {
                "official": "乌拉圭东岸共和国",
                "common": "乌拉圭"
            },
            "pol": {
                "official": "Wschodnia Republika Urugwaju",
                "common": "Urugwaj"
            }
        },
        "latlng": [
            -33,
            -56
        ],
        "demonym": "Uruguayan",
        "landlocked": false,
        "borders": [
            "ARG",
            "BRA"
        ],
        "area": 181034,
        "flag": "🇺🇾"
    },
    {
        "name": {
            "common": "United States",
            "official": "United States of America",
            "native": {
                "eng": {
                    "official": "United States of America",
                    "common": "United States"
                }
            }
        },
        "tld": [
            ".us"
        ],
        "cca2": "US",
        "ccn3": "840",
        "cca3": "USA",
        "cioc": "USA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1"
        ],
        "capital": [
            "Washington D.C."
        ],
        "altSpellings": [
            "US",
            "USA",
            "United States of America"
        ],
        "region": "Americas",
        "subregion": "North America",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Spojené státy americké",
                "common": "Spojené státy"
            },
            "deu": {
                "official": "Vereinigte Staaten von Amerika",
                "common": "Vereinigte Staaten"
            },
            "fra": {
                "official": "Les états-unis d'Amérique",
                "common": "États-Unis"
            },
            "hrv": {
                "official": "Sjedinjene Države Amerike",
                "common": "Sjedinjene Američke Države"
            },
            "ita": {
                "official": "Stati Uniti d'America",
                "common": "Stati Uniti d'America"
            },
            "jpn": {
                "official": "アメリカ合衆国",
                "common": "アメリカ合衆国"
            },
            "nld": {
                "official": "Verenigde Staten van Amerika",
                "common": "Verenigde Staten"
            },
            "por": {
                "official": "Estados Unidos da América",
                "common": "Estados Unidos"
            },
            "rus": {
                "official": "Соединенные Штаты Америки",
                "common": "Соединённые Штаты Америки"
            },
            "slk": {
                "official": "Spojené štáty Americké",
                "common": "Spojené štáty americké"
            },
            "spa": {
                "official": "Estados Unidos de América",
                "common": "Estados Unidos"
            },
            "fin": {
                "official": "Amerikan yhdysvallat",
                "common": "Yhdysvallat"
            },
            "est": {
                "official": "Ameerika Ühendriigid",
                "common": "Ameerika Ühendriigid"
            },
            "zho": {
                "official": "美利坚合众国",
                "common": "美国"
            },
            "pol": {
                "official": "Stany Zjednoczone Ameryki",
                "common": "Stany Zjednoczone"
            }
        },
        "latlng": [
            38,
            -97
        ],
        "demonym": "American",
        "landlocked": false,
        "borders": [
            "CAN",
            "MEX"
        ],
        "area": 9372610,
        "flag": "🇺🇸"
    },
    {
        "name": {
            "common": "Uzbekistan",
            "official": "Republic of Uzbekistan",
            "native": {
                "rus": {
                    "official": "Республика Узбекистан",
                    "common": "Узбекистан"
                },
                "uzb": {
                    "official": "O'zbekiston Respublikasi",
                    "common": "O‘zbekiston"
                }
            }
        },
        "tld": [
            ".uz"
        ],
        "cca2": "UZ",
        "ccn3": "860",
        "cca3": "UZB",
        "cioc": "UZB",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "UZS"
        ],
        "callingCode": [
            "998"
        ],
        "capital": [
            "Tashkent"
        ],
        "altSpellings": [
            "UZ",
            "Republic of Uzbekistan",
            "O‘zbekiston Respublikasi",
            "Ўзбекистон Республикаси"
        ],
        "region": "Asia",
        "subregion": "Central Asia",
        "languages": {
            "rus": "Russian",
            "uzb": "Uzbek"
        },
        "translations": {
            "ces": {
                "official": "Republika Uzbekistán",
                "common": "Uzbekistán"
            },
            "deu": {
                "official": "Republik Usbekistan",
                "common": "Usbekistan"
            },
            "fra": {
                "official": "République d'Ouzbékistan",
                "common": "Ouzbékistan"
            },
            "hrv": {
                "official": "Republika Uzbekistan",
                "common": "Uzbekistan"
            },
            "ita": {
                "official": "Repubblica di Uzbekistan",
                "common": "Uzbekistan"
            },
            "jpn": {
                "official": "ウズベキスタン共和国",
                "common": "ウズベキスタン"
            },
            "nld": {
                "official": "Republiek Oezbekistan",
                "common": "Oezbekistan"
            },
            "por": {
                "official": "República do Usbequistão",
                "common": "Uzbequistão"
            },
            "rus": {
                "official": "Республика Узбекистан",
                "common": "Узбекистан"
            },
            "slk": {
                "official": "Uzbecká republika",
                "common": "Uzbekistan"
            },
            "spa": {
                "official": "República de Uzbekistán",
                "common": "Uzbekistán"
            },
            "fin": {
                "official": "Uzbekistanin tasavalta",
                "common": "Uzbekistan"
            },
            "est": {
                "official": "Usbekistani Vabariik",
                "common": "Usbekistan"
            },
            "zho": {
                "official": "乌兹别克斯坦共和国",
                "common": "乌兹别克斯坦"
            },
            "pol": {
                "official": "Republika Uzbekistanu",
                "common": "Uzbekistan"
            }
        },
        "latlng": [
            41,
            64
        ],
        "demonym": "Uzbekistani",
        "landlocked": true,
        "borders": [
            "AFG",
            "KAZ",
            "KGZ",
            "TJK",
            "TKM"
        ],
        "area": 447400,
        "flag": "🇺🇿"
    },
    {
        "name": {
            "common": "Vatican City",
            "official": "Vatican City State",
            "native": {
                "ita": {
                    "official": "Stato della Città del Vaticano",
                    "common": "Vaticano"
                },
                "lat": {
                    "official": "Status Civitatis Vaticanæ",
                    "common": "Vaticanæ"
                }
            }
        },
        "tld": [
            ".va"
        ],
        "cca2": "VA",
        "ccn3": "336",
        "cca3": "VAT",
        "cioc": "",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "EUR"
        ],
        "callingCode": [
            "3906698",
            "379"
        ],
        "capital": [
            "Vatican City"
        ],
        "altSpellings": [
            "VA",
            "Holy See (Vatican City State)",
            "Vatican City State",
            "Stato della Città del Vaticano"
        ],
        "region": "Europe",
        "subregion": "Southern Europe",
        "languages": {
            "ita": "Italian",
            "lat": "Latin"
        },
        "translations": {
            "ces": {
                "official": "Městský stát Vatikán",
                "common": "Vatikán"
            },
            "deu": {
                "official": "Staat Vatikanstadt",
                "common": "Vatikanstadt"
            },
            "fra": {
                "official": "Cité du Vatican",
                "common": "Cité du Vatican"
            },
            "hrv": {
                "official": "Vatikan",
                "common": "Vatikan"
            },
            "ita": {
                "official": "Città del Vaticano",
                "common": "Città del Vaticano"
            },
            "jpn": {
                "official": "バチカン市国の状態",
                "common": "バチカン市国"
            },
            "nld": {
                "official": "Vaticaanstad",
                "common": "Vaticaanstad"
            },
            "por": {
                "official": "Cidade do Vaticano",
                "common": "Cidade do Vaticano"
            },
            "rus": {
                "official": "Город-государство Ватикан",
                "common": "Ватикан"
            },
            "slk": {
                "official": "Svätá stolica (Vatikánsky mestský štát",
                "common": "Vatikán"
            },
            "spa": {
                "official": "Ciudad del Vaticano",
                "common": "Ciudad del Vaticano"
            },
            "fin": {
                "official": "Vatikaanin kaupunkivaltio",
                "common": "Vatikaani"
            },
            "est": {
                "official": "Vatikani Linnriik",
                "common": "Vatikan"
            },
            "zho": {
                "official": "梵蒂冈城国",
                "common": "梵蒂冈"
            },
            "pol": {
                "official": "Państwo Watykańskie",
                "common": "Watykan"
            }
        },
        "latlng": [
            41.9,
            12.45
        ],
        "demonym": "Vatican",
        "landlocked": true,
        "borders": [
            "ITA"
        ],
        "area": 0.44,
        "flag": "🇻🇦"
    },
    {
        "name": {
            "common": "Saint Vincent and the Grenadines",
            "official": "Saint Vincent and the Grenadines",
            "native": {
                "eng": {
                    "official": "Saint Vincent and the Grenadines",
                    "common": "Saint Vincent and the Grenadines"
                }
            }
        },
        "tld": [
            ".vc"
        ],
        "cca2": "VC",
        "ccn3": "670",
        "cca3": "VCT",
        "cioc": "VIN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "XCD"
        ],
        "callingCode": [
            "1784"
        ],
        "capital": [
            "Kingstown"
        ],
        "altSpellings": [
            "VC"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Svatý Vincenc a Grenadiny",
                "common": "Svatý Vincenc a Grenadiny"
            },
            "deu": {
                "official": "St. Vincent und die Grenadinen",
                "common": "St. Vincent und die Grenadinen"
            },
            "fra": {
                "official": "Saint-Vincent-et-les Grenadines",
                "common": "Saint-Vincent-et-les-Grenadines"
            },
            "hrv": {
                "official": "Sveti Vincent i Grenadini",
                "common": "Sveti Vincent i Grenadini"
            },
            "ita": {
                "official": "Saint Vincent e Grenadine",
                "common": "Saint Vincent e Grenadine"
            },
            "jpn": {
                "official": "セントビンセントおよびグレナディーン諸島",
                "common": "セントビンセントおよびグレナディーン諸島"
            },
            "nld": {
                "official": "Saint Vincent en de Grenadines",
                "common": "Saint Vincent en de Grenadines"
            },
            "por": {
                "official": "São Vicente e Granadinas",
                "common": "São Vincente e Granadinas"
            },
            "rus": {
                "official": "Сент-Винсент и Гренадины",
                "common": "Сент-Винсент и Гренадины"
            },
            "slk": {
                "official": "Svätý Vincent a Grenadíny",
                "common": "Svätý Vincent a Grenadíny"
            },
            "spa": {
                "official": "San Vicente y las Granadinas",
                "common": "San Vicente y Granadinas"
            },
            "fin": {
                "official": "Saint Vincent ja Grenadiinit",
                "common": "Saint Vincent ja Grenadiinit"
            },
            "est": {
                "official": "Saint Vincent ja Grenadiinid",
                "common": "Saint Vincent"
            },
            "zho": {
                "official": "圣文森特和格林纳丁斯",
                "common": "圣文森特和格林纳丁斯"
            },
            "pol": {
                "official": "Saint Vincent i Grenadyny",
                "common": "Saint Vincent i Grenadyny"
            }
        },
        "latlng": [
            13.25,
            -61.2
        ],
        "demonym": "Saint Vincentian",
        "landlocked": false,
        "borders": [],
        "area": 389,
        "flag": "🇻🇨"
    },
    {
        "name": {
            "common": "Venezuela",
            "official": "Bolivarian Republic of Venezuela",
            "native": {
                "spa": {
                    "official": "República Bolivariana de Venezuela",
                    "common": "Venezuela"
                }
            }
        },
        "tld": [
            ".ve"
        ],
        "cca2": "VE",
        "ccn3": "862",
        "cca3": "VEN",
        "cioc": "VEN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "VEF"
        ],
        "callingCode": [
            "58"
        ],
        "capital": [
            "Caracas"
        ],
        "altSpellings": [
            "VE",
            "Bolivarian Republic of Venezuela",
            "Venezuela, Bolivarian Republic of",
            "República Bolivariana de Venezuela"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "spa": "Spanish"
        },
        "translations": {
            "ces": {
                "official": "Bolívarská republika Venezuela",
                "common": "Venezuela"
            },
            "deu": {
                "official": "Bolivarische Republik Venezuela",
                "common": "Venezuela"
            },
            "fra": {
                "official": "République bolivarienne du Venezuela",
                "common": "Venezuela"
            },
            "hrv": {
                "official": "BOLIVARIJANSKA Republika Venezuela",
                "common": "Venezuela"
            },
            "ita": {
                "official": "Repubblica Bolivariana del Venezuela",
                "common": "Venezuela"
            },
            "jpn": {
                "official": "ベネズエラ·ボリバル共和国",
                "common": "ベネズエラ・ボリバル共和国"
            },
            "nld": {
                "official": "Bolivariaanse Republiek Venezuela",
                "common": "Venezuela"
            },
            "por": {
                "official": "República Bolivariana da Venezuela",
                "common": "Venezuela"
            },
            "rus": {
                "official": "Боливарианская Республика Венесуэла",
                "common": "Венесуэла"
            },
            "slk": {
                "official": "Venezuelská bolívarovská republika",
                "common": "Venezuela"
            },
            "spa": {
                "official": "República Bolivariana de Venezuela",
                "common": "Venezuela"
            },
            "fin": {
                "official": "Venezuelan bolivariaainen tasavalta",
                "common": "Venezuela"
            },
            "est": {
                "official": "Venezuela Bolívari Vabariik",
                "common": "Venezuela"
            },
            "zho": {
                "official": "委内瑞拉玻利瓦尔共和国",
                "common": "委内瑞拉"
            },
            "pol": {
                "official": "Boliwariańska Republika Wenezueli",
                "common": "Wenezuela"
            }
        },
        "latlng": [
            8,
            -66
        ],
        "demonym": "Venezuelan",
        "landlocked": false,
        "borders": [
            "BRA",
            "COL",
            "GUY"
        ],
        "area": 916445,
        "flag": "🇻🇪"
    },
    {
        "name": {
            "common": "British Virgin Islands",
            "official": "Virgin Islands",
            "native": {
                "eng": {
                    "official": "Virgin Islands",
                    "common": "British Virgin Islands"
                }
            }
        },
        "tld": [
            ".vg"
        ],
        "cca2": "VG",
        "ccn3": "092",
        "cca3": "VGB",
        "cioc": "IVB",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1284"
        ],
        "capital": [
            "Road Town"
        ],
        "altSpellings": [
            "VG",
            "Virgin Islands, British"
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Britské Panenské ostrovy",
                "common": "Britské Panenské ostrovy"
            },
            "deu": {
                "official": "Jungferninseln",
                "common": "Britische Jungferninseln"
            },
            "fra": {
                "official": "îles Vierges",
                "common": "Îles Vierges britanniques"
            },
            "hrv": {
                "official": "Djevičanski Otoci",
                "common": "Britanski Djevičanski Otoci"
            },
            "ita": {
                "official": "Isole Vergini",
                "common": "Isole Vergini Britanniche"
            },
            "jpn": {
                "official": "バージン諸島",
                "common": "イギリス領ヴァージン諸島"
            },
            "nld": {
                "official": "Maagdeneilanden",
                "common": "Britse Maagdeneilanden"
            },
            "por": {
                "official": "Ilhas Virgens",
                "common": "Ilhas Virgens"
            },
            "rus": {
                "official": "Виргинские острова",
                "common": "Британские Виргинские острова"
            },
            "slk": {
                "official": "Panenské ostrovy",
                "common": "Panenské ostrovy"
            },
            "spa": {
                "official": "Islas Vírgenes",
                "common": "Islas Vírgenes del Reino Unido"
            },
            "fin": {
                "official": "Brittiläiset Neitsytsaaret",
                "common": "Neitsytsaaret"
            },
            "est": {
                "official": "Neitsisaared",
                "common": "Briti Neitsisaared"
            },
            "zho": {
                "official": "英属维尔京群岛",
                "common": "英属维尔京群岛"
            },
            "pol": {
                "official": "Brytyjskie Wyspy Dziewicze",
                "common": "Brytyjskie Wyspy Dziewicze"
            }
        },
        "latlng": [
            18.431383,
            -64.62305
        ],
        "demonym": "Virgin Islander",
        "landlocked": false,
        "borders": [],
        "area": 151,
        "flag": "🇻🇬"
    },
    {
        "name": {
            "common": "United States Virgin Islands",
            "official": "Virgin Islands of the United States",
            "native": {
                "eng": {
                    "official": "Virgin Islands of the United States",
                    "common": "United States Virgin Islands"
                }
            }
        },
        "tld": [
            ".vi"
        ],
        "cca2": "VI",
        "ccn3": "850",
        "cca3": "VIR",
        "cioc": "ISV",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "USD"
        ],
        "callingCode": [
            "1340"
        ],
        "capital": [
            "Charlotte Amalie"
        ],
        "altSpellings": [
            "VI",
            "Virgin Islands, U.S."
        ],
        "region": "Americas",
        "subregion": "Caribbean",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Americké Panenské ostrovy",
                "common": "Americké Panenské ostrovy"
            },
            "deu": {
                "official": "Amerikanische Jungferninseln",
                "common": "Amerikanische Jungferninseln"
            },
            "fra": {
                "official": "Îles Vierges des États-Unis",
                "common": "Îles Vierges des États-Unis"
            },
            "hrv": {
                "official": "Djevičanski Otoci SAD",
                "common": "Američki Djevičanski Otoci"
            },
            "ita": {
                "official": "Isole Vergini degli Stati Uniti",
                "common": "Isole Vergini americane"
            },
            "jpn": {
                "official": "米国のバージン諸島",
                "common": "アメリカ領ヴァージン諸島"
            },
            "nld": {
                "official": "Maagdeneilanden van de Verenigde Staten",
                "common": "Amerikaanse Maagdeneilanden"
            },
            "por": {
                "official": "Ilhas Virgens dos Estados Unidos",
                "common": "Ilhas Virgens dos Estados Unidos"
            },
            "rus": {
                "official": "Виргинские острова Соединенных Штатов",
                "common": "Виргинские Острова"
            },
            "slk": {
                "official": "Americké Panenské ostrovy",
                "common": "Americké Panenské ostrovy"
            },
            "spa": {
                "official": "Islas Vírgenes de los Estados Unidos",
                "common": "Islas Vírgenes de los Estados Unidos"
            },
            "fin": {
                "official": "Yhdysvaltain Neitsytsaaret",
                "common": "Neitsytsaaret"
            },
            "est": {
                "official": "Ühendriikide Neitsisaared",
                "common": "Neitsisaared, USA"
            },
            "zho": {
                "official": "美属维尔京群岛",
                "common": "美属维尔京群岛"
            },
            "pol": {
                "official": "Wyspy Dziewicze Stanów Zjednoczonych",
                "common": "Wyspy Dziewicze Stanów Zjednoczonych"
            }
        },
        "latlng": [
            18.35,
            -64.933333
        ],
        "demonym": "Virgin Islander",
        "landlocked": false,
        "borders": [],
        "area": 347,
        "flag": "🇻🇮"
    },
    {
        "name": {
            "common": "Vietnam",
            "official": "Socialist Republic of Vietnam",
            "native": {
                "vie": {
                    "official": "Cộng hòa xã hội chủ nghĩa Việt Nam",
                    "common": "Việt Nam"
                }
            }
        },
        "tld": [
            ".vn"
        ],
        "cca2": "VN",
        "ccn3": "704",
        "cca3": "VNM",
        "cioc": "VIE",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "VND"
        ],
        "callingCode": [
            "84"
        ],
        "capital": [
            "Hanoi"
        ],
        "altSpellings": [
            "VN",
            "Socialist Republic of Vietnam",
            "Cộng hòa Xã hội chủ nghĩa Việt Nam",
            "Viet Nam"
        ],
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "languages": {
            "vie": "Vietnamese"
        },
        "translations": {
            "ces": {
                "official": "Vietnamská socialistická republika",
                "common": "Vietnam"
            },
            "deu": {
                "official": "Sozialistische Republik Vietnam",
                "common": "Vietnam"
            },
            "fra": {
                "official": "République socialiste du Viêt Nam",
                "common": "Viêt Nam"
            },
            "hrv": {
                "official": "Socijalistička Republika Vijetnam",
                "common": "Vijetnam"
            },
            "ita": {
                "official": "Repubblica socialista del Vietnam",
                "common": "Vietnam"
            },
            "jpn": {
                "official": "ベトナム社会主義共和国",
                "common": "ベトナム"
            },
            "nld": {
                "official": "Socialistische Republiek Vietnam",
                "common": "Vietnam"
            },
            "por": {
                "official": "República Socialista do Vietname",
                "common": "Vietname"
            },
            "rus": {
                "official": "Социалистическая Республика Вьетнам",
                "common": "Вьетнам"
            },
            "slk": {
                "official": "Vietnamská socialistická republika",
                "common": "Vietnam"
            },
            "spa": {
                "official": "República Socialista de Vietnam",
                "common": "Vietnam"
            },
            "fin": {
                "official": "Vietnamin sosialistinen tasavalta",
                "common": "Vietnam"
            },
            "est": {
                "official": "Vietnami Sotsialistlik Vabariik",
                "common": "Vietnam"
            },
            "zho": {
                "official": "越南社会主义共和国",
                "common": "越南"
            },
            "pol": {
                "official": "Socjalistyczna Republika Wietnamu",
                "common": "Wietnam"
            }
        },
        "latlng": [
            16.16666666,
            107.83333333
        ],
        "demonym": "Vietnamese",
        "landlocked": false,
        "borders": [
            "KHM",
            "CHN",
            "LAO"
        ],
        "area": 331212,
        "flag": "🇻🇳"
    },
    {
        "name": {
            "common": "Vanuatu",
            "official": "Republic of Vanuatu",
            "native": {
                "bis": {
                    "official": "Ripablik blong Vanuatu",
                    "common": "Vanuatu"
                },
                "eng": {
                    "official": "Republic of Vanuatu",
                    "common": "Vanuatu"
                },
                "fra": {
                    "official": "République de Vanuatu",
                    "common": "Vanuatu"
                }
            }
        },
        "tld": [
            ".vu"
        ],
        "cca2": "VU",
        "ccn3": "548",
        "cca3": "VUT",
        "cioc": "VAN",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "VUV"
        ],
        "callingCode": [
            "678"
        ],
        "capital": [
            "Port Vila"
        ],
        "altSpellings": [
            "VU",
            "Republic of Vanuatu",
            "Ripablik blong Vanuatu",
            "République de Vanuatu"
        ],
        "region": "Oceania",
        "subregion": "Melanesia",
        "languages": {
            "bis": "Bislama",
            "eng": "English",
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Republika Vanuatu",
                "common": "Vanuatu"
            },
            "deu": {
                "official": "Vanuatu",
                "common": "Vanuatu"
            },
            "fra": {
                "official": "République de Vanuatu",
                "common": "Vanuatu"
            },
            "hrv": {
                "official": "Republika Vanuatu",
                "common": "Vanuatu"
            },
            "ita": {
                "official": "Repubblica di Vanuatu",
                "common": "Vanuatu"
            },
            "jpn": {
                "official": "バヌアツ共和国",
                "common": "バヌアツ"
            },
            "nld": {
                "official": "Republiek Vanuatu",
                "common": "Vanuatu"
            },
            "por": {
                "official": "República de Vanuatu",
                "common": "Vanuatu"
            },
            "rus": {
                "official": "Республика Вануату",
                "common": "Вануату"
            },
            "slk": {
                "official": "Vanuatská republika",
                "common": "Vanuatu"
            },
            "spa": {
                "official": "República de Vanuatu",
                "common": "Vanuatu"
            },
            "fin": {
                "official": "Vanuatun tasavalta",
                "common": "Vanuatu"
            },
            "est": {
                "official": "Vanuatu Vabariik",
                "common": "Vanuatu"
            },
            "zho": {
                "official": "瓦努阿图共和国",
                "common": "瓦努阿图"
            },
            "pol": {
                "official": "Republika Vanuatu",
                "common": "Vanuatu"
            }
        },
        "latlng": [
            -16,
            167
        ],
        "demonym": "Ni-Vanuatu",
        "landlocked": false,
        "borders": [],
        "area": 12189,
        "flag": "🇻🇺"
    },
    {
        "name": {
            "common": "Wallis and Futuna",
            "official": "Territory of the Wallis and Futuna Islands",
            "native": {
                "fra": {
                    "official": "Territoire des îles Wallis et Futuna",
                    "common": "Wallis et Futuna"
                }
            }
        },
        "tld": [
            ".wf"
        ],
        "cca2": "WF",
        "ccn3": "876",
        "cca3": "WLF",
        "cioc": "",
        "independent": false,
        "status": "officially-assigned",
        "currency": [
            "XPF"
        ],
        "callingCode": [
            "681"
        ],
        "capital": [
            "Mata-Utu"
        ],
        "altSpellings": [
            "WF",
            "Territory of the Wallis and Futuna Islands",
            "Territoire des îles Wallis et Futuna"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "fra": "French"
        },
        "translations": {
            "ces": {
                "official": "Teritorium ostrovů Wallis a Futuna",
                "common": "Wallis a Futuna"
            },
            "deu": {
                "official": "Gebiet der Wallis und Futuna",
                "common": "Wallis und Futuna"
            },
            "fra": {
                "official": "Territoire des îles Wallis et Futuna",
                "common": "Wallis-et-Futuna"
            },
            "hrv": {
                "official": "Teritoriju Wallis i Futuna",
                "common": "Wallis i Fortuna"
            },
            "ita": {
                "official": "Territorio delle Isole Wallis e Futuna",
                "common": "Wallis e Futuna"
            },
            "jpn": {
                "official": "ウォリス·フツナ諸島の領土",
                "common": "ウォリス・フツナ"
            },
            "nld": {
                "official": "Grondgebied van de Wallis en Futuna",
                "common": "Wallis en Futuna"
            },
            "por": {
                "official": "Território das Ilhas Wallis e Futuna",
                "common": "Wallis e Futuna"
            },
            "rus": {
                "official": "Территория Уоллис и Футуна острова",
                "common": "Уоллис и Футуна"
            },
            "slk": {
                "official": "Teritórium ostrovov Wallis a Futuna",
                "common": "Wallis a Futuna"
            },
            "spa": {
                "official": "Territorio de las Islas Wallis y Futuna",
                "common": "Wallis y Futuna"
            },
            "fin": {
                "official": "Wallisin ja Futunan yhteisö",
                "common": "Wallis ja Futuna"
            },
            "est": {
                "official": "Wallise ja Futuna ala",
                "common": "Wallis ja Futuna"
            },
            "zho": {
                "official": "瓦利斯和富图纳群岛",
                "common": "瓦利斯和富图纳群岛"
            },
            "pol": {
                "official": "Terytorium Wysp Wallis i Futuna",
                "common": "Wallis i Futuna"
            }
        },
        "latlng": [
            -13.3,
            -176.2
        ],
        "demonym": "Wallis and Futuna Islander",
        "landlocked": false,
        "borders": [],
        "area": 142,
        "flag": "🇼🇫"
    },
    {
        "name": {
            "common": "Samoa",
            "official": "Independent State of Samoa",
            "native": {
                "eng": {
                    "official": "Independent State of Samoa",
                    "common": "Samoa"
                },
                "smo": {
                    "official": "Malo Saʻoloto Tutoʻatasi o Sāmoa",
                    "common": "Sāmoa"
                }
            }
        },
        "tld": [
            ".ws"
        ],
        "cca2": "WS",
        "ccn3": "882",
        "cca3": "WSM",
        "cioc": "SAM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "WST"
        ],
        "callingCode": [
            "685"
        ],
        "capital": [
            "Apia"
        ],
        "altSpellings": [
            "WS",
            "Independent State of Samoa",
            "Malo Saʻoloto Tutoʻatasi o Sāmoa"
        ],
        "region": "Oceania",
        "subregion": "Polynesia",
        "languages": {
            "eng": "English",
            "smo": "Samoan"
        },
        "translations": {
            "ces": {
                "official": "Nezávislý stát Samoa",
                "common": "Samoa"
            },
            "deu": {
                "official": "Unabhängige Staat Samoa",
                "common": "Samoa"
            },
            "fra": {
                "official": "Samoa",
                "common": "Samoa"
            },
            "hrv": {
                "official": "Nezavisna Država Samoa",
                "common": "Samoa"
            },
            "ita": {
                "official": "Stato indipendente di Samoa",
                "common": "Samoa"
            },
            "jpn": {
                "official": "サモア独立国",
                "common": "サモア"
            },
            "nld": {
                "official": "Onafhankelijke Staat Samoa",
                "common": "Samoa"
            },
            "por": {
                "official": "Estado Independente de Samoa",
                "common": "Samoa"
            },
            "rus": {
                "official": "Независимое Государство Самоа",
                "common": "Самоа"
            },
            "slk": {
                "official": "Nezávislý štátSamoa",
                "common": "Samoa"
            },
            "spa": {
                "official": "Estado Independiente de Samoa",
                "common": "Samoa"
            },
            "fin": {
                "official": "Samoan itsenäinen valtio",
                "common": "Samoa"
            },
            "est": {
                "official": "Samoa Iseseisvusriik",
                "common": "Samoa"
            },
            "zho": {
                "official": "萨摩亚独立国",
                "common": "萨摩亚"
            },
            "pol": {
                "official": "Niezależne Państwo Samoa",
                "common": "Samoa"
            }
        },
        "latlng": [
            -13.58333333,
            -172.33333333
        ],
        "demonym": "Samoan",
        "landlocked": false,
        "borders": [],
        "area": 2842,
        "flag": "🇼🇸"
    },
    {
        "name": {
            "common": "Yemen",
            "official": "Republic of Yemen",
            "native": {
                "ara": {
                    "official": "الجمهورية اليمنية",
                    "common": "اليَمَن"
                }
            }
        },
        "tld": [
            ".ye"
        ],
        "cca2": "YE",
        "ccn3": "887",
        "cca3": "YEM",
        "cioc": "YEM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "YER"
        ],
        "callingCode": [
            "967"
        ],
        "capital": [
            "Sana'a"
        ],
        "altSpellings": [
            "YE",
            "Yemeni Republic",
            "al-Jumhūriyyah al-Yamaniyyah"
        ],
        "region": "Asia",
        "subregion": "Western Asia",
        "languages": {
            "ara": "Arabic"
        },
        "translations": {
            "ces": {
                "official": "Jemenská republika",
                "common": "Jemen"
            },
            "deu": {
                "official": "Republik Jemen",
                "common": "Jemen"
            },
            "fra": {
                "official": "République du Yémen",
                "common": "Yémen"
            },
            "hrv": {
                "official": "Republika Jemen",
                "common": "Jemen"
            },
            "ita": {
                "official": "Repubblica dello Yemen",
                "common": "Yemen"
            },
            "jpn": {
                "official": "イエメン共和国",
                "common": "イエメン"
            },
            "nld": {
                "official": "Republiek Jemen",
                "common": "Jemen"
            },
            "por": {
                "official": "República do Iêmen",
                "common": "Iémen"
            },
            "rus": {
                "official": "Йеменская Республика",
                "common": "Йемен"
            },
            "slk": {
                "official": "Jemenská republika",
                "common": "Jemen"
            },
            "spa": {
                "official": "República de Yemen",
                "common": "Yemen"
            },
            "fin": {
                "official": "Jemenin tasavalta",
                "common": "Jemen"
            },
            "est": {
                "official": "Jeemeni Vabariik",
                "common": "Jeemen"
            },
            "zho": {
                "official": "也门共和国",
                "common": "也门"
            },
            "pol": {
                "official": "Republika Jemeńska",
                "common": "Jemen"
            }
        },
        "latlng": [
            15,
            48
        ],
        "demonym": "Yemeni",
        "landlocked": false,
        "borders": [
            "OMN",
            "SAU"
        ],
        "area": 527968,
        "flag": "🇾🇪"
    },
    {
        "name": {
            "common": "South Africa",
            "official": "Republic of South Africa",
            "native": {
                "afr": {
                    "official": "Republiek van Suid-Afrika",
                    "common": "South Africa"
                },
                "eng": {
                    "official": "Republic of South Africa",
                    "common": "South Africa"
                },
                "nbl": {
                    "official": "IRiphabliki yeSewula Afrika",
                    "common": "Sewula Afrika"
                },
                "nso": {
                    "official": "Rephaboliki ya Afrika-Borwa ",
                    "common": "Afrika-Borwa"
                },
                "sot": {
                    "official": "Rephaboliki ya Afrika Borwa",
                    "common": "Afrika Borwa"
                },
                "ssw": {
                    "official": "IRiphabhulikhi yeNingizimu Afrika",
                    "common": "Ningizimu Afrika"
                },
                "tsn": {
                    "official": "Rephaboliki ya Aforika Borwa",
                    "common": "Aforika Borwa"
                },
                "tso": {
                    "official": "Riphabliki ra Afrika Dzonga",
                    "common": "Afrika Dzonga"
                },
                "ven": {
                    "official": "Riphabuḽiki ya Afurika Tshipembe",
                    "common": "Afurika Tshipembe"
                },
                "xho": {
                    "official": "IRiphabliki yaseMzantsi Afrika",
                    "common": "Mzantsi Afrika"
                },
                "zul": {
                    "official": "IRiphabliki yaseNingizimu Afrika",
                    "common": "Ningizimu Afrika"
                }
            }
        },
        "tld": [
            ".za"
        ],
        "cca2": "ZA",
        "ccn3": "710",
        "cca3": "ZAF",
        "cioc": "RSA",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ZAR"
        ],
        "callingCode": [
            "27"
        ],
        "capital": [
            "Pretoria",
            "Bloemfontein",
            "Cape Town"
        ],
        "altSpellings": [
            "ZA",
            "RSA",
            "Suid-Afrika",
            "Republic of South Africa"
        ],
        "region": "Africa",
        "subregion": "Southern Africa",
        "languages": {
            "afr": "Afrikaans",
            "eng": "English",
            "nbl": "Southern Ndebele",
            "nso": "Northern Sotho",
            "sot": "Southern Sotho",
            "ssw": "Swazi",
            "tsn": "Tswana",
            "tso": "Tsonga",
            "ven": "Venda",
            "xho": "Xhosa",
            "zul": "Zulu"
        },
        "translations": {
            "ces": {
                "official": "Jihoafrická republika",
                "common": "Jihoafrická republika"
            },
            "deu": {
                "official": "Republik Südafrika",
                "common": "Südafrika"
            },
            "fra": {
                "official": "République d'Afrique du Sud",
                "common": "Afrique du Sud"
            },
            "hrv": {
                "official": "Južnoafrička Republika",
                "common": "Južnoafrička Republika"
            },
            "ita": {
                "official": "Repubblica del Sud Africa",
                "common": "Sud Africa"
            },
            "jpn": {
                "official": "南アフリカ共和国",
                "common": "南アフリカ"
            },
            "nld": {
                "official": "Republiek Zuid-Afrika",
                "common": "Zuid-Afrika"
            },
            "por": {
                "official": "República da África do Sul",
                "common": "África do Sul"
            },
            "rus": {
                "official": "Южно-Африканская Республика",
                "common": "Южно-Африканская Республика"
            },
            "slk": {
                "official": "Juhoafrická republika",
                "common": "Juhoafrická republika"
            },
            "spa": {
                "official": "República de Sudáfrica",
                "common": "República de Sudáfrica"
            },
            "fin": {
                "official": "Etelä-Afrikan tasavalta",
                "common": "Etelä-Afrikka"
            },
            "est": {
                "official": "Lõuna-Aafrika Vabariik",
                "common": "Lõuna-Aafrika Vabariik"
            },
            "zho": {
                "official": "南非共和国",
                "common": "南非"
            },
            "pol": {
                "official": "Republika Południowej Afryki",
                "common": "Południowa Afryka"
            }
        },
        "latlng": [
            -29,
            24
        ],
        "demonym": "South African",
        "landlocked": false,
        "borders": [
            "BWA",
            "LSO",
            "MOZ",
            "NAM",
            "SWZ",
            "ZWE"
        ],
        "area": 1221037,
        "flag": "🇿🇦"
    },
    {
        "name": {
            "common": "Zambia",
            "official": "Republic of Zambia",
            "native": {
                "eng": {
                    "official": "Republic of Zambia",
                    "common": "Zambia"
                }
            }
        },
        "tld": [
            ".zm"
        ],
        "cca2": "ZM",
        "ccn3": "894",
        "cca3": "ZMB",
        "cioc": "ZAM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ZMW"
        ],
        "callingCode": [
            "260"
        ],
        "capital": [
            "Lusaka"
        ],
        "altSpellings": [
            "ZM",
            "Republic of Zambia"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "eng": "English"
        },
        "translations": {
            "ces": {
                "official": "Zambijská republika",
                "common": "Zambie"
            },
            "deu": {
                "official": "Republik Sambia",
                "common": "Sambia"
            },
            "fra": {
                "official": "République de Zambie",
                "common": "Zambie"
            },
            "hrv": {
                "official": "Republika Zambija",
                "common": "Zambija"
            },
            "ita": {
                "official": "Repubblica di Zambia",
                "common": "Zambia"
            },
            "jpn": {
                "official": "ザンビア共和国",
                "common": "ザンビア"
            },
            "nld": {
                "official": "Republiek Zambia",
                "common": "Zambia"
            },
            "por": {
                "official": "República da Zâmbia",
                "common": "Zâmbia"
            },
            "rus": {
                "official": "Республика Замбия",
                "common": "Замбия"
            },
            "slk": {
                "official": "Zambijská republika",
                "common": "Zambia"
            },
            "spa": {
                "official": "República de Zambia",
                "common": "Zambia"
            },
            "fin": {
                "official": "Sambian tasavalta",
                "common": "Sambia"
            },
            "est": {
                "official": "Sambia Vabariik",
                "common": "Sambia"
            },
            "zho": {
                "official": "赞比亚共和国",
                "common": "赞比亚"
            },
            "pol": {
                "official": "Republika Zambii",
                "common": "Zambia"
            }
        },
        "latlng": [
            -15,
            30
        ],
        "demonym": "Zambian",
        "landlocked": true,
        "borders": [
            "AGO",
            "BWA",
            "COD",
            "MWI",
            "MOZ",
            "NAM",
            "TZA",
            "ZWE"
        ],
        "area": 752612,
        "flag": "🇿🇲"
    },
    {
        "name": {
            "common": "Zimbabwe",
            "official": "Republic of Zimbabwe",
            "native": {
                "bwg": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "eng": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "kck": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "khi": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "ndc": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "nde": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "nya": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "sna": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "sot": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "toi": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "tsn": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "tso": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "ven": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "xho": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                },
                "zib": {
                    "official": "Republic of Zimbabwe",
                    "common": "Zimbabwe"
                }
            }
        },
        "tld": [
            ".zw"
        ],
        "cca2": "ZW",
        "ccn3": "716",
        "cca3": "ZWE",
        "cioc": "ZIM",
        "independent": true,
        "status": "officially-assigned",
        "currency": [
            "ZWL"
        ],
        "callingCode": [
            "263"
        ],
        "capital": [
            "Harare"
        ],
        "altSpellings": [
            "ZW",
            "Republic of Zimbabwe"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
            "bwg": "Chibarwe",
            "eng": "English",
            "kck": "Kalanga",
            "khi": "Khoisan",
            "ndc": "Ndau",
            "nde": "Northern Ndebele",
            "nya": "Chewa",
            "sna": "Shona",
            "sot": "Sotho",
            "toi": "Tonga",
            "tsn": "Tswana",
            "tso": "Tsonga",
            "ven": "Venda",
            "xho": "Xhosa",
            "zib": "Zimbabwean Sign Language"
        },
        "translations": {
            "ces": {
                "official": "Zimbabwská republika",
                "common": "Zimbabwe"
            },
            "deu": {
                "official": "Republik Simbabwe",
                "common": "Simbabwe"
            },
            "fra": {
                "official": "République du Zimbabwe",
                "common": "Zimbabwe"
            },
            "hrv": {
                "official": "Republika Zimbabve",
                "common": "Zimbabve"
            },
            "ita": {
                "official": "Repubblica dello Zimbabwe",
                "common": "Zimbabwe"
            },
            "jpn": {
                "official": "ジンバブエ共和国",
                "common": "ジンバブエ"
            },
            "nld": {
                "official": "Republiek Zimbabwe",
                "common": "Zimbabwe"
            },
            "por": {
                "official": "República do Zimbabwe",
                "common": "Zimbabwe"
            },
            "rus": {
                "official": "Республика Зимбабве",
                "common": "Зимбабве"
            },
            "slk": {
                "official": "Zimbabwianska republika",
                "common": "Zimbabwe"
            },
            "spa": {
                "official": "República de Zimbabue",
                "common": "Zimbabue"
            },
            "fin": {
                "official": "Zimbabwen tasavalta",
                "common": "Zimbabwe"
            },
            "est": {
                "official": "Zimbabwe Vabariik",
                "common": "Zimbabwe"
            },
            "zho": {
                "official": "津巴布韦共和国",
                "common": "津巴布韦"
            },
            "pol": {
                "official": "Republika Zimbabwe",
                "common": "Zimbabwe"
            }
        },
        "latlng": [
            -20,
            30
        ],
        "demonym": "Zimbabwean",
        "landlocked": true,
        "borders": [
            "BWA",
            "MOZ",
            "ZAF",
            "ZMB"
        ],
        "area": 390757,
        "flag": "🇿🇼"
    }
]);
});

module.exports = router;
