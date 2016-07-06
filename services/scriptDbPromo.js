"use strict";
var scriptDbPromo = (function () {
    function scriptDbPromo() {
    }
    scriptDbPromo.getScriptCreatePromo = function () {
        return " CREATE TABLE IF NOT EXISTS [Promo] (				                    " +
            " [ID_Promo] INTEGER  PRIMARY KEY NOT NULL,                     " +
            " [FK_Campagna] INTEGER  NOT NULL,                              " +
            " [FK_Gruppo_Cassa] INTEGER  NOT NULL,                          " +
            " [Descrizione] NVARCHAR(30)  NOT NULL,                         " +
            " [FK_Tipo_Promo] INTEGER  NOT NULL,                            " +
            " [FK_Carta_Gruppo] INTEGER  NULL,                              " +
            " [FK_Carta_Gruppo_Scontrino] INTEGER  NULL,                    " +
            " [Sequenza_Applicazione] INTEGER DEFAULT '0' NULL,             " +
            " [Numero_Applicazioni] INTEGER DEFAULT '9999' NULL,            " +
            " [Stato_Promo] NVARCHAR(1) DEFAULT '0' NULL,                   " +
            " [DataInizio] INTEGER  NULL,                                   " +
            " [DataFine] INTEGER  NULL,                                     " +
            " [Giorni_Validi] NVARCHAR(15) DEFAULT '(1,2,3,4,5,6,7)' NULL,  " +
            " [Dalle_Ore] NVARCHAR(30)  NOT NULL,                           " +
            " [Alle_Ore] NVARCHAR(30)  NOT NULL,                            " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,                       " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,                     " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL                   " +
            " )                                                             ";
    };
    scriptDbPromo.getScriptCreatePersonal_Basket = function () {
        return " CREATE TABLE IF NOT EXISTS [Personal_Basket] ( " +
            " [ID_Basket] INTEGER  NOT NULL PRIMARY KEY,     " +
            " [Tipo_Item] INTEGER  NOT NULL,                 " +
            " [Item] INTEGER  NOT NULL,                      " +
            " [DataCreazione] NVARCHAR(50)  NULL,            " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,          " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,        " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,      " +
            " [Stato_Record] NVARCHAR(1)  NOT NULL,          " +
            " [DataEstrazione] NVARCHAR(50)  NULL,           " +
            " [PacchettoEstrazione] NVARCHAR(25)  NULL       " +
            " )                                              ";
    };
    scriptDbPromo.getScriptCreatePromo_Beneficio = function () {
        return " CREATE TABLE IF NOT EXISTS [Promo_Beneficio] ( " +
            " [ID_Riga_Regola_Beneficio] INTEGER  NOT NULL PRIMARY KEY, " +
            " [FK_Promo] INTEGER  NOT NULL,				" +
            " [Tipo_Item] INTEGER  NOT NULL,            " +
            " [Item] INTEGER  NOT NULL,                 " +
            " [Tipo_Beneficio] INTEGER  NOT NULL,       " +
            " [Valore_Beneficio] FLOAT  NOT NULL,       " +
            " [FK_Accumulatore_Tipo] INTEGER  NULL, " +
            " [FK_Accumulatore] INTEGER  NULL, " +
            " [Num_Applicazione] INTEGER  NOT NULL,     " +
            " [Valore_Applicazione] INTEGER  NULL, " +
            " [DataCreazione] NVARCHAR(50)  NULL,       " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,     " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,   " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL, " +
            " [Stato_Record] NVARCHAR(1)  NULL,         " +
            " [DataEstrazione] NVARCHAR(50)  NULL,      " +
            " [PacchettoEstrazione] NVARCHAR(25)  NULL  " +
            " )                                         ";
    };
    scriptDbPromo.getScriptCreatePromo_Regola = function () {
        return " CREATE TABLE IF NOT EXISTS [Promo_Regola] (	" +
            " [ID_Regola] INTEGER  NOT NULL PRIMARY KEY,    " +
            " [FK_Promo] INTEGER  NOT NULL,                 " +
            " [Tipo_Valore] INTEGER  NOT NULL,              " +
            " [Condizione] NVARCHAR(5)  NOT NULL,           " +
            " [Valore] FLOAT DEFAULT '0' NOT NULL,          " +
            " [Valore_Max] FLOAT  NOT NULL,                 " +
            " [Valore_Scontrino] FLOAT  NOT NULL,           " +
            " [DataCreazione] NVARCHAR(50)  NULL,           " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,         " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,       " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,     " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL,  " +
            " [DataEstrazione] NVARCHAR(50)  NULL,          " +
            " [PacchettoEstrazione] NVARCHAR(25)  NULL      " +
            " )                                             ";
    };
    scriptDbPromo.getScriptCreatePromo_Regola_Paniere = function () {
        return " CREATE TABLE IF NOT EXISTS [Promo_Regola_Paniere] ( " +
            " [ID_Riga_Regola] INTEGER  NOT NULL PRIMARY KEY, " +
            " [FK_Regola] INTEGER  NOT NULL,			" +
            " [Tipo_Item] INTEGER  NOT NULL,            " +
            " [Item] INTEGER  NOT NULL,                 " +
            " [FK_Promo] INTEGER  NULL,                 " +
            " [Tipo_Valore] INTEGER  NULL,              " +
            " [Condizione] NVARCHAR(5)  NULL,           " +
            " [Valore] FLOAT  NULL,                     " +
            " [Valore_Max] FLOAT  NULL,                 " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,   " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL, " +
            " [Stato_Record] NVARCHAR(1)  NULL          " +
            " )                                         ";
    };
    scriptDbPromo.getScriptCreatePromo_Regola_Paniere_Esclusi = function () {
        return " CREATE TABLE IF NOT EXISTS [Promo_Regola_Paniere_Esclusi] ( " +
            " [ID_Riga_Regola_Esclusi] INTEGER  PRIMARY KEY NOT NULL, " +
            " [FK_Regola] INTEGER  NOT NULL,				" +
            " [Tipo_Item] INTEGER  NOT NULL,                " +
            " [Item] INTEGER  NOT NULL,                     " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,       " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,     " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL   " +
            " )                                             ";
    };
    scriptDbPromo.getScriptCreateScontrini_Righe_Input = function () {
        return " CREATE TABLE IF NOT EXISTS [Scontrini_Righe_Input] ( " +
            " [Riga] INTEGER  NOT NULL,						" +
            " [TipoRiga] INTEGER  NOT NULL,                 " +
            " [Descrizione_Riga] NVARCHAR(250)  NOT NULL,   " +
            " [Barcode] NVARCHAR(4096)  NULL,               " +
            " [Prodotto] NVARCHAR(50)  NULL,                " +
            " [DescrizioneProdotto] NVARCHAR(50)  NULL,     " +
            " [DescrizioneVariante] NVARCHAR(50)  NULL,     " +
            " [DescrizioneTaglia] NVARCHAR(10)  NULL,       " +
            " [FK_Barcode] INTEGER  NULL,                   " +
            " [FK_Classe_Articolo] INTEGER  NULL,           " +
            " [FK_Prodotto] INTEGER  NULL,                  " +
            " [FK_Variante] INTEGER  NULL,                  " +
            " [FK_Prodotto_Variante_Taglia] INTEGER  NULL,  " +
            " [FK_Marca] INTEGER  NULL,                     " +
            " [FK_Reparto] INTEGER  NULL,                   " +
            " [FK_TipoProdotto] INTEGER  NULL,              " +
            " [Quantita] FLOAT  NULL,                       " +
            " [ImportoNetto] FLOAT  NULL,                   " +
            " [Flag_Sconto] BOOLEAN  NULL,                  " +
            " [Flag_ScontoDipendente] BOOLEAN  NULL,        " +
            " [Flag_Promo] BOOLEAN  NULL,                   " +
            " [Flag_PesoRichiesto] BOOLEAN  NULL,           " +
            " [Flag_PrezzoRichiesto] BOOLEAN  NULL,         " +
            " [Stato_Record] NVARCHAR(1)  NULL,             " +
            " PRIMARY KEY ([Riga],[TipoRiga])               " +
            " )                                             ";
    };
    scriptDbPromo.getScriptCreateSintesi_Scontrino = function () {
        return " CREATE TABLE IF NOT EXISTS [Sintesi_Scontrino] ( " +
            " [Tipo_Item] INTEGER  NOT NULL,                   " +
            " [Item] INTEGER  NOT NULL,                        " +
            " [Tipo_Valore] INTEGER  NOT NULL,                 " +
            " [Valore] FLOAT  NOT NULL,                        " +
            " [Flag_Scontabile] BOOLEAN  NOT NULL,             " +
            " [Val_Min] FLOAT  NULL,                           " +
            " [Val_Max] FLOAT  NULL,                           " +
            " PRIMARY KEY ([Tipo_Item],[Item],[Tipo_Valore])   " +
            " )                                                ";
    };
    scriptDbPromo.getScriptCreateSintesi_Scontrino_Promo = function () {
        return " CREATE TABLE IF NOT EXISTS [Sintesi_Scontrino_Promo] (		" +
            " [Tipo_Item] INTEGER  NOT NULL,                                " +
            " [Item] INTEGER  NOT NULL,                                     " +
            " [FK_Riga_Regola_Beneficio] INTEGER  NOT NULL,                 " +
            " [Numero_Applicazioni] INTEGER  NOT NULL,                      " +
            " PRIMARY KEY ([Tipo_Item],[Item],[FK_Riga_Regola_Beneficio])   " +
            " )                                                             ";
    };
    scriptDbPromo.getScriptCreateTipi_Item = function () {
        return " CREATE TABLE IF NOT EXISTS [Tipi_Item]( " +
            " 	[ID_Tipo_Item] INTEGER NOT NULL,      " +
            " 	[Descrizione] NVARCHAR(50) NOT NULL   " +
            " )                                       ";
    };
    scriptDbPromo.getScriptCreateTipo_Beneficio = function () {
        return " CREATE TABLE IF NOT EXISTS [Tipo_Beneficio] (		" +
            " [ID_Tipo_Beneficio] INTEGER  NOT NULL PRIMARY KEY," +
            " [Descrizione] NVARCHAR(50)  NOT NULL,             " +
            " [Sequenza_Applicazione] INTEGER  NULL             " +
            " )                                                 ";
    };
    scriptDbPromo.getScriptCreateTipo_Promo = function () {
        return " CREATE TABLE IF NOT EXISTS [Tipo_Promo](			" +
            " 	[ID_Tipo_Promo] INTEGER NOT NULL PRIMARY KEY,   " +
            " 	[Descrizione] NVARCHAR(50) NOT NULL,            " +
            " 	[Flag_Riga] BOOLEAN NULL,                       " +
            " 	[Flag_Totale] BOOLEAN NULL                      " +
            " 	)                                               ";
    };
    scriptDbPromo.getScriptCreateTipo_Valore = function () {
        return " CREATE TABLE IF NOT EXISTS [Tipo_Valore](			" +
            " 	[ID_Tipo_Valore] INTEGER NOT NULL PRIMARY KEY,  " +
            " 	[Descrizione] NVARCHAR(50) NOT NULL             " +
            " 	)                                               ";
    };
    scriptDbPromo.getScriptCreateVW_Promo_Regole = function () {
        return " CREATE VIEW IF NOT EXISTS [VW_Promo_Regole] AS						 " +
            " SELECT                                                                 " +
            " Promo_Regola.Stato_Record AS Stato_Regola,                             " +
            " Promo_Regola.ID_Regola AS ID_Regola,                                   " +
            " Promo_Regola.FK_Promo AS FK_Promo,                                     " +
            " Promo_Regola.Tipo_Valore AS Tipo_Valore,                               " +
            " Promo_Regola.Condizione AS Condizione,                                 " +
            " Promo_Regola.Valore AS Valore,                                         " +
            " Promo_Regola.Valore_Max AS Valore_Max,                                 " +
            " Promo.Numero_Applicazioni AS Numero_Applicazioni,                      " +
            " Promo.Descrizione AS Descrizione,                                      " +
            " Promo.FK_Tipo_Promo AS FK_Tipo_Promo,                                  " +
            " Promo.FK_Carta_Gruppo AS FK_Carta_Gruppo,                              " +
            " Promo.FK_Carta_Gruppo_Scontrino AS FK_Carta_Gruppo_Scontrino           " +
            " FROM                                                                   " +
            " Promo                                                                  " +
            " INNER JOIN                                                             " +
            " Promo_Regola ON Promo.ID_Promo = Promo_Regola.FK_Promo                 " +
            " WHERE (Promo.Stato_Record = '0') AND (Promo_Regola.Stato_Record = '0') ";
    };
    scriptDbPromo.getScriptCreateVW_Promo_Interessate = function () {
        return " CREATE VIEW IF NOT EXISTS [VW_Promo_Interessate] AS " +
            " SELECT                                              " +
            " VW_Promo_Regole.FK_Tipo_Promo AS FK_Tipo_Promo,     " +
            " VW_Promo_Regole.Descrizione AS Promozione,          " +
            " Promo_Regola_Paniere.FK_Promo AS FK_Promo,          " +
            " Promo_Regola_Paniere.FK_Regola AS FK_Regola,        " +
            " Tipo_Valore.Descrizione AS Descrizione,             " +
            " Tipi_Item.Descrizione AS Tipo,                      " +
            " Sintesi_Scontrino.Valore AS Valore_Scontrino,       " +
            " VW_Promo_Regole.Condizione AS Condizione,           " +
            " VW_Promo_Regole.Valore AS Valore,                   " +
            " VW_Promo_Regole.Valore_Max AS Valore_Max,           " +
            " Promo_Regola_Paniere.Tipo_Item AS Tipo_Item,        " +
            " Promo_Regola_Paniere.Item AS Item,                  " +
            " VW_Promo_Regole.Tipo_Valore AS Tipo_Valore,         " +
            " VW_Promo_Regole.Numero_Applicazioni AS Num_Applic,  " +
            " VW_Promo_Regole.FK_Carta_Gruppo as FK_Carta_Gruppo " +
            " FROM                                                " +
            " Promo_Regola_Paniere INNER JOIN                     " +
            " VW_Promo_Regole ON Promo_Regola_Paniere.FK_Regola = VW_Promo_Regole.ID_Regola AND Promo_Regola_Paniere.FK_Promo = VW_Promo_Regole.FK_Promo AND " +
            " Promo_Regola_Paniere.Tipo_Valore = VW_Promo_Regole.Tipo_Valore INNER JOIN                                                                      " +
            " Tipo_Valore ON VW_Promo_Regole.Tipo_Valore = Tipo_Valore.ID_Tipo_Valore INNER JOIN                                                             " +
            " Tipi_Item ON Promo_Regola_Paniere.Tipo_Item = Tipi_Item.ID_Tipo_Item INNER JOIN                                                                " +
            " Sintesi_Scontrino ON Promo_Regola_Paniere.Tipo_Item = Sintesi_Scontrino.Tipo_Item AND Promo_Regola_Paniere.Item = Sintesi_Scontrino.Item AND   " +
            " Promo_Regola_Paniere.Tipo_Valore = Sintesi_Scontrino.Tipo_Valore                                                                               ";
    };
    scriptDbPromo.getScriptCreateVW_Promo_Totale = function () {
        return " SELECT											            " +
            " VW_Promo_Regole.FK_Tipo_Promo as FK_Tipo_Promo,   " +
            " VW_Promo_Regole.Descrizione AS Promozione,        " +
            " Promo_Regola_Paniere.FK_Promo as FK_Promo,        " +
            " Promo_Regola_Paniere.FK_Regola as FK_Regola,      " +
            " Tipo_Valore.Descrizione as Descrizione,           " +
            " Tipi_Item.Descrizione AS Tipo,                    " +
            " Sintesi_Scontrino.Valore AS Valore_Scontrino,     " +
            " VW_Promo_Regole.Condizione as Condizione,         " +
            " VW_Promo_Regole.Valore as Valore,                 " +
            " VW_Promo_Regole.Valore_Max as Valore_Max,         " +
            " Promo_Regola_Paniere.Tipo_Item as Tipo_Item,      " +
            " Promo_Regola_Paniere.Item as Item,                " +
            " VW_Promo_Regole.Tipo_Valore as Tipo_Valore,       " +
            " VW_Promo_Regole.Numero_Applicazioni AS Num_Applic," +
            " Tipo_Promo.Flag_Totale as Flag_Totale             " +
            " FROM Promo_Regola_Paniere                         " +
            " INNER JOIN VW_Promo_Regole ON Promo_Regola_Paniere.FK_Regola =VW_Promo_Regole.ID_Regola AND Promo_Regola_Paniere.FK_Promo =VW_Promo_Regole.FK_Promo " +
            " AND Promo_Regola_Paniere.Tipo_Valore =VW_Promo_Regole.Tipo_Valore " +
            " INNER JOIN Tipo_Valore ON VW_Promo_Regole.Tipo_Valore =Tipo_Valore.ID_Tipo_Valore " +
            " INNER JOIN Tipi_Item ON Promo_Regola_Paniere.Tipo_Item =Tipi_Item.ID_Tipo_Item " +
            " INNER JOIN Tipo_Promo ON VW_Promo_Regole.FK_Tipo_Promo =Tipo_Promo.ID_Tipo_Promo " +
            " LEFT OUTER JOIN Sintesi_Scontrino ON Promo_Regola_Paniere.Tipo_Valore =Sintesi_Scontrino.Tipo_Valore AND Promo_Regola_Paniere.Item =Sintesi_Scontrino.Item " +
            " AND Promo_Regola_Paniere.Tipo_Item =Sintesi_Scontrino.Tipo_Item " +
            " WHERE (Tipo_Promo.Flag_Totale = 1) ";
    };
    scriptDbPromo.getScriptCreateVW_Valori_Esclusi = function () {
        return " CREATE VIEW IF NOT EXISTS [VW_Valori_Esclusi] AS " +
            " SELECT " +
            " B.FK_Regola AS FK_Regola, " +
            " A.Tipo_Valore AS Tipo_Valore, " +
            " SUM(A.Valore) AS Valore " +
            " FROM " +
            " Sintesi_Scontrino AS A " +
            " INNER JOIN Promo_Regola_Paniere_Esclusi AS B ON A.Item = B.Item AND A.Tipo_Item = B.Tipo_Item " +
            " GROUP BY B.FK_Regola, A.Tipo_Valore ";
    };
    scriptDbPromo.getScriptCreateVW_Righe_Interessate_PR = function () {
        return " CREATE VIEW IF NOT EXISTS [VW_Righe_Interessate_PR] AS 																	" +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 1 AND VWPI.Item = SRI.FK_Prodotto                  " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 2 AND VWPI.Item = SRI.FK_Variante                  " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 3 AND VWPI.Item = SRI.FK_Prodotto_Variante_Taglia  " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 4 AND VWPI.Item = SRI.FK_Barcode                   " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 5 AND VWPI.Item = SRI.FK_Marca                     " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 6 AND VWPI.Item = SRI.FK_Reparto                   " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 7 AND VWPI.Item = SRI.FK_TipoProdotto              " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 0 AND VWPI.Item = 0                                " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Riga = 1                                                                    ";
    };
    scriptDbPromo.getScriptCreateVW_Righe_Interessate_PT = function () {
        return " CREATE VIEW IF NOT EXISTS [VW_Righe_Interessate_PT] AS																	" +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 1 AND VWPI.Item = SRI.FK_Prodotto                  " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Totale = 1                                                                  " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 2 AND VWPI.Item = SRI.FK_Variante                  " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Totale = 1                                                                  " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 3 AND VWPI.Item = SRI.FK_Prodotto_Variante_Taglia  " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Totale = 1                                                                  " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 4 AND VWPI.Item = SRI.FK_Barcode                   " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Totale = 1                                                                  " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 5 AND VWPI.Item = SRI.FK_Marca                     " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Totale = 1                                                                  " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 6 AND VWPI.Item = SRI.FK_Reparto                   " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Totale = 1                                                                  " +
            " UNION                                                                                                                     " +
            " SELECT        FK_PROMO, IFNULL(SRI.Riga, 0) RIGA                                                                          " +
            " FROM            VW_Promo_Interessate VWPI INNER JOIN                                                                      " +
            "                          Tipo_Promo TP ON VWPI.FK_Tipo_Promo = TP.ID_Tipo_Promo LEFT JOIN                                 " +
            "                          Scontrini_Righe_Input SRI ON VWPI.Tipo_Item = 7 AND VWPI.Item = SRI.FK_TipoProdotto              " +
            " WHERE        IFNULL(SRI.Riga, 0) > 0 AND Flag_Totale = 1                                                                  ";
    };
    scriptDbPromo.createTables = function (db) {

        var this_ = this;
            db.serialize(function() {
            db.run(this_.getScriptCreatePromo());
            db.run(this_.getScriptCreatePersonal_Basket());
            db.run(this_.getScriptCreatePromo_Beneficio());
            db.run(this_.getScriptCreatePromo_Regola());
            db.run(this_.getScriptCreatePromo_Regola_Paniere());
            db.run(this_.getScriptCreatePromo_Regola_Paniere_Esclusi());
            db.run(this_.getScriptCreateScontrini_Righe_Input());
            db.run(this_.getScriptCreateSintesi_Scontrino());
            db.run(this_.getScriptCreateSintesi_Scontrino_Promo());
            db.run(this_.getScriptCreateTipi_Item());
            db.run(this_.getScriptCreateTipo_Beneficio());
            db.run(this_.getScriptCreateTipo_Promo());
            db.run(this_.getScriptCreateTipo_Valore());
            db.run(this_.getScriptCreateVW_Promo_Regole());
            db.run(this_.getScriptCreateVW_Promo_Interessate());
            db.run(this_.getScriptCreateVW_Promo_Totale());
            db.run(this_.getScriptCreateVW_Valori_Esclusi());
            db.run(this_.getScriptCreateVW_Righe_Interessate_PR());
            db.run(this_.getScriptCreateVW_Righe_Interessate_PT());
    });
      
    };
    return scriptDbPromo;
}());
//# sourceMappingURL=scriptDbPromo.js.map