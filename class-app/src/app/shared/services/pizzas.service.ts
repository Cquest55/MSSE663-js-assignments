// pizzas.service.ts
import {PizzaEntity} from "../../../../api/lib/api-interfaces";

interface PizzaResponse {
  msg: string;
  pizzas: PizzaEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaEntity[]> {
    return this.http
      .get<PizzaResponse>('/api/pizzas')
      .pipe(map((data: { pizzas: any; }) => data.pizzas));
  }
}

function Injectable(arg0: { providedIn: string; }): (target: typeof PizzasService) => void | typeof PizzasService {
    throw new Error("Function not implemented.");
}
