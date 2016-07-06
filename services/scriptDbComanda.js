"use strict";
var scriptDbComanda = (function () {
    function scriptDbComanda() {
    }
    scriptDbComanda.getScriptCreateOrdini = function () {
        return " CREATE TABLE IF NOT EXISTS [Ordini] (	 " +
            " [ID_Ordine] INTEGER  NULL,             " +
            " [ID_Riga_Ordine] INTEGER  NULL,        " +
            " [FK_Azienda] INTEGER  NULL,            " +
            " [FK_Negozio] INTEGER  NULL,            " +
            " [FK_Cassa] INTEGER  NULL,              " +
            " [FK_Utente] INTEGER  NULL,             " +
            " [FK_Sala] INTEGER  NULL,               " +
            " [FK_Tavolo] INTEGER  NULL,             " +
            " [Data] TEXT  NULL,                     " +
            " [FK_Prodotto] INTEGER  NULL,           " +
            " [Descrizione_Prodotto] TEXT NULL, " +
            " [Quantita] INTEGER  NULL,              " +
            " [Note] TEXT  NULL,                     " +
            " [Stato] TEXT  NULL,                    " +
            " [Tempo_Di_Preparazione] INTEGER  NULL, " +
            " [Varianti] TEXT  NULL,                 " +
            " [Da_Consegnare_Con_Id_Prodotto] INTEGER  NULL,		" +
            " [Da_Consegnare_Con_Descrizione_Prodotto] TEXT  NULL,  " +
            " [TipoRiga] TEXT  NULL, 		" +
            " [ColoreRiga] TEXT  NULL,      " +
            " [Prezzo] FLOAT  NULL,         " +
            " [Uscita] INTEGER  NULL,       " +
            " [Stato_Uscita] TEXT  NULL,    " +
            " [Barcode] TEXT  NULL,    " +
            " [FK_Planning] TEXT NULL, " +
            " [FK_Stampante] INTEGER NULL, " +
            " [PosizioniDecimali] INTEGER NULL, " +
            " [FK_Monitor] INTEGER NULL, " +
            " [StampaAncheInQuestiFk_Stampante] TEXT NULL, " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,  " +
            " [Spedito] BOOLEAN DEFAULT '0' NULL, " +
            " PRIMARY KEY ([ID_Ordine],[ID_Riga_Ordine],[FK_Azienda],[FK_Negozio],[FK_Cassa],[FK_Sala],[FK_Tavolo]) " +
            " ) ";
    };
    scriptDbComanda.getScriptCreateOrdiniVariazioni = function () {
        return " CREATE TABLE IF NOT EXISTS [OrdiniVariazioni] ( " +
            " [ID_Variazione] INTEGER  NOT NULL PRIMARY KEY ,		" +
            " [ID_Ordine] INTEGER  NULL,		" +
            " [ID_Riga_Ordine] INTEGER  NULL,   " +
            " [FK_Azienda] INTEGER  NULL,       " +
            " [FK_Negozio] INTEGER  NULL,       " +
            " [FK_Cassa] INTEGER  NULL,         " +
            " [FK_Utente] INTEGER  NULL,        " +
            " [FK_Sala] INTEGER  NULL,          " +
            " [FK_Tavolo] INTEGER  NULL,        " +
            " [FK_Prodotto] INTEGER  NULL,      " +
            " [Descrizione_Prodotto] TEXT  NULL, " +
            " [Operazione] TEXT  NULL, " +
            " [Aggiunta] BOOLEAN  NULL, " +
            " [Prezzo] FLOAT  NULL " +
            " ) ";
    };
    scriptDbComanda.getScriptCreateOrdini_Storico = function () {
        return " CREATE TABLE IF NOT EXISTS [Ordini_Storico] (	 " +
            " [ID_Ordine] INTEGER  NULL,             " +
            " [ID_Riga_Ordine] INTEGER  NULL,        " +
            " [FK_Azienda] INTEGER  NULL,            " +
            " [FK_Negozio] INTEGER  NULL,            " +
            " [FK_Cassa] INTEGER  NULL,              " +
            " [FK_Utente] INTEGER  NULL,             " +
            " [FK_Sala] INTEGER  NULL,               " +
            " [FK_Tavolo] INTEGER  NULL,             " +
            " [Data] TEXT  NULL,                     " +
            " [FK_Prodotto] INTEGER  NULL,           " +
            " [Quantita] INTEGER  NULL,              " +
            " [Note] TEXT  NULL,                     " +
            " [Stato] TEXT  NULL,                    " +
            " [Tempo_Di_Preparazione] INTEGER  NULL, " +
            " [Varianti] TEXT  NULL,                 " +
            " [Da_Consegnare_Con_Id_Prodotto] INTEGER  NULL,		" +
            " [Da_Consegnare_Con_Descrizione_Prodotto] TEXT  NULL,  " +
            " [TipoRiga] TEXT  NULL, 		" +
            " [ColoreRiga] TEXT  NULL,      " +
            " [Prezzo] FLOAT  NULL,         " +
            " [Uscita] INTEGER  NULL,       " +
            " [Stato_Uscita] TEXT  NULL,    " +
            " [Barcode] TEXT  NULL,    " +
            " [FK_Planning] TEXT NULL, " +
            " [FK_Stampante] INTEGER NULL, " +
            " [PosizioniDecimali] INTEGER NULL , " +
            " [FK_Monitor] INTEGER NULL, " +
            " PRIMARY KEY ([ID_Ordine],[ID_Riga_Ordine],[FK_Azienda],[FK_Negozio],[FK_Utente],[FK_Sala],[FK_Tavolo]) " +
            " ) ";
    };
    scriptDbComanda.getScriptCreateOrdiniVariazioni_Storico = function () {
        return " CREATE TABLE IF NOT EXISTS [OrdiniVariazioni_Storico] ( " +
            " [ID_Ordine] INTEGER  NULL PRIMARY KEY ,		" +
            " [ID_Riga_Ordine] INTEGER  NULL,   " +
            " [FK_Azienda] INTEGER  NULL,       " +
            " [FK_Negozio] INTEGER  NULL,       " +
            " [FK_Cassa] INTEGER  NULL,         " +
            " [FK_Utente] INTEGER  NULL,        " +
            " [FK_Sala] INTEGER  NULL,          " +
            " [FK_Tavolo] INTEGER  NULL,        " +
            " [FK_Prodotto] INTEGER  NULL,      " +
            " [Descrizione_Prodotto] TEXT  NULL, " +
            " [Operazione] TEXT  NULL, " +
            " [Aggiunta] BOOLEAN  NULL, " +
            " [Prezzo] FLOAT  NULL " +
            " ) ";
    };
    scriptDbComanda.getScriptCreateParametriComanda = function () {
        return " CREATE TABLE IF NOT EXISTS [ParametriComanda] ( " +
            " [Parametro] TEXT  NOT NULL PRIMARY KEY,         " +
            " [Valore] TEXT  NULL                             " +
            " )";
    };
    scriptDbComanda.getScriptCreateIDX_ORDINI_Primo = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_ORDINI_Primo] ON [Ordini]( " +
            " [FK_Azienda]  ASC, " +
            " [FK_Negozio]  ASC, " +
            " [FK_Cassa]  ASC, " +
            " [FK_Sala]  ASC, " +
            " [FK_Tavolo]  ASC " +
            " ) ";
    };
    scriptDbComanda.getScriptCreateIDX_ORDINIVARIAZIONI_Primo = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_ORDINIVARIAZIONI_Primo] ON [OrdiniVariazioni]( " +
            " [ID_Ordine]  ASC, " +
            " [ID_Riga_Ordine]  ASC " +
            " ) ";
    };
    scriptDbComanda.getScriptCreateIDX_PARAMETRICOMANDA_ = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_PARAMETRICOMANDA_] ON [ParametriComanda]( " +
            " [Parametro]  ASC " +
            " )";
    };
    scriptDbComanda.createTables = function (db) {
        var this_ = this;
        db.serialize(function() {
        db.run(this_.getScriptCreateOrdini());
        db.run(this_.getScriptCreateIDX_ORDINI_Primo());
        db.run(this_.getScriptCreateOrdiniVariazioni());
        db.run(this_.getScriptCreateOrdini_Storico());
        db.run(this_.getScriptCreateOrdiniVariazioni_Storico());
        db.run(this_.getScriptCreateParametriComanda());    
        db.run(this_.getScriptCreateIDX_PARAMETRICOMANDA_());
        });
      
    };
    return scriptDbComanda;
}());