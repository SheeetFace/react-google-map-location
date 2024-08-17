# 🌍 react-google-map-location

![YouTube Grid Extension](https://img.shields.io/github/v/release/SheeetFace/react-google-map-location?style=for-the-badge)
![License](https://img.shields.io/github/license/SheeetFace/react-google-map-location?style=for-the-badge)

A lightweight and fully responsive React component for embedding Google Maps based on a location string or coordinates. No API key required!

---

## 🚀 Features

- 🏋️‍♀️ **Lightweight**: No need to worry about large bundle sizes.
- 🔑 **No API Key Required**: Easily embed maps without any additional setup.
- 📱 **Responsive Design**: Perfectly adapts to both mobile and desktop layouts.
- 🌐 **Supports Address and Coordinates**: Pass either a location string or latitude/longitude values.
- ⚙️ **Custom Error Handling**: Easily provide custom error components.

---
![Examle](http://res.cloudinary.com/dof771xd5/image/upload/v1723897890/yydmtw33ey3ybs9y4ugx.gif)

## 📦 Installation

```bash
npm install react-google-map-location
```

## 📖 Usage

```tsx
import React from 'react';
import MapLocation from 'react-google-map-location';

const App = () => {
  return (
      <MapLocation
        location="Sveavägen 53, 4 tr, 101 24 Stockholm, Sweden" 
        zoom={12} 
        height='333px'
        mapType="satellite" 
        loading="lazy" 
        style={{ borderRadius: '8px' }} 
      />

      <MapLocation
        location={{ lat: 59.340140, lng: 18.058610 }} 
        height='500px'
        zoom={14}
      />

      <MapLocation
        height='500px'
      />
  )
}

export default App;
```

## 🎛️ Props

| Prop            | Type                                    | Default      | Description                                                                            |
| --------------- | --------------------------------------- | ------------ | -------------------------------------------------------------------------------------- |
| `location`      | `string \| { lat: number; lng: number }`| `undefined`  | The location as a string (e.g., "Sveavägen 53, 4 tr, 101 24 Stockholm, Sweden") or a coordinates object `{ lat, lng }`. When not provided, the map shows a default global view. |
| `width`         | `string \| number`                      | `'100%'`     | The width of the map container.                                                        |
| `height`        | `string \| number`                      | `'100%'`     | The height of the map container.                                                       |
| `zoom`          | `number`                                | `16`         | The zoom level of the map.                                                             |
| `mapType`       | `'roadmap' \| 'satellite'`              | `'roadmap'`  | The map type: either `roadmap` or `satellite`.                                         |
| `loading`       | `'lazy' \| 'eager'`                     | `'lazy'`     | Controls the loading behavior of the iframe: `lazy` (on scroll) or `eager`.            |
| `style`         | `React.CSSProperties`                   | `{}`         | Additional inline styles for the iframe.                                               |

---

## 🛡️ Advantages

- 🏋️‍♀️ **Lightweight**: This package is designed to have a minimal footprint, ensuring a fast loading time and efficient performance.
- 🔑 **No API Key Required**: Easily embed Google Maps without the need for an API key, making integration straightforward and hassle-free.
- 📱 **Responsive Design**: The map component automatically adapts to various screen sizes, ensuring a seamless experience on both mobile and desktop devices.
- 🌐 **Supports Address and Coordinates**: You can provide either a location string (e.g., "Sveavägen 53, 4 tr, 101 24 Stockholm, Sweden") or specific latitude and longitude coordinates to display the map.
- ⚙️ **Custom Error Handling**: You can specify a custom error component to be displayed if the location provided is invalid, or fall back to a default message.

---

## ⭐ Support

If you find this extension useful, consider giving it a star on GitHub!  
[⭐ **Star on GitHub**](https://github.com/SheeetFace/react-google-map-location)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.# react-google-map-location
