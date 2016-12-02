# Взаимодействие блоков

В рамках БЭМ-методологии блоки следует разрабатывать так, чтобы свести к минимуму зависимость состояний одних блоков от других. Однако на практике идеал полной независимости блоков недостижим.

Взаимодействие блоков может быть реализовано:

* с помощью подписки на [БЭМ-события](i-bem-js-events.ru.md#БЭМ-события) других экземпляров
блоков или подписки на [делегированные БЭМ-события](i-bem-js-events.ru.md#Делегирование-БЭМ-событий);
* с помощью непосредственного вызова методов других экземпляров
блоков или статических методов класса другого блока;
* через проверку состояний одного блока из другого;
* через *каналы событий* (например с помощью элемента [channels](https://ru.bem.info/libs/bem-core/current/desktop/events/#Элемент-channels-блока-events) блока [`events`](https://ru.bem.info/libs/bem-core/current/desktop/events/)).

**Важно:** Не используйте [DOM-события](i-bem-js-events.ru.md#dom-события) для
организации взаимодействия между блоками. DOM-события предназначены
только для реализации внутренних процедур блока.

Для реализации взаимодействия блоков `i-bem.js` предоставляет API:

* [Поиск экземпляров блоков в DOM-дереве](i-bem-js-dom.ru.md#Поиск-экземпляров-блоков-в-dom-дереве)
* [Доступ к экземплярам блоков без DOM-представления](i-bem-js-html-binding.ru.md#Доступ-к-экземплярам-блоков-без-dom-представления)
* [Доступ к классам блоков](#Доступ-к-классам-блоков)

## Доступ к классам блоков

JS-компоненты, соответствующие классам блоков, можно получить через [модульную систему](https://github.com/ymaps/modules/blob/master/README.ru.md). Это же верно и для блоков [без DOM-представления](i-bem-js-html-binding.ru.md#Блоки-без-dom-представления).

Доступ к классам блоков необходим для:

* [Делегирования БЭМ-событий](i-bem-js-events.ru.md#Делегирование-БЭМ-событий).
* [Доопределения](i-bem-js-decl.ru.md#Доопределение-блока) декларации блока.
* Вызова статических методов класса.

**Пример:** Вызов статического метода `close` блока `popup` позволяет закрыть все попапы на странице:

```js
modules.define('switch', ['i-bem__dom', 'popup'], function(provide, BEMDOM, Popup) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod : {
                'popup' : {
                    'disabled' : function() {
                        Popup.close();
                    }
                }
            }
        }
    ));

});
```