# Instalación del Proyecto

Prueba técnica para la empresa Gastro Cloud.

## 1. Instalar las dependencias

Abre un terminal y ejecuta uno de los siguientes comandos

```
npm install         |       yarn
```

## 2. Instalar expo en el equipo

A través de un terminal, instalas expo en tu equipo y lo inicias en el proyecto.

```
npm install --global expo-cli

expo init mi-proyecto
```

## 3. Abrir expo de un Proyecto e iniciar el proyecto

```
expo start  (Abre expo en navegador web)
```

- Tienes varias opciones para iniciar el proyecto:

  - **Run in web browser** -> Inicia el proyecto a través del navegador web.
  - **Run in Android device/emulator** -> Inicia el proyecto desde un emlador de android como puede ser Android Studio. También se puede iniciar el abroyecto al abrir expo con el siguiente comando:

  ```
  expo start --android
  ```

  - **Run in IOS simulator** -> Inicia el proyecto en un emulador de IOS.

## 4. Abrir consola de Redux

- Instalar la extensión de Chrome **ReduxDevTools**.
- Añidir la siguiente línea si tu store de Redux es sencilla.

```javascript
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

- Añadir la siguiente línea si tu store de Redux es avanzada.

```javascript
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);
```

- Para abrir la consola de Redux puedes hacerlo de varias formas.
  - Anclando la extensión en el panel de extensiones de Chrome y clicando sobre la extensión de **ReduxDevTools**.
  - Abriendo el DevTools del navegador con _F12_ o _clic izquierdo_ del ratón y seleccionas la pestaña de **Redux**.
