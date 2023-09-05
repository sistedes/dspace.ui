import { NgModule } from "@angular/core";
import { Item } from "src/app/core/shared/item.model";

 
@NgModule({
imports: [],
declarations: [],
providers: [],
})

export class Citation {
    
    public static from(item : Item): Citation {
        if (item.firstMetadataValue('dspace.entity.type') == 'Resumen' 
            || item.firstMetadataValue('dspace.entity.type') == 'Artículo') {
            return new ConferenceCitation(item);
        } else {
            return new Citation(item);
        }
    }

    protected constructor(protected item : Item) { }

    getTitle(): string {
        return this.item.firstMetadataValue('dc.title')
    }

    getAuthors(): string[] {
        return Citation.abbreviateNames(
            this.item.allMetadataValues('dc.contributor.signature').length > 0 
            ? this.item.allMetadataValues('dc.contributor.signature') 
            : this.item.allMetadataValues('dc.contributor.author'));
    }

    getIsPartOf(): string {
        return this.item.firstMetadataValue('dc.relation.ispartof');
    }

    getPublisher(): string {
        return this.item.firstMetadataValue('dc.publisher');
    }

    getYear(): number {
        return new Date(this.item.firstMetadataValue('dc.date.issued')).getFullYear()
    }

    getConferenceAcronym(): string {
        return this.item.firstMetadataValue('bs.conference.acronym');
    }

    getEditionName(): string {
        return  this.item.firstMetadataValue('bs.edition.name');
    }

    getEditionYear(): number {
        return  new Date(this.item.firstMetadataValue('bs.edition.date')).getFullYear()
    }

    getEditors(): string[] {
        return Citation.abbreviateNames(this.item.allMetadataValues('bs.proceedings.editor'));
    }

    getUri(): string {
        return 'https://hdl.handle.net/' + this.getHandle();
    }

    getHandle(): string {
        return this.item.firstMetadataValue('dc.identifier.sistedes') ? this.item.firstMetadataValue('dc.identifier.sistedes') : this.item.handle;
    }
    
    asTextCitation(): string {
        return (this.getAuthors().length > 0 ? this.getAuthors().join(', ') + ": " : "")
        + this.getTitle() + ". "
        + "In: " 
        + ( this.getEditors().length > 0 ? ( this.getEditors().join(', ') + ' (ed' + (this.getEditors().length > 1 ? 's' : '') + '.)  ' ) : "" )
        + this.getIsPartOf() + ". "
        + this.getPublisher()
        + " (" + this.getYear() + "). "
        + this.getUri();
    }

    asBibTexCitation(): string {
        return CitationUtilModule.escapeBibtex(
            `@misc{${this.getHandle().replace(/\//g,':')},
               title={{${this.getTitle()}}},
               author={${this.getAuthors().join(' and ')}},
               url={${this.getUri()}},
               year={${this.getYear()}},
               publisher={${this.getPublisher()}},
               booktitle={{${this.getIsPartOf()}}}
             }`.replace(/ {12}/g, ''));
    }

    private static abbreviateNames(fullnames : string[]): string[] {
        var result = new Array();
        for (var fullname of fullnames) {
            var surname = fullname.split(",")[0];
            var name = fullname.split(",")[1].trim().split(/\s+/).map(n => n.substring(0, 1) + ".").join(" ");
            result.push(surname + ", " + name);
        }
        return result;
    }
}

export class ConferenceCitation extends Citation {
    asBibTexCitation(): string {
        return CitationUtilModule.escapeBibtex(
            // These fields below have been removed from @inproceedings
            // and should be computed from the crossref field instead:
            //   year={${this.getYear()}},
            //   publisher={${this.getPublisher()}},
            //   booktitle={{${this.getIsPartOf()}}},
            `@inproceedings{${this.getHandle().replace(/\//g,':')},
               title={{${this.getTitle()}}},
               author={${this.getAuthors().join(' and ')}},
               url={${this.getUri()}},
               crossref={${this.getHandle().split("/")[0] + ':' + this.getConferenceAcronym() + ':' + this.getEditionYear()}}
             }

             @proceedings{${this.getHandle().split("/")[0] + ':' + this.getConferenceAcronym() + ':' + this.getEditionYear()},
               title={{${this.getIsPartOf()}}},
               editor={${this.getEditors().join(' and ')}},
               year={${this.getEditionYear()}},
               publisher={${this.getPublisher()}},
             }`.replace(/ {12}/g, ''));
    }
}


class CitationUtilModule {
    
    public static escapeBibtex(text : string): string {
        return text
            .replace(/á/g, "\\'{a}")
            .replace(/é/g, "\\'{e}")
            .replace(/í/g, "\\'{i}")
            .replace(/ó/g, "\\'{o}")
            .replace(/ú/g, "\\'{u}")
            .replace(/Á/g, "\\'{A}")
            .replace(/É/g, "\\'{E}")
            .replace(/Í/g, "\\'{I}")
            .replace(/Ó/g, "\\'{O}")
            .replace(/Ú/g, "\\'{U}")
            .replace(/à/g, "\\`{a}")
            .replace(/à/g, "\\`{e}")
            .replace(/ì/g, "\\`{i}")
            .replace(/ò/g, "\\`{o}")
            .replace(/ù/g, "\\`{u}")
            .replace(/À/g, "\\`{A}")
            .replace(/È/g, "\\`{E}")
            .replace(/Ì/g, "\\`{I}")
            .replace(/Ò/g, "\\`{O}")
            .replace(/Ù/g, "\\`{U}")
            .replace(/â/g, "\\^{a}")
            .replace(/ê/g, "\\^{e}")
            .replace(/î/g, "\\^{i}")
            .replace(/ô/g, "\\^{o}")
            .replace(/û/g, "\\^{u}")
            .replace(/Â/g, "\\^{A}")
            .replace(/Ê/g, "\\^{E}")
            .replace(/Î/g, "\\^{I}")
            .replace(/Ô/g, "\\^{O}")
            .replace(/Û/g, "\\^{U}")
            .replace(/ä/g, '\\"{a}')
            .replace(/ë/g, '\\"{e}')
            .replace(/ï/g, '\\"{i}')
            .replace(/ö/g, '\\"{o}')
            .replace(/ü/g, '\\"{u}')
            .replace(/Ä/g, '\\"{A}')
            .replace(/Ë/g, '\\"{E}')
            .replace(/Ï/g, '\\"{I}')
            .replace(/Ö/g, '\\"{O}')
            .replace(/Ü/g, '\\"{U}')
            .replace(/ã/g, '\\~{a}')
            .replace(/ẽ/g, '\\~{e}')
            .replace(/ĩ/g, '\\~{i}')
            .replace(/õ/g, '\\~{o}')
            .replace(/ũ/g, '\\~{u}')
            .replace(/Ã/g, '\\~{A}')
            .replace(/Ẽ/g, '\\~{E}')
            .replace(/Ĩ/g, '\\~{I}')
            .replace(/Õ/g, '\\~{O}')
            .replace(/Ũ/g, '\\~{U}')
      }
}
