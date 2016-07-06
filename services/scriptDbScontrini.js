"use strict";
var scriptDbScontrini = (function () {
    function scriptDbScontrini() {
    }
    scriptDbScontrini.getScriptCreateScontrini_Iva = function () {
        return " create table if not exists [Scontrini_Iva] ( [ID_Scontrini_Testate] varchar NOT NULL , " +
            "[FK_Iva_Nazione_Stato] int NOT NULL , [IVA] nvarchar NULL , " +
            "[FK_Iva_Tipi_Nazione_Stato] int NOT NULL , [Iva_Tipi_Nazione_Stato_Descr] nvarchar NULL , " +
            " [Aliquota_1] [decimal](15, 4) NULL, " +
            " [Aliquota_2] [decimal](15, 4) NULL, " +
            " [Aliquota_3] [decimal](15, 4) NULL, " +
            " [Aliquota_4] [decimal](15, 4) NULL, " +
            " [Aliquota_5] [decimal](15, 4) NULL, " +
            " [Imponibile] decimal(15, 4) NULL , [Imposta] decimal(15, 4) NULL , " +
            "[Importo] decimal(15, 4) NULL , [DataCreazione] datetime NULL , " +
            "[UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , " +
            "[UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar NULL  , " +
            "[DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , " +
            "PRIMARY KEY ([ID_Scontrini_Testate], [FK_Iva_Nazione_Stato])) ";
    };
    scriptDbScontrini.getScriptCreateScontrini_Movimenti = function () {
        return " create table if not exists [Scontrini_Movimenti] ( [FK_Scontrini_Testate] varchar NOT NULL , " +
            "[Riga] int NOT NULL , [Sottoriga] int NOT NULL , " +
            "[ProgressivoCassa] bigint NOT NULL , [FK_Utente] int NOT NULL , " +
            "[FK_Cassa] int NOT NULL , [FK_Causale_Cassa] int NOT NULL , " +
            "[Data] int NOT NULL , [Causale] nvarchar NULL , [Segno] int NULL , " +
            "[Data_Ora_Operazione] datetime NULL , [FK_Turno] int NULL , [FK_Sala] int NULL , " +
            "[FK_Tavolo] int NULL , [FK_Pagamento] int NULL , [Pagamento] nvarchar NULL , " +
            "[FK_Valuta] int NULL , [Importo] decimal(15, 4) NULL , [Ordinamento] smallint NULL , " +
            "[FK_Moneta] nvarchar NULL , [Moneta] nvarchar NULL , [Pezzi] int NULL , " +
            "[Valore] decimal(15, 4) NULL , [ImportoMonete] decimal(15, 4) NULL , " +
            "[DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , " +
            "[DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , " +
            "[Stato_Record] nchar NULL , [DataEstrazione] datetime NULL , " +
            "[PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Scontrini_Testate], [Riga], [Sottoriga])) ";
    };
    scriptDbScontrini.getScriptCreateScontrini_Pagamenti = function () {
        return " create table if not exists [Scontrini_Pagamenti] ( [ID_Scontrini_Testate] varchar NOT NULL , " +
            "[ID_Riga] int NOT NULL , [Data_Scontrino] datetime NOT NULL , [FK_Pagamento] int NULL , " +
            "[FK_ValutaPagamento] int NULL , [Cambio] decimal(15, 4) NULL , [NumeroBuono] int NULL , " +
            "[ValoreBuono] decimal(15, 4) NULL , [CodiceBuono] nvarchar NULL , " +
            "[MatricolaBuono] nvarchar NULL , [ImportoInValuta] decimal(15, 4) NULL , " +
            "[ImportoInValutaNegozio] decimal(15, 4) NULL , [DataCreazione] datetime NULL , " +
            "[UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , " +
            "[UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar NULL  , " +
            "[DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , " +
            "PRIMARY KEY ([ID_Scontrini_Testate], [ID_Riga])) ";
    };
    scriptDbScontrini.getScriptCreateScontrini_Progressivi = function () {
        return " create table if not exists [Scontrini_Progressivi] ( [FK_Negozio] int NOT NULL , " +
            "[ID_ProgressivoNegozio] bigint NOT NULL , [DataApertura] int NULL , " +
            "[DataChiusura] int NULL , [Stato] tinyint NULL , [DataCreazione] datetime NULL , " +
            "[UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , " +
            "[UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar NULL , " +
            "[DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , " +
            "PRIMARY KEY ([FK_Negozio], [ID_ProgressivoNegozio])) ";
    };
    scriptDbScontrini.getScriptCreateScontrini_Righe = function () {
        return " CREATE TABLE IF NOT EXISTS [Scontrini_Righe] (		" +
            " [ID_Scontrini_Testate] varchar  NOT NULL,             " +
            " [Riga] smallint  NOT NULL,                            " +
            " [Sotto_Riga] smallint  NOT NULL,                      " +
            " [TipoRiga] int  NOT NULL,                             " +
            " [Data_Scontrino] int  NOT NULL,                       " +
            " [Descrizione_Riga] nvarchar  NOT NULL,                " +
            " [FK_Promo] bigint  NULL,                              " +
            " [FK_Venditore] int  NULL,                             " +
            " [ProvvigioneVenditore] decimal(15, 4)  NULL,          " +
            " [Barcode] nvarchar  NULL,                             " +
            " [Prodotto] NVARCHAR(50)  NULL,                        " +
            " [FK_UnitaMisuraVendita] INTEGER  NULL,                " +
            " [NumeroDecimali] INTEGER  NULL,                       " +
            " [DescrizioneProdotto] nvarchar  NULL,                 " +
            " [DescrizioneVariante] nvarchar  NULL,                 " +
            " [DescrizioneTaglia] nvarchar  NULL,                   " +
            " [FK_Barcode] bigint  NULL,                            " +
            " [FK_Classe_Articolo] INTEGER  NULL,                   " +
            " [FK_Prodotto_Variante_Taglia] bigint  NULL,           " +
            " [FK_Marca] int  NULL,                                 " +
            " [FK_Reparto] int  NULL,                               " +
            " [FK_TipoProdotto] int  NULL,                          " +
            " [Quantita] decimal(15, 4)  NULL,                      " +
            " [FK_Valuta] int  NULL,                                " +
            " [FK_Listino] int  NULL,                               " +
            " [FK_Iva_Nazione_Stato] int  NULL,                     " +
            " [Aliquota_1] decimal(15, 4)  NULL,                    " +
            " [Aliquota_2] decimal(15, 4)  NULL,                    " +
            " [Aliquota_3] decimal(15, 4)  NULL,                    " +
            " [Aliquota_4] decimal(15, 4)  NULL,                    " +
            " [Aliquota_5] decimal(15, 4)  NULL,                    " +
            " [PA] decimal(15, 4)  NULL,                            " +
            " [PMA] decimal(15, 4)  NULL,                           " +
            " [PMV] decimal(15, 4)  NULL,                           " +
            " [TipoPrezzo] nvarchar  NULL,                          " +
            " [PrezzoUnitarioListino] decimal(15, 4)  NULL,         " +
            " [TipoPrezzoApplicato] nvarchar  NULL,                 " +
            " [PrezzoUnitarioApplicato] decimal(15, 4)  NULL,       " +
            " [ImportoLordo] decimal(15, 4)  NULL,                  " +
            " [TipoScontoApplicato] nvarchar  NULL,                 " +
            " [ScontoPercentuale] decimal(15, 4)  NULL,             " +
            " [ScontoImporto] decimal(15, 4)  NULL,                 " +
            " [ImportoNetto] decimal(15, 4)  NULL,                  " +
            " [FK_Motivazione] nvarchar(6)  NULL,                   " +
            " [Commento] nvarchar  NULL,                            " +
            " [Flag_Magazzino] bit  NULL,                           " +
            " [FlagProdottoOmaggio] bit  NULL,                      " +
            " [FlagPacchetto] bit  NULL,                            " +
            " [ProdottoPacchetto] nvarchar  NULL,                   " +
            " [Flag_Sconto] bit  NULL,                              " +
            " [Flag_ScontoDipendente] bit  NULL,                    " +
            " [Flag_EsclusioneConvenzioni] bit  NULL,               " +
            " [Flag_Promo] bit  NULL,                               " +
            " [Flag_PesoRichiesto] bit  NULL,                       " +
            " [Flag_PrezzoRichiesto] bit  NULL,                     " +
            " [Flag_Celiachia] bit  NULL,                           " +
            " [Flag_ProntoConsumo] bit  NULL,                       " +
            " [Flag_Deperibile] bit  NULL,                          " +
            " [Flag_VisualizzaVisore] bit  NULL,                    " +
            " [Flag_ModificaPrezzo] bit  NULL,                      " +
            " [FK_Accumulatore] int  NULL,                          " +
            " [Valore_Accumulatore] decimal(15, 4)  NULL,           " +
            " [LimiteEta] decimal(2, 0)  NULL,                      " +
            " [DataCreazione] datetime  NULL,                       " +
            " [UtenteCreazione] nvarchar  NULL,                     " +
            " [DataAggiornamento] datetime  NULL,                   " +
            " [UtenteAggiornamento] nvarchar  NULL,                 " +
            " [Stato_Record] nchar  NOT NULL,                       " +
            " [DataEstrazione] datetime  NULL,                      " +
            " [PacchettoEstrazione] nvarchar  NULL,                 " +
            " PRIMARY KEY ([ID_Scontrini_Testate],[Riga],[Sotto_Riga]) " +
            " ) ";
    };
    scriptDbScontrini.getScriptCreateScontrini_Testate = function () {
        return " create table if not exists [Scontrini_Testate] ( [ID_Scontrini_Testate] varchar NOT NULL , " +
            "[FK_Cassa] int NOT NULL , [ProgressivoCassa] bigint NOT NULL , " +
            "[FK_Tipo_Vendita] nvarchar NOT NULL , [Numero_Scontrino] int NOT NULL , " +
            "[Data_Scontrino] datetime NOT NULL , [Transazione] int NOT NULL , " +
            "[FK_ProgressivoNegozio] bigint NULL , [Matricola_CRF] nvarchar NULL , " +
            "[Numero_Scontrino_CRF] int NULL , [Data_Scontrino_CRF] datetime NULL , " +
            "[FK_Causale_Cassa] int NULL , [FK_Fornitore] int NULL , [FK_Cliente] int NULL , " +
            "[FK_ClienteFatturazione] int NULL , [FK_ClienteSpedizione] int NULL , " +
            "[FK_Iva_Tipi_Nazione_Stato] int NULL , [Iva_Tipi_Nazione_Stato_Descr] nvarchar NULL , " +
            "[FK_Valuta] int NULL , [FK_Fidelity] int NULL , [FK_Convenzioni] int NULL , " +
            "[FK_Utente] int NULL , [FK_Turno] int NULL , [FK_Sala] int NULL , " +
            "[FK_Tavolo] int NULL , [ProvvigioneCassiere] decimal(15, 4) NULL , " +
            "[ImportoTotaleLordoIvaInclusa] decimal(15, 4) NULL , " +
            "[ScontoTotaleImportoIvaInclusa] decimal(15, 4) NULL , " +
            "[ImportoTotaleNettoIvaInclusaIncassato] decimal(15, 4) NULL , " +
            "[FK_Scontrini_Testate] varchar NULL , [FK_TipoDocumento] smallint NULL , " +
            "[Prefisso] nvarchar NULL , [Anno] smallint NULL , [Suffisso] nvarcharNULL , " +
            "[Numero] int NULL , [Commento] nvarchar NULL , [FlagSospeso] bit NULL , " +
            "[FlagSaldato] bit NULL , [DataCreazione] datetime NULL , " +
            "[UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , " +
            "[UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar NULL , " +
            "[DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Scontrini_Testate])) ";
    };
    scriptDbScontrini.getScriptCreateMappingTrasferimento = function () {
        return " CREATE TABLE IF NOT EXISTS [MappingTrasferimento] (				 " +
            " [ID_Scontrini_Testate] nvarchar(24)  UNIQUE NOT NULL PRIMARY KEY,  " +
            " [Stato] VARCHAR(1)  NULL,                                          " +
            " [Messaggio] text  NULL                                             " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_IVA = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_IVA] ON [Scontrini_Iva]( " +
            " [ID_Scontrini_Testate]  ASC,                                       " +
            " [FK_Iva_Nazione_Stato]  ASC                                        " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_IVA_FK = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_IVA_FK] ON [Scontrini_Iva]( " +
            " [FK_Iva_Nazione_Stato]  ASC                                           " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_IVA_ID = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_IVA_ID] ON [Scontrini_Iva]( " +
            " [ID_Scontrini_Testate]  ASC                                           " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_MOVIMENTI_FK = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_MOVIMENTI_FK] ON [Scontrini_Movimenti]( " +
            " 	[FK_Scontrini_Testate]  ASC                                                     " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_MOVIMENTI_RIGA = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_MOVIMENTI_RIGA] ON [Scontrini_Movimenti]( " +
            " [Riga]  ASC                                                                         " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_MOVIMENTI_SOTTORIGA = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_MOVIMENTI_SOTTORIGA] ON [Scontrini_Movimenti]( " +
            " [Sottoriga]  ASC                                                                         " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_PAGAMENTI = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PAGAMENTI] ON [Scontrini_Pagamenti]( " +
            " 	[ID_Scontrini_Testate]  ASC,                                                 " +
            " 	[ID_Riga]  ASC                                                               " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_PAGAMENTI_ID_RIGA = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PAGAMENTI_ID_RIGA] ON [Scontrini_Pagamenti]( " +
            " [ID_Riga]  ASC                                                                         " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_PAGAMENTI_ID_SCONTRINI_TESTATE = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PAGAMENTI_ID_SCONTRINI_TESTATE] ON [Scontrini_Pagamenti]( " +
            " [ID_Scontrini_Testate]  ASC                                                                         " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_PROGRESSIVI = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PROGRESSIVI] ON [Scontrini_Progressivi]( " +
            " [FK_Negozio]  ASC,                                                                 " +
            " [ID_ProgressivoNegozio]  ASC                                                       " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_FK_NEGOZIO = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PROGRESSIVI_FK_NEGOZIO] ON [Scontrini_Progressivi]( " +
            " 	[FK_Negozio]  ASC                                                                           " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_ID_ProgressivoNegozio = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_PROGRESSIVI_ID_ProgressivoNegozio] ON [Scontrini_Progressivi]( " +
            " [ID_ProgressivoNegozio]  ASC                                                                             " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_TESTATE_ID_SCONTRINI_TESTATE = function () {
        return "CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_TESTATE_ID_SCONTRINI_TESTATE] ON [Scontrini_Testate]( " +
            "[ID_Scontrini_Testate]  ASC                                                                     " +
            ")";
    };
    scriptDbScontrini.getScriptCreateIDX_SCONTRINI_RIGHE_INDICE_TRIPLA = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_SCONTRINI_RIGHE_INDICE_TRIPLA] ON [Scontrini_Righe]( " +
            " [ID_Scontrini_Testate]  ASC, " +
            " [Riga]  ASC, " +
            " [Sotto_Riga]  ASC " +
            " ) ";
    };
    scriptDbScontrini.getScriptCreateIDX_MAPPINGTRASFERIMENTO_1 = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_MAPPINGTRASFERIMENTO_1] ON [MappingTrasferimento]( " +
            " [ID_Scontrini_Testate]  ASC                                                        " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_MAPPINGTRASFERIMENTO_2 = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_MAPPINGTRASFERIMENTO_2] ON [MappingTrasferimento]( " +
            " [ID_Scontrini_Testate]  ASC,                                                       " +
            " [Stato]  ASC                                                                       " +
            " )";
    };
    scriptDbScontrini.getScriptCreateIDX_MAPPINGTRASFERIMENTO_3 = function () {
        return " CREATE INDEX IF NOT EXISTS [IDX_MAPPINGTRASFERIMENTO_3] ON [MappingTrasferimento]( " +
            " [Stato]  ASC                                                                       " +
            " )";
    };
    scriptDbScontrini.createTables = function (db) {
         var this_ = this;
        db.serialize(function() {
            db.run(this_.getScriptCreateScontrini_Iva());
            db.run(this_.getScriptCreateIDX_SCONTRINI_IVA());
            db.run(this_.getScriptCreateIDX_SCONTRINI_IVA_FK());
            db.run(this_.getScriptCreateScontrini_Movimenti());
            db.run(this_.getScriptCreateIDX_SCONTRINI_MOVIMENTI_FK());
            db.run(this_.getScriptCreateIDX_SCONTRINI_MOVIMENTI_RIGA());
            db.run(this_.getScriptCreateIDX_SCONTRINI_MOVIMENTI_SOTTORIGA());
            db.run(this_.getScriptCreateScontrini_Pagamenti());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PAGAMENTI());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PAGAMENTI_ID_RIGA());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PAGAMENTI_ID_SCONTRINI_TESTATE());
            db.run(this_.getScriptCreateScontrini_Progressivi());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PROGRESSIVI());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_FK_NEGOZIO());
            db.run(this_.getScriptCreateIDX_SCONTRINI_PROGRESSIVI_ID_ProgressivoNegozio());
            db.run(this_.getScriptCreateScontrini_Righe());
            db.run(this_.getScriptCreateIDX_SCONTRINI_RIGHE_INDICE_TRIPLA());
            db.run(this_.getScriptCreateScontrini_Testate());
            db.run(this_.getScriptCreateIDX_SCONTRINI_TESTATE_ID_SCONTRINI_TESTATE());
            db.run(this_.getScriptCreateMappingTrasferimento());
            db.run(this_.getScriptCreateIDX_MAPPINGTRASFERIMENTO_1());
            db.run(this_.getScriptCreateIDX_MAPPINGTRASFERIMENTO_2());
             });  
      
       
    };
    return scriptDbScontrini;
}());