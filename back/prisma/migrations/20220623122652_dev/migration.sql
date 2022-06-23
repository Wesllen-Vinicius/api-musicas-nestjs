-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER,
    "date_created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modified" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "artistas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "f_name" TEXT NOT NULL,
    "l_name" TEXT NOT NULL,
    "date_created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modified" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "musicas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "date_created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modified" DATETIME NOT NULL,
    "artistaId" INTEGER,
    "albumId" INTEGER,
    CONSTRAINT "musicas_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "artistas" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "musicas_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "albums" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "albums" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_album" TEXT NOT NULL,
    "autor" TEXT,
    "date_created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modified" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "artista_musica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "artistaId" INTEGER NOT NULL,
    "musicaId" INTEGER NOT NULL,
    CONSTRAINT "artista_musica_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "artistas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "artista_musica_musicaId_fkey" FOREIGN KEY ("musicaId") REFERENCES "musicas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlbumToArtista" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlbumToArtista_A_fkey" FOREIGN KEY ("A") REFERENCES "albums" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlbumToArtista_B_fkey" FOREIGN KEY ("B") REFERENCES "artistas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToArtista_AB_unique" ON "_AlbumToArtista"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToArtista_B_index" ON "_AlbumToArtista"("B");
