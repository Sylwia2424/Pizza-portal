# Dashboard

- `/`
  - statystyki dzisiejszych zamówień ( zdalne i lokalne)
  - listę rezerwacji i ewentów zaplanowanych na dziś

# Logowanie

- `/login`
  - pola na login i hasło
  - do zalogowania (link do deshboardu)

# Widok dostepności stolików

- `/tables`
  - wybór daty i godziny
  - tabele z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 min
    - ma przypominać widok tygodnia w kalendarzu Googla gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisywanie zmian
- `/tables/booking/new`
  - analogicznie do powyższego, bez początkowych informacji
- `/tables/events/:id`
   - analogicznie do powyższego, dla eventów
- `/tables/events/new`
   - analogicznie do powyższego, dla eventów, bez początkowych informacji


# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostepne akcje dla dostepnego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwotę zamówienia

- `/waiter/order/:id`
  - jak powyższa
# Widok kuchni

- `/kitchen`
  - wyswietla listę zamówień w kolejności ich złożenia
  -lista musi zawierać:
    -  numer stolika (lub zamówienia zdalnego) 
    - pełne informacje dot. zamówionych dań
  - na liscie musi byś możliwość oznaczenia zamówienia jako zrealizowane