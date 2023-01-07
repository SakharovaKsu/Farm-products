import React, { useState } from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import ProductCart from "/src/components/ui/product-cart/product-cart";
import Button from "/src/components/ui/button/button";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";

import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

// Оформление заказа
function Order({
  products // список продуктов
}) {
  const [swiperRef, setSwiperRef] = useState(null); //  состояние, хранящее слайдер
  const [selectProductIds, setSelectProductIds] = useState([]); // состояние, в котором будет храниться список выбранных продуктов
  const [address, setAddress] = useState(""); // Сохраним значение введённого адреса в state.

  // id выбранных продуктов хранятся в selectProductIds, а массив продуктов — в props products.
  // Таким образом, список выбранных товаров можно получить через:
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  //цена покупки
  // А дальше можно вычислить цену этих продуктов:
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  // по клику на элемент из списка проверить, был ли продукт уже выбран.
  // Если нет и по нажатию кнопки всё же происходит выбор продукта, то нужно
  // автоматически прокрутить слайдер к нему, чтобы детальное описание товара сразу
  // стало доступно пользователю.
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  // Свяжем swiperRef со слайдером, передав setSwiperRef в ProductSwiper через props onSwiper.
  // А handleOnClickProduct передадим в props onClickLabel компоненту CheckboxList.

  return products && products.length ? (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Panel>
        <Panel>
          <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button
            maxWidth
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)} // кнопку «Купить» нужно делать неактивной для тех случаев, когда-либо не выбраны продукты, либо не введён адрес доставки
          >
            Купить
          </Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default Order;
