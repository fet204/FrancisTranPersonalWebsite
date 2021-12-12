$.fn.navList = function() {

    var	$this = $(this);
        $a = $this.find('a'),
        b = [];

    $a.each(function() {

        var	$this = $(this),
            indent = Math.max(0, $this.parents('li').length - 1),
            href = $this.attr('href'),
            target = $this.attr('target');

        b.push(
            '<a ' +
                'class="link depth-' + indent + '"' +
                ( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
                ( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
            '>' +
                '<span class="indent-' + indent + '"></span>' +
                $this.text() +
            '</a>'
        );

    });

    return b.join('');

};