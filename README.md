# NibyBlog.pl — archiwum

**Niegdyś najlepszy blog o Linuksie i open source w Polsce. Dziś — kawał historii zachowany dzięki HTTrack.**

To miejsce z czasów, gdy nowa wersja Ubuntu była wydarzeniem, pulpit dopieszczało się godzinami, a dobrze skonfigurowane Conky potrafiło dać więcej satysfakcji niż nowy komputer. Były tu poradniki, rozwiązania problemów, przeglądy aplikacji i wiadomości ze świata wolnego oprogramowania — pisane z ciekawości i chęci dzielenia się wiedzą.

To repozytorium zachowuje kopię NibyBlog.pl tak, aby wpisy, obrazki i wspomnienia nie zniknęły razem z kolejną zmianą hostingu. Można wrócić do dawnych artykułów, powspominać ówczesnego Linuksa albo sprawdzić, czym żyła wtedy społeczność.

## Co znajduje się w repozytorium

To **statyczna kopia strony wykonana programem HTTrack**, a nie działająca instalacja WordPressa.

- Zachowano zapisane strony HTML, obrazy, style, skrypty i lokalne załączniki.
- Oryginalna struktura katalogów i odnośników HTTrack pozostała zachowana.
- Usunięto dawny kod PHP WordPressa, konfigurację, odpowiedzi API, cookies, logi i cache narzędzia kopiującego.
- Archiwum nie potrzebuje PHP ani bazy danych.

Zapisane komentarze są częścią kopii. Dodawanie komentarzy, wyszukiwarka i pozostałe funkcje dawnego backendu nie działają. Niektóre materiały zewnętrzne mogły nie zostać zapisane przez HTTrack; repo nie odtwarza brakujących stron ani usług.

## Jak otworzyć archiwum

Pliki strony znajdują się w `public_html/`. Aby uruchomić lokalny podgląd, wykonaj w katalogu repozytorium:

```sh
python3 -m http.server 8080 --directory public_html
```

Następnie otwórz `http://localhost:8080/` w przeglądarce. Na hostingu ustaw `public_html/` jako katalog główny witryny albo prześlij jego zawartość do katalogu publicznego.

## Archiwum, nie aktualny poradnik

Wpisy pokazują stan wiedzy, oprogramowania i internetu z czasu ich publikacji. Polecenia, repozytoria pakietów i instrukcje mogą dziś wymagać zmian. Zachowujemy je jako część historii, razem z klimatem tamtych lat.

Miłego przekopywania starego internetu. Pingwin pamięta. 🐧
