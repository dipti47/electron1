"use strict";
var scriptDbParametri = (function () {
    function scriptDbParametri() {
    }
    scriptDbParametri.createTables = function (db) {
        var query = " CREATE TABLE IF NOT EXISTS [Parametri] ( " +
            " [Nome] TEXT  NULL PRIMARY KEY , " +
            " [Valore] TEXT  NULL " +
            " ) ";
        db.run(query, function (err) {
            if (err !== null) {
                console.log(err);
            }
            else {
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_LICENZA + "', '')					");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_AZIENDA + "', '')                   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_NEGOZIO + "', '')                   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_TERMINALE + "', '')                   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_ID + "', '')                   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_MODELLO + "', '')                   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_UTENTE_LOGGATO + "', '')           ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_PASSWORD_LOGGATA + "', '')           ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_FK_UTENTE + "', '')           ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_URL_XML + "', 'http://192.168.0.10/cgi-bin/fpmate.cgi')        ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_CASSA_APERTA + "', '')   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_CASSA_APERTA_PROGRESSIVO + "', '')   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_NUMERO_SCONTRINO + "', '')   ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.ID_Cassa + "', '')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.FK_Negozio + "', '')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.Cod_Cassa + "', '')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.FK_Gruppo_Cassa + "', '')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.FK_Modello_Cassa + "', '')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_URL_WS + "', 'https://test.kiara.service.konvergence.it:8181/')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.FK_SONO_IN_VENDITA + "', '0')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.FK_STO_IMPORTANDO_DIVULGAZIONI + "', '0')               ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.POS_SETEFI_APP2APP_ATTIVO + "', '0')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.ID_AZIENDA + "', '')  ");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.MODELLO_STAMPANTE_SCONTRINI_SELEZIONATO + "', 'FP90III')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.NUM_COLUMNS + "', '4')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.FK_LINGUA + "', '1')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI(Nome, Valore) VALUES ('" + scriptDbParametri.BLUETOOTH_DATAMAX_ADDRESS + "', '')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI(Nome, Valore) VALUES ('" + scriptDbParametri.IP_SERVER_COMANDA_LOCALE + "', '')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI(Nome, Valore) VALUES ('" + scriptDbParametri.KEY_ID_MONITOR_SELEZIONATO + "', '-1')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI(Nome, Valore) VALUES ('" + scriptDbParametri.LOGO + "', '')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_BLUETOOTH_ADDRESS_EPSON_TMP80 + "','')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_SONO_MONO_CASSA + "', '')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_ULTIMO_PROGRESSIVO + "', '0')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_ULTIMA_FOTO + "', '')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_ULTIMO_ID_UTENTE_LOGGATO + "', '')");
                db.run(" INSERT OR REPLACE INTO PARAMETRI (Nome, Valore) VALUES ('" + scriptDbParametri.KEY_ORIENTATION_SCREEN + "', '" + scriptDbParametri.LANDSCAPE + "')");
              
            }
        });
    };
    scriptDbParametri.DATABASE_NAME = "DbParametri";
    scriptDbParametri.DATABASE_VERSION = 1;
    scriptDbParametri.KEY_LICENZA = "KEY_LICENZA";
    scriptDbParametri.KEY_AZIENDA = "KEY_AZIENDA";
    scriptDbParametri.KEY_NEGOZIO = "KEY_NEGOZIO";
    scriptDbParametri.KEY_TERMINALE = "KEY_TERMINALE";
    scriptDbParametri.KEY_ID = "KEY_ID";
    scriptDbParametri.KEY_MODELLO = "KEY_MODELLO";
    scriptDbParametri.KEY_UTENTE_LOGGATO = "KEY_UTENTE_LOGGATO";
    scriptDbParametri.KEY_PASSWORD_LOGGATA = "KEY_PASSWORD_LOGGATA";
    scriptDbParametri.KEY_FK_UTENTE = "KEY_FK_UTENTE";
    scriptDbParametri.KEY_URL_XML = "KEY_URL_XML";
    scriptDbParametri.KEY_URL_WS = "KEY_URL_WS";
    scriptDbParametri.KEY_ID_MONITOR_SELEZIONATO = "ID_MONITOR_SELEZIONATO";
    scriptDbParametri.KEY_CASSA_APERTA = "KEY_CASSA_APERTA";
    scriptDbParametri.KEY_CASSA_APERTA_PROGRESSIVO = "KEY_CASSA_APERTA_PROGRESSIVO";
    scriptDbParametri.KEY_NUMERO_SCONTRINO = "KEY_NUMERO_SCONTRINO";
    scriptDbParametri.ID_Cassa = "ID_Cassa";
    scriptDbParametri.FK_Negozio = "FK_Negozio";
    scriptDbParametri.Cod_Cassa = "Cod_Cassa";
    scriptDbParametri.FK_Gruppo_Cassa = "FK_Gruppo_Cassa";
    scriptDbParametri.FK_Modello_Cassa = "FK_Modello_Cassa";
    scriptDbParametri.FK_SONO_IN_VENDITA = "FK_SONO_IN_VENDITA";
    scriptDbParametri.FK_STO_IMPORTANDO_DIVULGAZIONI = "FK_STO_IMPORTANDO_DIVULGAZIONI";
    scriptDbParametri.POS_SETEFI_APP2APP_ATTIVO = "POS_SETEFI_APP2APP_ATTIVO";
    scriptDbParametri.MODELLO_STAMPANTE_SCONTRINI_SELEZIONATO = "MODELLO_STAMPANTE_SCONTRINI_SELEZIONATO";
    scriptDbParametri.ID_AZIENDA = "ID_AZIENDA";
    scriptDbParametri.NUM_COLUMNS = "NUM_COLUMNS";
    scriptDbParametri.FK_LINGUA = "FK_LINGUA";
    scriptDbParametri.BLUETOOTH_DATAMAX_ADDRESS = "BLUETOOTH_DATAMAX_ADDRESS";
    scriptDbParametri.IP_SERVER_COMANDA_LOCALE = "IP_SERVER_COMANDA_LOCALE";
    scriptDbParametri.LOGO = "LOGO";
    scriptDbParametri.KEY_BLUETOOTH_ADDRESS_EPSON_TMP80 = "KEY_BLUETOOTH_ADDRESS_EPSON_TMP80";
    scriptDbParametri.KEY_SONO_MONO_CASSA = "KEY_SONO_MONO_CASSA";
    scriptDbParametri.KEY_ULTIMO_PROGRESSIVO = "ULTIMO_PROGRESSIVO";
    scriptDbParametri.KEY_ULTIMA_FOTO = "ULTIMA_FOTO";
    scriptDbParametri.KEY_ULTIMO_ID_UTENTE_LOGGATO = "ULTIMO_ID_UTENTE_LOGGATO";
    scriptDbParametri.KEY_ORIENTATION_SCREEN = "SCREEN_ORIENTATION";
    scriptDbParametri.PORTRAIT = "PORTRAIT";
    scriptDbParametri.LANDSCAPE = "LANDSCAPE";
    return scriptDbParametri;
}());