"use strict";
var scriptDbProgressivoNegozio = (function () {
    function scriptDbProgressivoNegozio() {
    }
    scriptDbProgressivoNegozio.getScriptCreateScontrini_Progressivi = function () {
        return " CREATE TABLE IF NOT EXISTS [Scontrini_Progressivi] ( [FK_Negozio] int NOT NULL , " +
            "[ID_ProgressivoNegozio] bigint NOT NULL , " +
            "[DataApertura] int NULL , " +
            "[DataChiusura] int NULL , " +
            "[Stato] tinyint NULL , " +
            "[DataCreazione] datetime NULL , " +
            "[UtenteCreazione] nvarchar NULL , " +
            "[DataAggiornamento] datetime NULL , " +
            "[UtenteAggiornamento] nvarchar NULL , " +
            "[Stato_Record] nchar NULL , " +
            "[DataEstrazione] datetime NULL , " +
            "[PacchettoEstrazione] nvarchar NULL , " +
            "PRIMARY KEY ([FK_Negozio], [ID_ProgressivoNegozio])) ";
    };
    scriptDbProgressivoNegozio.getScriptCreateIDX_SCONTRINI_PROGRESSIVI = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PROGRESSIVI] ON [Scontrini_Progressivi]( " +
            " [FK_Negozio]  ASC,                                                                 " +
            " [ID_ProgressivoNegozio]  ASC                                                       " +
            " )";
    };
    scriptDbProgressivoNegozio.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_FK_NEGOZIO = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PROGRESSIVI_FK_NEGOZIO] ON [Scontrini_Progressivi]( " +
            " 	[FK_Negozio]  ASC                                                                           " +
            " )";
    };
    scriptDbProgressivoNegozio.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_ID_ProgressivoNegozio = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PROGRESSIVI_ID_ProgressivoNegozio] ON [Scontrini_Progressivi]( " +
            " [ID_ProgressivoNegozio]  ASC                                                                             " +
            " )";
    };
    scriptDbProgressivoNegozio.createTables = function (db) {
        var this_ = this;
        db.serialize(function() {
            db.run(this_.getScriptCreateScontrini_Progressivi())
            db.run(this_.getScriptCreateIDX_SCONTRINI_PROGRESSIVI());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_FK_NEGOZIO());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_ID_ProgressivoNegozio());
        });  
    };
    return scriptDbProgressivoNegozio;
}());