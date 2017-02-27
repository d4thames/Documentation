#include <avr/io.h>
#include <util/delay.h>

void USART0_Init( unsigned int baud )
{
/* Set baud rate */
	UBRRH0 = (unsigned char)(baud>>8);
	UBRRL0 = (unsigned char)baud;
/* Enable receiver and transmitter */
	UCSRnB = (1<<RXENn)|(1<<TXENn);
/* Set frame format: 8data, 2stop bit */
	UCSRnC = (1<<USBSn)|(3<<UCSZn0);
}

void USART1_Init( unsigned int baud )
{
/* Set baud rate */
	UBRRH1 = (unsigned char)(baud>>8);
	UBRRL1 = (unsigned char)baud;
/* Enable receiver and transmitter */
	UCSRnB = (1<<RXENn)|(1<<TXENn);
/* Set frame format: 8data, 2stop bit */
	UCSRnC = (1<<USBSn)|(3<<UCSZn0);
}

ISR(USART0_RX){
	UDR0 = UDR1;
}

ISR(USART1_RX){
	UDR0 = UDR1;
}

int main(void)
{
	USART0_Init();
	USART1_Init();
	sei();
}
