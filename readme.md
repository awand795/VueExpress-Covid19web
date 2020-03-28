# WEB Information Covid-19 With Vue And Express

## Web Demo

untuk demo web silahkan akses ke http://info-covid19.herokuapp.com

## Description

Web ini dibuat menggunakan VUE.JS untuk frontend dan express untuk backend (Handling api dari http://api.kawalcorona.com), sebenarnya saya ingin menggunakann vue dan axios untuk mengakses api dari kawalcorona.com tetapi karena ada permasalahan dalam cross origin (cors ) dari web kawalcorona.com saya jadi repot" buat backend nya pakai express hehe.

dan untuk styling web ini menggunakan css basic doang jadi harap dimaklumi jika ada kejelekan dalam UI/UX web nya :'v


### API Documentation

karena saya memakai express untuk backend dan membuat api lagi dari api kawalcorona.com
1. http://info-covid19.herokuapp.com/api/corona/global untuk akses api corona global
2. http://info-covid19.herokuapp.com/api/corona/indonesia untuk akses api corona di indonesia
3. http://info-covid19.herokuapp.com/api/corona/indonesia/provinsi untuk akses info corona per provinsi
4. http://info-covid19.herokuapp.com/api/corona/positif untuk akses data pasien positif secara global
5. http://info-covid19.herokuapp.com/api/corona/sembuh untuk akses data pasien sembuh secara global
6. http://info-covid19.herokuapp.com/api/corona/meninggal untuk akses data pasien meninggal secara global