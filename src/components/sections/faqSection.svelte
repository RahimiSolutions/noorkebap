<script lang="ts">
    import { slide } from "svelte/transition";

    let activeIndex: number | null = null;

    const faqs = [
        {
            question: '¿Ofrecen opciones vegetarianas?',
            answer:
                '¡Claro que sí! Tenemos varias opciones deliciosas para vegetarianos, desde pizzas con ingredientes frescos hasta sabrosos platos mediterráneos. Pregunta a nuestro equipo y te ayudaremos a encontrar la mejor opción para ti.'
        },
        {
            question: '¿Aceptan reservas?',
            answer:
                'Sí, aceptamos reservas, pero te recomendamos llamarnos con antelación para verificar disponibilidad. Todo depende de la temporada y lo ocupados que estemos, ¡pero haremos todo lo posible para encontrar un espacio para ti!'
        },
        {
            question: '¿Hay menú para niños?',
            answer:
                '¡Por supuesto! Tenemos opciones deliciosas y perfectas para los más pequeños, como mini pizzas, nuggets de pollo y helados artesanales. ¡Queremos que toda la familia disfrute!'
        },
        {
            question: '¿Puedo pedir comida para llevar?',
            answer:
                'Sí, puedes pedir cualquier plato de nuestro menú para llevar y disfrutarlo donde quieras. Pásate por el restaurante o llámanos para hacer tu pedido y lo tendremos listo para ti.'
        },
        {
            question: '¿Tienen opciones sin gluten?',
            answer:
                'Entendemos lo importante que es esto para algunos clientes. Tenemos algunas opciones sin gluten disponibles, pero te recomendamos preguntar a nuestro equipo para asegurarte de que tu elección sea la adecuada.'
        },
        {
            question: '¿Se pueden hacer eventos o celebraciones en el restaurante?',
            answer:
                '¡Sí! Si estás planeando una celebración especial, contáctanos y veremos cómo podemos hacer que tu evento sea inolvidable con buena comida y un ambiente perfecto junto al mar.'
        }
    ];

    function toggle(index: number) {
        activeIndex = activeIndex === index ? null : index;
    }
</script>

<div class="faq-section">
    {#each faqs as faq, index}
        <div class="faq-item">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="faq-question" onclick={() => toggle(index)}>
                {faq.question}
                <svg
                    class="icon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class:open={activeIndex === index}
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </div>
            {#if activeIndex === index}
                <div class="faq-answer" transition:slide={{ duration: 300 }}>
                    <p>{faq.answer}</p>
                </div>
            {/if}
        </div>
    {/each}
</div>

<style lang="scss">
    .faq-section {
        margin-top: 24px;
        width: 800px;
        .faq-item {
            margin-bottom: 12px;
            border-bottom: 1px solid var(--red-300);
            .faq-question {
                font-size: var(--fs-600);
                font-weight: 600;
                line-height: 1.2;
                border-radius: 8px;
                padding: 8px;
                cursor: pointer;
                transition: 0.1s ease-in-out;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:hover {
                    background-color: var(--red-200);
                }
                .icon {
                    width: 36px;
                    height: 36px;
                    stroke: currentColor;
                    stroke-width: 1;
                    transition: transform 0.3s ease;
                    &.open {
                        transform: rotate(45deg);
                    }
                }
            }
            .faq-answer {
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 1rem;
                font-size: var(--fs-500);
                line-height: 1.6;
                p {
                    width: 70ch;
                }
            }
        }
    }
</style>
