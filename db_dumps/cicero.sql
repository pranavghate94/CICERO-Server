--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.5
-- Dumped by pg_dump version 9.6.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Audios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Audios" (
    id integer NOT NULL,
    audio_file_id character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Audios" OWNER TO postgres;

--
-- Name: Audios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Audios_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Audios_id_seq" OWNER TO postgres;

--
-- Name: Audios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Audios_id_seq" OWNED BY "Audios".id;


--
-- Name: MBUOutputs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "MBUOutputs" (
    id integer NOT NULL,
    mbu_output_id character varying(255) NOT NULL,
    pml_file_ids character varying(255)[],
    session_id character varying(255),
    smiling_score integer,
    frowning_score integer,
    attention_score integer,
    overall_score double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "MBUOutputs" OWNER TO postgres;

--
-- Name: MBUOutputs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "MBUOutputs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "MBUOutputs_id_seq" OWNER TO postgres;

--
-- Name: MBUOutputs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "MBUOutputs_id_seq" OWNED BY "MBUOutputs".id;


--
-- Name: PMLs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "PMLs" (
    id integer NOT NULL,
    pml_file_id character varying(255) NOT NULL,
    source_name character varying(255),
    age integer,
    gender character varying(255),
    smile_frequency double precision,
    attention_frequency double precision,
    head_position double precision[],
    head_rotation double precision[],
    gaze_direction character varying(255)[],
    action_unit_evidence double precision[],
    action_unit_activation boolean[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "PMLs" OWNER TO postgres;

--
-- Name: PMLs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "PMLs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "PMLs_id_seq" OWNER TO postgres;

--
-- Name: PMLs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "PMLs_id_seq" OWNED BY "PMLs".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE "SequelizeMeta" OWNER TO postgres;

--
-- Name: SessionPMLs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "SessionPMLs" (
    id integer NOT NULL,
    session_id character varying(255) NOT NULL,
    pml_file_ids character varying(255)[],
    pml_file_interval integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "SessionPMLs" OWNER TO postgres;

--
-- Name: SessionPMLs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "SessionPMLs_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "SessionPMLs_id_seq" OWNER TO postgres;

--
-- Name: SessionPMLs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "SessionPMLs_id_seq" OWNED BY "SessionPMLs".id;


--
-- Name: Sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Sessions" (
    id integer NOT NULL,
    session_id character varying(255) NOT NULL,
    user_id character varying(255) NOT NULL,
    start_time timestamp with time zone,
    end_time timestamp with time zone,
    duration integer,
    audio_file_id character varying(255) NOT NULL,
    video_file_id character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "UserUserId" boolean
);


ALTER TABLE "Sessions" OWNER TO postgres;

--
-- Name: Sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Sessions_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Sessions_id_seq" OWNER TO postgres;

--
-- Name: Sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Sessions_id_seq" OWNED BY "Sessions".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    user_id character varying(255) NOT NULL,
    number_of_sessions integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- Name: Videos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "Videos" (
    id integer NOT NULL,
    video_file_id character varying(255) NOT NULL,
    video_file_name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Videos" OWNER TO postgres;

--
-- Name: Videos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "Videos_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Videos_id_seq" OWNER TO postgres;

--
-- Name: Videos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "Videos_id_seq" OWNED BY "Videos".id;


--
-- Name: Audios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Audios" ALTER COLUMN id SET DEFAULT nextval('"Audios_id_seq"'::regclass);


--
-- Name: MBUOutputs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "MBUOutputs" ALTER COLUMN id SET DEFAULT nextval('"MBUOutputs_id_seq"'::regclass);


--
-- Name: PMLs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "PMLs" ALTER COLUMN id SET DEFAULT nextval('"PMLs_id_seq"'::regclass);


--
-- Name: SessionPMLs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "SessionPMLs" ALTER COLUMN id SET DEFAULT nextval('"SessionPMLs_id_seq"'::regclass);


--
-- Name: Sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Sessions" ALTER COLUMN id SET DEFAULT nextval('"Sessions_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- Name: Videos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Videos" ALTER COLUMN id SET DEFAULT nextval('"Videos_id_seq"'::regclass);


--
-- Data for Name: Audios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Audios" (id, audio_file_id, "createdAt", "updatedAt") FROM stdin;
1	BKCAUD3034	2017-10-02 11:43:18.303-07	2017-10-02 11:43:18.303-07
2	BKCAUD3035	2017-10-04 13:59:46.514-07	2017-10-04 13:59:46.514-07
\.


--
-- Name: Audios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Audios_id_seq"', 2, true);


--
-- Data for Name: MBUOutputs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "MBUOutputs" (id, mbu_output_id, pml_file_ids, session_id, smiling_score, frowning_score, attention_score, overall_score, "createdAt", "updatedAt") FROM stdin;
1	BKCMBU101	{"pml_1_5-34-10 PM","pml_1_5-34-11 PM","pml_1_5-34-12 PM","pml_1_5-34-13 PM","pml_1_5-34-14 PM"}	BKCSESS101	23	10	11	32.329999999999998	2017-10-02 12:15:51.949-07	2017-10-02 12:15:51.949-07
2	BKCMBU102	{"pml_1_5-34-10 PM","pml_1_5-34-11 PM","pml_1_5-34-12 PM","pml_1_5-34-13 PM","pml_1_5-34-14 PM"}	BKCSESS102	23	10	11	32.329999999999998	2017-10-04 14:00:54.33-07	2017-10-04 14:00:54.33-07
\.


--
-- Name: MBUOutputs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"MBUOutputs_id_seq"', 2, true);


--
-- Data for Name: PMLs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "PMLs" (id, pml_file_id, source_name, age, gender, smile_frequency, attention_frequency, head_position, head_rotation, gaze_direction, action_unit_evidence, action_unit_activation, "createdAt", "updatedAt") FROM stdin;
2	pml_1_5-34-10 PM	vhmsgr	20	M	0	0	{533.69100000000003,88.927999999999997,83.483000000000004}	{-0.056500000000000002,0.34739999999999999,0.15110000000000001}	{left,central,away}	{0.67400000000000004,0.79300000000000004,0.157,0.58799999999999997,0.185,0.48699999999999999,0.29099999999999998,0.51700000000000002,0.127,0.377,0.10299999999999999,0.61599999999999999,0.505,-0.02,-0.042999999999999997,-0.29099999999999998}	{f,t,f,t,f,f,t,f,f,t,t,t,f,f,t,f}	2017-10-02 11:59:47.657-07	2017-10-02 11:59:47.657-07
3	pml_1_5-34-11 PM	vhmsgr	20	M	0	0	{351.12,89.128,90.400000000000006}	{1.0565,-0.34739999999999999,0.57099999999999995}	{central,central,away}	{0.621,0.39300000000000002,0.32569999999999999,0.52800000000000002,0.115,0.48099999999999998,-0.69099999999999995,0.11700000000000001,0.107,0.17699999999999999,0.16300000000000001,0.11600000000000001,0.67500000000000004,-0.022200000000000001,0.042999999999999997,0.29099999999999998}	{f,t,f,t,f,f,t,f,f,f,f,t,f,t,t,f}	2017-10-02 12:01:26.202-07	2017-10-02 12:01:26.202-07
4	pml_1_5-34-12 PM	vhmsgr	20	M	1	3	{355.12,91.328000000000003,88.400000000000006}	{-1.0565,0.34739999999999999,-0.57099999999999995}	{central,central,away}	{0.32100000000000001,0.23100000000000001,0.65400000000000003,0.83999999999999997,0.11,0.81000000000000005,-0.69099999999999995,-0.11700000000000001,-0.107,0.16500000000000001,0.68000000000000005,0.54000000000000004,0.75,0.022200000000000001,-0.042999999999999997,-0.29099999999999998}	{f,t,f,t,t,t,t,f,f,f,f,f,f,f,f,t}	2017-10-02 12:04:22.917-07	2017-10-02 12:04:22.917-07
5	pml_1_5-34-14 PM	vhmsgr	20	M	0	2	{311.12,98.328000000000003,81.400000000000006}	{1.0565,0.31140000000000001,-0.97099999999999997}	{central,left,away}	{0.32100000000000001,0.23100000000000001,0.62139999999999995,0.34000000000000002,0.221,0.41210000000000002,0.69099999999999995,-0.11700000000000001,-0.107,-0.16500000000000001,-0.68000000000000005,-0.54000000000000004,0.75,0.022200000000000001,-0.042999999999999997,-0.29099999999999998}	{t,t,t,t,t,t,f,f,f,f,f,f,t,t,t}	2017-10-02 12:07:01.706-07	2017-10-02 12:07:01.706-07
6	pml_1_5-34-15 PM	vhmsgr	20	M	0	2	{11.119999999999999,8.3279999999999994,181.40000000000001}	{1.6499999999999999,0.14000000000000001,-0.70999999999999996}	{central,left,away}	{0.311,0.34100000000000003,0.63339999999999996,0.34000000000000002,0.121,0.43509999999999999,-0.69099999999999995,0.11700000000000001,0.107,-0.16500000000000001,-0.68000000000000005,-0.54000000000000004,0.75,0.32200000000000001,-0.042999999999999997,-0.29099999999999998}	{t,t,f,f,f,t,f,f,f,f,f,f,t,t,t}	2017-10-02 12:07:45.478-07	2017-10-02 12:07:45.478-07
\.


--
-- Name: PMLs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"PMLs_id_seq"', 6, true);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "SequelizeMeta" (name) FROM stdin;
20170927221355-create-audio.js
20170927221642-create-video.js
20170927222106-create-users.js
20170927222550-create-sessions.js
20170927223607-create-session-pml.js
20170927224553-create-pml.js
20170927225455-create-mbu-output.js
\.


--
-- Data for Name: SessionPMLs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "SessionPMLs" (id, session_id, pml_file_ids, pml_file_interval, "createdAt", "updatedAt") FROM stdin;
1	BKCSESS101	{"pml_1_5-34-10 PM","pml_1_5-34-11 PM","pml_1_5-34-12 PM","pml_1_5-34-13 PM","pml_1_5-34-14 PM"}	1	2017-10-02 12:14:19.038-07	2017-10-02 12:14:19.038-07
2	BKCSESS102	{"pml_1_5-34-10 PM","pml_1_5-34-11 PM","pml_1_5-34-12 PM","pml_1_5-34-13 PM","pml_1_5-34-14 PM"}	1	2017-10-04 14:00:40.333-07	2017-10-04 14:00:40.333-07
\.


--
-- Name: SessionPMLs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"SessionPMLs_id_seq"', 2, true);


--
-- Data for Name: Sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Sessions" (id, session_id, user_id, start_time, end_time, duration, audio_file_id, video_file_id, "createdAt", "updatedAt", "UserUserId") FROM stdin;
1	BKCSESS101	BKC40506	2017-10-02 11:46:58.042-07	2017-10-02 11:46:58.042-07	30	BKCAUD3034	BKCVID3034	2017-10-02 11:46:58.045-07	2017-10-02 11:46:58.045-07	\N
2	BKCSESS102	BKC40506	2017-10-04 14:00:15.108-07	2017-10-04 14:00:15.108-07	10	BKCAUD3035	BKCVID3035	2017-10-04 14:00:15.109-07	2017-10-04 14:00:15.109-07	\N
\.


--
-- Name: Sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Sessions_id_seq"', 2, true);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Users" (id, user_id, number_of_sessions, "createdAt", "updatedAt") FROM stdin;
1	BKC40506	0	2017-10-02 11:43:04.114-07	2017-10-02 11:43:04.114-07
\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Users_id_seq"', 1, true);


--
-- Data for Name: Videos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "Videos" (id, video_file_id, video_file_name, "createdAt", "updatedAt") FROM stdin;
1	BKCVID3034	colour_8.22.2017_17.34	2017-10-02 11:43:12.458-07	2017-10-02 11:43:12.458-07
2	BKCVID3035	colour_8.23.2017_17.34	2017-10-04 13:58:00.252-07	2017-10-04 13:58:00.252-07
\.


--
-- Name: Videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"Videos_id_seq"', 2, true);


--
-- Name: Audios Audios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Audios"
    ADD CONSTRAINT "Audios_pkey" PRIMARY KEY (audio_file_id);


--
-- Name: MBUOutputs MBUOutputs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "MBUOutputs"
    ADD CONSTRAINT "MBUOutputs_pkey" PRIMARY KEY (mbu_output_id);


--
-- Name: PMLs PMLs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "PMLs"
    ADD CONSTRAINT "PMLs_pkey" PRIMARY KEY (pml_file_id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Sessions Sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Sessions"
    ADD CONSTRAINT "Sessions_pkey" PRIMARY KEY (session_id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (user_id);


--
-- Name: Videos Videos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Videos"
    ADD CONSTRAINT "Videos_pkey" PRIMARY KEY (video_file_id);


--
-- Name: Videos Videos_video_file_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Videos"
    ADD CONSTRAINT "Videos_video_file_name_key" UNIQUE (video_file_name);


--
-- Name: SessionPMLs SessionPMLs_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "SessionPMLs"
    ADD CONSTRAINT "SessionPMLs_session_id_fkey" FOREIGN KEY (session_id) REFERENCES "Sessions"(session_id) ON DELETE CASCADE;


--
-- Name: Sessions Sessions_audio_file_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Sessions"
    ADD CONSTRAINT "Sessions_audio_file_id_fkey" FOREIGN KEY (audio_file_id) REFERENCES "Audios"(audio_file_id);


--
-- Name: Sessions Sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Sessions"
    ADD CONSTRAINT "Sessions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "Users"(user_id);


--
-- Name: Sessions Sessions_video_file_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "Sessions"
    ADD CONSTRAINT "Sessions_video_file_id_fkey" FOREIGN KEY (video_file_id) REFERENCES "Videos"(video_file_id);


--
-- PostgreSQL database dump complete
--

