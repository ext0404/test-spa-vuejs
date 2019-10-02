<template>
    <div id="support">
        <h3>Обратная связь</h3>
        <input type="text" id="mailinput" placeholder="Ваше сообщение">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nobis minus reiciendis eius beatae veniam esse distinctio
        ipsum labore rerum.</p>
        <input type="text" placeholder="Ваш номер для связи">
        
        
        <p> Temporibus optio quam quas iusto ullam 
        non veritatis rem. Molestiae, magnam!</p>
        <button>Отправить</button>
    </div>
</template>

<script>
export default {
    name: 'support'
}
</script>

<style scoped>
    #content{
        align-content: left;
        float: left;
        text-align: left;
        margin-left: 70px;
    }
    p{
        margin-left: 5px;
    }
    #mailinput::-webkit-input-placeholder, #mailinput{
        height: 400px;
        min-width: 600px;
        box-sizing: border-box;
    }
    button{
        padding: 15px 32px;
        background-color: #4CAF50;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover{
        background-color: #fff;
        border: #4CAF50 1px solid;
        color: #4CAF50;
    }
</style>