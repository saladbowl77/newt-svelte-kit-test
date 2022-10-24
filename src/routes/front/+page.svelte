<script>
    export let data;
</script>

<h1>ブログ一覧のテストページ</h1>
{#each data.items as content}
    <div>
        <p>ブログタイトル : { content.blogTitle }</p>
    </div>
{/each}

<a href="/">トップに戻る</a>