"use strict";
var scriptDbInventario = (function () {
    function scriptDbInventario() {
    }
    scriptDbInventario.getScriptCreateInventario_Conteggi = function () {
        return " CREATE TABLE IF NOT EXISTS [Inventario_Conteggi] ( " +
            " [ID_Conta] nvarchar(24)  PRIMARY KEY NULL,         " +
            " [FK_Azienda] INTEGER  NULL,                        " +
            " [FK_Negozio] INTEGER  NULL,                        " +
            " [FK_Cassa] INTEGER NULL, " +
            " [FK_Magazzino] INTEGER NULL, " +
            " [Data] NVARCHAR(50)  NULL,                         " +
            " [Descrizione] NVARCHAR(250)  NULL,                 " +
            " [FK_Listino] INTEGER DEFAULT '-1' NULL,            " +
            " [Spedito] BOOLEAN  NULL, " +
            " [DataCreazione] NVARCHAR(50)  NULL,                " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,              " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,            " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,          " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL,       " +
            " [DataEstrazione] NVARCHAR(50)  NULL,               " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL           " +
            " )";
    };
    scriptDbInventario.getScriptCreateInventario_Conteggi_Dettagli = function () {
        return " CREATE TABLE IF NOT EXISTS [Inventario_Conteggi_Dettagli] ( " +
            " [ID_Conta] NVARCHAR(24)  NULL,                              " +
            " [Riga] INTEGER  NULL,                                       " +
            " [FK_Azienda] INTEGER  NULL,                                 " +
            " [FK_Negozio] INTEGER  NULL,                                 " +
            " [FK_Magazzino] INTEGER NULL, " +
            " [Barcode] NVARCHAR(256)  NULL,                              " +
            " [FK_Barcode] INTEGER  NULL,                                 " +
            " [FK_Classe_Articolo] INTEGER NULL, " +
            " [FK_Prodotto_Variante_Taglia] INTEGER  NULL,                " +
            " [FK_Prodotto_Variante] INTEGER  NULL,                       " +
            " [FK_Prodotto] INTEGER  NULL,                                " +
            " [Prodotto] NVARCHAR(50) NULL, " +
            " [DescrizioneTaglia] NVARCHAR(250)  NULL,                    " +
            " [DescrizioneVariante] nvarchar(250)  NULL,                  " +
            " [DescrizioneProdotto] nvarchar(250)  NULL,                  " +
            " [Quantita] FLOAT  NULL,                                     " +
            " [PrezzoUnitarioAcquisto] FLOAT  NULL,                       " +
            " [Importo] FLOAT  NULL,                                      " +
            " [FK_Listino] INTEGER  NULL,                                 " +
            " [FK_UnitaDiMisura] INTEGER  NULL,                           " +
            " [Commento] NVARCHAR(250)  NULL,                             " +
            " [DataCreazione] NVARCHAR(50)  NULL,                         " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,                       " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,                     " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,                   " +
            " [Stato_Record] NVARCHAR(1)  NULL,                           " +
            " [DataEstrazione] NVARCHAR(50)  NULL,                        " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL,                   " +
            " PRIMARY KEY ([ID_Conta],[Riga])                             " +
            " )";
    };
    scriptDbInventario.createTables = function (db) {
        db.run(this.getScriptCreateInventario_Conteggi());
        db.run(this.getScriptCreateInventario_Conteggi_Dettagli());
    };
    return scriptDbInventario;
}());