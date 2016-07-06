"use strict";
var scriptDbAnagrafica = (function () {
    function scriptDbAnagrafica() {
    }
    scriptDbAnagrafica.getScriptCreateGruppi_Casse_Descr = function () {
        var sqlQuery = " create table if not exists [Gruppi_Casse_Descr] ( [FK_Gruppo_Cassa] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Gruppo_Cassa], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTurni = function () {
        var sqlQuery = " create table if not exists [Turni] ( [ID_Turno] INTEGER NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [DataAggiornamento] datetime NULL , [UtenteCreazione] nvarchar NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Turno])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Gruppo_Descr = function () {
        var sqlQuery = " create table if not exists [Negozi_Gruppo_Descr] ( [FK_Negozi_Gruppo] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozi_Gruppo], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Sale = function () {
        var sqlQuery = " create table if not exists [Negozi_Sale] ( [ID_Sala] INTEGER NOT NULL , [FK_Negozio] INTEGER NOT NULL , [Cod_Sala] varchar(3) NOT NULL , [Sala] nvarchar NULL , [MaxPersone] INTEGER NULL , [FK_Cassa] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Sala])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateListini_Negozi_Casse = function () {
        var sqlQuery = " create table if not exists [Listini_Negozi_Casse] ( [FK_Listino] INTEGER NOT NULL , [FK_Cassa] INTEGER NOT NULL , [Flag_Listino_Base] bit NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Listino], [FK_Cassa])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNazioni_Stati_Regioni = function () {
        var sqlQuery = " create table if not exists [Nazioni_Stati_Regioni] ( [ID_Nazioni_Stati_Regioni] INTEGER IDENTITY(1,1) NOT NULL , [FK_Stato] INTEGER NOT NULL , [Regione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Nazioni_Stati_Regioni])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Planning = function () {
        var sqlQuery = " create table if not exists [Negozi_Planning] ( [ID_Planning] nvarchar NOT NULL , [FK_Sala] INTEGER NOT NULL , [FK_Tavolo] INTEGER NOT NULL , [Data] INTEGER NOT NULL , [Ora] time NOT NULL , [Turno] INTEGER NULL , [NumeroPersone] tinyint NULL DEFAULT ((0)), [Flag_Occupato] bit NULL DEFAULT ((0)), [DataArrivo] datetime NULL , [DataInizioServizio] datetime NULL , [DataFineServizio] datetime NULL , [Riferimento] nvarchar NULL , [FK_Cliente] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Planning])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClassificazione_Dettaglio = function () {
        var sqlQuery = " create table if not exists [Classificazione_Dettaglio] ( [ID_Classificazione_Dettaglio] bigint NOT NULL , [FK_Classificazione] INTEGER NOT NULL , [Codice_Classificazione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Classificazione_Dettaglio])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateValute = function () {
        var sqlQuery = " create table if not exists [Valute] ( [ID_Valuta] INTEGER NOT NULL , [Simbolo] nvarchar NULL , [Ordinamento] INTEGER NULL , [NumeroDecimali] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Valuta])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePagamenti_Scadenze = function () {
        var sqlQuery = " create table if not exists [Pagamenti_Scadenze] ( [ID_Pagamenti_Scadenze] INTEGER NOT NULL , [FK_Pagamenti] INTEGER NOT NULL , [Riga] INTEGER NOT NULL , [Mesi] tinyint NULL , [Giorni] tinyint NULL , [Percentuale] tinyint NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Pagamenti_Scadenze])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Barcode = function () {
        var sqlQuery = " create table if not exists [Prodotti_Barcode] ( [ID_Barcode] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Barcode] nvarchar(128) NOT NULL , [FK_Prodotto_Variante_Taglia] INTEGER NOT NULL , [FK_Classe_Articolo] INTEGER NOT NULL , [FK_Prodotto_Variante_TagliaAlias] INTEGER NOT NULL , [Plu] nvarchar(10) NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nvarchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Barcode])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Magazzini = function () {
        var sqlQuery = " create table if not exists [Negozi_Magazzini] ( [ID_Magazzino] INTEGER NOT NULL , [FK_Negozio] INTEGER NOT NULL , [Magazzino] nvarchar NULL , [Indirizzo] nvarchar NULL , [ZipCap] nvarchar NULL , [Localita] nvarchar NULL , [Telefono] nvarchar NULL , [Cellulare] nvarchar NULL , [AltroTelefono] nvarchar NULL , [FK_Nazione] INTEGER NULL , [FK_Stato] INTEGER NULL , [FK_Regione] INTEGER NULL , [FK_Provincia] INTEGER NULL , [FK_TipoMagazzino] tinyint NULL , [FlagMagazzinoVendita] bit NOT NULL , [FlagMagazzinoProprieta] bit NOT NULL , [FlagMagazzinoTransito] bit NOT NULL , [PercentualeAbbattimento] INTEGER NULL , [FlagConsultazione] bit NOT NULL , [FlagInventario] bit NOT NULL , [DataInizioInventarioCorrente] datetime NULL , [DataInizioUltimoInventario] datetime NULL , [DataFineUltimoInventario] datetime NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Magazzino])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClassificazione_Tipo_Descr = function () {
        var sqlQuery = " create table if not exists [Classificazione_Tipo_Descr] ( [ID_Tipo_Classificazione] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Classificazione], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Planning_Scontrini = function () {
        var sqlQuery = " create table if not exists [Negozi_Planning_Scontrini] ( [FK_Scontrini_Testate] varchar(24) NOT NULL , [FK_Planning] varchar(22) NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Scontrini_Testate], [FK_Planning])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Pacchetti = function () {
        var sqlQuery = " create table if not exists [Prodotti_Pacchetti] ( [ID_ProdottoPacchetto] bigint NOT NULL , [FK_Prodotto] INTEGER NOT NULL , [FK_TipoPacchetto] INTEGER NOT NULL , [QuantitaMax] INTEGER NULL , [PesoPercentuale] decimal(15, 4) NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_ProdottoPacchetto])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Classificazione = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Prodotti_Classificazione] ( " +
            " [FK_Prodotto] bigint  NOT NULL,                         " +
            " [FK_Classificazione] INTEGER  NOT NULL,                 " +
            " [FK_Classificazione_Dettaglio] bigint  NOT NULL,        " +
            " [DataCreazione] datetime DEFAULT 'getdate()' NULL,      " +
            " [UtenteCreazione] nvarchar  NULL,                       " +
            " [DataAggiornamento] datetime  NULL,                     " +
            " [UtenteAggiornamento] nvarchar  NULL,                   " +
            " [Stato_Record] nchar(1) DEFAULT '''0''' NULL,           " +
            " [DataEstrazione] datetime  NULL,                        " +
            " [PacchettoEstrazione] nvarchar  NULL,                   " +
            " PRIMARY KEY ([FK_Prodotto],[FK_Classificazione],[FK_Classificazione_Dettaglio]) " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Filtro = function () {
        var sqlQuery = " create table if not exists [Negozi_Filtro] ( [FK_Negozio] INTEGER NOT NULL , [FK_Classificazione_Dettaglio] bigint NOT NULL , [DataCreazione] datetime NULL , [DataAggiornamento] datetime NULL , [UtenteCreazione] nvarchar NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozio], [FK_Classificazione_Dettaglio])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Tavoli_Posizioni = function () {
        var sqlQuery = " create table if not exists [Negozi_Tavoli_Posizioni] ( [FK_Sala] INTEGER NOT NULL , [FK_Tavolo] INTEGER NOT NULL , [Posizione_Top] bigint NULL DEFAULT ((0)), [Posizione_Left] bigint NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Sala], [FK_Tavolo])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipi_Sconto = function () {
        var sqlQuery = " create table if not exists [Tipi_Sconto] ( [ID_Tipo_Sconto] INTEGER NOT NULL , [Tipo] nvarchar NULL , [Ordinamento] INTEGER NULL , [Flag_Testata] bit NULL DEFAULT ((0)), [Flag_Riga] bit NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Sconto])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClassificazione = function () {
        var sqlQuery = " create table if not exists [Classificazione] ( [ID_Classificazione] INTEGER NOT NULL , [FK_Classificazione_Padre] INTEGER NULL , [FK_Tipo_Classificazione] INTEGER NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Classificazione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozio_Cassa_Parametri = function () {
        var sqlQuery = " create table if not exists [Negozio_Cassa_Parametri] ( [ID_Cassa] INTEGER NOT NULL , [FK_Negozio] INTEGER NOT NULL , [Cod_Cassa] nvarchar NOT NULL , [IP_Cassa] nvarchar NOT NULL , [IP_Stampante] nvarchar NOT NULL , [Matricola] nvarchar NULL , [Stato_Rete] nvarchar NULL , [Stato_Cassa] nvarchar NULL , [Stato_Chiusura] nvarchar NULL , [FK_Gruppo_Cassa] INTEGER NULL , [TipoStampante] nvarchar NULL , [FK_ModelloStampante] INTEGER NULL , [ParametriConnessione] nvarchar NULL , [FK_ModelloCassa] INTEGER NULL , [FK_SistemaOperativo] INTEGER NULL , [VersioneSoftware] nvarchar NULL , [FlagCassaAperta] bit NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Cassa])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Pacchetto_Descr = function () {
        var sqlQuery = " create table if not exists [Tipo_Pacchetto_Descr] ( [ID_TipoPacchetto] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoPacchetto], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCausali_Differenza_Descr = function () {
        var sqlQuery = " create table if not exists [Causali_Differenza_Descr] ( [ID_Causale_Differenza] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Causale_Differenza], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateStagioni_Descr = function () {
        var sqlQuery = " create table if not exists [Stagioni_Descr] ( [ID_Stagione] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Stagione], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClassificazione_Descr = function () {
        var sqlQuery = " create table if not exists [Classificazione_Descr] ( [ID_Classificazione] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Classificazione], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNazioni_Descr = function () {
        var sqlQuery = " create table if not exists [Nazioni_Descr] ( [FK_Nazione] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Nazione] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Nazione], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Associati = function () {
        var sqlQuery = " create table if not exists [Prodotti_Associati] ( [FK_Prodotto_Variante_Taglia] INTEGER NOT NULL , [FK_Prodotto_Variante_TagliaAss] INTEGER NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , [FK_Azienda] nvarchar NOT NULL , PRIMARY KEY ([FK_Prodotto_Variante_Taglia], [FK_Prodotto_Variante_TagliaAss])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipi_Barcode = function () {
        var sqlQuery = " create table if not exists [Tipi_Barcode] ( [ID_Tipo_Barcode] INTEGER NOT NULL , [Tipo_Barcode] nvarchar NOT NULL , [Lunghezza] INTEGER NOT NULL , [Flag_Lunghezza_Pari] bit NOT NULL , [Flag_ASCII] bit NOT NULL , [Flag_Numeri] bit NOT NULL , [Flag_Lettere] bit NOT NULL , [Flag_Upper] bit NOT NULL , [Caratteri_Speciali] nvarchar NOT NULL , [Caratteri_Esclusi] nvarchar NOT NULL , [Caratteri_Ammessi] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Barcode])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Classificazione = function () {
        var sqlQuery = " create table if not exists [Negozi_Classificazione] ( [FK_Negozio] INTEGER NOT NULL , [FK_Classificazione_Dettaglio] bigint NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozio], [FK_Classificazione_Dettaglio])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Documento_Descr = function () {
        var sqlQuery = " create table if not exists [Tipo_Documento_Descr] ( [ID_Tipo_Documento] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Documento], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTurni_Descr = function () {
        var sqlQuery = " create table if not exists [Turni_Descr] ( [ID_Turno] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [DataAggiornamento] datetime NULL , [UtenteCreazione] nvarchar NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Turno], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateValute_Cambi = function () {
        var sqlQuery = " create table if not exists [Valute_Cambi] ( [FK_Negozio] INTEGER NOT NULL , [FK_Valuta] INTEGER NOT NULL , [FK_ControValuta] INTEGER NOT NULL , [InizioValidita] INTEGER NOT NULL , [Cambio] decimal(15, 4) NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozio], [FK_Valuta], [FK_ControValuta], [InizioValidita])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Descr = function () {
        var sqlQuery = " create table if not exists [Negozi_Descr] ( [ID_Negozio] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Note_1] nvarchar NULL , [Note_2] nvarchar NULL , [Note_3] nvarchar NULL , [Note_4] nvarchar NULL , [Note_5] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Negozio], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClassificazione_Tipo = function () {
        var sqlQuery = " create table if not exists [Classificazione_Tipo] ( [ID_Tipo_Classificazione] INTEGER NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Classificazione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Tavoli_Planning = function () {
        var sqlQuery = " create table if not exists [Negozi_Tavoli_Planning] ( [ID_Planning] varchar(22) NOT NULL , [FK_Sala] INTEGER NOT NULL , [FK_Tavolo] INTEGER NOT NULL , [Data] INTEGER NOT NULL , [Ora] time NOT NULL , [Turno] INTEGER NULL , [Persone] tinyint NULL , [Flag_Occupato] bit NULL , [DataArrivo] datetime NULL , [DataInizioServizio] datetime NULL , [DataFineServizio] datetime NULL , [Riferimento] nvarchar NULL , [FK_Cliente] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Planning])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Descr = function () {
        var sqlQuery = " create table if not exists [Prodotti_Descr] ( [ID_Prodotto] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar(50) NULL , [DescrizioneBreve] nvarchar(30) NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Prodotto], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCausali_Magazzino_Descr = function () {
        var sqlQuery = " create table if not exists [Causali_Magazzino_Descr] ( [ID_Causale] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Causale], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIva_Nazione_Stato = function () {
        var sqlQuery = " create table if not exists [Iva_Nazione_Stato] ( [ID_Iva_Nazione_Stato] INTEGER NOT NULL , [FK_Iva] INTEGER NOT NULL , [FK_Nazione] INTEGER NOT NULL , [FK_Stato] INTEGER NOT NULL , [InizioValidita] INTEGER NOT NULL , [IVA] nvarchar NULL , [Aliquota_1] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_2] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_3] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_4] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_5] decimal(4, 3) NULL DEFAULT ((0)), [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Iva_Nazione_Stato])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateGruppi_Operatori = function () {
        var sqlQuery = " create table if not exists [Gruppi_Operatori] ( [ID_GruppoOperatore] INTEGER NOT NULL , [Flag_Commesso] bit NULL , [Flag_Cassiere] bit NULL , [Flag_AccettaResi] bit NULL , [Flag_ModificaPrezzo] bit NULL , [Flag_AbilitaSconti] bit NULL , [Flag_AnnullaScontrino] bit NULL , [Flag_AnnullaRiga] bit NULL , [Flag_EmissioneBuoni] bit NULL , [Flag_Prelievo] bit NULL , [Flag_Prestito] bit NULL , [Flag_Prenotazione] bit NULL , [Flag_RestituzioneAcconti] bit NULL , [Flag_Conteggio] bit NULL , [Flag_ChiusuraOperatore] bit NULL , [DataCreazione] datetime NULL , [DataAggiornamento] datetime NULL , [UtenteCreazione] nvarchar NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_GruppoOperatore])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateAzienda_Descr = function () {
        var sqlQuery = " create table if not exists [Azienda_Descr] ( [ID_Azienda] INTEGER NOT NULL DEFAULT ((0)), [FK_Lingua] INTEGER NOT NULL , [Note_1] nvarchar NULL , [Note_2] nvarchar NULL , [Note_3] nvarchar NULL , [Note_4] nvarchar NULL , [Note_5] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Azienda], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipi_Carta_Fidelizzazione = function () {
        var sqlQuery = " create table if not exists [Tipi_Carta_Fidelizzazione] ( [ID_TipoCarta] INTEGER NOT NULL , [LunghezzaCodiceCarta] INTEGER NULL , [InizioPrefisso] INTEGER NULL , [LunghezzaPrefisso] INTEGER NULL , [ContenutoPrefisso] nvarchar NULL , [InizioTipoCarta] INTEGER NULL , [LunghezzaTipoCarta] INTEGER NULL , [ContenutoTipoCarta] nvarchar NULL , [FlagCartaAscadenza] bit NOT NULL , [NumerodiPuntiOffertiIniziali] INTEGER NULL , [DurataValiditaCarta] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoCarta])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Operatori = function () {
        var sqlQuery = " create table if not exists [Negozi_Operatori] ( [FK_Negozio] INTEGER NOT NULL , [FK_Utente] INTEGER NOT NULL , [CodiceOperatore] varchar(50) NOT NULL , [PasswordOperatore] varchar(50) NOT NULL , [Barcode] nvarchar NULL , [DataInizioAbilitazione] INTEGER NOT NULL , [DataFineAbilitazione] INTEGER NOT NULL , [FK_GruppoOperatore] INTEGER NOT NULL , [MaxScontoPrezzo] decimal(15, 4) NULL DEFAULT ((0)), [MaxScontoApplicabile] decimal(4, 3) NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [DataAggiornamento] datetime NULL , [UtenteCreazione] nvarchar NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozio], [FK_Utente])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozio_Parametri = function () {
        var sqlQuery = " create table if not exists [Negozio_Parametri] ( [ID_Negozio] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [FK_Azienda_Divisione_Area_Zona] INTEGER NOT NULL , [Cod_Negozio] nvarchar NOT NULL , [Negozio] nvarchar NULL , [RagioneSocialeNegozio] nvarchar NULL , [InsegnaNegozio] nvarchar NULL , [Indirizzo] nvarchar NULL , [ZipCap] nvarchar NULL , [Localita] nvarchar NULL , [Codice_Fiscale] nvarchar NULL , [PartitaIva] nvarchar NULL , [FK_Nazione] INTEGER NULL , [FK_Stato] INTEGER NULL , [FK_Regione] INTEGER NULL , [FK_Provincia] INTEGER NULL , [FK_Valuta] INTEGER NULL , [Telefono1] nvarchar NULL , [Telefono2] nvarchar NULL , [Telefono3] nvarchar NULL , [Fax] nvarchar NULL , [eMail] nvarchar NULL , [Contatto] nvarchar NULL , [ID_Padre] INTEGER NOT NULL , [IP_Padre] nvarchar NULL , [IP_Negozio] nvarchar NULL , [Flag_CreazioneFornitori] bit NOT NULL , [Flag_CreazioneProdotti] bit NOT NULL , [Flag_CreazioneClienti] bit NOT NULL , [Flag_CreazioneListini] bit NOT NULL , [OraApertura] INTEGER NULL , [OraChiusura] INTEGER NULL , [FlagConcentratore] bit NULL DEFAULT ((0)), [Note_1] nvarchar NULL , [Note_2] nvarchar NULL , [Note_3] nvarchar NULL , [Note_4] nvarchar NULL , [Note_5] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Negozio])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipi_Carta_Fidelizzazione_Descr = function () {
        var sqlQuery = " create table if not exists [Tipi_Carta_Fidelizzazione_Descr] ( [ID_TipoCarta] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoCarta], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateComposizioni = function () {
        var sqlQuery = " create table if not exists [Composizioni] ( [ID_Composizione] INTEGER NOT NULL , [Cod_Composizione] nvarchar NOT NULL , [FK_Nazione] INTEGER NOT NULL , [letaComposizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Composizione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateMarca = function () {
        var sqlQuery = " create table if not exists [Marca] ( [ID_Marca] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_Marca] nvarchar NOT NULL , [Marca] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Marca])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateLingue_Desc = function () {
        var sqlQuery = " create table if not exists [Lingue_Desc] ( [ID_Lingua] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Lingua] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Lingua], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateListini_Dettaglio = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Listini_Dettaglio] (			" +
            " [FK_Listino] INTEGER  NOT NULL,                               " +
            " [FK_Prodotto_Variante_Taglia] INTEGER  NOT NULL,           " +
            " [FK_Classe_Articolo] INTEGER  NOT NULL,                   " +
            " [DataInizioValidita] INTEGER  NOT NULL,                       " +
            " [Prezzo] FLOAT  NOT NULL,                        " +
            " [Sconto] FLOAT NOT NULL,       " +
            " [FK_ListinoRiferimento] INTEGER  NULL,                        " +
            " [PrezzoRiferimento] FLOAT  NULL,                 " +
            " [Ricarico_1] FLOAT NULL,       " +
            " [Ricarico_2] FLOAT NULL,       " +
            " [Ricarico_3] FLOAT NULL,       " +
            " [Ricarico_4] FLOAT NULL,       " +
            " [Ricarico_5] FLOAT NULL,       " +
            " [IndiceRicarico] FLOAT NULL,   " +
            " [PrezzoCalcolato] FLOAT  NULL,                   " +
            " [ValoreArrottondamento] FLOAT NULL,             " +
            " [FlagBloccoSconto] BOOLEAN  NOT NULL,                         " +
            " [FlagBloccoPromozioni] BOOLEAN  NOT NULL,                     " +
            " [FlagBloccoSaldi] BOOLEAN  NOT NULL,                          " +
            " [FlagBloccoConvenzioni] BOOLEAN  NOT NULL,                    " +
            " [DataCreazione] TEXT  NULL,                           " +
            " [UtenteCreazione] nvarchar  NULL,                         " +
            " [DataAggiornamento] TEXT  NULL,                       " +
            " [UtenteAggiornamento] nvarchar  NULL,                     " +
            " [Stato_Record] nvarchar(1) DEFAULT '0' NOT NULL, " +
            " [DataEstrazione] TEXT  NULL,                          " +
            " [PacchettoEstrazione] nvarchar(22)  NULL,                     " +
            " PRIMARY KEY ([FK_Listino],[FK_Prodotto_Variante_Taglia],[FK_Classe_Articolo],[DataInizioValidita]) " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Operazione_Descr = function () {
        var sqlQuery = " create table if not exists [Tipo_Operazione_Descr] ( [ID_Tipo_Operazione] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Operazione], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateReparti_Descr = function () {
        var sqlQuery = " create table if not exists [Reparti_Descr] ( [ID_Reparto] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar(50) NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Reparto], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateBottone_Descr = function () {
        var sqlQuery = " create table if not exists [Bottone_Descr] ( [ID_Bottone] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Bottone], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePagamenti_Valute = function () {
        var sqlQuery = " create table if not exists [Pagamenti_Valute] ( [FK_Nazione] INTEGER NOT NULL , [FK_Pagamento] INTEGER NOT NULL , [FK_Valuta] INTEGER NOT NULL , [FlagValutaResto] bit NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Nazione], [FK_Pagamento], [FK_Valuta])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateGruppo_Carta = function () {
        var sqlQuery = " create table if not exists [Gruppo_Carta] ( [ID_GruppoCarta] INTEGER NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_GruppoCarta])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateParametri_Generali = function () {
        var sqlQuery = " create table if not exists													" +
            " [Parametri_Generali]                                                          " +
            " (                                                                             " +
            " [ID_Parametro] INTEGER NOT NULL ,                                                 " +
            " [Parametro] INTEGER NOT NULL ,                                            " +
            " [Valore] nvarchar NOT NULL ,                                                  " +
            " [Descrizione] nvarchar NULL,                                                  " +
            " [DataCreazione] datetime NOT NULL ,                                           " +
            " [UtenteCreazione] nvarchar NOT NULL ,                  " +
            " [DataAggiornamento] datetime NOT NULL ,                    " +
            " [UtenteAggiornamento] nvarchar NOT NULL ,              " +
            " [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'),                               " +
            " [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL ,        " +
            " PRIMARY KEY ([ID_Parametro])                                                  " +
            " )                                                                             ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateGruppo_Carta_Descr = function () {
        var sqlQuery = " create table if not exists [Gruppo_Carta_Descr] ( [ID_GruppoCarta] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_GruppoCarta], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateUtenti = function () {
        var sqlQuery = " create table if not exists [Utenti] ( [ID_Utente] INTEGER IDENTITY(1,1) NOT NULL , [Utente] nvarchar NULL , [PWD_Utente] nvarchar NULL , [FK_Titolo] INTEGER NULL , [Cognome] nvarchar NULL , [Nome] nvarchar NULL , [Indirizzo] nvarchar NULL , [ZipCap] nvarchar NULL , [Localita] nvarchar NULL , [Provincia] nvarchar NULL , [FK_Stato] INTEGER NULL , [FK_Nazione] [smallint] NULL, [Telefono] nvarchar NULL , [Cellulare] nvarchar NULL , [AltroTelefono] nvarchar NULL , [eMail] nvarchar NULL , [LuogoNascita] nvarchar NULL , [DataNascita] INTEGER NULL , [Sesso] char(1) NULL , [Codice_Fiscale] nvarchar NULL , [NomeFoto] varchar(500) NULL , [Foto] TEXT NULL , [FK_Ruolo_WUIC] INTEGER NOT NULL , [FK_Utente_WUIC] INTEGER NOT NULL , [FK_Lingua] INTEGER NULL , [Flag_ScadenzaPassword] bit NOT NULL , [Flag_CambioPasswordObbligatorio] bit NOT NULL , [Flag_CambioPasswordConsentito] bit NOT NULL , [DataScadenza] INTEGER NULL , [DataCreazione] datetime NULL , [DataAggiornamento] datetime NULL , [UtenteCreazione] nvarchar NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Utente])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePagamenti_Tipi = function () {
        var sqlQuery = " create table if not exists [Pagamenti_Tipi] ( [ID_TipoPagamento] INTEGER NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoPagamento])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateGruppi_Operatori_Descr = function () {
        var sqlQuery = " create table if not exists [Gruppi_Operatori_Descr] ( [ID_GruppoOperatore] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_GruppoOperatore], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateLingue = function () {
        var sqlQuery = " create table if not exists [Lingue] ( [ID_Lingua] INTEGER IDENTITY(1,1) NOT NULL , [FK_Lingua_WUIC] nvarchar NULL , [Lingua] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateBottone_Albero = function () {
        var sqlQuery = " create table if not exists [Bottone_Albero] ( [Applicazione] nvarchar NOT NULL , [Form] nvarchar NOT NULL , [ID_Riga] tinyint NOT NULL , [ID_Livello] tinyint NOT NULL , [ID_Sequenza] tinyint NOT NULL , [ID_Posizione] INTEGER NOT NULL , [Cod_Tabella] INTEGER NOT NULL , [FK_Bottone] INTEGER NOT NULL , [ID_LivelloDestinazione] tinyint NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([Applicazione], [Form], [ID_Riga], [ID_Livello], [ID_Sequenza], [ID_Posizione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Varianti = function () {
        var sqlQuery = " create table if not exists [Prodotti_Varianti] ( [ID_Prodotto_Variante] INTEGER NOT NULL , [FK_Prodotto] INTEGER NOT NULL , [Cod_Variante] nvarchar NOT NULL , [Variante] nvarchar NOT NULL , [Flag_Obsoleto] bit NOT NULL , [Flag_Vendita] bit NOT NULL , [Flag_Sconto] bit NOT NULL , [Flag_FuoriCampionario] bit NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Prodotto_Variante])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Barcode_Matricole = function () {
        var sqlQuery = " create table if not exists [Prodotti_Barcode_Matricole] ( [FK_Barcode] nvarchar NOT NULL , [ID_Matricola] nvarchar NOT NULL , [ID_Matricola_2] nvarchar NULL , [ID_Matricola_3] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Barcode], [ID_Matricola])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateStato_Record_Descr = function () {
        var sqlQuery = " create table if not exists [Stato_Record_Descr] ( [ID_Stato_Record] nchar(1) NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Stato_Record], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Turni = function () {
        var sqlQuery = " create table if not exists [Negozi_Turni] ( [FK_Turno] INTEGER NOT NULL , [FK_Negozio] INTEGER NOT NULL , [OraInizio] nvarchar NULL, [OraFine] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Turno], [FK_Negozio])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Negozi = function () {
        var sqlQuery = " create table if not exists [Prodotti_Negozi] ( [FK_Negozio] INTEGER NOT NULL , [FK_Prodotto] INTEGER NOT NULL , [Flag_Escluso] bit NULL , [Flag_Vendibile] bit NULL , [Flag_Obsoleto] bit NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozio], [FK_Prodotto])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Varianti_Taglie = function () {
        var sqlQuery = " create table if not exists [Prodotti_Varianti_Taglie] ( [ID_Prodotto_Variante_Taglia] INTEGER NOT NULL , [FK_Prodotto_Variante] INTEGER NOT NULL , [FK_ScalaTaglie] INTEGER NOT NULL , [FK_Sequenza] INTEGER NOT NULL , [Flag_Obsoleto] bit NOT NULL , [Flag_Vendita] bit NOT NULL , [Flag_Sconto] bit NOT NULL , [Flag_FuoriCampionario] bit NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Prodotto_Variante_Taglia])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Prodotto = function () {
        var sqlQuery = " create table if not exists [Tipo_Prodotto] ( [ID_TipoProdotto] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_TipoProdotto] nvarchar(10) NOT NULL , [Flag_TipologiaVirtuale] bit NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoProdotto])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti = function () {
        var sqlQuery = " create table if not exists [Prodotti] ( [ID_Prodotto] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Prodotto] nvarchar(50) NULL , " +
            " [NomeFoto] nvarchar NULL , " +
            " [Foto] nvarchar NULL , " +
            " [FK_Marca] INTEGER NULL , [FK_Reparto] INTEGER NULL , [FK_TipoProdotto] INTEGER NULL ,  [FK_Tipo_Classificazione] INTEGER NULL, [FK_Composizione] INTEGER NULL , [FK_Iva] INTEGER NULL , [FK_ProdottoAlias] INTEGER NULL , [FK_ScalaTaglie] INTEGER NULL , [FK_UnitaMisuraAcquisto] INTEGER NULL , [FattoreConversione] decimal(15, 4) NULL , [FK_UnitaMisuraVendita] INTEGER NULL , [FattoreConversioneUMI] decimal(15, 4) NULL , [FK_UnitaMisuraInterna] INTEGER NULL , [FattoreConversioneUVM] decimal(15, 4) NULL , [FK_UnitaMisuraValorizzazioneMagazzino] INTEGER NULL , [FattoreConversioneUMX] decimal(15, 4) NULL , [FK_UnitaMisuraX] INTEGER NULL , [Grammatura] decimal(15, 4) NULL , " +
            " [Flag_GestioneTaglie] INTEGER NULL , [Flag_Magazzino] bit NOT NULL , [Flag_Matricola] bit NOT NULL , [Flag_Lotti] bit NOT NULL , [Flag_Pacchetto] bit NOT NULL , [Flag_Obsoleto] bit NOT NULL , [Flag_Vendita] bit NOT NULL , [Flag_Sconto] bit NOT NULL , [Flag_ScontoDipendente] bit NOT NULL , [Flag_EsclusioneConvenzioni] bit NOT NULL , [Flag_Promo] bit NOT NULL , [Flag_PesoRichiesto] bit NOT NULL , [Flag_PrezzoRichiesto] bit NOT NULL , [Flag_Celiachia] bit NOT NULL , [Flag_ProntoConsumo] bit NOT NULL , [Flag_Deperibile] bit NOT NULL , [Flag_Omaggio] bit NOT NULL , [Flag_VisualizzaVisore] bit NOT NULL , [Flag_ModificaPrezzo] bit NOT NULL , [LimiteEta] decimal(2, 0) NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nvarchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Prodotto])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePagamenti_Descr = function () {
        var sqlQuery = " create table if not exists [Pagamenti_Descr] ( [ID_Pagamento] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Pagamento], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateMotivazioni = function () {
        var sqlQuery = " create table if not exists [Motivazioni] ( [ID_Motivazione] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [FK_TipoMotivazione] INTEGER NOT NULL , [Cod_Motivazione] nvarchar NOT NULL , [FK_Causale] INTEGER NULL , [FK_Magazzino] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Motivazione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNazioni_Stati_Descr = function () {
        var sqlQuery = " create table if not exists [Nazioni_Stati_Descr] ( [ID_Stato] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Stato] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Stato], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Cassa = function () {
        var sqlQuery = " create table if not exists [Prodotti_Cassa] ( [FK_Cassa] INTEGER NOT NULL , [ID_Barcode] bigint NOT NULL , [ID_Prodotto] INTEGER NOT NULL , [ID_Prodotto_Variante] bigint NOT NULL , [ID_Prodotto_Variante_Taglia] INTEGER NOT NULL , [ID_Variante] INTEGER NOT NULL , [FK_ScalaTaglie] INTEGER NULL , [FK_Sequenza] INTEGER NOT NULL , [FK_Classe_Articolo] INTEGER NOT NULL , [FK_Listino] INTEGER NOT NULL , [FK_Negozio] INTEGER NOT NULL , [Prezzo] decimal(15, 4) NOT NULL , [Sconto] decimal(15, 4) NOT NULL DEFAULT ((0)), [Barcode] nvarchar NOT NULL , [Plu] nvarchar NULL , [Prodotto] nvarchar NULL , [Variante] nvarchar NOT NULL , [Taglia] nvarchar NULL , [DescrizioneProdotto] nvarchar NULL , [DescrizioneBreveProdotto] nvarchar NULL , [DescrizioneVariante] nvarchar NULL , [DescrizioneMarca] nvarchar NULL , [DescrizioneReparto] nvarchar NULL , [DescrizioneTipoProdotto] nvarchar NULL , [DescrizioneComposizione] nvarchar NULL , [FK_LinguaNegozio] INTEGER NOT NULL , [FK_Marca] INTEGER NULL , [FK_Reparto] INTEGER NULL , [FK_TipoProdotto] INTEGER NULL , [FK_Composizione] INTEGER NULL , [FK_Iva] INTEGER NULL , [IVA] nvarchar NULL , [Aliquota_1] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_2] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_3] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_4] decimal(4, 3) NULL DEFAULT ((0)), [Aliquota_5] decimal(4, 3) NULL DEFAULT ((0)), [FK_UnitaMisuraVendita] INTEGER NULL , [UnitaDiMisura] nvarchar NULL , [NumeroDecimali] tinyint NULL , [Flag_GestioneTaglie] bit NOT NULL , [Flag_Matricola] bit NOT NULL , [Flag_Lotti] bit NOT NULL , [Flag_Pacchetto] bit NOT NULL , [Flag_Vendita] bit NOT NULL , [Flag_Sconto] bit NOT NULL , [Flag_ScontoDipendente] bit NOT NULL , [Flag_EsclusioneConvenzioni] bit NOT NULL , [Flag_Promo] bit NOT NULL , [Flag_PesoRichiesto] bit NOT NULL , [Flag_PrezzoRichiesto] bit NOT NULL , [Flag_Celiachia] bit NOT NULL , [Flag_ProntoConsumo] bit NOT NULL , [Flag_Deperibile] bit NOT NULL , [Flag_Omaggio] bit NOT NULL , [Flag_VisualizzaVisore] bit NOT NULL , [Flag_ModificaPrezzo] bit NOT NULL , [Flag_VenditaVariante] bit NOT NULL , [Flag_ScontoVariante] bit NOT NULL , [Flag_VenditaTaglia] bit NOT NULL , [Flag_ScontoTaglia] bit NOT NULL , [FlagBloccoSconto] bit NOT NULL , [FlagBloccoPromozioni] bit NOT NULL , [FlagBloccoSaldi] bit NOT NULL , [FlagBloccoConvenzioni] bit NOT NULL , [LimiteEta] decimal(2, 0) NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Barcode], [FK_Cassa])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateBottone = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Bottone] (			" +
            " [ID_Bottone] INTEGER  NOT NULL PRIMARY KEY,                   " +
            " [Funzione] nvarchar(255)  NULL,                   " +
            " [Funzione_Esterna] nvarchar(255)  NULL,           " +
            " [Eseguibile] nvarchar(255)  NULL,                 " +
            " [Sconto] FLOAT  NULL,                             " +
            " [Importo] FLOAT  NULL,                            " +
            " [Percentuale] FLOAT  NULL,                        " +
            " [Quantita] FLOAT  NULL,                           " +
            " [Barcode] nvarchar(110)  NULL,                    " +
            " [FK_Pagamento] INTEGER  NULL,                     " +
            " [Cod_Pagamento] nvarchar  NULL,                   " +
            " [FK_TipoPagamento] INTEGER  NULL,                 " +
            " [TipoPagamento] nvarchar  NULL,                   " +
            " [FK_Valuta] INTEGER  NULL,                        " +
            " [Simbolo] nvarchar  NULL,                         " +
            " [FK_Cliente] INTEGER  NULL,                       " +
            " [Script] TEXT  NULL,                              " +
            " [Icona] TEXT  NULL,                               " +
            " [DataCreazione] datetime  NULL,                   " +
            " [UtenteCreazione] nvarchar  NULL,                 " +
            " [DataAggiornamento] datetime  NULL,               " +
            " [UtenteAggiornamento] nvarchar  NULL,             " +
            " [Stato_Record] nchar(1) DEFAULT '''0''' NULL,     " +
            " [DataEstrazione] datetime  NULL,                  " +
            " [PacchettoEstrazione] nvarchar  NULL              " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateReparti = function () {
        var sqlQuery = " create table if not exists [Reparti] ( [ID_Reparto] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_Reparto] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Reparto])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Magazzino = function () {
        var sqlQuery = " create table if not exists [Prodotti_Magazzino] ( [FK_Magazzino] INTEGER NOT NULL , [FK_Prodotto_Variante_Taglia] bigint NOT NULL , [Cod_Azienda] nvarchar NULL , [Codice_Negozio] nvarchar NULL , [Magazzino] nvarchar NULL , [Prodotto] nvarchar NULL , [Variante] nvarchar NULL , [Cod_Scalarino] nvarchar NULL , [Taglia] nvarchar NULL , [IndiceOrdinamento] tinyint NULL , [Stock] decimal(15, 4) NULL DEFAULT ((0)), [PMV] nchar(10) NULL , [PMA] decimal(15, 4) NULL DEFAULT ((0)), [PA] decimal(15, 4) NULL DEFAULT ((0)), [PV] decimal(15, 4) NULL , [QuantitaInOrdine] decimal(15, 4) NULL DEFAULT ((0)), [QuantitaInPrenotazione] decimal(15, 4) NULL DEFAULT ((0)), [FK_Movimenti_Documenti] bigint NULL , [DataUltimaChiusura] datetime NULL , [GiacenzaUltimaChiusura] decimal(15, 4) NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Magazzino], [FK_Prodotto_Variante_Taglia])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Sale_Turni = function () {
        var sqlQuery = " create table if not exists [Negozi_Sale_Turni] ( [FK_Sala] INTEGER NOT NULL , [Turno] INTEGER NOT NULL , [DalleOre] time NULL , [AlleOre] time NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Sala], [Turno])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePagamenti_Tipi_Descr = function () {
        var sqlQuery = " create table if not exists [Pagamenti_Tipi_Descr] ( [ID_TipoPagamento] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoPagamento], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipi_Sconto_Descr = function () {
        var sqlQuery = " create table if not exists [Tipi_Sconto_Descr] ( [ID_Tipo_Sconto] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Sconto], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIva = function () {
        var sqlQuery = " create table if not exists [Iva] ( [ID_Iva] INTEGER NOT NULL , [Codice_IVA] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Iva])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Gruppo = function () {
        var sqlQuery = " create table if not exists [Negozi_Gruppo] ( [ID_Negozi_Gruppo] INTEGER NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Negozi_Gruppo])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTaglie_Definizioni_Descr = function () {
        var sqlQuery = " create table if not exists [Taglie_Definizioni_Descr] ( [ID_ScalaTaglie] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_ScalaTaglie], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateStagioni = function () {
        var sqlQuery = " create table if not exists [Stagioni] ( [ID_Stagione] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_Stagione] nvarchar NOT NULL , [DataInizio] INTEGER NULL , [DataFine] INTEGER NULL , [FK_StagionePrecedente] INTEGER NULL , [FK_StagioneCorrispondente] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Stagione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Cassa_Lingua = function () {
        var sqlQuery = " create table if not exists [Prodotti_Cassa_Lingua] ( [FK_Cassa] INTEGER NOT NULL , [FK_Barcode] bigint NOT NULL , [FK_Lingua] INTEGER NOT NULL , [DescrizioneProdotto] nvarchar NULL , [DescrizioneBreveProdotto] nvarchar NULL , [DescrizioneVariante] nvarchar NULL , [DescrizioneMarca] nvarchar NULL , [DescrizioneReparto] nvarchar NULL , [DescrizioneTipoProdotto] nvarchar NULL , [DescrizioneComposizione] nvarchar NULL , PRIMARY KEY ([FK_Cassa], [FK_Barcode], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Casse = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Negozi_Casse] ( " +
            " [ID_Cassa] INTEGER  NOT NULL PRIMARY KEY,       " +
            " [FK_Negozio] INTEGER  NULL,                " +
            " [Cod_Cassa] varchar  NULL,                  " +
            " [FK_Gruppo_Cassa] INTEGER  NULL,           " +
            " [FK_ModelloCassa] INTEGER  NULL,           " +
            " [Seriale] nvarchar  NULL,                   " +
            " [FK_SistemaOperativo] INTEGER  NULL,       " +
            " [VersioneSoftware] nvarchar  NULL,          " +
            " [IP_Cassa] nvarchar  NULL,                  " +
            " [TipoStampante] nvarchar  NULL,             " +
            " [FK_ModelloStampante] INTEGER  NULL,       " +
            " [IP_Stampante] nvarchar  NULL,              " +
            " [ParametriConnessione] nvarchar  NULL,      " +
            " [Matricola_Fiscale] nvarchar  NULL,         " +
            " [Stato_Rete] nvarchar  NULL,                " +
            " [Stato_Cassa] nvarchar  NULL,               " +
            " [Stato_Chiusura] nvarchar  NULL,            " +
            " [FlagCassaAperta] bit  NULL,                " +
            " [Licenza] nvarchar  NULL,                   " +
            " [Latitudine] numeric  NULL,                 " +
            " [Longitudine] numeric  NULL,                " +
            " [Altitudine] numeric  NULL,                 " +
            " [Messaggio] nvarchar  NULL,                 " +
            " [DataCreazione] datetime  NULL,             " +
            " [UtenteCreazione] nvarchar  NULL,           " +
            " [DataAggiornamento] datetime  NULL,         " +
            " [UtenteAggiornamento] nvarchar  NULL,       " +
            " [Stato_Record] nchar  NULL,                 " +
            " [DataEstrazione] datetime  NULL,            " +
            " [PacchettoEstrazione] nvarchar  NULL        " +
            " )                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClasse_Articolo = function () {
        var sqlQuery = " create table if not exists [Classe_Articolo] ( [ID_Classe_Articolo] INTEGER IDENTITY(1,1) NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_Classe_Articolo] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Classe_Articolo])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateListini_Descr = function () {
        var sqlQuery = " create table if not exists [Listini_Descr] ( [ID_Listino] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Listino], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Vendita = function () {
        var sqlQuery = " create table if not exists [Tipo_Vendita] ( [ID_Tipo_Vendita] nvarchar NOT NULL , [Fiscale] bit NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Vendita])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCausali_Magazzino = function () {
        var sqlQuery = " create table if not exists [Causali_Magazzino] ( [ID_Causale] INTEGER IDENTITY(1,1) NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_Causale] nvarchar NOT NULL , [Segno_Causale] nvarchar NULL , [FK_TipoDocumento] INTEGER NULL , [TipoUnitaDiMisura] nvarchar NULL , [Intestatario] nvarchar NULL , [FlagCambioMagazzino] bit NULL DEFAULT ((0)), [FlagCambioCodiceProdotto] bit NULL DEFAULT ((0)), [FlagCalcoloPrezzoMedioAcquisto] bit NULL DEFAULT ((0)), [FlagObbligoRiferimenti] bit NULL DEFAULT ((0)), [FlagRegistrazioneAFronteOrdine] bit NULL DEFAULT ((0)), [FK_CausaleAssociata] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Causale])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Varianti_Descr = function () {
        var sqlQuery = " create table if not exists [Prodotti_Varianti_Descr] ( [ID_Prodotto_Variante] bigint NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Prodotto_Variante], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateValute_Descr = function () {
        var sqlQuery = " create table if not exists [Valute_Descr] ( [ID_Valuta] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Valuta], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateListini_Negozi = function () {
        var sqlQuery = " create table if not exists [Listini_Negozi] ( [FK_Listino] INTEGER NOT NULL , [FK_Negozio] INTEGER NOT NULL , [Flag_Listino_Base] bit NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Listino], [FK_Negozio])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIva_Tipi_Nazione_Stato = function () {
        var sqlQuery = " create table if not exists [Iva_Tipi_Nazione_Stato] ( [ID_Iva_Tipi_Nazione_Stato] INTEGER NOT NULL , [FK_TipoIva] INTEGER NOT NULL , [FK_Nazione] INTEGER NOT NULL , [FK_Stato] INTEGER NOT NULL , [FK_Iva_Nazione_Stato] INTEGER NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Iva_Tipi_Nazione_Stato])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCausali_Cassa = function () {
        var sqlQuery = " create table if not exists [Causali_Cassa] ( [ID_Causale_Cassa] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_Causale_Cassa] nvarchar NOT NULL , [FK_Causale_Cassa] nvarchar NULL , [Segno] nvarchar NULL , [FK_TipoVendita] nvarchar NULL , [FlagObbligoRiferimenti] bit NOT NULL DEFAULT ((0)), [RiferimentoSoggetto] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Causale_Cassa])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTaglie_Definizioni = function () {
        var sqlQuery = " create table if not exists [Taglie_Definizioni] ( [ID_ScalaTaglie] INTEGER NOT NULL , [FK_Azienda] nvarchar NOT NULL , [Cod_Scalarino] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_ScalaTaglie])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIva_Tipi = function () {
        var sqlQuery = " create table if not exists [Iva_Tipi] ( [ID_TipoIva] INTEGER NOT NULL , [Cod_TipoIva] varchar(10) NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoIva])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Fornitori = function () {
        var sqlQuery = " create table if not exists [Prodotti_Fornitori] ( [FK_Prodotto_Variante_Taglia] bigint NOT NULL , [FK_Fornitore] INTEGER NOT NULL , [Prodotto_Fornitore] nvarchar NOT NULL , [Variante_Fornitore] nvarchar NOT NULL , [FK_ScalaTaglie_Fornitore] INTEGER NOT NULL , [Taglia_Fornitore] nvarchar NOT NULL , [Rapporto] INTEGER NOT NULL DEFAULT ((1)), [DataCreazione] smalldatetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] smalldatetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Prodotto_Variante_Taglia], [FK_Fornitore])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClassificazione_Dettaglio_Descr = function () {
        var sqlQuery = " create table if not exists [Classificazione_Dettaglio_Descr] ( [ID_Classificazione_Dettaglio] bigint NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Classificazione_Dettaglio], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateMotivazioni_Descr = function () {
        var sqlQuery = " create table if not exists [Motivazioni_Descr] ( [ID_Motivazione] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Motivazione], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCausali_Differenza = function () {
        var sqlQuery = " create table if not exists [Causali_Differenza] ( [ID_Causale_Differenza] INTEGER NOT NULL , [Cod_Causale_Differenza] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Causale_Differenza])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Vendita_Descr = function () {
        var sqlQuery = " create table if not exists [Tipo_Vendita_Descr] ( [ID_Tipo_Vendita] nvarchar NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Sigla] nvarchar NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Vendita], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNazioni_Stati = function () {
        var sqlQuery = " create table if not exists [Nazioni_Stati] ( [ID_Stato] INTEGER NOT NULL , [FK_Nazione] INTEGER NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Stato])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateUnita_Di_Misura = function () {
        var sqlQuery = " create table if not exists [Unita_Di_Misura] ( [ID_UnitaDiMisura] INTEGER IDENTITY(1,1) NOT NULL , [UnitaDiMisura] nvarchar NULL , [NumeroDecimali] tinyint NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_UnitaDiMisura])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Prodotto_Descr = function () {
        var sqlQuery = " create table if not exists [Tipo_Prodotto_Descr] ( [FK_TipoProdotto] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar(50) NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_TipoProdotto], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateListini = function () {
        var sqlQuery = " create table if not exists [Listini] ( [ID_Listino] INTEGERNOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_Listino] nvarchar NULL , [ID_ListinoTipo] nvarchar NULL , [FK_Valuta] INTEGER NULL , [Flag_ListinoIvaInclusa] bit NULL , [FlagBloccoSconto] bit NULL , [FlagBloccoPromozioni] bit NULL , [FlagBloccoSaldi] bit NULL , [FlagBloccoConvenzioni] bit NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Listino])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTaglie_Dettaglio = function () {
        var sqlQuery = " create table if not exists [Taglie_Dettaglio] ( [FK_ScalaTaglie] INTEGER NOT NULL , [ID_Sequenza] INTEGER NOT NULL , [Taglia] nvarchar(50) NULL , [IndiceOrdinamento] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_ScalaTaglie], [ID_Sequenza])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Motivazione_Descr = function () {
        var sqlQuery = " create table if not exists [Tipo_Motivazione_Descr] ( [ID_Tipo_Motivazione] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Motivazione], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Pacchetti_Dettaglio = function () {
        var sqlQuery = " create table if not exists [Prodotti_Pacchetti_Dettaglio] ( [FK_ProdottoPacchetto] bigint NOT NULL , [Riga] INTEGER NOT NULL , [FK_Prodotto_Variante_Taglia] bigint NOT NULL , [Quantita] INTEGER NULL , [PesoPercentuale] money NULL , [FlagScelta] bit NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_ProdottoPacchetto], [Riga])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNazioni_Stati_Regioni_Province = function () {
        var sqlQuery = " create table if not exists [Nazioni_Stati_Regioni_Province] ( [ID_Provincia] INTEGER NOT NULL , [FK_Nazioni_Stati_Regioni] INTEGER NOT NULL , [Provincia] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Provincia])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCluster = function () {
        var sqlQuery = " create table if not exists [Cluster] ( [ID_Cluster] INTEGER NOT NULL , [Codice_Cluster] nvarchar NOT NULL , [InizioValidita] INTEGER NOT NULL , [FineValidita] INTEGER NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Cluster])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateAzienda = function () {
        var sqlQuery = " create table if not exists [Azienda] ( [ID_Azienda] INTEGER NOT NULL DEFAULT ((0)), [Cod_Azienda] nvarchar NOT NULL DEFAULT ((0)), [RagioneSociale] nvarchar NULL , [Indirizzo] nvarchar NULL , [ZipCap] nvarchar NULL , [Localita] nvarchar NULL , [Codice_Fiscale] nvarchar NULL , [PartitaIVA] nvarchar NULL , [Telefono1] nvarchar NULL , [Telefono2] nvarchar NULL , [Telefono3] nvarchar NULL , [Fax] nvarchar NULL , [eMail] nvarchar NULL , [Contatto] nvarchar NULL , [Url] nvarchar NULL , [FK_Nazione] INTEGER NULL , [FK_Stato] INTEGER NULL , [FK_Regione] INTEGER NULL , [FK_Provincia] INTEGER NULL , [FK_Valuta] INTEGER NULL , [Note_1] nvarchar NULL, [Note_2] nvarchar NULL, [Note_3] nvarchar NULL, [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , [Logo] TEXT  NULL, [FK_Azienda_WUIC] INTEGER NULL, PRIMARY KEY ([ID_Azienda])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Pacchetto = function () {
        var sqlQuery = " create table if not exists [Tipo_Pacchetto] ( [ID_TipoPacchetto] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [Cod_TipoPacchetto] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_TipoPacchetto])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Operazione = function () {
        var sqlQuery = " create table if not exists [Tipo_Operazione] ( [ID_Tipo_Operazione] INTEGER IDENTITY(1,1) NOT NULL , [Cod_TipoOperazione] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Operazione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCluster_Descr = function () {
        var sqlQuery = " create table if not exists [Cluster_Descr] ( [FK_Cluster] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Cluster], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateMenu = function () {
        var sqlQuery = " create table if not exists [Menu] ( [ID_Menu] INTEGER NOT NULL , [FK_Gruppo_Cassa] INTEGER NOT NULL , [DataInizio] INTEGER NOT NULL , [FK_Pagina] INTEGER NOT NULL , [Posizione] INTEGER NOT NULL , [Tipo] nvarchar(1) NOT NULL , [Valore] nvarchar(128) NOT NULL , [Descrizione] nvarchar(50) NULL , [Immagine] TEXT NULL , [BackColor] nvarchar(50) NULL , [ForeColor] nvarchar(50) NULL , [Font] nvarchar(50) NULL , [FontSize] INTEGER NULL , [FontBold] BOOLEAN NULL , [FontItalic] BOOLEAN NULL , [FontStrick] BOOLEAN NULL , [FontUnderline] BOOLEAN NULL , [FK_Stampante] INTEGER DEFAULT '-1' NULL , [FK_Negozio] INTEGER DEFAULT '-1' NULL, [FK_Monitor] INTEGER DEFAULT '-1' NULL, [StampaAncheInQuestiFk_Stampante] TEXT NULL ,[DataCreazione] datetime NULL, [UtenteCreazione] nvarchar(20) NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar(100) NULL , [Stato_Record] nvarchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Menu])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNazioni = function () {
        var sqlQuery = " create table if not exists [Nazioni] ( [ID_Nazione] INTEGER IDENTITY(2,1) NOT NULL , [CodiceISO] nvarchar NULL , [FK_Valuta] INTEGER NULL , [FK_Lingua] INTEGER NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Nazione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Motivazione = function () {
        var sqlQuery = " create table if not exists [Tipo_Motivazione] ( [ID_Tipo_Motivazione] INTEGER NOT NULL , [Cod_TipoMotivazione] nvarchar NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Motivazione])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateStato_Record = function () {
        var sqlQuery = " create table if not exists [Stato_Record] ( [ID_Stato_Record] nchar(1) NOT NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Annullato] bit NULL DEFAULT ((0)), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Stato_Record])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Abilitazioni_Programmi = function () {
        var sqlQuery = " create table if not exists [Negozi_Abilitazioni_Programmi] ( [FK_Negozio] INTEGER NOT NULL , [FK_Programma] INTEGER NOT NULL , [Flag_Selezione] bit NOT NULL DEFAULT ((0)), [Flag_Modifica] bit NOT NULL DEFAULT ((0)), [Flag_Elimina] bit NOT NULL DEFAULT ((0)), [DataCreazione] datetime NULL , [DataAggiornamento] datetime NULL , [UtenteCreazione] nvarchar NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozio], [FK_Programma])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Documento = function () {
        var sqlQuery = " create table if not exists [Tipo_Documento] ( [ID_Tipo_Documento] INTEGER NOT NULL , [Prefisso] nvarchar NOT NULL , [Suffisso] nvarchar NOT NULL , [Flag_Magazzino] bit NULL DEFAULT ((1)), [Flag_Vendita] bit NULL , [Flag_Ordine] bit NULL , [Flag_Prenotazione] bit NULL , [Flag_Preventivo] bit NULL , [Flag_Fatturazione] bit NULL ,[Flag_NotaCredito] bit NULL ,[DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tipo_Documento])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateMenu_Pagine = function () {
        var sqlQuery = " create table if not exists [Menu_Pagine] ( [ID_Pagina] INTEGER NOT NULL , [Pagina] nvarchar(50) NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar(20) NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nvarchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Pagina])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePagamenti = function () {
        var sqlQuery = " create table if not exists [Pagamenti] ( [ID_Pagamento] INTEGER NOT NULL , [Cod_Pagamento] nvarchar NULL , [Foto] TEXT  NULL, [FlagPagamentoCassa] bit NOT NULL DEFAULT ((0)), [ID_Sequenza] INTEGER NULL , [FlagGestioneResto] bit NULL , [FondoCassaIniziale] bit NOT NULL DEFAULT ((0)), [FondoCassaFinale] bit NOT NULL DEFAULT ((0)), [EntrataUscitaCassa] bit NOT NULL DEFAULT ((0)), [FlagUtilizzoCassa] bit NOT NULL DEFAULT ((0)), [FlagGestioneMonete] bit NULL , [FlagImmediato] bit NULL , [FlagFineMese] bit NULL , [FK_TipoPagamento] INTEGER NULL , [FK_Pagamenti_Scadenze] INTEGER NULL , [Tender] nvarchar NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Pagamento])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClasse_Articolo_Descr = function () {
        var sqlQuery = " create table if not exists [Classe_Articolo_Descr] ( [ID_Classe_Articolo] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Classe_Articolo], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateGruppi_Cassa = function () {
        var sqlQuery = " create table if not exists [Gruppi_Cassa] ( [ID_Gruppo_Cassa] INTEGER NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Gruppo_Cassa])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCausali_Cassa_Descr = function () {
        var sqlQuery = " create table if not exists [Causali_Cassa_Descr] ( [ID_Causale_Cassa] INTEGER NOT NULL , [FK_Lingua] INTEGER NOT NULL , [Descrizione] nvarchar NULL , [DataCreazione] datetime NULL DEFAULT (getdate()), [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Causale_Cassa], [FK_Lingua])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Tavoli = function () {
        var sqlQuery = " create table if not exists [Negozi_Tavoli] ( [ID_Tavolo] INTEGER NOT NULL , [FK_Sala] INTEGER NOT NULL , [Codice_Tavolo] varchar(3) NOT NULL , [NumeroPosti] INTEGER NULL , [AggregatoA] INTEGER NULL, [Stato] TEXT NOT NULL DEFAULT (('L')), [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL , [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Tavolo])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Interrogabili = function () {
        var sqlQuery = " create table if not exists [Negozi_Interrogabili] ( [FK_Negozio] INTEGER NOT NULL , [FK_NegozioInterrogabile] INTEGER NOT NULL , [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([FK_Negozio], [FK_NegozioInterrogabile])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi = function () {
        var sqlQuery = " create table if not exists [Negozi] ( [ID_Negozio] INTEGER NOT NULL , [FK_Azienda] INTEGER NOT NULL , [FK_Azienda_Divisione_Area_Zona] INTEGER NOT NULL , [Cod_Negozio] varchar(5) NOT NULL , [FK_Negozi_Gruppo] INTEGER NOT NULL ,     [FK_Tipo_Classificazione] INTEGER NOT NULL, [Negozio] nvarchar NULL , [RagioneSocialeNegozio] nvarchar NULL , [InsegnaNegozio] nvarchar NULL , [Indirizzo] nvarchar NULL , [ZipCap] nvarchar NULL , [Localita] nvarchar NULL , [Codice_Fiscale] nvarchar NULL , [PartitaIva] nvarchar NULL , [FK_Nazione] INTEGER NULL , [FK_Stato] INTEGER NULL , [FK_Regione] INTEGER NULL , [FK_Provincia] INTEGER NULL , [FK_Valuta] INTEGER NULL , [Telefono] nvarchar NULL , [Cellulare] nvarchar NULL , [AltroTelefono] nvarchar NULL , [Fax] nvarchar NULL , [eMail] nvarchar NULL , [Contatto] nvarchar NULL , [ID_Padre] INTEGER NULL , [IP_Padre] nvarchar NULL , [IP_Negozio] nvarchar NULL , [Flag_CreazioneFornitori] bit NOT NULL , [Flag_CreazioneProdotti] bit NOT NULL , [Flag_CreazioneClienti] bit NOT NULL , [Flag_CreazioneListini] bit NOT NULL , [OraApertura] INTEGER NULL , [OraChiusura] INTEGER NULL , [FlagConcentratore] bit NULL DEFAULT ((0)), " +
            " [Latitudine] numeric  NULL,                 " +
            " [Longitudine] numeric  NULL,                " +
            " [Altitudine] numeric  NULL,                 " +
            " [DataCreazione] datetime NULL , [UtenteCreazione] nvarchar NULL , [DataAggiornamento] datetime NULL , [UtenteAggiornamento] nvarchar NULL , [Stato_Record] nchar(1) NOT NULL DEFAULT ('0'), [DataEstrazione] datetime NULL , [PacchettoEstrazione] nvarchar NULL , PRIMARY KEY ([ID_Negozio])) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateValute_Monete = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Valute_Monete] ( 		" +
            " [ID_Moneta] INTEGER  NOT NULL PRIMARY KEY,        " +
            " [FK_Valuta] INTEGER  NOT NULL,                    " +
            " [Valore] FLOAT  NULL,                             " +
            " [Ordinamento] INTEGER  NULL,                      " +
            " [Immagine] TEXT  NULL,                            " +
            " [DataCreazione] datetime  NULL,                   " +
            " [UtenteCreazione] nvarchar(50)  NULL,             " +
            " [DataAggiornamento] datetime  NULL,               " +
            " [UtenteAggiornamento] nvarchar(50)  NULL,         " +
            " [Stato_Record] nchar(1) DEFAULT '0' NOT NULL,     " +
            " [DataEstrazione] datetime  NULL,                  " +
            " [PacchettoEstrazione] nvarchar(25)  NULL,         " +
            " [NomeImmagine] varchar(500)  NULL                 " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo] (								" +
            " [ID_Promo] INTEGER  NOT NULL PRIMARY KEY ,            " +
            " [FK_Campagna] INTEGER  NOT NULL,                                      " +
            " [FK_Gruppo_Cassa] INTEGER  NOT NULL,                             " +
            " [FK_Valuta] INTEGER  NOT NULL,                                        " +
            " [Cod_Promo] nvarchar(50)  NOT NULL,                               " +
            " [FK_Azienda] INTEGER  NOT NULL,                                       " +
            " [Tipo] nvarchar(1)  NOT NULL,                                     " +
            " [FK_Tipo_Promo] INTEGER  NOT NULL,                                    " +
            " [Tipo_Promo] nvarchar(1)  NULL,                                   " +
            " [FK_Carta_Gruppo] INTEGER  NULL,                                      " +
            " [FK_Accumulatore_Tipo] INTEGER  NULL,                                 " +
            " [FK_Accumulatore] INTEGER  NULL,                                      " +
            " [Sequenza_Applicazione] INTEGER DEFAULT '0' NOT NULL,          " +
            " [Numero_Applicazioni] INTEGER DEFAULT '9999' NOT NULL, " +
            " [Stato_Promo] nvarchar(1) DEFAULT '0' NULL," +
            " [DataInizio] INTEGER  NULL,                                           " +
            " [DataFine] INTEGER  NULL,                                             " +
            " [Giorni_Validi] nvarchar(15)  NOT NULL,                           " +
            " [Dalle_Ore] nvarchar(7)  NOT NULL,                                    " +
            " [Alle_Ore] nvarchar(7)  NOT NULL,                                     " +
            " [DataCreazione] text  NULL,                                   " +
            " [UtenteCreazione] nvarchar(50)  NULL,                             " +
            " [DataAggiornamento] text  NULL,                               " +
            " [UtenteAggiornamento] nvarchar(50)  NULL,                         " +
            " [Stato_Record] nvarchar(1) DEFAULT '0' NOT NULL," +
            " [DataEstrazione] text  NULL,                                  " +
            " [PacchettoEstrazione] nvarchar(25)  NULL                          " +
            " )                                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Condizione = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Condizione] (		" +
            " [ID_Condizione] nvarchar(2)  NOT NULL PRIMARY KEY,    " +
            " [DataCreazione] datetime  NULL,                       " +
            " [UtenteCreazione] nvarchar  NULL,                     " +
            " [DataAggiornamento] datetime  NULL,                   " +
            " [UtenteAggiornamento] nvarchar  NULL,                 " +
            " [Stato_Record] nchar  NULL,                           " +
            " [DataEstrazione] datetime  NULL,                      " +
            " [PacchettoEstrazione] nvarchar  NULL                  " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Descr] (			" +
            " [FK_Promo] INTEGER  NOT NULL,                             " +
            " [FK_Lingua] INTEGER  NOT NULL,                       " +
            " [Descrizione] nvarchar  NULL,                         " +
            " [Descrizione_Breve] nvarchar  NULL,                   " +
            " [DataCreazione] datetime  NULL,                       " +
            " [UtenteCreazione] nvarchar  NULL,                     " +
            " [DataAggiornamento] datetime  NULL,                   " +
            " [UtenteAggiornamento] nvarchar  NULL,                 " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,        " +
            " [DataEstrazione] datetime  NULL,                      " +
            " [PacchettoEstrazione] nvarchar  NULL,                 " +
            " PRIMARY KEY ([FK_Promo],[FK_Lingua])                  " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Elemento = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Elemento] (				" +
            " [ID_Promo_Elemento] nvarchar(1)  NOT NULL PRIMARY KEY,    " +
            " [DataCreazione] datetime  NULL,                           " +
            " [UtenteCreazione] nvarchar  NULL,                         " +
            " [DataAggiornamento] datetime  NULL,                       " +
            " [UtenteAggiornamento] nvarchar  NULL,                     " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,            " +
            " [DataEstrazione] datetime  NULL,                          " +
            " [PacchettoEstrazione] nvarchar  NULL                      " +
            " )                                                         ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Elemento_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Elemento_Descr] (" +
            " [ID_Promo_Elemento] nvarchar (1) NOT NULL,         " +
            " [FK_Lingua] INTEGER  NOT NULL,                    " +
            " [Descrizione] nvarchar  NULL,                      " +
            " [DataCreazione] datetime  NULL,                    " +
            " [UtenteCreazione] nvarchar  NULL,                  " +
            " [DataAggiornamento] datetime  NULL,                " +
            " [UtenteAggiornamento] nvarchar  NULL,              " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,     " +
            " [DataEstrazione] datetime  NULL,                   " +
            " [PacchettoEstrazione] nvarchar  NULL,              " +
            " PRIMARY KEY ([ID_Promo_Elemento],[FK_Lingua])      " +
            " )                                                  ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Messaggi = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Messaggi] (		" +
            " [ID_Messaggio] INTEGER  NOT NULL PRIMARY KEY,         " +
            " [Flag_Monitor] bit DEFAULT '(0)' NOT NULL,        " +
            " [Flag_Stampa] bit DEFAULT '(0)' NOT NULL,         " +
            " [Flag_Conferma] bit  NULL,                        " +
            " [DataCreazione] datetime  NULL,                   " +
            " [UtenteCreazione] nvarchar  NULL,                 " +
            " [DataAggiornamento] datetime  NULL,               " +
            " [UtenteAggiornamento] nvarchar  NULL,             " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,    " +
            " [DataEstrazione] datetime  NULL,                  " +
            " [PacchettoEstrazione] nvarchar  NULL              " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Messaggi_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Messaggi_Descr] ( " +
            " [FK_Messaggio] INTEGER  NOT NULL,                       " +
            " [FK_Lingua] INTEGER  NOT NULL,                     " +
            " [Descrizione_1] nvarchar  NOT NULL,                 " +
            " [Descrizione_2] nvarchar  NOT NULL,                 " +
            " [Descrizione_3] nvarchar  NOT NULL,                 " +
            " [Descrizione_4] nvarchar  NOT NULL,                 " +
            " [Descrizione_5] nvarchar  NOT NULL,                 " +
            " [DataCreazione] datetime  NULL,                     " +
            " [UtenteCreazione] nvarchar  NULL,                   " +
            " [DataAggiornamento] datetime  NULL,                 " +
            " [UtenteAggiornamento] nvarchar  NULL,               " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,      " +
            " [DataEstrazione] datetime  NULL,                    " +
            " [PacchettoEstrazione] nvarchar  NULL,               " +
            " PRIMARY KEY ([FK_Messaggio],[FK_Lingua])            " +
            " )                                                   ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Negozio = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Negozi] ( " +
            " [FK_Promo] bigint  NOT NULL,                " +
            " [FK_Negozio] INTEGER  NOT NULL,            " +
            " [Flag_Esclusione] bit  NULL,                " +
            " [DataInizio] INTEGER  NULL,                     " +
            " [DataFine] INTEGER  NULL,                       " +
            " [Giorni_Settimana] nvarchar  NULL,          " +
            " [Ora_Inizio] time  NULL,                    " +
            " [Ora_Fine] time  NULL,                      " +
            " [DataCreazione] datetime  NULL,             " +
            " [UtenteCreazione] nvarchar  NULL,           " +
            " [DataAggiornamento] datetime  NULL,         " +
            " [UtenteAggiornamento] nvarchar  NULL,       " +
            " [Stato_Record] nchar  NOT NULL,             " +
            " [DataEstrazione] datetime  NULL,            " +
            " [PacchettoEstrazione] nvarchar  NULL,       " +
            " PRIMARY KEY ([FK_Promo],[FK_Negozio])       " +
            " )                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Regole = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Regole] (			" +
            " [ID_Regola] INTEGER  NOT NULL PRIMARY KEY,                " +
            " [FK_Promo] INTEGER  NOT NULL,                          " +
            " [Tipo_Valore] nvarchar  NULL,                         " +
            " [Condizione] nvarchar  NOT NULL,                      " +
            " [Valore] decimal DEFAULT '(0)' NOT NULL,              " +
            " [Valore_Max] decimal  NULL,                           " +
            " [DataCreazione] datetime DEFAULT 'getdate()' NULL,    " +
            " [UtenteCreazione] nvarchar  NULL,                     " +
            " [DataAggiornamento] datetime  NULL,                   " +
            " [UtenteAggiornamento] nvarchar  NULL,                 " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,        " +
            " [DataEstrazione] datetime  NULL,                      " +
            " [PacchettoEstrazione] nvarchar  NULL                  " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Tipi = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Tipi] (			" +
            " [ID_Tipo_Promo] INTEGER  NOT NULL PRIMARY KEY,        " +
            " [Tipo_Promo] nvarchar  NULL,                      " +
            " [Flag_Totale] bit  NULL,                          " +
            " [Flag_Riga] bit  NULL,                            " +
            " [Sequenza_Calcolo] INTEGER NULL, " +
            " [DataCreazione] datetime  NULL,                   " +
            " [UtenteCreazione] nvarchar  NULL,                 " +
            " [DataAggiornamento] datetime  NULL,               " +
            " [UtenteAggiornamento] nvarchar  NULL,             " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,    " +
            " [DataEstrazione] datetime  NULL,                  " +
            " [PacchettoEstrazione] nvarchar  NULL              " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Tipi_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Tipi_Descr] (	" +
            " [ID_Tipo_Promo] INTEGER  NOT NULL,                    " +
            " [FK_Lingua] INTEGER  NOT NULL,                   " +
            " [Descrizione] nvarchar  NULL,                     " +
            " [DataCreazione] datetime  NULL,                   " +
            " [UtenteCreazione] nvarchar  NULL,                 " +
            " [DataAggiornamento] datetime  NULL,               " +
            " [UtenteAggiornamento] nvarchar  NULL,             " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,    " +
            " [DataEstrazione] datetime  NULL,                  " +
            " [PacchettoEstrazione] nvarchar  NULL,             " +
            " PRIMARY KEY ([ID_Tipo_Promo],[FK_Lingua])         " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Tipo_Regola = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Tipo_Regola] (		" +
            " [ID_Tipo_Regola] INTEGER  NOT NULL PRIMARY KEY,           " +
            " [Tipo_Regola] nvarchar  NOT NULL,                     " +
            " [DataCreazione] datetime DEFAULT 'getdate()' NULL,    " +
            " [UtenteCreazione] nvarchar  NULL,                     " +
            " [DataAggiornamento] datetime  NULL,                   " +
            " [UtenteAggiornamento] nvarchar  NULL,                 " +
            " [Stato_Record] nchar DEFAULT '''0''' NULL,            " +
            " [DataEstrazione] datetime  NULL,                      " +
            " [PacchettoEstrazione] nvarchar  NULL                  " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getSCriptCreatePromo_Tipo_Regola_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS  [Promo_Tipo_Regola_Descr] (  " +
            " [FK_Tipo_Regola] INTEGER  NOT NULL,                          " +
            " [FK_Lingua] INTEGER  NOT NULL,                          " +
            " [Descrizione] nvarchar  NULL,                            " +
            " [DataCreazione] datetime NULL,                           " +
            " [UtenteCreazione] nvarchar  NULL,                        " +
            " [DataAggiornamento] datetime  NULL,                      " +
            " [UtenteAggiornamento] nvarchar  NULL,                    " +
            " [Stato_Record] nchar DEFAULT '''0''' NULL,               " +
            " [DataEstrazione] datetime  NULL,                         " +
            " [PacchettoEstrazione] nvarchar  NULL,                    " +
            " PRIMARY KEY ([FK_Tipo_Regola],[FK_Lingua])               " +
            " )                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Tipo_Valore = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Tipo_Valore] (		" +
            " [ID_Tipo_Valore] nvarchar(1)  NOT NULL PRIMARY KEY,   " +
            " [DataCreazione] datetime  NULL,                       " +
            " [UtenteCreazione] nvarchar  NULL,                     " +
            " [DataAggiornamento] datetime  NULL,                   " +
            " [UtenteAggiornamento] nvarchar  NULL,                 " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,        " +
            " [DataEstrazione] datetime  NULL,                      " +
            " [PacchettoEstrazione] nvarchar  NULL                  " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Tipo_Valore_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Tipo_Valore_Descr] ( " +
            " [ID_Tipo_Valore] nvarchar(1)  NOT NULL,                " +
            " [FK_Lingua] INTEGER  NOT NULL,                        " +
            " [Descrizione] nvarchar  NULL,                          " +
            " [DataCreazione] datetime  NULL,                        " +
            " [UtenteCreazione] nvarchar  NULL,                      " +
            " [DataAggiornamento] datetime  NULL,                    " +
            " [UtenteAggiornamento] nvarchar  NULL,                  " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,         " +
            " [DataEstrazione] datetime  NULL,                       " +
            " [PacchettoEstrazione] nvarchar  NULL,                  " +
            " PRIMARY KEY ([ID_Tipo_Valore],[FK_Lingua])             " +
            " )                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromoCampagne_Promozionali = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Campagne_Promozionali] (  " +
            " [ID_Campagna] INTEGER  NOT NULL PRIMARY KEY,             " +
            " [FK_Azienda] INTEGER  NOT NULL,                          " +
            " [Cod_Campagna] nvarchar  NOT NULL,                   " +
            " [DataInizio] INTEGER  NULL,                              " +
            " [DataFine] INTEGER  NULL,                                " +
            " [DataCreazione] datetime  NULL,                      " +
            " [UtenteCreazione] nvarchar  NULL,                    " +
            " [DataAggiornamento] datetime  NULL,                  " +
            " [UtenteAggiornamento] nvarchar  NULL,                " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,       " +
            " [DataEstrazione] datetime  NULL,                     " +
            " [PacchettoEstrazione] nvarchar  NULL                 " +
            " )                                                    ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreatePromo_Regole_Dettaglio = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Promo_Regole_Dettaglio] ( " +
            " [ID_Riga] INTEGER  NOT NULL PRIMARY KEY,                  " +
            " [FK_Regola] INTEGER  NOT NULL,                            " +
            " [Tipo] nvarchar  NOT NULL,                            " +
            " [FK_Prodotto] INTEGER  NULL,                              " +
            " [FK_Prodotto_Variante] bigint  NULL,                  " +
            " [FK_Prodotto_Variante_Taglia] bigint  NULL,           " +
            " [FK_Barcode] bigint  NULL,                            " +
            " [FK_Marca] INTEGER  NULL,                                 " +
            " [FK_Reparto] INTEGER  NULL,                               " +
            " [FK_TipoProdotto] INTEGER  NULL,                          " +
            " [FK_Classificazione_Dettaglio] bigint  NULL,          " +
            " [Flag_Calcolo] bit  NULL,                             " +
            " [Flag_Esclusione] bit  NULL,                          " +
            " [Flag_Esclusione_Scontati] bit  NULL,                 " +
            " [Quantita] INTEGER  NULL,                                 " +
            " [Tipo_Valore] nvarchar  NULL,                         " +
            " [Valore] money  NULL,                                 " +
            " [DataCreazione] datetime  NULL,                       " +
            " [UtenteCreazione] nvarchar  NULL,                     " +
            " [DataAggiornamento] datetime  NULL,                   " +
            " [UtenteAggiornamento] nvarchar  NULL,                 " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,        " +
            " [DataEstrazione] datetime  NULL,                      " +
            " [PacchettoEstrazione] nvarchar  NULL                  " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateCampagne_Promozionali_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Campagne_Promozionali_Descr] ( " +
            " [ID_Campagna] INTEGER  NOT NULL,                               " +
            " [FK_Lingua] INTEGER  NOT NULL,                            " +
            " [Descrizione] nvarchar  NULL,                              " +
            " [DataCreazione] datetime  NULL,                            " +
            " [UtenteCreazione] nvarchar  NULL,                          " +
            " [DataAggiornamento] datetime  NULL,                        " +
            " [UtenteAggiornamento] nvarchar  NULL,                      " +
            " [Stato_Record] nchar DEFAULT '''0''' NOT NULL,             " +
            " [DataEstrazione] datetime  NULL,                           " +
            " [PacchettoEstrazione] nvarchar  NULL,                      " +
            " PRIMARY KEY ([ID_Campagna],[FK_Lingua])                    " +
            " )                                                          ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_ID_IVA] ON [Iva]( " +
            " [ID_Iva]  ASC                                         " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Nazione_Stato = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_NAZIONE_STATO_ID_IVA_NAZIONE_STATO] ON [Iva_Nazione_Stato]( " +
            " [ID_Iva_Nazione_Stato]  ASC                                                                     " +
            " )                                                                                               ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Tipi = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_TIPI_ID_TIPOIVA] ON [Iva_Tipi]( " +
            " [ID_TipoIva]  ASC                                                   " +
            " )                                                                   ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Tipi_Nazione_Stato = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_NAZIONE_STATO_ID_IVA_NAZIONE_STATO] ON [Iva_Nazione_Stato]( " +
            " [ID_Iva_Nazione_Stato]  ASC                                                                     " +
            " )                                                                                               ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexLingue = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LINGUE_ID_LINGUA] ON [Lingue]( " +
            " [ID_Lingua]  ASC                                               " +
            " )                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexLingue_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LINGUE_DESC] ON [Lingue_Desc]( " +
            " [ID_Lingua]  ASC,                                              " +
            " [FK_Lingua]  ASC                                               " +
            " )                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexListini = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LISTINI_ID_LISTINO] ON [Listini]( " +
            " [ID_Listino]  ASC                                                 " +
            " )                                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexListini_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LISTINI_DESCR] ON [Listini_Descr]( " +
            " [ID_Listino]  ASC,                                                 " +
            " [FK_Lingua]  ASC                                                   " +
            " )                                                                  ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexListini_Dettaglio = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LISTINI_DETTAGLIO] ON [Listini_Dettaglio]( " +
            " [FK_Listino]  ASC,                                                         " +
            " [FK_Prodotto_Variante_Taglia]  ASC,                                        " +
            " [DataInizioValidita]  ASC                                                  " +
            " )                                                                          ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexListini_Negozi = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LISTINI_NEGOZI] ON [Listini_Negozi]( " +
            " [FK_Listino]  ASC,                                                   " +
            " [FK_Negozio]  ASC                                                    " +
            " )                                                                    ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexListini_Negozi_Casse = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LISTINI_NEGOZI_CASSE] ON [Listini_Negozi_Casse]( " +
            " [FK_Listino]  ASC,                                                               " +
            " [FK_Cassa]  ASC                                                                  " +
            " )                                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNazioni = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NAZIONI_ID_NAZIONE] ON [Nazioni]( " +
            " [ID_Nazione]  ASC                                                 " +
            " )                                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNazioni_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NAZIONI_DESCR] ON [Nazioni_Descr]( " +
            " [FK_Nazione]  ASC,                                                 " +
            " [FK_Lingua]  ASC                                                   " +
            " )                                                                  ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNazioni_Stati = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NAZIONI_STATI_ID_STATO] ON [Nazioni_Stati]( " +
            " [ID_Stato]  ASC                                                             " +
            " )                                                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNazioni_Stati_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NAZIONI_STATI_DESCR] ON [Nazioni_Stati_Descr]( " +
            " [ID_Stato]  ASC,                                                               " +
            " [FK_Lingua]  ASC                                                               " +
            " )                                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNazioni_Stati_Regioni = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NAZIONI_STATI_REGIONI_ID_NAZIONI_STATI_REGIONI] ON [Nazioni_Stati_Regioni]( " +
            " [ID_Nazioni_Stati_Regioni]  ASC                                                                             " +
            " )                                                                                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNazioni_Stati_Regioni_Province = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NAZIONI_STATI_REGIONI_PROVINCE_ID_PROVINCIA] ON [Nazioni_Stati_Regioni_Province]( " +
            " [ID_Provincia]  ASC " +
            " )                   ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_ID_NEGOZIO] ON [Negozi]( " +
            " [ID_Negozio]  ASC " +
            " )                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Abilitazioni_Programmi = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_ABILITAZIONI_PROGRAMMI] ON [Negozi_Abilitazioni_Programmi]( " +
            " [FK_Negozio]  ASC,  " +
            " [FK_Programma]  ASC " +
            " )                   ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Casse = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_CASSE_ID_CASSA] ON [Negozi_Casse]( " +
            " 	[ID_Cassa]  ASC                                                         " +
            " )                                                                         ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_DESCR] ON [Negozi_Descr]( " +
            " [ID_Negozio]  ASC,                                               " +
            " [FK_Lingua]  ASC                                                 " +
            " )                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Filtro = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_FILTRO] ON [Negozi_Filtro]( " +
            " [FK_Negozio]  ASC,                                                 " +
            " [FK_Classificazione_Dettaglio]  ASC                                " +
            " )                                                                  ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Gruppo = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_GRUPPO_ID_NEGOZI_GRUPPO] ON [Negozi_Gruppo]( " +
            " [ID_Negozi_Gruppo]  ASC                                                             " +
            " )                                                                                   ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Gruppo_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_GRUPPO_DESCR] ON [Negozi_Gruppo_Descr]( " +
            " [FK_Negozi_Gruppo]  ASC,                                                       " +
            " [FK_Lingua]  ASC                                                               " +
            " )                                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Interrogabili = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_INTERROGABILI] ON [Negozi_Interrogabili]( " +
            " [FK_Negozio]  ASC,                                                               " +
            " [FK_NegozioInterrogabile]  ASC                                                   " +
            " )                                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Magazzini = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_MAGAZZINI_ID_MAGAZZINO] ON [Negozi_Magazzini]( " +
            " [ID_Magazzino]  ASC                                                                   " +
            " )                                                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Operatori = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_OPERATORI] ON [Negozi_Operatori]( " +
            " [FK_Negozio]  ASC,                                                       " +
            " [FK_Utente]  ASC                                                         " +
            " )                                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Planning = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_PLANNING_ID_PLANNING] ON [Negozi_Planning]( " +
            " 	[ID_Planning]  ASC                                                               " +
            " )                                                                                  ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Planning_Scontrini = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_PLANNING_SCONTRINI] ON [Negozi_Planning_Scontrini]( " +
            " 	[FK_Scontrini_Testate]  ASC,                                                             " +
            " 	[FK_Planning]  ASC                                                                       " +
            " )                                                                                          ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Sale_Turni = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_SALE_TURNI] ON [Negozi_Sale_Turni]( " +
            " [FK_Sala]  ASC,                                                            " +
            " [Turno]  ASC                                                               " +
            " )                                                                          ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Tavoli = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_TAVOLI_ID_TAVOLO] ON [Negozi_Tavoli]( " +
            " 	[ID_Tavolo]  ASC                                                           " +
            " )                                                                            ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Tavoli_Planning = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_TAVOLI_PLANNING_ID_PLANNING] ON [Negozi_Tavoli_Planning]( " +
            " 	[ID_Planning]  ASC                                                                             " +
            " )                                                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Tavoli_Posizioni = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_TAVOLI_POSIZIONI] ON [Negozi_Tavoli_Posizioni]( " +
            " 	[FK_Sala]  ASC,                                                                      " +
            " 	[FK_Tavolo]  ASC                                                                     " +
            " )                                                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Turni = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_TURNI] ON [Negozi_Turni]( " +
            " [FK_Turno]  ASC,                                                 " +
            " [FK_Negozio]  ASC                                                " +
            " )                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozio_Cassa_Parametri = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZIO_CASSA_PARAMETRI_ID_CASSA] ON [Negozio_Cassa_Parametri]( " +
            " [ID_Cassa]  ASC " +
            " )               ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozio_Parametri = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZIO_PARAMETRI_ID_NEGOZIO] ON [Negozio_Parametri]( " +
            " [ID_Negozio]  ASC                                                                     " +
            " )                                                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Sale = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_SALE_ID_SALA] ON [Negozi_Sale]( " +
            " [ID_Sala]  ASC                                                         " +
            " )                                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPagamenti = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PAGAMENTI_ID_PAGAMENTO] ON [Pagamenti]( " +
            " [ID_Pagamento]  ASC                                                     " +
            " )	                                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPagamenti_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PAGAMENTI_DESCR] ON [Pagamenti_Descr]( " +
            " [ID_Pagamento]  ASC,                                                   " +
            " [FK_Lingua]  ASC                                                       " +
            " )                                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPagamenti_Scadenze = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PAGAMENTI_SCADENZE_ID_PAGAMENTI_SCADENZE] ON [Pagamenti_Scadenze]( " +
            " [ID_Pagamenti_Scadenze]  ASC                                                                       " +
            " )                                                                                                  ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPagamenti_Tipi = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PAGAMENTI_TIPI_ID_TIPOPAGAMENTO] ON [Pagamenti_Tipi]( " +
            " [ID_TipoPagamento]  ASC                                                               " +
            " )                                                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPagamenti_Tipi_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PAGAMENTI_TIPI_DESCR] ON [Pagamenti_Tipi_Descr]( " +
            " [ID_TipoPagamento]  ASC,                                                   " +
            " [FK_Lingua]  ASC                                                       " +
            " )                                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPagamenti_Valute = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PAGAMENTI_VALUTE] ON [Pagamenti_Valute]( " +
            " [FK_Nazione]  ASC,                                                       " +
            " [FK_Pagamento]  ASC,                                                     " +
            " [FK_Valuta]  ASC                                                         " +
            " )                                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Associati = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_ASSOCIATI] ON [Prodotti_Associati](  " +
            " [FK_Prodotto_Variante_Taglia]  ASC,                                           " +
            " [FK_Prodotto_Variante_TagliaAss]  ASC                                         " +
            " )                                                                             ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Classificazione = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_CLASSIFICAZIONE] ON [Prodotti_Classificazione]( " +
            " [FK_Prodotto]  ASC,                                                                      " +
            " [FK_Classificazione_Dettaglio]  ASC                                                      " +
            " )                                                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Fornitori = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_FORNITORI] ON [Prodotti_Fornitori]( " +
            " [FK_Prodotto_Variante_Taglia]  ASC,                                          " +
            " [FK_Fornitore]  ASC                                                          " +
            " )                                                                            ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Magazzino = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_MAGAZZINO] ON [Prodotti_Magazzino]( " +
            " [FK_Magazzino]  ASC,                                                         " +
            " [FK_Prodotto_Variante_Taglia]  ASC                                           " +
            " )                                                                            ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Negozi = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS  [IDX_PRODOTTI_NEGOZI] ON [Prodotti_Negozi]( " +
            " [FK_Negozio]  ASC,                                                      " +
            " [FK_Prodotto]  ASC                                                      " +
            " )                                                                       ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Pacchetti = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_PACCHETTI] ON [Prodotti_Pacchetti]( " +
            " [ID_ProdottoPacchetto]  ASC,                                                 " +
            " [FK_Prodotto]  ASC                                                           " +
            " )                                                                            ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Pacchetti_Dettaglio = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_PACCHETTI_DETTAGLIO] ON [Prodotti_Pacchetti_Dettaglio]( " +
            " [FK_ProdottoPacchetto]  ASC,                                                                     " +
            " [Riga]  ASC                                                                                      " +
            " )                                                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexTaglie_Definizioni = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TAGLIE_DEFINIZIONI_ID_SCALATAGLIE] ON [Taglie_Definizioni]( " +
            " [ID_ScalaTaglie]  ASC                                                                       " +
            " )                                                                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexTaglie_Definizioni_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TAGLIE_DEFINIZIONI_DESCR] ON [Taglie_Definizioni_Descr]( " +
            " [ID_ScalaTaglie]  ASC,                                                                   " +
            " [FK_Lingua]  ASC                                                                         " +
            " )                                                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexTipo_Vendita = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TIPO_VENDITA_ID_TIPO_VENDITA] ON [Tipo_Vendita]( " +
            " [ID_Tipo_Vendita]  ASC                                                           " +
            " )                                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexTipo_Vendita_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TIPO_VENDITA_DESCR] ON [Tipo_Vendita_Descr]( " +
            " [ID_Tipo_Vendita]  ASC,                                                      " +
            " [FK_Lingua]  ASC                                                             " +
            " )                                                                            ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexTurni = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TURNI_ID_TURNO] ON [Turni]( " +
            " [ID_Turno]  ASC                                             " +
            " )	                                                          ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexTurni_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TURNI_DESCR] ON [Turni_Descr]( " +
            " 	[ID_Turno]  ASC,                                             " +
            " 	[FK_Lingua]  ASC                                             " +
            " )                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexUtenti = function () {
        var sqlQuery = " CREATE INDEX [IDX_UTENTI_ID_UTENTE] ON [Utenti]( " +
            " [ID_Utente]  ASC                                 " +
            " )                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexValute = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_VALUTE_ID_VALUTA] ON [Valute]( " +
            " [ID_Valuta]  ASC                                               " +
            " )                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexValute_Cambi = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_VALUTE_CAMBI] ON [Valute_Cambi]( " +
            " [FK_Negozio]  ASC,                                               " +
            " [FK_Valuta]  ASC,                                                " +
            " [FK_ControValuta]  ASC,                                          " +
            " [InizioValidita]  ASC                                            " +
            " )                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexValute_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_VALUTE_DESCR] ON [Valute_Descr]( " +
            " [ID_Valuta]  ASC,                                                " +
            " [FK_Lingua]  ASC                                                 " +
            " )                                                                ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNegozi_Operatori1 = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_OPERATORI_userepassword] ON [Negozi_Operatori]( " +
            " [CodiceOperatore]  ASC, " +
            " [PasswordOperatore]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Nazione_Stato_FK_IVA = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS idx_Iva_Nazione_Stato_FK_IVA ON Iva_Nazione_Stato ( " +
            " FK_Iva ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateOrdiniUscite = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [OrdiniUscite] (		" +
            " [FK_Azienda] INTEGER  NOT NULL,                   " +
            " [FK_Negozio] INTEGER  NOT NULL,                   " +
            " [Uscita] INTEGER  NOT NULL,                       " +
            " [Descrizione] TEXT  NULL,                         " +
            " [Stato_Record] TEXT  NULL,                        " +
            " PRIMARY KEY ([FK_Azienda],[FK_Negozio],[Uscita])  " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateViewIva_Nazione_Stato_Correnti = function () {
        var sqlQuery = " CREATE VIEW IF NOT EXISTS [View_Iva_Nazione_Stato_Valide] AS	" +
            " Select					" +
            " DISTINCT (FK_Iva),        " +
            " MAX(InizioValidita),      " +
            " ID_Iva_Nazione_Stato  ,   " +
            " FK_Iva                ,   " +
            " FK_Nazione            ,   " +
            " FK_Stato              ,   " +
            " InizioValidita        ,   " +
            " IVA                   ,   " +
            " Aliquota_1            ,   " +
            " Aliquota_2            ,   " +
            " Aliquota_3            ,   " +
            " Aliquota_4            ,   " +
            " Aliquota_5            ,   " +
            " DataCreazione         ,   " +
            " UtenteCreazione       ,   " +
            " DataAggiornamento     ,   " +
            " UtenteAggiornamento   ,   " +
            " Stato_Record          ,   " +
            " DataEstrazione        ,   " +
            " PacchettoEstrazione       " +
            " FROM                      " +
            " Iva_Nazione_Stato         " +
            " WHERE                     " +
            " InizioValidita<strftime('%Y%m%d','now','localtime') " +
            " group by FK_Iva ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Nazione_StatoInizioValidita = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_NAZIONE_STATO_Inizio_Validita] ON [Iva_Nazione_Stato]( " +
            " [InizioValidita]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Nazione_Stato_FK_Nazione = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_NAZIONE_STATO_fk_nazione] ON [Iva_Nazione_Stato]( " +
            " [FK_Nazione]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Nazione_Stato_Fk_Stato = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_NAZIONE_STATO_fk_Stato] ON [Iva_Nazione_Stato]( " +
            " [FK_Stato]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Nazione_Stato_DataInizioValiditaDesc = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_NAZIONE_STATO_Inizio_ValiditaDESC] ON [Iva_Nazione_Stato](  [InizioValidita]  ASC  ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIva_Nazione_Stato_Index1 = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_NAZIONE_STATO_index1] ON [Iva_Nazione_Stato]( " +
            "	[InizioValidita]  ASC, " +
            "	[FK_Iva]  ASC, " +
            "	[FK_Nazione]  ASC, " +
            "	[FK_Stato]  ASC " +
            "	) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_FK_Prodotto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_FK_Prodotto_ASC] ON [Prodotti_Varianti]( " +
            " [FK_Prodotto]  ASC                                                                         " +
            " )                                                                                          ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_Id_Prodotto_Variante_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_Id_Prodotto_Variante_ASC] ON [Prodotti_Varianti]( " +
            " [FK_Prodotto]  ASC                                                                                  " +
            " )                                                                                                   ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_FK_Prodotto_Variante_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_TAGLIE_FK_Prodotto_Variante_ASC] ON [Prodotti_Varianti_Taglie]( " +
            " [FK_Prodotto_Variante]  ASC                                                                                       " +
            " )                                                                                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_Stato_Record_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_TAGLIE_Stato_Record_ASC] ON [Prodotti_Varianti_Taglie]( " +
            " [Stato_Record]  ASC                                                                                       " +
            " )                                                                                                         ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_FK_ScalaTaglie_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_TAGLIE_FK_ScalaTaglie_ASC] ON [Prodotti_Varianti_Taglie]( " +
            " [FK_ScalaTaglie]  ASC                                                                                   " +
            " )                                                                                                       ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_FK_Sequenza_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_TAGLIE_FK_Sequenza_ASC] ON [Prodotti_Varianti_Taglie]( " +
            " [FK_ScalaTaglie]  ASC                                                                                   " +
            " )                                                                                                       ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_ID_Prodotto_Variante_Taglia_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_TAGLIE_ID_Prodotto_Variante_Taglia_ASC] ON [Prodotti_Varianti_Taglie]( " +
            " [ID_Prodotto_Variante_Taglia]  ASC                                                                                      " +
            " )                                                                                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_BARCODE_FK_Prodotto_Variante_Taglia_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_BARCODE_FK_Prodotto_Variante_Taglia_ASC] ON [Prodotti_Barcode]( " +
            " [FK_Prodotto_Variante_Taglia]  ASC                                                                      " +
            " )                                                                                                       ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_BARCODE_Barcode_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_BARCODE_Barcode_ASC] ON [Prodotti_Barcode]( " +
            " [Barcode]  ASC                                                                       " +
            " )                                                                                    ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_ID_Prodotto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_ID_Prodotto_ASC] ON [Prodotti]( " +
            " [ID_Prodotto]  ASC                                                       " +
            " )                                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_FK_Reparto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_FK_Reparto_ASC] ON [Prodotti]( " +
            " [FK_Reparto]  ASC                                                       " +
            " )                                                                       ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_FK_Marca_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_FK_Marca_ASC] ON [Prodotti]( " +
            " [FK_Marca]  ASC                                                       " +
            " )                                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_FK_TipoProdotto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_FK_TipoProdotto_ASC] ON [Prodotti]( " +
            " [FK_TipoProdotto]  ASC                                                       " +
            " )                                                                            ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_Prodotto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_Prodotto_ASC] ON [Prodotti]( " +
            " [Prodotto]  ASC                                                       " +
            " )                                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_REPARTI_ID_Reparto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_REPARTI_ID_Reparto_ASC] ON [Reparti]( " +
            " [ID_Reparto]  ASC                                                     " +
            " )                                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_REPARTI_DESCR_ID_Reparto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_REPARTI_DESCR_ID_Reparto_ASC] ON [Reparti_Descr]( " +
            " [ID_Reparto]  ASC                                                                 " +
            " )                                                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_DESCR_ID_Prodotto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_DESCR_ID_Prodotto_ASC] ON [Prodotti_Descr]( " +
            " [ID_Prodotto]  ASC                                                                   " +
            " )                                                                                    ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_IVA_ID_Iva_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_IVA_ID_Iva_ASC] ON [Iva]( " +
            " [ID_Iva]  ASC                                             " +
            " )                                                         ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_MARCA_ID_Marca_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_MARCA_ID_Marca_ASC] ON [Marca]( " +
            " [ID_Marca]  ASC                                                 " +
            " )                                                               ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_TIPO_PRODOTTO_ID_TipoProdotto_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TIPO_PRODOTTO_ID_TipoProdotto_ASC] ON [Tipo_Prodotto]( " +
            " [ID_TipoProdotto]  ASC                                                                 " +
            " )                                                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_TIPO_PRODOTTO_DESCR_FK_TipoProdotto = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TIPO_PRODOTTO_DESCR_FK_TipoProdotto] ON [Tipo_Prodotto_Descr]( " +
            " [FK_TipoProdotto]  ASC                                                                         " +
            " )                                                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_TIPO_PRODOTTO_DESCR_FK_Lingua_ASC = function () {
        var sqlQuery = " CREATE INDEX [IDX_TIPO_PRODOTTO_DESCR_FK_Lingua_ASC] ON [Tipo_Prodotto_Descr]( " +
            " [FK_Lingua]  ASC                                                               " +
            " )                                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_TAGLIE_DETTAGLIO_FK_ScalaTaglie_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TAGLIE_DETTAGLIO_FK_ScalaTaglie_ASC] ON [Taglie_Dettaglio]( " +
            " [FK_ScalaTaglie]  ASC                                                                       " +
            " )                                                                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_TAGLIE_DETTAGLIO_ID_Sequenza_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TAGLIE_DETTAGLIO_ID_Sequenza_ASC] ON [Taglie_Dettaglio]( " +
            " [ID_Sequenza]  ASC                                                                       " +
            " )                                                                                        ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_MENU_Valore_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_MENU_Valore_ASC] ON [Menu]( " +
            " [Valore]  ASC                                               " +
            " )                                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_MENU_FK_Pagina_ASC = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_MENU_FK_Pagina_ASC] ON [Menu]( " +
            " [FK_Pagina]  ASC                                               " +
            " )                                                              ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_MENU_Valore_e_Pagina = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_MENU_Valore_e_Pagina] ON [Menu]( " +
            " [Valore]  ASC, " +
            " [FK_Pagina]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_PRODOTTI_DESCR_ID_Prodotto_e_FK_Lingua = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_DESCR_ID_Prodotto_e_FK_Lingua] ON [Prodotti_Descr]( " +
            " [ID_Prodotto]  ASC, " +
            " [FK_Lingua]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_REPARTI_DESCR_ID_Reparto_e_FK_Lingua = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_REPARTI_DESCR_ID_Reparto_e_FK_Lingua] ON [Reparti_Descr]( " +
            " [ID_Reparto]  ASC, " +
            " [FK_Lingua]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexIDX_TIPO_PRODOTTO_DESCR_FK_TipoProdotto_e_FK_Lingua = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_TIPO_PRODOTTO_DESCR_FK_TipoProdotto_e_FK_Lingua] ON [Tipo_Prodotto_Descr]( " +
            " [FK_TipoProdotto]  ASC, " +
            " [FK_Lingua]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateSintesiScontrino = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [SintesiScontrino] ( " +
            " [Tipo] NVARCHAR(25)  NULL,                      " +
            " [Item] INTEGER  NULL,                           " +
            " [Quantita] FLOAT  NULL,                         " +
            " [Valore] FLOAT  NULL,                           " +
            " [Flag_Sconto] BOOLEAN  NULL,                    " +
            " [Flag_Promo] BOOLEAN  NULL,                     " +
            " [Flag_Sconto_Manuale_Presente] BOOLEAN  NULL,   " +
            " [Flag_Promo_Gia_Applicata] BOOLEAN  NULL,       " +
            " PRIMARY KEY ([Tipo],[Item])                     " +
            " )                                               ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Descr_Descrizione = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_DESCR_Descrizione] ON [Prodotti_Descr]( " +
            " [Descrizione]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Descr_DescrizioneBreve = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_DESCR_DescrizioneBreve] ON [Prodotti_Descr]( " +
            " [DescrizioneBreve]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPromo_Regole_Dettaglio_FK_Regola = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PROMO_REGOLE_DETTAGLIO_FK_Regola] ON [Promo_Regole_Dettaglio]( " +
            " [FK_Regola]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPromo_Regole_FK_Promo = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PROMO_REGOLE_FK_Promo] ON [Promo_Regole]( " +
            " [FK_Promo]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPromo_Negozi_FK_Promo_e_FK_Negozio = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PROMO_NEGOZI_FK_Promo_e_FK_Negozio] ON [Promo_Negozi]( " +
            " [FK_Promo]  ASC, " +
            " [FK_Negozio]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexPromo_Descr_FK_Promo_e_FK_Lingua = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PROMO_DESCR_FK_Promo_e_FK_Lingua] ON [Promo_Descr]( " +
            " [FK_Promo]  ASC, " +
            " [FK_Lingua]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Varianti_FK_Prodotto = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_VARIANTI_FK_Prodotto_ASC] ON [Prodotti_Varianti](  [FK_Prodotto]  ASC ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexListini_Dettaglio_FK_Listino = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LISTINI_DETTAGLIO_FK_Listino] ON [Listini_Dettaglio]( " +
            " [FK_Listino]  ASC " +
            " )";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexListini_Negozio_FK_Negozio = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_LISTINI_NEGOZI_FK_Negozio] ON [Listini_Negozi]( " +
            " [FK_Negozio]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreazioneVistaVW_PROMO_CALCOLO = function () {
        var sqlQuery = " CREATE VIEW IF NOT EXISTS [VW_PROMO_CALCOLO] AS				" +
            " SELECT                                                        " +
            " Promo.ID_Promo AS ID_Promo,                                   " +
            " Promo_Regole_Dettaglio.FK_Regola AS FK_Regola,                " +
            " Promo.FK_Campagna AS FK_Campagna,                             " +
            " Promo.FK_Gruppo_Cassa AS FK_Gruppo_Cassa,                     " +
            " Promo.Cod_Promo AS Cod_Promo,                                 " +
            " Promo_Descr.Descrizione AS Descrizione,                       " +
            " Promo_Descr.Descrizione_Breve AS Descrizione_Breve,           " +
            " Promo.Tipo As Tipo,                                           " +
            " Promo.FK_Tipo_Promo AS FK_Tipo_Promo,                         " +
            " Promo.Tipo_Promo AS Tipo_Promo,                               " +
            " Promo.FK_Carta_Gruppo AS FK_Carta_Gruppo,                     " +
            " Promo.FK_Accumulatore_Tipo AS FK_Accumulatore_Tipo,           " +
            " Promo.FK_Accumulatore AS FK_Accumulatore,                     " +
            " Promo.Sequenza_Applicazione AS Sequenza_Applicazione,         " +
            " Promo.Numero_Applicazioni AS Numero_Applicazioni,             " +
            " Promo_Regole.Tipo_Valore AS Tipo_Valore,                      " +
            " Promo_Regole.Condizione AS Condizione,                        " +
            " Promo_Regole.Valore AS Valore,                                " +
            " Promo_Regole.Valore_Max AS Valore_Max,                        " +
            " Promo_Regole_Dettaglio.Tipo AS Tipo_Item,                     " +
            " CASE WHEN IFNULL(FK_Prodotto, - 1) != - 1 THEN FK_Prodotto ELSE CASE WHEN IFNULL(FK_Prodotto_Variante, - 1) 																				 " +
            " != - 1 THEN FK_Prodotto_Variante ELSE CASE WHEN IFNULL(FK_Prodotto_Variante_Taglia, - 1) != - 1 THEN FK_Prodotto_Variante_Taglia ELSE CASE WHEN IFNULL(FK_Barcode, - 1)                    " +
            " != - 1 THEN FK_Barcode ELSE CASE WHEN IFNULL(FK_Marca, - 1) != - 1 THEN FK_Marca ELSE CASE WHEN IFNULL(FK_Reparto, - 1) != - 1 THEN FK_Reparto ELSE CASE WHEN IFNULL(FK_TipoProdotto, - 1) " +
            " != - 1 THEN FK_TipoProdotto ELSE CASE WHEN IFNULL(FK_Classificazione_Dettaglio, - 1) != - 1 THEN FK_Classificazione_Dettaglio ELSE 0 END END END END END END END END AS Item,              " +
            " Promo_Regole_Dettaglio.Flag_Calcolo AS Flag_Calcolo, Promo_Regole_Dettaglio.Flag_Esclusione AS Flag_Esclusione, Promo_Regole_Dettaglio.Flag_Esclusione_Scontati AS Flag_Esclusione_Scontati, Promo_Regole_Dettaglio.Quantita AS Quantita,                             " +
            " Promo_Regole_Dettaglio.Tipo_Valore AS Tipo_Valore_Applicazione, Promo_Regole_Dettaglio.Valore AS Valore_Applicazione                                                                       " +
            " FROM                                                                                                                                                                                       " +
            " Promo INNER JOIN                                                                                                                                                                           " +
            " Promo_Descr ON Promo.ID_Promo = Promo_Descr.FK_Promo AND 1 = Promo_Descr.FK_Lingua INNER JOIN                                                                                              " +
            " Promo_Regole ON Promo.ID_Promo = Promo_Regole.FK_Promo INNER JOIN                                                                                                                          " +
            " Promo_Regole_Dettaglio ON Promo_Regole.ID_Regola = Promo_Regole_Dettaglio.FK_Regola                                                                                                        " +
            " WHERE        (Promo.Tipo = 'T') AND (Promo_Regole_Dettaglio.Stato_Record = '0') AND (Promo_Regole.Stato_Record = '0') AND (Promo.Stato_Record = '0')                                       ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getSCriptCreazioneVistaVW_PROMO_SCONTRINO = function () {
        var sqlQuery = " CREATE VIEW IF NOT EXISTS [VW_PROMO_SCONTRINO] AS						" +
            " SELECT                                                                " +
            " A.ID_Promo AS ID_Promo,                                               " +
            " A.FK_Regola AS FK_Regola,                                             " +
            " A.FK_Campagna AS FK_Campagna,                                         " +
            " A.FK_Gruppo_Cassa AS FK_Gruppo_Cassa,                                 " +
            " A.Cod_Promo AS Cod_Promo,                                             " +
            " A.Descrizione AS Descrizione,                                         " +
            " A.Descrizione_Breve AS Descrizione_Breve,                             " +
            " A.Tipo AS Tipo,                                                       " +
            " A.FK_Tipo_Promo AS FK_Tipo_Promo,                                     " +
            " A.Tipo_Promo AS Tipo_Promo,                                           " +
            " A.FK_Carta_Gruppo AS FK_Carta_Gruppo,                                 " +
            " A.FK_Accumulatore_Tipo AS FK_Accumulatore_Tipo,                       " +
            " A.FK_Accumulatore AS FK_Accumulatore,                                 " +
            " A.Sequenza_Applicazione AS Sequenza_Applicazione,                     " +
            " A.Numero_Applicazioni AS Numero_Applicazioni,                         " +
            " A.Tipo_Valore AS Tipo_Valore,                                         " +
            " A.Condizione AS Condizione,                                           " +
            " A.Valore AS Valore,                                                   " +
            " A.Valore_Max AS Valore_Max,                                           " +
            " A.Tipo_Item AS Tipo_Item,                                             " +
            " A.Item AS Item,                                                       " +
            " A.Flag_Calcolo AS Flag_Calcolo,                                       " +
            " A.Flag_Esclusione AS Flag_Esclusione,                                 " +
            " A.Flag_Esclusione_Scontati AS Flag_Esclusione_Scontati,               " +
            " A.Quantita AS Quantita,                                               " +
            " A.Tipo_Valore_Applicazione AS Tipo_Valore_Applicazione,               " +
            " A.Valore_Applicazione AS Valore_Applicazione,                         " +
            " IFNULL(B.Quantita, 0) AS Quantita_Scontrino,                          " +
            " IFNULL(B.Valore, 0) AS Valore_Scontrino                               " +
            " FROM            VW_PROMO_CALCOLO AS A LEFT OUTER JOIN                 " +
            " SintesiScontrino AS B ON A.Tipo_Item = B.Tipo AND A.Item = B.Item     " +
            " WHERE        (A.Tipo = 'T')                                           ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Stampanti = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Negozi_Stampanti] ( 	" +
            " [ID_Negozio] INTEGER  NOT NULL,                   " +
            " [ID_Stampante] INTEGER  NOT NULL,                 " +
            " [FK_Modello_Stampante] INTEGER  NULL,                    " +
            " [URL] NVARCHAR(255)  NULL,                        " +
            " [DataCreazione] TEXT  NULL,                       " +
            " [UtenteCreazione] NVARCHAR(20)  NULL,             " +
            " [DataAggiornamento] TEXT  NULL,                   " +
            " [UtenteAggiornamento] NVARCHAR(20)  NULL,         " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NOT NULL,  " +
            " [DataEstrazione] TEXT  NULL,                      " +
            " [PacchettoEstrazione] NVARCHAR(25)  NULL,         " +
            " PRIMARY KEY ([ID_Negozio],[ID_Stampante])         " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexTabellaNegozi_Stampanti_1 = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NEGOZI_STAMPANTI_] ON [Negozi_Stampanti]( " +
            " [ID_Negozio]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNote = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Note] (				" +
            " [ID_Nota] INTEGER  NOT NULL PRIMARY KEY,          " +
            " [DataCreazione] TEXT  NULL,                       " +
            " [UtenteCreazione] TEXT  NULL,                     " +
            " [DataAggiornamento] TEXT  NULL,                   " +
            " [UtenteAggiornamento] TEXT  NULL,                 " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NOT NULL,  " +
            " [DataEstrazione] TEXT  NULL,                      " +
            " [PacchettoEstrazione] TEXT  NULL                  " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNote_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Note_Descr] (	 " +
            " [ID_Nota] INTEGER  NOT NULL,                          " +
            " [FK_Lingua] INTEGER  NULL,                            " +
            " [Nota] NVARCHAR(150), " +
            " [DataCreazione] TEXT  NULL,                           " +
            " [UtenteCreazione] TEXT  NULL,                         " +
            " [DataAggiornamento] TEXT  NULL,                       " +
            " [UtenteAggiornamento] TEXT  NULL,                     " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NOT NULL,      " +
            " [DataEstrazione] TEXT  NULL,                          " +
            " [PacchettoEstrazione] TEXT  NULL,                     " +
            " PRIMARY KEY ([ID_Nota],[FK_Lingua])                   " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Note = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Prodotti_Note] (			" +
            " [FK_Prodotto] INTEGER  NULL,                          " +
            " [FK_Nota] INTEGER  NULL,                              " +
            " [DataCreazione] TEXT  NULL,                           " +
            " [UtenteCreazione] TEXT  NULL,                         " +
            " [DataAggiornamento] TEXT  NULL,                       " +
            " [UtenteAggiornamento] TEXT  NULL,                     " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NOT NULL,      " +
            " [DataEstrazione] TEXT  NULL,                          " +
            " [PacchettoEstrazione] TEXT  NULL,                     " +
            " PRIMARY KEY ([FK_Prodotto],[FK_Nota])                 " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNote = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NOTE_ID_Nota] ON [Note]( " +
            " [ID_Nota]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexNote_Descr = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_NOTE_DESCR_ID_Nota_FK_Lingua] ON [Note_Descr]( " +
            " [ID_Nota]  ASC, " +
            " [FK_Lingua]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdottiNote = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_PRODOTTI_NOTE_1] ON [Prodotti_Note]( " +
            " [FK_Prodotto]  ASC, " +
            " [FK_Nota]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Documento_Prefissi = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Tipo_Documento_Prefissi] ( " +
            " [FK_Negozio] INTEGER  NOT NULL,                        " +
            " [FK_Tipo_Documento] INTEGER  NULL,                     " +
            " [Prefisso] NVARCHAR(10)  NULL,                         " +
            " [Suffisso] NVARCHAR(10)  NULL,                         " +
            " [Stato_Record] NVARCHAR(1)  NULL,                      " +
            " PRIMARY KEY ([FK_Negozio],[FK_Tipo_Documento])         " +
            " )                                                      ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Documento_Prefissi_Casse = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Tipo_Documento_Prefissi_Casse] ( " +
            " [FK_Cassa] INTEGER  NULL,                                    " +
            " [FK_Tipo_Documento] INTEGER  NULL,                           " +
            " [Prefisso] NVARCHAR(10)  NULL,                               " +
            " [Suffisso] NVARCHAR(10)  NULL,                               " +
            " [Stato_Record] NVARCHAR(1)  NULL,                            " +
            " PRIMARY KEY ([FK_Cassa],[FK_Tipo_Documento])                 " +
            " )                                                            ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexValute_Descr_Con_Lingua = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [valute_descr_con_lingua] ON [Valute_Descr]( " +
            " [ID_Valuta]  ASC, " +
            " [FK_Lingua]  ASC " +
            " )";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateProdotti_Default = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Prodotti_Default] (	" +
            " [ID_Gruppo_Cassa] INTEGER  PRIMARY KEY NOT NULL,  " +
            " [Tab_Generali] BOOLEAN  NULL,                     " +
            " [Tab_Classificazioni] BOOLEAN  NULL,              " +
            " [Tab_Varianti] BOOLEAN  NULL,                     " +
            " [Tab_Taglie] BOOLEAN  NULL,                       " +
            " [Tab_Barcode] BOOLEAN  NULL,                      " +
            " [Grammatura_view] BOOLEAN  NULL,                  " +
            " [Grammatura_Default] FLOAT  NULL,                 " +
            " [FK_Variante_inBarcode_view] BOOLEAN  NULL,       " +
            " [FK_Variante_inBarcode_Default] INTEGER  NULL,    " +
            " [Flag_Gestione_Taglie_view] BOOLEAN  NULL,        " +
            " [FK_ScalaTaglie_Default] INTEGER  NULL,           " +
            " [FK_Sequenza] INTEGER  NULL,                      " +
            " [Flag_Magazzino_Default] BOOLEAN  NULL,           " +
            " [Flag_Matricola_view] BOOLEAN  NULL,              " +
            " [Flag_Matricola_Default] BOOLEAN  NULL,           " +
            " [Flag_Lotti_view] BOOLEAN  NULL,                  " +
            " [Flag_Lotti_Default] BOOLEAN  NULL,               " +
            " [Flag_PesoRichiesto_view] BOOLEAN  NULL,          " +
            " [Flag_PesoRichiesto_Default] BOOLEAN  NULL,       " +
            " [Flag_PrezzoRichiesto_view] BOOLEAN  NULL,        " +
            " [Flag_PrezzoRichiesto_Default] BOOLEAN  NULL,     " +
            " [Flag_Celiachia_view] BOOLEAN  NULL,              " +
            " [Flag_Celiachia_Default] BOOLEAN  NULL,           " +
            " [Flag_ProntoConsumo_view] BOOLEAN  NULL,          " +
            " [Flag_ProntoConsumo_Default] BOOLEAN  NULL,       " +
            " [Flag_Deperibile_view] BOOLEAN  NULL,             " +
            " [Flag_Deperibile_Default] BOOLEAN  NULL,          " +
            " [LimiteEta_view] BOOLEAN  NULL,                   " +
            " [LimiteEta_Default] FLOAT  NULL,                  " +
            " [DataCreazione] TEXT  NULL,                       " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,             " +
            " [DataAggiornamento] TEXT  NULL,                   " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,         " +
            " [Stato_Record] NVARCHAR(1)  NOT NULL,             " +
            " [DataEstrazione] TEXT  NULL,                      " +
            " [PacchettoEstrazione] NVARCHAR(25)  NULL          " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexProdotti_Default = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_Prodotti_Default_ID] ON [Prodotti_Default]( " +
            " [ID_Gruppo_Cassa]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateNegozi_Monitor = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Negozi_Monitor] ( " +
            " [ID_Negozio] INTEGER  NULL,                   " +
            " [ID_Monitor] INTEGER  NULL,                   " +
            " [Descrizione] NVARCHAR(100)  NULL,            " +
            " [DataCreazione] NVARCHAR(70)  NULL,           " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,         " +
            " [Stato_Record] NVARCHAR(1)  NULL,             " +
            " [DataEstrazione] NVARCHAR(70)  NULL,          " +
            " [PacchettoEstrazione] NVARCHAR(70)  NULL,     " +
            " PRIMARY KEY ([ID_Negozio],[ID_Monitor])       " +
            " )                                             ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateModelli_Stampanti = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Modelli_Stampanti] (		" +
            " [ID_Modello_Stampante] INTEGER  NOT NULL PRIMARY KEY, " +
            " [Cod_Modello_Stampante] NVARCHAR(10)  NULL,           " +
            " [DataCreazione] nvarchar(70)  NULL,                   " +
            " [UtenteCreazione] nvarchar(50)  NULL,                 " +
            " [DataAggiornamento] nvarchar(70)  NULL,               " +
            " [UtenteAggiornamento] nvarchar(50)  NULL,             " +
            " [Stato_Record] nvarcHAR(1)  NULL,                     " +
            " [DataEstrazione] nvarcHAR(70)  NULL,                  " +
            " [PacchettoEstrazione] NVARCHAR(25)  NULL              " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateAcquirer = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Acquirer] (			" +
            " [ID_Acquirer] NVARCHAR(10)  NOT NULL PRIMARY KEY, " +
            " [Acquirer] NVARCHAR(50)  NULL,                    " +
            " [FK_Pagamento] INTEGER  NULL,                     " +
            " [DataCreazione] NVARCHAR(50)  NULL,               " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,             " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,           " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,         " +
            " [Stato_Record] NVARCHAR(1)  NULL,                 " +
            " [DataEstrazione] NVARCHAR(50)  NULL,              " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL          " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexAcquirer = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_ACQUIRER_Acquirer] ON [Acquirer]( " +
            " [Acquirer]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClienti = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Clienti] (				" +
            " [ID_Cliente] INTEGER  NOT NULL PRIMARY KEY,           " +
            " [FK_Azienda] INTEGER  NOT NULL,                       " +
            " [Cod_Cliente] NVARCHAR(22)  NOT NULL,                 " +
            " [Cliente] NVARCHAR(10)  NULL,                         " +
            " [FK_Titolo] INTEGER  NULL,                            " +
            " [Cognome] NVARCHAR(50)  NULL,                         " +
            " [Nome] NVARCHAR(50)  NULL,                            " +
            " [Indirizzo] NVARCHAR(100)  NULL,                      " +
            " [ZipCap] NVARCHAR(15)  NULL,                          " +
            " [Localita] NVARCHAR(100)  NULL,                       " +
            " [FK_Provincia] INTEGER  NULL,                         " +
            " [FK_Nazione] INTEGER  NULL,                           " +
            " [FK_Stato] INTEGER  NOT NULL,                         " +
            " [FK_Nazioni_Stati_Regioni] INTEGER  NULL,             " +
            " [Telefono] nvarchar  NULL,                            " +
            " [Cellulare] nvarchar  NULL,                           " +
            " [AltroTelefono] nvarchar  NULL,                       " +
            " [eMail] nvarchar  NULL,                               " +
            " [DataNascita] INTEGER  NULL,                          " +
            " [Sesso] char  NULL,                                   " +
            " [LuogoNascita] nvarchar  NULL,                        " +
            " [Codice_Fiscale] nvarchar  NULL,                      " +
            " [Barcode] nvarchar  NULL,                             " +
            " [FK_TipoIva] INTEGER  NULL,                           " +
            " [FK_ClientiGruppo] INTEGER  NULL,                     " +
            " [FK_Tipo_Classificazione] INTEGER DEFAULT '2' NULL,   " +
            " [FK_Lingua] INTEGER  NULL,                            " +
            " [DataCreazione] NVARCHAR(50)  NULL,                   " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,                 " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,               " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,             " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL,          " +
            " [DataEstrazione] NVARCHAR(50)  NULL,                  " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL,             " +
            " [Trasferito] INTEGER DEFAULT '0' NULL " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClienti_Fatturazione = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Clienti_Fatturazione] (		" +
            " [ID_ClienteFatturazione] INTEGER  NOT NULL PRIMARY KEY,   " +
            " [FK_Cliente] INTEGER  NOT NULL,                           " +
            " [ID_Progressivo] INTEGER  NOT NULL,                       " +
            " [RagioneSociale] NVARCHAR(100)  NULL,                     " +
            " [Indirizzo] NVARCHAR(100)  NULL,                          " +
            " [ZipCap] NVARCHAR(15)  NULL,                              " +
            " [Localita] NVARCHAR(100)  NULL,                           " +
            " [FK_Provincia] INTEGER  NULL,                             " +
            " [FK_Nazione] INTEGER  NULL,                               " +
            " [FK_Stato] INTEGER  NULL,                                 " +
            " [FK_Nazioni_Stati_Regioni] INTEGER  NULL,                 " +
            " [Passaporto] NVARCHAR(50)  NULL,                          " +
            " [Telefono] NVARCHAR(50)  NULL,                            " +
            " [Cellulare] NVARCHAR(50)  NULL,                           " +
            " [AltroTelefono] NVARCHAR(50)  NULL,                       " +
            " [eMail] NVARCHAR(50)  NULL,                               " +
            " [Fax] NVARCHAR(50)  NULL,                                 " +
            " [Url] NVARCHAR(100)  NULL,                                " +
            " [FK_TipoIva] INTEGER  NULL,                               " +
            " [PartitaIva] NVARCHAR(50)  NULL,                          " +
            " [CodiceFiscale] NVARCHAR(50)  NULL,                       " +
            " [DataCreazione] NVARCHAR(50)  NULL,                       " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,                     " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,                   " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,                 " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL,              " +
            " [DataEstrazione] NVARCHAR(50)  NULL,                      " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL                  " +
            " )                                                         ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClienti_Spedizione = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Clienti_Spedizioni] (		" +
            " [ID_ClienteSpedizione] INTEGER  NOT NULL PRIMARY KEY, " +
            " [FK_Cliente] INTEGER  NOT NULL,                       " +
            " [ID_Progressivo] INTEGER  NOT NULL,                   " +
            " [RagioneSocialeSpedizione] NVARCHAR(100)  NULL,       " +
            " [Indirizzo] NVARCHAR(100)  NULL,                      " +
            " [ZipCap] NVARCHAR(15)  NULL,                          " +
            " [Localita] NVARCHAR(100)  NULL,                       " +
            " [FK_Provincia] INTEGER  NULL,                         " +
            " [FK_Nazione] INTEGER  NULL,                           " +
            " [FK_Stato] INTEGER  NULL,                             " +
            " [FK_Nazioni_Stati_Regioni] INTEGER  NULL,             " +
            " [Telefono] NVARCHAR(50)  NULL,                        " +
            " [Cellulare] NVARCHAR(50)  NULL,                       " +
            " [AltroTelefono] NVARCHAR(50)  NULL,                   " +
            " [eMail] NVARCHAR(50)  NULL,                           " +
            " [DataCreazione] NVARCHAR(50)  NULL,                   " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,                 " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,               " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,             " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL,          " +
            " [DataEstrazione] NVARCHAR(50)  NULL,                  " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL              " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexClienti1 = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_CLIENTI_ID] ON [Clienti]( " +
            " [ID_Cliente]  ASC                                         " +
            " )                                                         ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexClienti2 = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_CLIENTI_Indice] ON [Clienti]( " +
            " [Cognome]  ASC,			" +
            " [ZipCap]  ASC,            " +
            " [Localita]  ASC,          " +
            " [Indirizzo]  ASC,         " +
            " [Codice_Fiscale]  ASC     " +
            " )                         ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexClienti_Fatturazione = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_CLIENTI_FATTURAZIONE_FK_Cliente] ON [Clienti_Fatturazione]( " +
            " [FK_Cliente]  ASC " +
            " ) ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateIndexClienti_Spedizione = function () {
        var sqlQuery = " CREATE INDEX IF NOT EXISTS [IDX_CLIENTI_SPEDIZIONI_FK_Cliente] ON [Clienti_Spedizioni]( " +
            " [FK_Cliente]  ASC                                                                       " +
            " )                                                                                       ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateTipo_Documento_Numeratori = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Tipo_Documento_Numeratori] (						" +
            " [FK_Negozio] INTEGER  NOT NULL,                                               " +
            " [FK_Tipo_Documento] INTEGER  NULL,                                            " +
            " [Anno] INTEGER  NULL,                                                         " +
            " [Prefisso] NVARCHAR(10)  NULL,                                                " +
            " [Suffisso] NVARCHAR(10)  NULL,                                                " +
            " [UltimoNumeroUsato] INTEGER  NULL,                                            " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL,                                  " +
            " PRIMARY KEY ([FK_Negozio],[FK_Tipo_Documento],[Anno],[Prefisso],[Suffisso])   " +
            " )                                                                             ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClienti_Gruppi = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Clienti_Gruppi] (		" +
            " [ID_ClientiGruppo] INTEGER  NOT NULL PRIMARY KEY, " +
            " [DataCreazione] NVARCHAR(50)  NULL,               " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,             " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,           " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,         " +
            " [Stato_Record] NVARCHAR(1)  NULL,                 " +
            " [DataEstrazione] NVARCHAR(50)  NULL,              " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL          " +
            " )                                                 ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClienti_Gruppi_Descr = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Clienti_Gruppi_Descr] ( " +
            " [ID_ClientiGruppo] INTEGER  NOT NULL,               " +
            " [FK_Lingua] INTEGER  NULL,                          " +
            " [Descrizione] NVARCHAR(50)  NULL,                   " +
            " [DataCreazione] NVARCHAR(50)  NULL,                 " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,               " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,             " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,           " +
            " [Stato_Record] NVARCHAR(1)  NULL,                   " +
            " [DataEstrazione] NVARCHAR(50)  NULL,                " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL,           " +
            " PRIMARY KEY ([ID_ClientiGruppo],[FK_Lingua])        " +
            " )                                                   ";
        return sqlQuery;
    };
    scriptDbAnagrafica.getScriptCreateClienti_Listini = function () {
        var sqlQuery = " CREATE TABLE IF NOT EXISTS [Clienti_Listini] (		" +
            " [FK_ClientiGruppo] INTEGER  NOT NULL PRIMARY KEY,     " +
            " [FK_Azienda] INTEGER  NULL,                           " +
            " [Cod_GruppoClienti] NVARCHAR(6)  NULL,                " +
            " [FK_Listino] INTEGER  NULL,                           " +
            " [DataCreazione] NVARCHAR(50)  NULL,                   " +
            " [UtenteCreazione] NVARCHAR(50)  NULL,                 " +
            " [DataAggiornamento] NVARCHAR(50)  NULL,               " +
            " [UtenteAggiornamento] NVARCHAR(50)  NULL,             " +
            " [Stato_Record] NVARCHAR(1) DEFAULT '0' NULL,          " +
            " [DataEstrazione] NVARCHAR(50)  NULL,                  " +
            " [PacchettoEstrazione] NVARCHAR(50)  NULL              " +
            " )                                                     ";
        return sqlQuery;
    };
    scriptDbAnagrafica.createTables = function (db) {
        var this_ = this;

        db.serialize(function() {

            db.run(this_.getScriptCreateGruppi_Casse_Descr());
            db.run(this_.getScriptCreateTurni());
            db.run(this_.getScriptCreateNegozi_Gruppo_Descr());
            db.run(this_.getScriptCreateNegozi_Sale());
            db.run(this_.getScriptCreateListini_Negozi_Casse());
            db.run(this_.getScriptCreateNazioni_Stati_Regioni());
            db.run(this_.getScriptCreateNegozi_Planning());
            db.run(this_.getScriptCreateClassificazione_Dettaglio());
            db.run(this_.getScriptCreateValute());
            db.run(this_.getScriptCreatePagamenti_Scadenze());
            db.run(this_.getScriptCreateProdotti_Barcode());
            db.run(this_.getScriptCreateNegozi_Magazzini());
            db.run(this_.getScriptCreateClassificazione_Tipo_Descr());
            db.run(this_.getScriptCreateNegozi_Planning_Scontrini());
            db.run(this_.getScriptCreateProdotti_Pacchetti());
            db.run(this_.getScriptCreateProdotti_Classificazione());
            db.run(this_.getScriptCreateNegozi_Filtro());
            db.run(this_.getScriptCreateNegozi_Tavoli_Posizioni());
            db.run(this_.getScriptCreateTipi_Sconto());
            db.run(this_.getScriptCreateClassificazione());
            db.run(this_.getScriptCreateNegozio_Cassa_Parametri());
            db.run(this_.getScriptCreateTipo_Pacchetto_Descr());
            db.run(this_.getScriptCreateCausali_Differenza_Descr());
            db.run(this_.getScriptCreateStagioni_Descr());
            db.run(this_.getScriptCreateClassificazione_Descr());
            db.run(this_.getScriptCreateNazioni_Descr());
            db.run(this_.getScriptCreateProdotti_Associati());
            db.run(this_.getScriptCreateTipi_Barcode());
            db.run(this_.getScriptCreateNegozi_Classificazione());
            db.run(this_.getScriptCreateTipo_Documento_Descr());
            db.run(this_.getScriptCreateTurni_Descr());
            db.run(this_.getScriptCreateValute_Cambi());
            db.run(this_.getScriptCreateNegozi_Descr());
            db.run(this_.getScriptCreateClassificazione_Tipo());
            db.run(this_.getScriptCreateNegozi_Tavoli_Planning());
            db.run(this_.getScriptCreateProdotti_Descr());
            db.run(this_.getScriptCreateCausali_Magazzino_Descr());
            db.run(this_.getScriptCreateIva_Nazione_Stato())



            db.run(this_.getScriptCreateGruppi_Operatori());
            db.run(this_.getScriptCreateAzienda_Descr());
            db.run(this_.getScriptCreateTipi_Carta_Fidelizzazione());
            db.run(this_.getScriptCreateNegozi_Operatori());
            db.run(this_.getScriptCreateNegozio_Parametri());
            db.run(this_.getScriptCreateTipi_Carta_Fidelizzazione_Descr());
            db.run(this_.getScriptCreateComposizioni());
            db.run(this_.getScriptCreateMarca());
            db.run(this_.getScriptCreateLingue_Desc());
            db.run(this_.getScriptCreateListini_Dettaglio());
            db.run(this_.getScriptCreateTipo_Operazione_Descr());
            db.run(this_.getScriptCreateReparti_Descr());
            db.run(this_.getScriptCreateBottone_Descr());
            db.run(this_.getScriptCreatePagamenti_Valute());
            db.run(this_.getScriptCreateGruppo_Carta());
            db.run(this_.getScriptCreateParametri_Generali());
            db.run(this_.getScriptCreateGruppo_Carta_Descr());
            db.run(this_.getScriptCreateUtenti());
            db.run(this_.getScriptCreatePagamenti_Tipi());
            db.run(this_.getScriptCreateGruppi_Operatori_Descr());
            db.run(this_.getScriptCreateLingue());
            db.run(this_.getScriptCreateBottone_Albero());
            db.run(this_.getScriptCreateProdotti_Varianti());
            db.run(this_.getScriptCreateProdotti_Barcode_Matricole());
            db.run(this_.getScriptCreateStato_Record_Descr());
            db.run(this_.getScriptCreateNegozi_Turni());
            db.run(this_.getScriptCreateProdotti_Negozi());
            db.run(this_.getScriptCreateProdotti_Varianti_Taglie());
            db.run(this_.getScriptCreateTipo_Prodotto());
            db.run(this_.getScriptCreateProdotti());
            db.run(this_.getScriptCreatePagamenti_Descr());
            db.run(this_.getScriptCreateMotivazioni());
            db.run(this_.getScriptCreateNazioni_Stati_Descr());
            db.run(this_.getScriptCreateProdotti_Cassa());
            db.run(this_.getScriptCreateBottone());
            db.run(this_.getScriptCreateReparti());
            db.run(this_.getScriptCreateProdotti_Magazzino());
            db.run(this_.getScriptCreateNegozi_Sale_Turni());
            db.run(this_.getScriptCreatePagamenti_Tipi_Descr());
            db.run(this_.getScriptCreateTipi_Sconto_Descr());
            db.run(this_.getScriptCreateIva())
            db.run(this_.getScriptCreateNegozi_Gruppo());
            db.run(this_.getScriptCreateTaglie_Definizioni_Descr());
            db.run(this_.getScriptCreateStagioni());
            db.run(this_.getScriptCreateProdotti_Cassa_Lingua());
            db.run(this_.getScriptCreateNegozi_Casse());
            db.run(this_.getScriptCreateClasse_Articolo());
            db.run(this_.getScriptCreateListini_Descr());
            db.run(this_.getScriptCreateTipo_Vendita());
            db.run(this_.getScriptCreateCausali_Magazzino());
            db.run(this_.getScriptCreateProdotti_Varianti_Descr());
            db.run(this_.getScriptCreateValute_Descr());
            db.run(this_.getScriptCreateListini_Negozi());
            db.run(this_.getScriptCreateIva_Tipi_Nazione_Stato());
            db.run(this_.getScriptCreateCausali_Cassa());
            db.run(this_.getScriptCreateTaglie_Definizioni());
            db.run(this_.getScriptCreateIva_Tipi())
            db.run(this_.getScriptCreateProdotti_Fornitori());
            db.run(this_.getScriptCreateClassificazione_Dettaglio_Descr());
            db.run(this_.getScriptCreateMotivazioni_Descr());
            db.run(this_.getScriptCreateCausali_Differenza());
            db.run(this_.getScriptCreateTipo_Vendita_Descr());
            db.run(this_.getScriptCreateNazioni_Stati());
            db.run(this_.getScriptCreateUnita_Di_Misura());
            db.run(this_.getScriptCreateTipo_Prodotto_Descr());
            db.run(this_.getScriptCreateListini());
            db.run(this_.getScriptCreateTaglie_Dettaglio());
            db.run(this_.getScriptCreateTipo_Motivazione_Descr());
            db.run(this_.getScriptCreateProdotti_Pacchetti_Dettaglio());
            db.run(this_.getScriptCreateNazioni_Stati_Regioni_Province());
            db.run(this_.getScriptCreateCluster());
            db.run(this_.getScriptCreateAzienda());
            db.run(this_.getScriptCreateTipo_Pacchetto());
            db.run(this_.getScriptCreateTipo_Operazione());
            db.run(this_.getScriptCreateCluster_Descr());
            db.run(this_.getScriptCreateMenu());
            db.run(this_.getScriptCreateNazioni());
            db.run(this_.getScriptCreateTipo_Motivazione());
            db.run(this_.getScriptCreateStato_Record());
            db.run(this_.getScriptCreateNegozi_Abilitazioni_Programmi());
            db.run(this_.getScriptCreateTipo_Documento());
            db.run(this_.getScriptCreateMenu_Pagine());
            db.run(this_.getScriptCreatePagamenti());
            db.run(this_.getScriptCreateClasse_Articolo_Descr());
            db.run(this_.getScriptCreateGruppi_Cassa());
            db.run(this_.getScriptCreateCausali_Cassa_Descr());
            db.run(this_.getScriptCreateNegozi_Tavoli());
            db.run(this_.getScriptCreateNegozi_Interrogabili());
            db.run(this_.getScriptCreateNegozi());
            db.run(this_.getScriptCreateValute_Monete());
            db.run(this_.getScriptCreatePromo());
            db.run(this_.getScriptCreatePromo_Condizione());
            db.run(this_.getScriptCreatePromo_Descr());
            db.run(this_.getScriptCreatePromo_Elemento());
            db.run(this_.getScriptCreatePromo_Elemento_Descr());
            db.run(this_.getScriptCreatePromo_Messaggi());
            db.run(this_.getScriptCreatePromo_Messaggi_Descr());
            db.run(this_.getScriptCreatePromo_Negozio());
            db.run(this_.getScriptCreatePromo_Regole());
            db.run(this_.getScriptCreatePromo_Tipi());
            db.run(this_.getScriptCreatePromo_Tipi_Descr());
            db.run(this_.getScriptCreatePromo_Tipo_Regola());
            db.run(this_.getSCriptCreatePromo_Tipo_Regola_Descr());
            db.run(this_.getScriptCreatePromo_Tipo_Valore());
            db.run(this_.getScriptCreatePromo_Tipo_Valore_Descr());
            db.run(this_.getScriptCreatePromoCampagne_Promozionali());
            db.run(this_.getScriptCreatePromo_Regole_Dettaglio());
            db.run(this_.getScriptCreateCampagne_Promozionali_Descr());

            db.run(this_.getScriptCreateIndexIva_Nazione_Stato());
            db.run(this_.getScriptCreateIndexIva_Tipi_Nazione_Stato());
            db.run(this_.getScriptCreateIndexIva_Nazione_StatoInizioValidita());
            db.run(this_.getScriptCreateIndexIva_Nazione_Stato_FK_Nazione());
            db.run(this_.getScriptCreateIndexIva_Nazione_Stato_Fk_Stato());
            db.run(this_.getScriptCreateIndexIva_Nazione_Stato_DataInizioValiditaDesc());
            db.run(this_.getScriptCreateIndexIva_Nazione_Stato_Index1());
            db.run(this_.getScriptCreateIndexLingue());
            db.run(this_.getScriptCreateIndexLingue_Descr());
            db.run(this_.getScriptCreateIndexListini());
            db.run(this_.getScriptCreateIndexListini_Descr());
            db.run(this_.getScriptCreateIndexListini_Dettaglio());
            db.run(this_.getScriptCreateIndexListini_Negozi());
            db.run(this_.getScriptCreateIndexListini_Negozi_Casse());
            db.run(this_.getScriptCreateIndexNazioni());
            db.run(this_.getScriptCreateIndexNazioni_Descr());
            db.run(this_.getScriptCreateIndexNazioni_Stati());
            db.run(this_.getScriptCreateIndexNazioni_Stati_Descr());
            db.run(this_.getScriptCreateIndexNazioni_Stati_Regioni());
            db.run(this_.getScriptCreateIndexNazioni_Stati_Regioni_Province());
            db.run(this_.getScriptCreateIndexNegozi());
            db.run(this_.getScriptCreateIndexNegozi_Abilitazioni_Programmi());
            db.run(this_.getScriptCreateIndexNegozi_Casse());
            db.run(this_.getScriptCreateIndexNegozi_Descr());
            db.run(this_.getScriptCreateIndexNegozi_Filtro());
            db.run(this_.getScriptCreateIndexNegozi_Gruppo());
            db.run(this_.getScriptCreateIndexNegozi_Gruppo_Descr());
            db.run(this_.getScriptCreateIndexNegozi_Interrogabili());
            db.run(this_.getScriptCreateIndexNegozi_Magazzini());
            db.run(this_.getScriptCreateIndexNegozi_Operatori());
            db.run(this_.getScriptCreateIndexNegozi_Planning());
            db.run(this_.getScriptCreateIndexNegozi_Planning_Scontrini());
            db.run(this_.getScriptCreateIndexNegozi_Sale_Turni());
            db.run(this_.getScriptCreateIndexNegozi_Tavoli());
            db.run(this_.getScriptCreateIndexNegozi_Tavoli_Planning());
            db.run(this_.getScriptCreateIndexNegozi_Tavoli_Planning());
            db.run(this_.getScriptCreateIndexNegozi_Tavoli_Posizioni());
            db.run(this_.getScriptCreateIndexNegozi_Turni());
            db.run(this_.getScriptCreateIndexNegozio_Cassa_Parametri());
            db.run(this_.getScriptCreateIndexNegozio_Parametri());
            db.run(this_.getScriptCreateIndexNegozi_Sale());
            db.run(this_.getScriptCreateIndexPagamenti());
            db.run(this_.getScriptCreateIndexPagamenti_Descr());
            db.run(this_.getScriptCreateIndexPagamenti_Scadenze());
            db.run(this_.getScriptCreateIndexPagamenti_Tipi());
            db.run(this_.getScriptCreateIndexPagamenti_Tipi_Descr());
            db.run(this_.getScriptCreateIndexPagamenti_Valute());
            db.run(this_.getScriptCreateIndexProdotti_Associati());
            db.run(this_.getScriptCreateIndexProdotti_Classificazione());
            db.run(this_.getScriptCreateIndexProdotti_Fornitori());
            db.run(this_.getScriptCreateIndexProdotti_Magazzino());
            db.run(this_.getScriptCreateIndexProdotti_Negozi());
            db.run(this_.getScriptCreateIndexProdotti_Pacchetti());
            db.run(this_.getScriptCreateIndexProdotti_Pacchetti_Dettaglio());
            db.run(this_.getScriptCreateIndexTaglie_Definizioni());
            db.run(this_.getScriptCreateIndexTaglie_Definizioni_Descr());
            db.run(this_.getScriptCreateIndexTipo_Vendita());
            db.run(this_.getScriptCreateIndexTipo_Vendita_Descr());
            db.run(this_.getScriptCreateIndexTurni());
            db.run(this_.getScriptCreateIndexTurni_Descr());
            db.run(this_.getScriptCreateIndexUtenti());
            db.run(this_.getScriptCreateIndexValute());
            db.run(this_.getScriptCreateIndexValute_Cambi());
            db.run(this_.getScriptCreateIndexValute_Descr());
            db.run(this_.getScriptCreateIndexNegozi_Operatori1());
            db.run(this_.getScriptCreateIndexIva_Nazione_Stato_FK_IVA());
            db.run(this_.getScriptCreateOrdiniUscite());
            db.run(this_.getScriptCreateViewIva_Nazione_Stato_Correnti());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_FK_Prodotto_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_Id_Prodotto_Variante_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_FK_Prodotto_Variante_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_Stato_Record_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_FK_ScalaTaglie_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_FK_Sequenza_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_VARIANTI_TAGLIE_ID_Prodotto_Variante_Taglia_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_BARCODE_FK_Prodotto_Variante_Taglia_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_BARCODE_Barcode_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_ID_Prodotto_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_FK_Reparto_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_FK_Marca_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_FK_TipoProdotto_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_Prodotto_ASC());
            db.run(this_.getScriptCreateIndexIDX_REPARTI_ID_Reparto_ASC());
            db.run(this_.getScriptCreateIndexIDX_REPARTI_DESCR_ID_Reparto_ASC());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_DESCR_ID_Prodotto_ASC());
            db.run(this_.getScriptCreateIndexIDX_IVA_ID_Iva_ASC());
            db.run(this_.getScriptCreateIndexIDX_MARCA_ID_Marca_ASC());
            db.run(this_.getScriptCreateIndexIDX_TIPO_PRODOTTO_ID_TipoProdotto_ASC());
            db.run(this_.getScriptCreateIndexIDX_TIPO_PRODOTTO_DESCR_FK_TipoProdotto());
            db.run(this_.getScriptCreateIndexIDX_TIPO_PRODOTTO_DESCR_FK_Lingua_ASC());
            db.run(this_.getScriptCreateIndexIDX_TAGLIE_DETTAGLIO_FK_ScalaTaglie_ASC());
            db.run(this_.getScriptCreateIndexIDX_TAGLIE_DETTAGLIO_ID_Sequenza_ASC());
            db.run(this_.getScriptCreateIndexIDX_MENU_Valore_ASC());
            db.run(this_.getScriptCreateIndexIDX_MENU_FK_Pagina_ASC());
            db.run(this_.getScriptCreateIndexIDX_MENU_Valore_e_Pagina());
            db.run(this_.getScriptCreateIndexIDX_PRODOTTI_DESCR_ID_Prodotto_e_FK_Lingua());
            db.run(this_.getScriptCreateIndexIDX_REPARTI_DESCR_ID_Reparto_e_FK_Lingua());
            db.run(this_.getScriptCreateIndexIDX_TIPO_PRODOTTO_DESCR_FK_TipoProdotto_e_FK_Lingua());
            db.run(this_.getScriptCreateSintesiScontrino());
            db.run(this_.getScriptCreateIndexProdotti_Descr_Descrizione());
            db.run(this_.getScriptCreateIndexProdotti_Descr_DescrizioneBreve());
            db.run(this_.getScriptCreateIndexPromo_Regole_Dettaglio_FK_Regola());
            db.run(this_.getScriptCreateIndexPromo_Regole_FK_Promo());
            db.run(this_.getScriptCreateIndexPromo_Negozi_FK_Promo_e_FK_Negozio());
            db.run(this_.getScriptCreateIndexPromo_Descr_FK_Promo_e_FK_Lingua());
            db.run(this_.getScriptCreateIndexProdotti_Varianti_FK_Prodotto());
            db.run(this_.getScriptCreateIndexListini_Dettaglio_FK_Listino());
            db.run(this_.getScriptCreateIndexListini_Negozio_FK_Negozio());
            db.run(this_.getScriptCreazioneVistaVW_PROMO_CALCOLO());
            db.run(this_.getSCriptCreazioneVistaVW_PROMO_SCONTRINO());
            db.run(this_.getScriptCreateNegozi_Stampanti());
            db.run(this_.getScriptCreateIndexTabellaNegozi_Stampanti_1());
            db.run(this_.getScriptCreateNote());
            db.run(this_.getScriptCreateNote_Descr());
            db.run(this_.getScriptCreateProdotti_Note());
            db.run(this_.getScriptCreateIndexNote());
            db.run(this_.getScriptCreateIndexNote_Descr());
            db.run(this_.getScriptCreateIndexProdottiNote());
            db.run(this_.getScriptCreateTipo_Documento_Prefissi());
            db.run(this_.getScriptCreateTipo_Documento_Prefissi_Casse());
            db.run(this_.getScriptCreateIndexValute_Descr_Con_Lingua());
            db.run(this_.getScriptCreateProdotti_Default());
            db.run(this_.getScriptCreateIndexProdotti_Default());
            db.run(this_.getScriptCreateNegozi_Monitor());
            db.run(this_.getScriptCreateModelli_Stampanti());
            db.run(this_.getScriptCreateAcquirer());
            db.run(this_.getScriptCreateIndexAcquirer());
            db.run(this_.getScriptCreateClienti());
            db.run(this_.getScriptCreateClienti_Fatturazione());
            db.run(this_.getScriptCreateClienti_Spedizione());
            db.run(this_.getScriptCreateIndexClienti1());
            db.run(this_.getScriptCreateIndexClienti2());
            db.run(this_.getScriptCreateIndexClienti_Fatturazione());
            db.run(this_.getScriptCreateIndexClienti_Spedizione());
            db.run(this_.getScriptCreateTipo_Documento_Numeratori());
            db.run(this_.getScriptCreateClienti_Gruppi());
            db.run(this_.getScriptCreateClienti_Gruppi_Descr());
            db.run(this_.getScriptCreateClienti_Listini()); 

        });
        
    };
    return scriptDbAnagrafica;
}());