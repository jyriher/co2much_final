import {Component, OnInit} from '@angular/core';
import { Reveal } from 'foundation-sites/js/foundation.reveal';
import { Foundation } from 'foundation-sites/js/foundation.core';

Foundation.addToJquery($);

Foundation.plugin(Reveal, 'Reveal');

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    constructor() {

        $('[data-circle-graph]').each(function () {
            const $graph = $(this),
                percent = parseInt($graph.data('percent'), 10),
                deg = 360 * percent / 100;
            if (percent > 50) {
                $graph.addClass('gt-50');
            }
            $graph.find('.circle-graph-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
            $graph.find('.circle-graph-percents-number').html(percent + '%');
        });


    }


    ngOnInit() {

    $(document).foundation();
    }

}
