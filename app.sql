SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.applications (
	"id" serial NOT NULL,
	"company_name" TEXT NOT NULL,
	"job_title" TEXT NOT NULL,
	"salary" int NOT NULL,
	"description" TEXT NOT NULL,
	"post_source" TEXT NOT NULL,
	"status_name" TEXT NOT NULL,
	"notes" TEXT NOT NULL,
	"status_date" DATE NOT NULL,
	"favorite" BOOLEAN NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "applications_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.user (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE public.applications ADD CONSTRAINT "applications_fk0" FOREIGN KEY ("user_id") REFERENCES public.user("id");

INSERT INTO public.applications VALUES (1, 'google', 'swe',  2324, 'google job', 'friend', 'pending', 'noted.', '2021-02-28', true, 1 );
INSERT INTO public.applications VALUES (2, 'apple', 'swe',  10000, 'aaple job', 'friend', 'pending', 'noted.', '2021-04-28', true, 1 );

INSERT INTO public.user VALUES (1, 'spencer', 'szuay',  123);

