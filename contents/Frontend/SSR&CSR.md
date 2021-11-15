---
date: '2021-09-15'
title: 'SSR과 CSR 이해하기'
tags: ['SSR/CSR']
summary: 'Server-Side Rendering과 Client-Side Rendering의 개념 이해하기'
thumbnail: '../thumbnails/thumbnail_ssr&csr.jpg'
---



HTML, CSS, JS 등의 코드와 이미지를 가지고 웹 브라우저가 웹페이지를 화면에 그려주는 것을 **렌더링**이라고 한다.

렌더링 하는 방식에 따라 대표적으로 **SSR**(Server-Side Rendering)과 **CSR**(Client-Side Rendering)으로 나누곤 하는데, 이 두가지 방법의 동작 방식과 장단점을 비교해보고 내가 만들 웹사이트에는 무엇이 더 좋을지 생각해보자.



## SSR (Server-Side Rendering)

SSR은 웹페이지에 대한 요청이 들어오면, **서버에서 데이터까지 모두 포함한 HTML 파일을 생성**하고 브라우저에서 이 파일을 이용해 페이지를 렌더링하는 방식을 의미한다.

### 동작 방식

![002](https://user-images.githubusercontent.com/70627979/133464647-e0a7e5b3-392f-4cf8-9c85-a7d15ff61502.jpg)

전통적인 방식의 SSR의 페이지 생성  과정을 살펴보면,  `1. 브라우저에서 프론트 서버로 페이지 요청을 보내면` `2. 프론트 서버는 백엔드 서버로 해당 페이지에 필요한 데이터를 요청하고` `3. 백엔드 서버는 데이터베이스에 실제 데이터를 요청한다`. `4. 역순으로 요청에 대한 응답을 받은 후, 프론트 서버에서 모든 정보를 종합해 페이지를 생성하여 브라우저에 제공한다.`

### 특징

- SEO에 좋다.
- 페이지 이동 및 요청 생성 시, 전체적인 웹사이트를 다시 서버에서 받아오기 때문에 전체 리렌더링되기 때문에 서버 과부하에 걸리기 쉽다.
- 동적인 부분을 위한 일부 JS 파일을 제외하면 많은 JS를 클라이언트에 보내지 않아도 되므로  TTI(Time to Interactive)를 빠르게 수행할 수 있다.



## CSR (Client-Side Rendering)

CSR은 SPA(Single Page Application)에서 사용되는 방법으로, **클라이언트(브라우저) 측에서 JS를 이용해 페이지를 직접 렌더링**하는 것을 의미한다. 

### 동작 방식

![003](https://user-images.githubusercontent.com/70627979/133465145-161497a9-3095-44df-87bc-c0a724396595.jpg)

CSR의 페이지 생성 과정을 살펴보면,

1. 브라우저에서 프론트 서버로 페이지  요청을 보내면

2. 프론트 서버가 데이터를 제외한 JS, HTML, CSS와 img 등을 브라우저에 제공한다. 

3. 다시 브라우저에서 백엔드 서버로 페이지에 필요한 데이터를 요청하면 

4. 백엔드 서버는 데이터베이스에서 데이터를 가져와 제공해준다.



### 특징

- 모든 로직, 데이터 요청, 템플릿 및 라우팅이 클라이언트에서 처리된다.
- 초기에 많은 JS를 받아오기 때문에 코드 스플리팅이 필요하다.
- 초기 HTML이 비어있어 빈 화면이 보이고, SEO에 취약하다.
- 초기 진입 속도가 느리지만, 그 이후에는 필요한 데이터만 업데이트하면 되므로 서버에 부담을 덜 준다.
- 많은 JS 코드로 인해 TTI(Time to Interactive)는 느리지만, 빠른 TTV(Time to View)로 로딩 화면을 제공할 수 있다. 



## 무엇을 사용할까?

SSR과 CSR의 장단점을 파악하고, 코드 스플리팅과 pre-render 등과 같은 해결책을 고려해 서비스에 최적화된 기술을 선택하여 프로젝트(서비스)를 진행하면 된다.

간단한 예시를 들자면, 개인 블로그를 만들고 싶으면 SEO에 최적화된 SSR 방식을 이용한 기술들 중 하나를 골라 사용할 수 있다.



#### Next.js

하지만 이 세상에는 하이브리드라는 것이 존재한다. 

두 방식의 단점을 상쇄시킬 새로운 라이브러리나 프레임워크를 사용하는 방법 또한 선택지가 될 수 있다.

Next.js가 대표적인 하이브리드 방식 중 하나이다. Next.js와 React를 이용해 만든 사이트의 경우, 첫 페이지만 전통적인 SSR 방식으로 페이지를 생성하고, 이후 페이지 전환은 React 방식(CSR)을 이용해 만듦으로써 최적화된 SEO와 상호작용 서비스를 제공할 수 있다.

 (추가적인 기술은 기술 부채와 해당 기술에 의존적이게 될 수 있으므로 무조건적인 해결책이 아니다. 상황에 맞게 가져가면 된다.)



참고자료

- https://developers.google.com/web/updates/2019/02/rendering-on-the-web
- https://tech.weperson.com/wedev/frontend/csr-ssr-spa-mpa-pwa/