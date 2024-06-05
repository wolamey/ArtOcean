export default function Template(item, i) {
  return (
    <div class="card_cab">
      <input type="submit" value="${item.payCart}" class="card_num" />
      <div class="card_cab_div">
        <input type="submit" value="дата: ${item.payDate}" class="card_date" />
        <input type="submit" value="CVV: ${item.CVV}" class="card_cvv ${i}" />
      </div>
      <buttton class="card_button">Отвязать</buttton>
      <input type="submit" value="${item.key}" class="key ${i}" />
    </div>
  );
}
